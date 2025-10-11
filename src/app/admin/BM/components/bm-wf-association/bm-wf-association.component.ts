import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { result } from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { BmService } from '@app/admin/core/services/bm.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-bm-wf-association',
    templateUrl: './bm-wf-association.component.html',
    styleUrls: ['./bm-wf-association.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule, NgFor, NgIf, CdkDropList, CdkDrag]
})
export class BmWfAssociationComponent implements OnInit {
  BMID:any;
  BMName:any;
  Version:any;
  AvailableBMList = [];
  AssociatedBMList = [];
  GridBMFilter: any = {};
  GridColumnList: any = [];
  errorMsg:any='';
  constructor(private formBuilder: UntypedFormBuilder,
    public activeModal: NgbActiveModal, private bmsrvc: BmService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.GetBmAssociatedWf();
  }


  GetBmAssociatedWf() {        
    this.bmsrvc.GetBmAssociatedWf(this.BMID).subscribe({
      next: (data) => {
        if (!!data) {         
          this.AvailableBMList = data.AvailableWF;
          this.AssociatedBMList = data.AssociatedWF;
          
          if (!!this.AssociatedBMList && this.AssociatedBMList.length > 0) {
            for (let i = 0; i < this.AssociatedBMList.length; i++) {
              this.AvailableBMList.push(this.AssociatedBMList[i]);
              this.GridBMFilter[this.AssociatedBMList[i].WorkFlowId] = '1';
            } 
          }
        }
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  AddBMFilter(bm: any) {    
    if (this.GridBMFilter[bm.WorkFlowId] === undefined) {
      this.GridBMFilter[bm.WorkFlowId] = '1';
      this.AssociatedBMList.push(bm);
    }
  }
  DeleteBmFilter(bm) {    
    const txt = this.AssociatedBMList.indexOf(bm);
    if (txt > -1) {
      this.AssociatedBMList.splice(txt, 1);
    }
    delete this.GridBMFilter[bm.WorkFlowId];
  }

  dropColumn(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.GridColumnList, event.previousIndex, event.currentIndex);
  }

  SaveWorkflowBMAssociation(){        
    if(this.AssociatedBMList.length>0){      
      let wfIds = '';
      this.AssociatedBMList.forEach(el => {
        wfIds = wfIds + el.WorkFlowId + ',';
      });
      wfIds = wfIds.substring(0, wfIds.length - 1);
     this.bmsrvc.SaveBMAssociatedWF(wfIds, this.BMID).subscribe({
        next: (result) => {
          if (!!result && result === 'Data saved successfully.') {
            this.activeModal.close(true);
            return true;
          }
        },
        error: (error) => {
          console.log(error);
        }
      });
    }else{
      this.toastr.warning('Add at least one Business Model to associate.');
    }  
  }

}