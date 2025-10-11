import { CommonModule } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AIFlowBuilderService } from '@app/ai-flow-builder/services/aiflow-builder.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-webhook-config',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,
    FormsModule,   ],

  templateUrl: './webhook-config.component.html',
  styleUrl: './webhook-config.component.scss'
})
export class WebhookConfigComponent implements OnInit {
  form: FormGroup;
  @Input() id: string | null = null;
  @Input() FlowName: string | null = null;

  topTabs = ['Webhook', 'Chat', 'SMS', 'Scheduler'];
  activeTopTab = 'Webhook';

  subTabs = ['Params', 'Headers', 'Body'];
  activeSubTab = 'Params';

  methods = ['POST', 'GET', 'PUT', 'DELETE', 'PATCH'];

  bodyContentMode: 'JSON_SCHEMA' | 'TEXT' = 'JSON_SCHEMA';

  constructor(private fb: FormBuilder,
     public activeModal: NgbActiveModal,
     readonly aiFlowBuilderService: AIFlowBuilderService
  ) {
    this.form = this.fb.group({
      method: ['POST', Validators.required],
      url: ['', Validators.required],
      bodyContentMode: ['JSON_SCHEMA'], 
      params: this.fb.array([]),
      headers: this.fb.array([]),
      bodyText: [''],
      bodyJsonSchema: ['']
    });
  }

  ngOnInit(): void {
    
    this.aiFlowBuilderService.GetWebhook(this.id??'',this.FlowName??'').subscribe({
      next: (response) => {
        this.loadWebhookData(response);
      }
    });

     this.form.get('bodyContentMode')?.valueChanges.subscribe(value => {   
      this.bodyContentMode = value;
    });
  }

  loadWebhookData(data: any) {
  // Clear params/headers first
  (this.form.get('params') as FormArray).clear();
  (this.form.get('headers') as FormArray).clear();

  this.form.patchValue({
    method: data.Method || 'POST',
    url: data.Url || '',
    bodyContentMode: this.isJson(data.Body) ? 'JSON_SCHEMA' : 'TEXT',
    bodyJsonSchema: this.isJson(data.Body) ? data.Body : '',
    bodyText: !this.isJson(data.Body) ? data.Body : ''
  });

  // Map Params
  if (data.Params) {
    Object.keys(data.Params).forEach(key => {
      (this.form.get('params') as FormArray).push(
        this.fb.group({
          key: [key],
          value: [data.Params[key]]
        })
      );
    });
  }

  // Map Headers
  if (data.Headers) {
    Object.keys(data.Headers).forEach(key => {
      (this.form.get('headers') as FormArray).push(
        this.fb.group({
          key: [key],
          value: [data.Headers[key]]
        })
      );
    });
  }
}

// Helper: check if body is valid JSON
private isJson(str: string): boolean {
  try {
    JSON.parse(str);
    this.bodyContentMode='JSON_SCHEMA';
    return true;
  } catch {
     this.bodyContentMode='TEXT';
    return false;
  }
}


  // helpers for form arrays
  get params(): FormArray {
    return this.form.get('params') as FormArray;
  }

  get headers(): FormArray {
    return this.form.get('headers') as FormArray;
  }

  private createKeyValue(key = '', value = ''): FormGroup {
    return this.fb.group({
      key: [key],
      value: [value]
    });
  }

  addParam() {
    this.params.push(this.createKeyValue());
  }

  removeParam(index: number) {
    this.params.removeAt(index);
  }

  addHeader() {
    this.headers.push(this.createKeyValue());
  }

  removeHeader(index: number) {
    this.headers.removeAt(index);
  }

  setTopTab(tab: string) {
    this.activeTopTab = tab;
  }

  setSubTab(tab: string) {
    this.activeSubTab = tab;
  }

  toggleBodyMode(): void {
    const current = this.form.get('bodyContentMode')?.value;
    this.form.get('bodyContentMode')?.setValue(
      current === 'JSON_SCHEMA' ? 'TEXT' : 'JSON_SCHEMA'
    );
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    
    this.aiFlowBuilderService.saveWebhook({
      ID: this.id ?? '',
      FlowName: this.FlowName ?? '',
      webhookData: {
        method: this.form.value.method,
        url: this.form.value.url,

        params: this.form.value.params.reduce((acc: any, cur: any) => {
          if (cur.key?.trim() && cur.value?.toString().trim()) {
            acc[cur.key] = cur.value;
          }
          return acc;
        }, {}),

        headers: this.form.value.headers.reduce((acc: any, cur: any) => {
          if (cur.key?.trim() && cur.value?.toString().trim()) {
            acc[cur.key] = cur.value;
          }
          return acc;
        }, {}),

        body: this.bodyContentMode === 'JSON_SCHEMA'
          ? (this.form.value.bodyJsonSchema || '')
          : (this.form.value.bodyText || '')
      }
    }).subscribe({
      next: (response) => {
        console.log('Webhook saved successfully', response);
       // alert('Webhook saved successfully');
      },
      error: (error) => {
        console.error('Error saving webhook', error);
        // alert('Error saving webhook');
      }
    });

  }
}
