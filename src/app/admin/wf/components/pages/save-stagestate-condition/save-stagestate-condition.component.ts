import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WFService } from '@app/admin/core/services/wfservice.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { cond } from 'lodash';
import { NgIf, NgClass, NgFor } from '@angular/common';
import { NgSelectComponent, NgOptionComponent } from '@ng-select/ng-select';
@Component({
    selector: 'app-save-stagestate-condition',
    templateUrl: './save-stagestate-condition.component.html',
    styleUrls: ['./save-stagestate-condition.component.scss'],
    standalone: true,
    imports: [NgIf, ReactiveFormsModule, NgClass, NgSelectComponent, NgOptionComponent, NgFor, CdkDropList, CdkDrag]
})
export class SaveStagestateConditionComponent implements OnInit {
  WFCondForm: UntypedFormGroup;
  submitted = false;
  loading = false;
  BMList = [{ id: 1, Value: 'select1' }, { id: 2, Value: 'select2' }, { id: 3, Value: 'select3' }];
  ColumnList: any;
  GridColumnList = [];
  WFId: any;
  WfBMList: [];
  BMOGList: [];
  StageList: [];
  StateList: [];
  DmoList: [];
  BmoList: [];
  DmgList: [];
  CondAreaDmoList: [];
  TriggerList: [];
  stageState: any;
  GridStateFilter: any = {};
  GridStageFilter: any = {};
  GridBmoFilter: any = {};
  GridDmgFilter: any = {};
  GridDmoFilter: any = {};
  GridTriggerFilter: any = {};
  StateFilterList = [];
  StageFilterList = [];
  BmoFilterList = [];
  DmgFilterList = [];
  DmoFilterList = [];
  TriggerFilterList = [];
  CondArea = '';
  disableAdd: boolean = true;
  WFConditionFilter = [];
  isFilterSubmit = false;
  isEdit = false;
  Version: any;
  dataList: any;
  ConditionID: any;
  constructor(private formBuilder: UntypedFormBuilder,
    private toastr: ToastrService,
    private http: HttpClient,
    private router: Router,
    public activeModal: NgbActiveModal, private wfsrvc: WFService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.WFCondForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Version: ['', Validators.required],
      Description: [''],
      Status: ['-1', [Validators.required]],
      BMID: ['-1', [Validators.required]],
      BMOGNAM: ['-1', [Validators.required]],
      DmoName: ['-1'],
      Condition: ['Equals to'],
      ComparisonValue: [''],
      LogicalOperator: ['AND'],
      ConditionArea: ['', [Validators.required]],
      Visible: ['2'],
      Mandatory: ['0'],
      Enabled: ['1'],
      ConditionLevel: ['', [Validators.required]]
    });
    if (!!this.WFId) {
      this.getWFBM(this.WFId);
    }
    if (this.isEdit === false) {
      this.WFCondForm.get('Version').patchValue(this.Version);
    }
  }
  get f() {
    return this.WFCondForm.controls;
  }

  closeModal() {
    this.activeModal.close(true);
  }


  dropColumn(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.GridColumnList, event.previousIndex, event.currentIndex);
  }
  AddStageFilter(Stage) {
    if (this.GridStageFilter[Stage.GUID] === undefined) {
      this.GridStageFilter[Stage.GUID] = '1';
      this.StageFilterList.push(Stage);
    }
  }
  DeleteStageFilter(Stage) {
    const stageData = this.StageFilterList.indexOf(Stage);
    if (stageData > -1) {
      this.StageFilterList.splice(stageData, 1);
    }
    delete this.GridStageFilter[Stage.GUID];
  }

  AddStateFilter(State) {
    if (this.GridStateFilter[State.GUID] === undefined) {
      this.GridStateFilter[State.GUID] = '1';
      this.StateFilterList.push(State);
    }
  }
  DeleteStateFilter(State) {
    const txt = this.StateFilterList.indexOf(State);
    if (txt > -1) {
      this.StateFilterList.splice(txt, 1);
    }
    delete this.GridStateFilter[State.GUID];
  }

  AddBmoFilter(bmo: any) {
    if (this.GridBmoFilter[bmo.GUID] === undefined) {
      this.GridBmoFilter[bmo.GUID] = '1';
      this.BmoFilterList.push(bmo);
    }
  }
  DeleteBmoFilter(bmo) {
    const txt = this.BmoFilterList.indexOf(bmo);
    if (txt > -1) {
      this.BmoFilterList.splice(txt, 1);
    }
    delete this.GridBmoFilter[bmo.GUID];
  }

  AddDmgFilter(dmg: any) {
    if (this.GridDmgFilter[dmg.GUID] === undefined) {
      this.GridDmgFilter[dmg.GUID] = '1';
      this.DmgFilterList.push(dmg);
    }
  }
  DeleteDmgFilter(dmg: any) {
    const txt = this.DmgFilterList.indexOf(dmg);
    if (txt > -1) {
      this.DmgFilterList.splice(txt, 1);
    }
    delete this.GridDmgFilter[dmg.GUID];
  }

  AddDmoFilter(dmo: any) {
    if (this.GridDmoFilter[dmo.GUID] === undefined) {
      this.GridDmoFilter[dmo.GUID] = '1';
      this.DmoFilterList.push(dmo);
    }
  }
  DeleteDmoFilter(dmo: any) {
    const txt = this.DmoFilterList.indexOf(dmo);
    if (txt > -1) {
      this.DmoFilterList.splice(txt, 1);
    }
    delete this.GridDmoFilter[dmo.GUID];
  }

  AddTriggerFilter(trigger: any) {
    if (this.GridTriggerFilter[trigger.GUID] === undefined) {
      this.GridTriggerFilter[trigger.GUID] = '1';
      this.TriggerFilterList.push(trigger);
    }
  }
  DeleteTriggerFilter(trigger: any) {
    const txt = this.TriggerFilterList.indexOf(trigger);
    if (txt > -1) {
      this.TriggerFilterList.splice(txt, 1);
    }
    delete this.GridTriggerFilter[trigger.GUID];
  }

  getWFBM(wfid: any) {
    this.wfsrvc.getwfBM(wfid).subscribe(res => {
      this.WfBMList = res.Data;
      if (this.isEdit) {
        this.getWFConditionDetail(this.ConditionID);
      }
    }, error => {
      console.log(error);
    });
  }
  ChangeBM(bmid: any) {
    this.wfsrvc.getBMOGList(bmid).subscribe(res => {
      if (!!res) {
        this.BMOGList = res.Data;
        this.getDmoBasedOnBMId(bmid);
      }
    }, error => {
      console.log(error);
    });
  }

  ChangeStageState(event: any) {
    this.stageState = this.isEdit === true ? event : event.target.value;
    this.wfsrvc.GetStageStateByWFID(this.WFId, this.stageState).subscribe(res => {
      if (!!res) {
        if (this.stageState === 'Stage') {
          this.StageList = res.Data;
        } else {
          this.StateList = res.Data;
        }
        if (this.isEdit) {
          const condlevel = this.dataList.CondLevel;
          const stagestatefilter = condlevel.StageStateGuids.split(',');
          if (condlevel.ConditionLevel === 'State' && this.StateList.length > 0) {
            this.StateList.forEach(element => {
              stagestatefilter.forEach(e => {
                if (element['GUID'] === e) {
                  this.StateFilterList.push(element);
                  if (this.GridStateFilter[element['GUID']] === undefined) {
                    this.GridStateFilter[element['GUID']] = '1';
                  }
                }
              });
            });
          }
          if (condlevel.ConditionLevel === 'Stage' && this.StageList.length > 0) {
            this.StageList.forEach(element => {
              stagestatefilter.forEach(e => {
                if (element['GUID'] === e) {
                  this.StageFilterList.push(element);
                  if (this.GridStageFilter[element['GUID']] === undefined) {
                    this.GridStageFilter[element['GUID']] = '1';
                  }
                }
              });
            });
          }
        }
      }
    }, error => {
      console.log(error);
    });
  }
  getDmoBasedOnBMId(bmid: any) {
    this.wfsrvc.getDmoBasedOnBMId(bmid).subscribe(res => {
      if (!!res) {
        this.DmoList = res.Data;
      }
    }, error => {
      console.log(error);
    });
  }
  ChangeBMO(event: any) {
    this.CondArea = this.isEdit === true ? event : event.target.value;
    const bmid = this.isEdit === true ? this.dataList.BMID : this.WFCondForm.get('BMID').value;
    const bmogname = this.WFCondForm.get('BMOGNAM').value;
    if (!!bmid && bmid !== '-1' && !!bmogname && bmogname !== '-1') {
      this.wfsrvc.GetWFConditionAreaControls(bmid, bmogname, this.CondArea).subscribe(result => {
        if (!!result) {
          this.BmoList = result.data;
          this.DmgList = [];
          this.CondAreaDmoList = [];
          this.TriggerList = [];
          if (this.isEdit && this.BmoList.length > 0) {
            const condarea = this.dataList.Area;
            const bmofilter = condarea.BmObjectGuids.split(',');
            if (this.BmoList.length > 0) {
              this.BmoList.forEach(element => {
                bmofilter.forEach(e => {
                  if (element['GUID'] === e) {
                    this.BmoFilterList.push(element);
                    if (this.GridBmoFilter[element['GUID']] === undefined) {
                      this.GridBmoFilter[element['GUID']] = '1';
                    }
                  }
                });
              });
            }
          }
        }
      }, error => { });
    } else {
      if ((bmid === undefined || bmid === '-1') || (bmogname === undefined || bmogname === '-1'))
        this.toastr.warning('Plz Select Buisness Model & Business Model Object Group first.');
    }
  }

  ChangeDMG(event: any) {
    this.CondArea = this.isEdit === true ? event : event.target.value;
    const bmid = this.isEdit === true ? this.dataList.BMID : this.WFCondForm.get('BMID').value;
    const bmogname = this.WFCondForm.get('BMOGNAM').value;
    if (!!bmid && bmid !== '-1' && !!bmogname && bmogname !== '-1') {
      this.wfsrvc.GetWFConditionAreaControls(bmid, bmogname, this.CondArea).subscribe(result => {
        if (!!result) {
          this.DmgList = result.data;
          this.CondAreaDmoList = [];
          this.TriggerList = [];
          this.BmoList = [];
          if (this.isEdit && this.DmgList.length > 0) {
            const condarea = this.dataList.Area;
            const dmgfilter = condarea.BmObjectGuids.split(',');
            if (this.DmgList.length > 0) {
              this.DmgList.forEach(element => {
                dmgfilter.forEach(e => {
                  if (element['GUID'] === e) {
                    this.DmgFilterList.push(element);
                    if (this.GridDmgFilter[element['GUID']] === undefined) {
                      this.GridDmgFilter[element['GUID']] = '1';
                    }
                  }
                });
              });
            }
          }
        }
      }, error => { });
    } else {
      if ((bmid === undefined || bmid === '-1') || (bmogname === undefined || bmogname === '-1'))
        this.toastr.warning('Plz Select Buisness Model & Business Model Object Group first.');
    }
  }
  Changedmo(event: any) {
    this.CondArea = this.isEdit === true ? event : event.target.value;
    const bmid = this.isEdit === true ? this.dataList.BMID : this.WFCondForm.get('BMID').value;
    const bmogname = this.WFCondForm.get('BMOGNAM').value;
    if (!!bmid && bmid !== '-1' && !!bmogname && bmogname !== '-1') {
      this.wfsrvc.GetWFConditionAreaControls(bmid, bmogname, this.CondArea).subscribe(result => {
        if (!!result) {
          this.CondAreaDmoList = result.data;
          this.TriggerList = [];
          this.BmoList = [];
          this.DmgList = [];
          if (this.isEdit && this.CondAreaDmoList.length > 0) {
            const condarea = this.dataList.Area;
            const dmofilter = condarea.BmObjectGuids.split(',');
            if (this.CondAreaDmoList.length > 0) {
              this.CondAreaDmoList.forEach(element => {
                dmofilter.forEach(e => {
                  if (element['GUID'] === e) {
                    this.DmoFilterList.push(element);
                    if (this.GridDmoFilter[element['GUID']] === undefined) {
                      this.GridDmoFilter[element['GUID']] = '1';
                    }
                  }
                });
              });
            }
          }
        }
      }, error => { });
    } else {
      if ((bmid === undefined || bmid === '-1') || (bmogname === undefined || bmogname === '-1'))
        this.toastr.warning('Plz Select Buisness Model & Business Model Object Group first.');
    }
  }
  ChangeTrigger(event: any) {
    this.CondArea = this.isEdit === true ? event : event.target.value;
    const bmid = this.isEdit === true ? this.dataList.BMID : this.WFCondForm.get('BMID').value;
    const bmogname = this.WFCondForm.get('BMOGNAM').value;
    if (!!bmid && bmid !== '-1' && !!bmogname && bmogname !== '-1') {
      this.wfsrvc.GetWFConditionAreaControls(bmid, bmogname, this.CondArea).subscribe(result => {
        if (!!result) {
          this.TriggerList = result.data;
          this.BmoList = [];
          this.DmgList = [];
          this.CondAreaDmoList = [];
          if (this.isEdit && this.TriggerList.length > 0) {
            const condarea = this.dataList.Area;
            const triggerfilter = condarea.BmObjectGuids.split(',');
            if (this.TriggerList.length > 0) {
              this.TriggerList.forEach(element => {
                triggerfilter.forEach(e => {
                  if (element['GUID'] === e) {
                    this.TriggerFilterList.push(element);
                    if (this.GridTriggerFilter[element['GUID']] === undefined) {
                      this.GridTriggerFilter[element['GUID']] = '1';
                    }
                  }
                });
              });
            }
          }
        }
      }, error => { });
    } else {
      if ((bmid === undefined || bmid === '-1') || (bmogname === undefined || bmogname === '-1'))
        this.toastr.warning('Plz Select Buisness Model & Business Model Object Group first.');
    }
  }

  AddConditionFilter() {    
    const dmoname = this.WFCondForm.get('DmoName').value;
    const condition = this.WFCondForm.get('Condition').value;
    const comparisonval = this.WFCondForm.get('ComparisonValue').value;
    const logicopr = this.WFCondForm.get('LogicalOperator').value;
    if (!!dmoname && dmoname !== '-1' && !!condition && !!comparisonval && !!logicopr) {
      const dmoid = this.DmoList.filter(x => x['NAME'] == dmoname)[0]['GlobalID'];
      this.isFilterSubmit = false;
      const filter = { DmoName: dmoname, DmoId: dmoid, Operator: logicopr, ComparisonValue: comparisonval, ConditionExpression: condition };
      if(this.WFConditionFilter.length>0){         
        if(this.WFConditionFilter.find(x=>x.DmoName==dmoname && x.ConditionExpression==condition && x.ComparisonValue==comparisonval && x.Operator==logicopr)){
          this.toastr.warning('Same condition is already added');
          return false;
        }
      }
      this.WFConditionFilter.push(filter);          
      this.WFCondForm.get('DmoName').patchValue('-1');
      this.WFCondForm.get('ComparisonValue').patchValue('');
    } else {
      this.disableAdd = true;
      this.isFilterSubmit = true;
    }
  }

  DeleteConditionFilter(filter: any) {
    const filterData = this.WFConditionFilter.indexOf(filter);
    if (filterData > -1) {
      this.WFConditionFilter.splice(filterData, 1);
    }
  }

  getBodyData() {
    let ConditionLevel = '';
    let ConditionArea = '';
    if (this.stageState === 'Stage') {
      this.StageFilterList.forEach(el => {
        ConditionLevel = ConditionLevel + el.GUID + ',';
      });
    } else {
      this.StateFilterList.forEach(el => {
        ConditionLevel = el.GUID + ',';
      });
    }
    ConditionLevel = ConditionLevel.slice(0, -1);
    if (this.CondArea === 'BusinessModelObject') {
      this.BmoFilterList.forEach(el => {
        ConditionArea = ConditionArea + el.GUID + ',';
      });
    } else if (this.CondArea === 'DataModelGroup') {
      this.DmgFilterList.forEach(el => {
        ConditionArea = ConditionArea + el.GUID + ',';
      });
    } else if (this.CondArea === 'DataModelObject') {
      this.DmoFilterList.forEach(el => {
        ConditionArea = ConditionArea + el.GUID + ',';
      });
    } else {
      this.TriggerFilterList.forEach(el => {
        ConditionArea = ConditionArea + el.GUID + ',';
      });
    }
    ConditionArea = ConditionArea.substring(0, ConditionArea.length - 1);
    const bodyData = {
      CondID: this.isEdit === true ? this.ConditionID : '',
      Description: this.WFCondForm.get('Description').value,
      Name: this.WFCondForm.get('Name').value,
      Version: this.WFCondForm.get('Version').value,
      BMID: this.isEdit === true ? this.dataList.BMID : this.WFCondForm.get('BMID').value,
      BMOGNAM: this.WFCondForm.get('BMOGNAM').value,
      WFID: this.WFId,
      Status: this.WFCondForm.get('Status').value,
      Area: { conditionArea: this.CondArea, bmObjectGuids: ConditionArea },
      Enabled: this.WFCondForm.get('Enabled').value,
      Mandatory: this.WFCondForm.get('Mandatory').value,
      Visible: this.WFCondForm.get('Visible').value,
      CondLevel: { conditionLevel: this.stageState, stageStateGuids: ConditionLevel },
      Filter: this.WFConditionFilter
    }
    return bodyData;
  }
  onSubmit() {
    this.submitted = true;
    if (this.WFCondForm.invalid) {
      return;
    }
    if ((this.stageState === 'Stage' && this.StageFilterList.length === 0) ||
      (this.stageState === 'State' && this.StateFilterList.length === 0)) {
      return;
    }
    if ((this.CondArea === 'BusinessModelObject' && this.BmoFilterList.length === 0) ||
      (this.CondArea === 'DataModelGroup' && this.DmgFilterList.length === 0) ||
      (this.CondArea === 'DataModelObject' && this.DmoFilterList.length === 0) ||
      (this.CondArea === 'Trigger' && this.TriggerFilterList.length === 0)) {
      return;
    }

    const bodyData = this.getBodyData();
    this.wfsrvc.SaveWFCondition(bodyData).subscribe(result => {
      if (result === 'Sucess.' || result?.message === 'Sucess.') {
        this.activeModal.close(true);
        return true;
      }
    }, error => { console.log(error) });
  }

  getWFConditionDetail(CondId: any) {
    this.wfsrvc.GetWFConditionDetail(CondId).subscribe(result => {
      this.dataList = result;
      this.initState(this.dataList);
    }, error => { console.log(error) });
  }

  initState(dataList: any) {
    if (this.isEdit === true) {
      const bmid = this.WfBMList.filter(x => x['BMID'] === dataList.BMID)[0]['BMNAME'];
      this.WFCondForm.get('BMID').patchValue(bmid);
      this.WFCondForm.get('BMID').disable();
      this.getDmoBasedOnBMId(dataList.BMID);
      this.WFCondForm.get('BMOGNAM').patchValue(dataList?.BMOGNAM);
      this.WFCondForm.get('Description').patchValue(dataList?.Description);
      this.WFCondForm.get('Name').patchValue(dataList?.Name);
      this.WFCondForm.get('Status').patchValue(dataList?.Status);
      this.WFCondForm.get('Version').patchValue(dataList?.Version);
      this.WFCondForm.get('Version').disable();
      this.WFCondForm.get('Enabled').patchValue(dataList?.Enabled);
      this.WFCondForm.get('Mandatory').patchValue(dataList?.Mandatory);
      this.WFCondForm.get('Visible').patchValue(dataList?.Visible);
      const condlevel = dataList.CondLevel;
      this.ChangeStageState(condlevel.ConditionLevel);
      this.WFCondForm.get('ConditionLevel').patchValue(condlevel.ConditionLevel);
      const ConditionArea = dataList.Area;
      this.WFCondForm.get('ConditionArea').patchValue(ConditionArea.ConditionArea);
      if (ConditionArea.ConditionArea === 'BusinessModelObject') {
        this.ChangeBMO(ConditionArea.ConditionArea);
      }
      if (ConditionArea.ConditionArea === 'DataModelGroup') {
        this.ChangeDMG(ConditionArea.ConditionArea);
      }
      if (ConditionArea.ConditionArea === 'DataModelObject') {
        this.Changedmo(ConditionArea.ConditionArea);
      }
      if (ConditionArea.ConditionArea === 'Trigger') {
        this.ChangeTrigger(ConditionArea.ConditionArea);
      }
      const WFConditionFilter = dataList.Filter;
      if (WFConditionFilter.length > 0) {
        WFConditionFilter.forEach(res => {
          this.WFConditionFilter.push(res);
        });
      }
    }
  }
}

