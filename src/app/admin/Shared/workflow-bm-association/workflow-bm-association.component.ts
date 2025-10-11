import { CdkDragDrop, moveItemInArray, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WFService } from '@app/admin/core/services/wfservice.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NgFor, NgIf } from '@angular/common';
@Component({
    selector: 'app-workflow-bm-association',
    templateUrl: './workflow-bm-association.component.html',
    styleUrls: ['./workflow-bm-association.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule, NgFor, NgIf, CdkDropList, CdkDrag]
})
export class WorkflowBmAssociationComponent implements OnInit {
  WFID:any;
  WFName:any;
  Version:any;
  AvailableBMList = [];
  AssociatedBMList = [];
  GridBMFilter: any = {};
  GridColumnList: any[];
  errorMsg:any='';
  constructor(private formBuilder: UntypedFormBuilder,
    public activeModal: NgbActiveModal, private wfsrvc: WFService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getWorkflowBmAssociation();
  }


  getWorkflowBmAssociation(){    
    this.wfsrvc.GetBMFWFAssociation(this.WFID).subscribe(data => {
      if (!!data) {         
        this.AvailableBMList = data.AvailableBm;
        this.AssociatedBMList = data.AssociatedBm;
        if(this.AssociatedBMList.length>0){
          for(let i = 0;i<this.AssociatedBMList.length;i++){
            this.AvailableBMList.push(this.AssociatedBMList[i]);
            this.GridBMFilter[this.AssociatedBMList[i].BMID] = '1';
          } 
        }
      }
    },error=>{console.log(error)});
  }

  AddBMFilter(bm: any) {    
    if (this.GridBMFilter[bm.BMID] === undefined) {
      this.GridBMFilter[bm.BMID] = '1';
      this.AssociatedBMList.push(bm);
    }
  }
  DeleteBmFilter(bm) {    
    const txt = this.AssociatedBMList.indexOf(bm);
    if (txt > -1) {
      this.AssociatedBMList.splice(txt, 1);
    }
    delete this.GridBMFilter[bm.BMID];
  }

  dropColumn(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.GridColumnList, event.previousIndex, event.currentIndex);
  }

  SaveWorkflowBMAssociation(){    
    if(this.AssociatedBMList.length>0){      
      let bmIds = '';
      this.AssociatedBMList.forEach(el => {
        bmIds = bmIds + el.BMID + ',';
      });
      bmIds = bmIds.substring(0, bmIds.length - 1);
      this.wfsrvc.SaveWFBMAssociation(this.WFID,bmIds).subscribe(result=>{
        if(result && result === 'Workflow Model Association has been completed successfully.'){
          this.activeModal.close(true);
          return true;
        }
      },error=>{console.log(error)});
    }else{
      this.toastr.warning('Add at least one Business Model to associate.');
    }  
  }

}
