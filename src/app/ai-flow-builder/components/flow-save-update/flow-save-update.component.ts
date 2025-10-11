import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AIFlowBuilderService } from '@app/ai-flow-builder/services/aiflow-builder.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-flow-save-update',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, NgClass, NgFor],
  templateUrl: './flow-save-update.component.html',
  styleUrl: './flow-save-update.component.scss'
})
export class FlowSaveUpdateComponent implements OnInit {
  submitted: boolean = false;
  processName: string;
  dataList:any;
  id: string;
  isEdit:boolean=false;
  currentMode: any;
  error: string='';
  currState: any;
  constructor(
    public activeModal: NgbActiveModal,
    private fb: UntypedFormBuilder,
    private aIFlowBuilderService: AIFlowBuilderService
  ) { }
  aiFlowForm: UntypedFormGroup;
  ngOnInit() {
    this.processName = sessionStorage.getItem('AppName');
    this.aiFlowForm = this.getFormGroup(this.dataList);
  
  }
  
  get f() {
    return this.aiFlowForm.controls;
  }  
  
  getFormGroup(values){
    return this.fb.group({
      ID: values?.ID,
      flowName: [values?.FlowName, [Validators.required, Validators.pattern('^[a-zA-Z0-9_]+$'), Validators.maxLength(25)]],  
      flowDescription: [values?.FlowDescription, Validators.required],
    });
  }
   onSubmit() {
    const rawData = {...this.aiFlowForm.getRawValue(), accessToken: localStorage.getItem('AccessToken') };
       if (this.aiFlowForm.invalid) {
           this.submitted = true;
           return;
       }

      this.isUpdate ?
          this.aIFlowBuilderService.updateAiFlow(rawData.ID, rawData).subscribe(_ => {
              this.activeModal.close(true);
          }) :
          this.aIFlowBuilderService.createAiFlow(rawData).subscribe(_ => {
              this.activeModal.close(true);
          })
      }

   get isUpdate(){
    return !!this.id;
   }
}

