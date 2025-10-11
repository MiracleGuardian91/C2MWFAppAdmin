import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BmEntryComponent } from '@app/admin/BM/components/bm-entry/bm-entry.component';
import { BmService } from '@app/admin/core/services/bm.service';
import { CompanyAssociationComponent } from '@app/admin/Shared/company-association/company-association.component';
import { BMAssociatedCompaniesPayload, ICompanyAssociatedBMObject, MessageService } from '@app/core';
import { FormViewApiService } from '@app/core/services/form-view-api.service';
import { NgbModal, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { NgIf, NgFor } from '@angular/common';

type Mode = 'Edit' | 'Published';

@Component({
    selector: 'app-dm-menu',
    templateUrl: './dm-menu.component.html',
    styleUrls: ['./dm-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgbDropdown, NgbDropdownToggle, NgIf, NgbDropdownMenu, NgFor, NgbDropdownItem]
})
export class DmMenuComponent implements OnInit {
  @Output() readonly newVersion = new EventEmitter();
  @Output() readonly generateXml = new EventEmitter();
  @Output() readonly modeChange = new EventEmitter<Mode>();
  ProcessName : any; 
  TransactionIDs : any;
  dataSource: any;
  BMSaveUpdateForm: UntypedFormGroup;
  submitted: boolean = false;
  isEdit = 'edit';
  bmid: string;
  @Input() businessModel: any = null;
  typeId: string;
  
  @Input()
  set mode(mode: Mode) {
    this._mode = mode;
  }
  get mode() {
    return this._mode;
  }
  
  private _mode: Mode;
  constructor(
    private modalService: NgbModal,
    readonly formView: FormViewApiService,
    readonly toastr: ToastrService,
    readonly msg: MessageService,
    readonly bmService: BmService,
    readonly fb: UntypedFormBuilder,
    private route : ActivatedRoute,
  ) {}
  ngOnInit() {
    this.bmid = this.route.snapshot.queryParamMap.get('BMID');
    this.typeId = this.route.snapshot.queryParamMap.get('TypeID');
  }

   async onCompanyAssociation() {
        const obj = '';
        const modal = this.msg.showComponent(CompanyAssociationComponent, {
          displayWith: (item: ICompanyAssociatedBMObject) => `${item.BMODISPNAME} > ${item.DMOGDISPNAME} > ${item.DMODISPNAME}`,
          uniqueWith: (item: ICompanyAssociatedBMObject) => `${item.BMOID}${item.DMOGID}${item.DMOID}`,
          getAssociationsWith: (groupId: string) => this.formView.getBMObjectsForCompanyAssociation(groupId, this.typeId, this.bmid), 
          checkBy: 'ISDMOSELECTED',
        },{ size: 'lg', centered: true });
        const res = await modal.result;
        if (res) {
          const success = await this.updateCompanyAssociatedRecords(obj, res) === 1;
          if (success) {
           this.toastr.success('Success');
          }
        }
    }
  
    private updateCompanyAssociatedRecords(bm: any, res: any) {

  const bmoGuids = new Set(), dmogGuids = new Set(), dmoGuids = new Set();

  const selectedItems = res?.selectedItems;

  if (Array.isArray(selectedItems)) {
    (selectedItems as ICompanyAssociatedBMObject[]).forEach(item => {
      bmoGuids.add(item.BMOGUID);
      dmogGuids.add(item.DMOGGUID);
      dmoGuids.add(item.DMOGUID);
    });
  } else {
    console.warn('selectedItems is not an array:', selectedItems);
  }

  const payload: BMAssociatedCompaniesPayload = {
    BMId: this.bmid,
    ProcessId: this.typeId,
    CompanyId: res?.companyId ?? null,
    groupName: res?.groupName ?? '',
    BMOGUIDS: [...bmoGuids].toString(),
    DMOGGUIDS: [...dmogGuids].toString(),
    DMOGUIDS: [...dmoGuids].toString(),
    IsAllComp: res?.IsAllComp ?? false
  };

  return lastValueFrom(this.formView.updatetBMObjectsForCompanyAssociation(payload));
}

  

 async CreateNewRecord() {
  this.bmid = this.route.snapshot.queryParamMap.get('BMID');
  this.ProcessName = sessionStorage.getItem('AppName');
  try {
    const response = await firstValueFrom(this.bmService.GetBmData(this.ProcessName, this.bmid));
    this.dataSource = response[0];
    const modalRef = this.modalService.open(BmEntryComponent, { backdrop: 'static', size: 'lg', keyboard: false });
    const modalInstance: BmEntryComponent = modalRef.componentInstance;
    const item = this.dataSource;
    modalInstance.bmid = this.bmid;
    modalInstance.dataList = item;
    modalInstance.isEdit = true;
    modalInstance.currentMode = item?.MOD;
    const result = await modalRef.result;
    if (result) {
      this.toastr.success('Data saved successfully.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
}
