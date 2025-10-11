/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { MetaData } from './models/wf.model';
import { WorkflowApiService } from './services/workflow-api.service';
import { DiagramService } from './services/diagram.service';
import { Title } from '@angular/platform-browser';
import { NgIf, AsyncPipe } from '@angular/common';
import { DiagramComponent } from './components/diagram/diagram.component';
import { UtilService } from '@app/shared/services/util.service';

@Component({
  selector: 'app-wfd',
  templateUrl: './wfd.component.html',
  styleUrls: ['./wfd.component.scss'],
  standalone: true,
  imports: [NgIf, DiagramComponent, AsyncPipe],
})
export class WfdComponent implements OnInit {
  metadata$: Observable<MetaData>;
  private processName = sessionStorage.getItem('AppName');
  backsImageUrl = UtilService.getUrlForImage(
    '/assets/styles/images/back-icon-black.png'
  );

  constructor(
    private service: WorkflowApiService,
    private route: ActivatedRoute,
    private router: Router,
    public serviceBpmn: DiagramService,
    readonly titleService: Title
  ) {}

  ngOnInit() {
    this.metadata$ = this.route.queryParamMap.pipe(
      tap((params) => {
        this.processName = params.get('processName');
        sessionStorage.setItem('DisplayName', this.processName);
        sessionStorage.setItem('AppName', this.processName);
        this.updateDocumentTitle(this.processName);
      }),
      switchMap((params) =>
        this.service.getWorkflowDiagram(this.processName, params.get('VerNo'))
      )
    );
  }

  private updateDocumentTitle(title: string) {
    this.titleService.setTitle(title);
  }
  public handleDelete() {
    this.router.navigate(['admin/wf']);
  }

  public routeBack() {
    window.history.back();
  }
}
