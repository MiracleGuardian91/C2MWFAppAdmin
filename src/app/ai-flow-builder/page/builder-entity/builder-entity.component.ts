import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DiagramService } from '@app/admin/wf/wfd/services/diagram.service';
import { AiDiagramComponent } from '@app/ai-flow-builder/components/ai-diagram/ai-diagram.component';
import { AiFlow } from '@app/ai-flow-builder/models/ai-flow.model';
import { AIFlowBuilderService } from '@app/ai-flow-builder/services/aiflow-builder.service';
import { map, Observable, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-builder-entity',
  standalone: true,
  imports: [
            NgIf,
            AiDiagramComponent,
            AsyncPipe,
  ],
  templateUrl: './builder-entity.component.html',
  styleUrl: './builder-entity.component.scss'
})
export class BuilderEntityComponent implements OnInit {
  metadata$: Observable<AiFlow>;

  constructor(
    private service: AIFlowBuilderService,
    private route: ActivatedRoute,
    private router: Router,
    public serviceBpmn: DiagramService,
    readonly titleService: Title
  ) {}

  ngOnInit() {

  this.metadata$ = this.route.queryParamMap.pipe(
    tap(params => {
        const flowName = params.get('flowName');
        // sessionStorage.setItem('DisplayName', this.id);
        // sessionStorage.setItem('AppName', this.id);
        this.updateDocumentTitle(flowName);
      
    }),
    switchMap(params => this.service.getAiFlowById(params.get('id')).pipe(map(flow => flow.MetaData)))
  )
}


private updateDocumentTitle(title: string) {
  this.titleService.setTitle(title);
}
public handleDelete() {
    this.router.navigate(['admin/wf'])
}

}