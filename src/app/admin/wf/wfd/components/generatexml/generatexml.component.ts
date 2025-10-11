import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LiveVersionComponent } from '@app/admin/LiveVersion/components/live-version/live-version.component';
import { FormViewApiService } from '@app/core/services/form-view-api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgIf, NgFor } from '@angular/common';

//mport { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';

@Component({
    selector: 'app-generatexml',
    templateUrl: './generatexml.component.html',
    styleUrls: ['./generatexml.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor]
})
export class GenerateXmlComponent {
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  @Input() type: string = 'wf'; // Default type is 'wf' (could be 'bm' or 'wf')
  @Input() processName: string = ''; // Input property for process name
  @Input() verNo: string = ''; // Input property for version number
  @Input() alertMsgTxt: string[] = [];
  private queryParamsSubscription: Subscription;

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private modalService: NgbModal,private route: ActivatedRoute, private router: Router, private formViewApi: FormViewApiService){
    this.type = data.type || this.type;
    this.processName = data.processName || this.processName;
    this.verNo = data.verNo || this.verNo;
    this.alertMsgTxt = data.alertMsgTxt || this.alertMsgTxt;
  }

  ngOnInit(): void {
    // this.queryParamsSubscription = this.route.queryParams.subscribe((params) => {
    //   this.processName = params['processName'] || ''; 
    //   this.verNo = params['VerNo'] || ''; 
    // });
    // const pathSegments = this.router.url.split('/'); 
    // const wfType = pathSegments[2]; 
    // this.type =  wfType.trim();
  }

  goToLiveVersion(): void {
    console.log('Navigating to Live Version');
    this.closeModal.emit();
    const modalRef = this.modalService.open(LiveVersionComponent, { backdrop: 'static', size:'lg',keyboard: false });
    modalRef.result.then(async (result) => {      
      if (result) {
        //this.toastr.success('Data saved successfully.');      
      }
    }, (reason) => {
    }
    );
  }

  tryAgain(): void {
    console.log('Retrying Json Generation');

 this.formViewApi
      .generateXML(
        this.type==='wf'?"wf":"bm",
        this.processName,
        this.verNo
      )
      .subscribe(
        (success) => {
             this.closeModal.emit();
        },
        (error) => {  

        }       
      );  
 
  
  }
  cancel(): void {
    // Emit the closeModal event
    this.closeModal.emit();
  }
}
