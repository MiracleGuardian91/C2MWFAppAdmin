import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSliderModule, MatSliderThumb } from '@angular/material/slider';
import { ActivatedRoute } from '@angular/router';
import { EditorComponent } from '@app/admin/Shared/editor/editor.component';
import { SaveStagePayload } from '@app/admin/wf/wfd/models';
import { AiAttributeJson } from '@app/ai-flow-builder/models/Ai-attribute-json.model';
import { AIFlowBuilderService } from '@app/ai-flow-builder/services/aiflow-builder.service';
import { MessageService } from '@app/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { QuillModule } from 'ngx-quill';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-entity-detail',
  standalone: true,
  imports: [
            CommonModule,
            NgIf,
            ReactiveFormsModule,
            NgClass,
            QuillModule,
            NgSelectModule,
            NgFor,
            MatSliderModule,
            MatSliderThumb
  ],
  templateUrl: './entity-detail.component.html',
  styleUrl: './entity-detail.component.scss'
})
export class EntityDetailComponent  {
  newElement = false;
  entityID: string;
  entityType: string;
  entityName: string;
  parentEntityId: string;
  endParentEntityId: string;
  id: string;
  form: UntypedFormGroup = new FormGroup({});
  fb: UntypedFormBuilder;
  submitted = false;
  #ref = inject(NgbActiveModal);
  #aIFlowBuilderService = inject(AIFlowBuilderService)
  workflow: any;
  formConfig: AiAttributeJson;
  populateDataMapper = {
    'GetMyThingsChannels': this.#aIFlowBuilderService.getMyThingsChannels.bind(this.#aIFlowBuilderService),
    'GetMoreChannelInstance': this.#aIFlowBuilderService.getMoreChannelInstance.bind(this.#aIFlowBuilderService)
  }
  fieldMapper = {};
  constructor(
  ) {
    
  }

  ngOnInit(): void {
    this.fetchFormConfig(this.formConfig);  
  }

  fetchFormConfig(response): void {
    if (response && response.Attributes) {
        response.Attributes.forEach(attribute => {
        const controlName = attribute.ControlName.toLowerCase();
        const controlType = attribute.ControlType.toLowerCase();

        if (!this.form.controls[controlName] && controlType !== 'label') {
          const formControlValue = attribute.Value;
          const formControl = new FormControl(formControlValue);
          if(attribute.Required){
            formControl.setValidators([Validators.required]);
          }
          this.form.addControl(controlName, formControl);
          
        }
      });
    }
    this.form.valueChanges.subscribe(values => {
      this.updateFormConfig(values);
    });
  }

   updateFormConfig(values: any): void {
    if (this.formConfig && this.formConfig.Attributes) {
      this.formConfig.Attributes.forEach(attribute => {
        const controlName = this.getControlName(attribute);
        if (values[controlName] !== undefined) {
          const updatedAttribute = this.formConfig.Attributes.find(attr => this.getControlName(attr) === controlName);
          if (updatedAttribute) {
            updatedAttribute.Value = values[controlName];
          }
        }
      });
    }
  }

 getColClass(width: string): string {
    return width === 'half' ? 'col-6' : 'col-12';
  }
  
getAutomaticData(attribute){
  if(!attribute.Api) return;
  const { Name, ParameterFromControl } = attribute.Api || {}; 
  const id = this.fieldMapper[ParameterFromControl]?.id;
  (this.populateDataMapper[Name] as Function)(id).subscribe(response =>{
    attribute.Options = response?.map(r => r.name);
    this.fieldMapper = { [attribute.ControlName]: response}
  })
}

selectionChange(event, attribute){
  if(!attribute.Api) return;
  this.fieldMapper[attribute.ControlName] = this.fieldMapper[attribute.ControlName].find(f => f.name === event); 
}
  onSubmit() {
    const { WFID} = this.workflow;
    if(this.form.invalid){
      this.submitted = true;    
      return;
    }

    const rawValues = this.form.getRawValue();

    const payload = {
      ID: this.entityID,
      FlowId: WFID,
      EntityName: rawValues?.entityname,
      EntityType: this.entityType,
      ParentEntityId: this.parentEntityId,
      EndParentEntityId: this.endParentEntityId,
      AttributeJson: this.formConfig
    };
    if(this.newElement){
      this.#aIFlowBuilderService.createAIFlowEntity(payload).subscribe(_ =>{
         const payload: SaveStagePayload = {
                ...this.form.value,
                WfoId: !rawValues?.EntityType || rawValues?.EntityType === 'Stage' ? _.id : WFID || '',
                WorkFlowId: this.workflow.WFID,
                WfosId: _.id,
                TriggerId:_.id
              };
              
        this.#ref.close(payload);
      });
    }else{
      this.#aIFlowBuilderService.updateAIFlowEntity(payload).subscribe(_=>{
           this.#ref.close(payload);
      })
    }
  }
  onCancel(){
    this.#ref.close();
  }
  
  getControlName(attribute): string {
    return attribute.ControlName;
  }

  showIfCondition(condition){
    if(!condition) return true;
    const controlName = condition.ControlName;
    const value = condition.Value;
    return this.form.get(controlName).value === value?.toLowerCase();
  }

  get formControls(){
    return this.form.controls;
  }


}