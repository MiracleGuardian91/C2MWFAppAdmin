import { arrayToList, arrayToList1 } from '@app/admin/wf/wfd/util/helpers';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { UntypedFormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormViewApiService } from '@app/core/services/form-view-api.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import {of } from 'rxjs';
import { ICompanyAssociatedBMObject, ICompanyAssociatedWFObject } from '@app/core';
import { map, switchMap, tap } from 'rxjs/operators';
import { NgIf, NgFor, AsyncPipe, CommonModule } from '@angular/common';
import { CustomSelectComponent } from '../../lib/custom-select/custom-select.component';
import { AssociationComponent } from '../../lib/association/association.component';
import { SearchColumnPipe } from '../../pipe/search-column.pipe';

@Component({
    selector: 'app-company-association',
    templateUrl: './company-association.component.html',
    styleUrls: ['./company-association.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgIf, CommonModule, ReactiveFormsModule, CustomSelectComponent, FormsModule, NgFor, AssociationComponent, AsyncPipe, SearchColumnPipe]
})
export class CompanyAssociationComponent<T = any> {
  @Input() displayWith = (item: T) => String(item);
  @Input() uniqueWith = (item: T) => String(item);
  @Input() getAssociationsWith = (_companyId: string) => of([]);
  @Input() checkBy: keyof T;
  @Input() groupDisplayWith = (item: T) => String(item);
  @Input() groupUniqueWith = (item: T) => String(item);

  isAdd:boolean =false;
  newGroupItem:string;
  CompanyName:string;
  _allItems=[];
  selectedCompItems=[];
  _allCompanyAssocationItems=[];
  _isNewItemselected:boolean=false;
  allAvaliableGroups=[];
  allCompanyAssociatedWithProcess=[];
  selectedGroupsKey:string;
  newSelectedCompItems:boolean=true;
  allAssociationCheck: boolean = false;
  selectedItems: ICompanyAssociatedWFObject[] | ICompanyAssociatedBMObject[] = [];
  emptyField:boolean=false;



  readonly selectGroup = this.fb.group({
    group: [null],
  });
  
  
  

  readonly companies$ = this.formView.getCompanies().pipe(
  map(items =>
    items.slice(1).map(item => ({
      ...item,
      isSelected: this.selectedCompItems.some(selected => selected.CompanyID === item.CompanyID)
    }))
  )
);

  // readonly associations$ = this.selectGroup.get('company').valueChanges.pipe(
  //   tap(_ => this.selectedItems = null),
  //   map(v => v?.key || v),
  //   switchMap(id => !id ? of([]) : this.getAssociationsWith(id)),
  //   map(items => {
  //     debugger;
  //     const selectedItems = [];
  //     items.forEach(item => {
  //       if (item[this.checkBy]) {

  //         selectedItems.push(item);
  //       }
  //     })
  //     return [items, selectedItems]
  //   })
  // );

  



  readonly associations$ = this.selectGroup.get('group')!.valueChanges.pipe(
    map(value => value?.key ?? null),
    switchMap(id => this.getAssociationsWith(id).pipe(
      map(items => {
        let availableItems = items ?? [];
        let selectedItems = [];

        if (this.emptyField) {
          // Clear isAlreadySelected flag if emptyField is true
          availableItems = availableItems.map(item => ({
            ...item,
            isAlreadySelected: 0
          }));
          selectedItems = [];
        } else {
          selectedItems = availableItems.length
            ? availableItems.filter(item => item[this.checkBy])
            : [];
        }

        this.selectedItems = selectedItems;
        return [availableItems, selectedItems];
      })
    ))
  );

  readonly grouplist$ = this.formView.getGroups(sessionStorage.getItem("AppName")).pipe(map(items => arrayToList1(items.slice(1), 'ID', 'GROUPNAME', 'IsAllComp')));
  private addIsSelectedToItems(items: any[], idKey: string, nameKey: string): any[] {
    return items.map(item => ({ ...item, isSelected: false}));
  }

  checkWith = (item: T) => (item[this.checkBy] ? 'Added' : 'Add');


  constructor(
    private readonly formView: FormViewApiService,
    private readonly fb: UntypedFormBuilder,
    public readonly ref: NgbActiveModal,
    private toastr: ToastrService,
    private cdr:ChangeDetectorRef
  ) { }

  ngOnInit(){
    this.grouplist$.subscribe((groups)=>{
        this.allAvaliableGroups=groups;
        if(groups.length>0)
          this.selectGroup.get('group')?.setValue(this.allAvaliableGroups[0]);
    })

    

    this.formView.getCompanies().pipe(
      map(items => {
        return items.slice(1).map(item => ({
          ...item,
          isSelected: this.selectedCompItems.some(selected => selected.CompanyID === item.CompanyID)
        }));
      })
    ).subscribe({
      next: (res) => {
        this._allItems = res;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
      }
    });
 
     this.selectGroup.get('group').valueChanges.subscribe((group)=>{
      if(group?.objisCheck != null && group.objisCheck==1){
        this.allAssociationCheck = true;
      }else{
        this.allAssociationCheck = false;
      }
    if(this.allAvaliableGroups.length>0){
      this.formView.getCompaniesByGroupId(group?.key,sessionStorage.getItem("AppName")).subscribe((res)=>{
      if(res!==null){
        this.selectedGroupsKey =group?.key;   
        this.resetCompanylistItems();
        this.selectedCompItems=[];
        this.allCompanyAssociatedWithProcess =res['allAssociatedCompany'];
        if(res['isAllComp']==1){this.allAssociationCheck = true;}
        this._allCompanyAssocationItems=res['AssociatedCompanyToGroup'];
        this._allCompanyAssocationItems.forEach((company)=>{
          this.selectedCompItems.push(company);  
          this.cdr.detectChanges();
       });
      }
      },err=>{
    
        }); 
    }
    })

    this.selectGroup.get('group')?.valueChanges.subscribe((selectedValue) => {
      console.log('Selected group changed:', selectedValue);
      this.onGroupChange(selectedValue);
    });
   
    
  }

  resetCompanylistItems(){
      this._allItems.forEach((ele)=>{
          ele.isSelected=false;
      });
  }

  onSelect = (items: any[]) => this.selectedItems = items;

  onSubmit() {
    const groupId = this.selectGroup.get('group').value;
    if(this.isAdd==true){
    
      if(this.newGroupItem){
        const canAdd= this.allAvaliableGroups.find((ele)=>ele.value==this.newGroupItem);
        if(canAdd){
          this.toastr.warning('Please select the diffrent group name.');
          return false;        
        }
    }
    else{
      this.toastr.warning('Please insert group name.');
      return false;
    }
  }

    if(this.selectedCompItems.length==0 && this.allAssociationCheck==false){
    this.toastr.warning('Please select atleast one company for company assocation.');
    return false;
    }
    const payload={
        groupName:groupId?.value || this.newGroupItem,
        companyId:this.allAssociationCheck ==false? this.selectedCompItems.map(company => company.CompanyID).join(';'):'',
        selectedItems: this.allAssociationCheck ==false?this.selectedItems :'',
        IsAllComp:this.allAssociationCheck
    }
    this.allAvaliableGroups=[];
    this.ref.close(payload);
  }


  onAction = async (item: T) => {
    this._isNewItemselected=true;
    const original = this._allItems.find((rec) => item['CompanyID'] === rec.CompanyID);
    if (!original['isSelected']) {
     const yes= this.allCompanyAssociatedWithProcess.find((comp) =>comp.CompId == item['CompanyID']);
     if(yes){
      this.toastr.warning('This company is already associated with another group in this process.');
      return false;  
     }
       original.isSelected = true;
      this.selectedCompItems.push(original);
      this.newSelectedCompItems=false;
    } else {
    
      const indexToRemove = this.selectedCompItems.findIndex(item => item.CompanyID === original.CompanyID);
      if (indexToRemove !== -1) {
        const removedItem = this.selectedCompItems.splice(indexToRemove, 1)[0];
        this.newSelectedCompItems=false;
        const originalIndex = this._allItems.findIndex(rec => removedItem.CompanyID === rec.CompanyID);
        if (originalIndex !== -1) {
          this._allItems[originalIndex].isSelected = false;
           const indexToRemove = this.allCompanyAssociatedWithProcess.findIndex(allItems => allItems.CompId === item['CompanyID'] && allItems.groupId === this.selectedGroupsKey);
          if(indexToRemove!==-1)
           this.allCompanyAssociatedWithProcess.splice(indexToRemove, 1);
       
   
        }
      }

    }
  }



  toggleAllCompanyAssociation(): void {
    if (this.allAssociationCheck) {
      this.allAssociationCheck = false;
    } else {
      this.allAssociationCheck = true;
    }
  }

  toggleSelected = async (selected: boolean) => {
    if(selected){
       this._allItems.forEach((item)=>{
         const canAdd = this.selectedCompItems.find((rec)=>rec.CompanyID===item.CompanyID);
         if(canAdd==undefined){
          item.isSelected=true;
          this.selectedCompItems.push(item);
          this.newSelectedCompItems=false;
         }
    })
    }else{
      this._allItems.forEach((item)=>{
        item.isSelected=false;
    })
    this.selectedCompItems=[];
    this.newSelectedCompItems=true;
    }
   
  };
  isAddAction(){
   this.isAdd=true;
   this.selectGroup.controls['group'].setValue(null);
   this.selectedCompItems=[];
   this.newSelectedCompItems=true;
  }

  onGroupChange(value: any): void {

    if (!value?.value) {
      this.selectedCompItems = [];
      this.emptyField = true;
    } else {
      this.emptyField = false;
    }
    this.formView.getCompanies().pipe(
      map(items => {
        return items.slice(1).map(item => ({
          ...item,
          isSelected: this.selectedCompItems.some(selected => selected.CompanyID === item.CompanyID)
        }));
      })
    ).subscribe({
      next: (res) => {
        this._allItems = res;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
      }
    });


  }
 
}
