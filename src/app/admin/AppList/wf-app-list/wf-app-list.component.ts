import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { WFService } from '@app/admin/core/services/wfservice.service';
import { LiveVersionComponent } from '@app/admin/LiveVersion/components/live-version/live-version.component';
import { ProcessListItem } from '@app/admin/models/process-list-item.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-wf-app-list',
  templateUrl: './wf-app-list.component.html',
  styleUrls: ['./wf-app-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor, AsyncPipe],
})
export class WfAppListComponent implements OnInit {
  list$: Observable<ProcessListItem[]>;

  constructor(
    public wfsrvc: WFService,
    public toastr: ToastrService,
    public modalService: NgbModal,
    public title: Title,
    readonly router: Router
  ) {}

  ngOnInit() {
    this.list$ = this.wfsrvc.GetWFAppList();
    this.title.setTitle('Dashboard');
  }

  public goToBMGrid(item: ProcessListItem) {
    this.updateSessionStorage(item);
    if (item.Name.toLowerCase() == 'businessmodelcomparison') {
      this.navigateToCompare('BM');
    } else if (item.Name.toLowerCase() == 'workflowcomparison') {
      this.navigateToCompare('WF');
    } else {
      window.open('/admin/bm', '_blank');
    }
  }

  navigateToCompare(type: string) {
    const typeMap: { [key: string]: number } = { BM: 1, WF: 2 };
    if (typeMap[type]) {
      const url = this.router.serializeUrl(
        this.router.createUrlTree(['/bmwfcompare/user-verification'], {
          queryParams: { type: typeMap[type] },
        })
      );
      window.open(url, '_blank');
    }
  }

  public goToWFGrid(item: ProcessListItem) {
    this.updateSessionStorage(item);
    if (item.Name.toLowerCase() == 'businessmodelcomparison') {
      this.navigateToCompare('BM');
    } else if (item.Name.toLowerCase() == 'workflowcomparison') {
      this.navigateToCompare('WF');
    } else {
      window.open('/admin/wf', '_blank');
    }
  }

  public goToVersionGrid(item: ProcessListItem) {
    this.updateSessionStorage(item);
    const modalRef = this.modalService.open(LiveVersionComponent, {
      backdrop: 'static',
      size: 'lg',
      keyboard: false,
    });
    modalRef.result.then(
      async (result) => {
        if (result) {
          this.toastr.success('Data saved successfully.');
        }
      },
      (reason) => {}
    );
  }

  public goToApplicationGrid(item: ProcessListItem) {
    this.OpenApp(item);
  }

  private updateSessionStorage(item: ProcessListItem) {
    sessionStorage.setItem('AppName', item.Name);
    sessionStorage.setItem('DisplayName', item.DisplayName);
  }

  private OpenApp(item: ProcessListItem): void {
    const copy = { ...item };

    this.updateSessionStorage(copy);

    if (copy.Name === 'BusinessModelComparison') {
      window.open('/bmwfcompare/user-verification?type=1', '_blank');
    } else if (copy.Name === 'workflowcomparison') {
      window.open('/bmwfcompare/user-verification?type=2', '_blank');
    } else {
      window.open(`/process_control/${copy.Name}`, '_blank');
    }
  }
}
