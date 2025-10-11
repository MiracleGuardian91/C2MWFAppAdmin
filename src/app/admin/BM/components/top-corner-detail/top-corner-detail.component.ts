import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WorkflowApiService } from '@app/admin/wf/wfd/services/workflow-api.service';
import { FormViewApiService } from '@app/core/services/form-view-api.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { left } from '@popperjs/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITopCornerDmo } from '../../models';
import { ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { AssociationComponent } from '../../../lib/association/association.component';

type Item = ITopCornerDmo & {selected?: boolean}

@Component({
    selector: 'app-top-corner-detail',
    templateUrl: './top-corner-detail.component.html',
    changeDetection: ChangeDetectionStrategy.Default,
    standalone: true,
    imports: [
        ReactiveFormsModule,
        NgFor,
        NgIf,
        AssociationComponent,
        AsyncPipe,
    ],
})
export class TopCornerDetailComponent implements OnInit {
  bmId: string;
  bmogId: string = "-1";
  associations$: Observable<any[]>;
  selectedItems: Item[];
  public allBMOGs = [];
  public BMOGInfo = [];


  constructor(
    private formViewApi: FormViewApiService,
    public ref: NgbActiveModal,
  ) {}

  ngOnInit(): void {    
   this.formViewApi.getBMOGS(this.bmId).subscribe(x=>{      
      this.bmogId = x.Data?.[0].BMOGID; 
      this.BMOGInfo = x.Data;      
      this.associations$ = this.getBatchUpdateDmos(this.bmId,this.bmogId);
    });

  }

  getBatchUpdateDmos(bmId: string, bmogId: string) {
    return forkJoin([
      this.formViewApi.getTopCornerDmos(bmId, bmogId, 'all').pipe(map(res => res.Table)),
      this.formViewApi.getTopCornerDmos(bmId, bmogId, 'selected').pipe(map(res => res.Table)),
    ])
    .pipe(
      map(([all, selected]) => {
        const updatedSelected = [];
        selected.forEach(item => {
          const found = all.find(rec => rec.dmoid === item.dmoid);
          if (found) {
            found['selected'] = true;
            updatedSelected.push(found);
          }
        });
        return [all, updatedSelected];
      }),
    );
  }

  onSelect = (items: Item[]) => this.selectedItems = items;
  displayWith = (item: Item) => `${item.BMONAME} > ${item.DMOGNAME} > ${item.DMONAME}`;
  uniqueWith = (item: Item) => `${item.bmoid}${item.dmogid}${item.dmoid}`;
  onSubmit() {
    const ids = this.selectedItems.map(item => item.dmoid);
    this.formViewApi.saveTopCornerDmos(this.bmId,this.bmogId, ids).subscribe(res => this.ref.close(res));
  }

  ReloadDMOS(valBMOGID)
  {
    this.bmogId=valBMOGID;
    this.associations$ = this.getBatchUpdateDmos(this.bmId,this.bmogId);
  }

}
export interface BMOGInfo {
  BMOGID:   string;
  BMOGNAME: string;
  NameVer:  string;
}