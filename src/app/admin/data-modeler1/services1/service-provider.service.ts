import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {
  private BmogSubject=new Subject<any>();
  private BmoSubject=new Subject<any>();
  private NewlyBmogSubject=new Subject<any>();
  private DmoStatesSubject=new Subject<any>();
  private HideContextMenu=new Subject<any>();
  private DeleteDmoSubject=new Subject<any>();
  private MoveDmoSubject=new Subject<any>();
  private reloadParentSubject=new Subject<any>();
  private UpdateDmogSettingSubject=new Subject<any>();
  private UpdateDmogStyleSettingSubject=new Subject<any>();
  private CloseSidebarNav=new Subject<any>();
  private UpdatedContainerWidth = new Subject<any>();
  private UpdatedColumnData = new Subject<any>();
  private OpenSidebarNav=new Subject<any>();
  private readonly IsRowEmpty=new Subject<any>();
  constructor() { }
  setreloadParent(data:any){
    this.reloadParentSubject.next(data);
  }
  getreloadParent():Observable<any>{
    return this.reloadParentSubject.asObservable();
  }
  setBmog(data:any){
    this.BmogSubject.next(data);
  }
  getBmog():Observable<any>{
    return this.BmogSubject.asObservable();
  }
  setBmo(data:any){
    this.BmoSubject.next(data);
  }
  getBmo():Observable<any>{
    return this.BmoSubject.asObservable();
  }
  setNewlyBmog(data:any){
    this.NewlyBmogSubject.next(data);
  }
  getNewlyBmog():Observable<any>{
    return this.NewlyBmogSubject.asObservable();
  }
  setHideContextMenu(data:any){
    this.HideContextMenu.next(data);
  }
  getHideContextMenu(){
  return  this.HideContextMenu.asObservable();
  }
  setDmoStates(data:any){
    this.DmoStatesSubject.next(data);
  }
  getDmoStates(){
  return  this.DmoStatesSubject.asObservable();
  }
  setDeleteDmo(data:any){
    this.DeleteDmoSubject.next(data);
  }
  getDeleteDmo(){
  return  this.DeleteDmoSubject.asObservable();
  }
  
  setMoveDmo(data:any){
    this.MoveDmoSubject.next(data);
  }
  getMoveDmo(){
  return  this.MoveDmoSubject.asObservable();
  }
  setUpdateDmogSettings(data:any){
    this.UpdateDmogSettingSubject.next(data);
  }
  getUpdateDmogSettings(){
  return  this.UpdateDmogSettingSubject.asObservable();
  }
  

  setUpdateDmogStyleSettings(data:any){
    this.UpdateDmogStyleSettingSubject.next(data);
  }
  getUpdateDmogStyleSettings(){
  return  this.UpdateDmogStyleSettingSubject.asObservable();
  }
  
  setSidebarclose(data:any){
    this.CloseSidebarNav.next(data);
  }
  getSidebarclose(){
    return  this.CloseSidebarNav.asObservable();
  }
  setUpdatedContainerWidth(data:any){
    this.UpdatedContainerWidth.next(data);
  }
  geUpdatedContainerWidth(){
    return  this.UpdatedContainerWidth.asObservable();
  }
  setUpdatedColumnData(data:any){
    this.UpdatedColumnData.next(data);
  }
  geUpdatedColumnData(){
    return  this.UpdatedColumnData.asObservable();
  }

  setOpenSidebarNav(data:any){
    this.OpenSidebarNav.next(data);
  }
  getOpenSidebarNav(){
    return  this.OpenSidebarNav.asObservable();
  }

  setIsRowEmpty(data:any){
    this.IsRowEmpty.next(data);
  }
  getIsRowEmpty(){
    return  this.IsRowEmpty.asObservable();
  }
}
