import { EventEmitter, Injectable, Output } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { GridPermissions } from '@app/admin/models';


@Injectable({
  providedIn: 'root'
})
export class ListviewService {

  notesShowData = [];
  constructor(
    private api: ApiService,
  ) { }
  @Output() callData: EventEmitter<any> = new EventEmitter();

  getChildProcessData(ChildProcessName: any){
    this.callData.emit(ChildProcessName);
  }

  GridConfig(objGridData) {
    const { ProcessName, GridGuid, ViewName } = objGridData;
    return this.api.get(`listview/gridConfig?processName=${ProcessName}&gridGuid=${GridGuid}&viewName=${encodeURIComponent(ViewName)}`);
  }

  GridData(userData: any, isWF = true) {
      return this.api.post('listview/getprocessdata', userData);
  }
  GetProcessDataCount(userData: any) {    
      return this.api.post('listview/getProcessDataCount', userData);    
  }
//Changes Based on Parent Transaction ID #1038
  DMOData(ProcessName: string, dmoName: string,ParentTransactionId: string = null) {
    return this.api.get('listview/getDmoFilterData/' + ProcessName + '/' + dmoName + '?parentTransactionID=' + ParentTransactionId );
  }

  sendGridConfig(gridData: any) {
    return this.api.post(`listview/gridConfig`, gridData);
  }

  GridConfigMaster(objGridData) {
    const { ProcessName, GridGuid, ViewName } = objGridData;
    return this.api.get_gateway(`wfapibm/DataModel/gridMasterConfig?processName=${ProcessName}&gridGuid=${GridGuid}&viewName=${encodeURIComponent(ViewName)}`);
  }

  sendMasterGridConfig(gridData: any) {
    return this.api.postgateway('',`wfapibm/DataModel/SaveMasterGridConfig`, gridData);
  }

  stateList(processData) {
    return this.api.get('listview/getState/' + processData);
  }

  stageList(processData) {
    return this.api.get('application/applicationwfstages' + "?processName=" + processData + "&timeZone=" + "0");
  }

  dmoList(processData) {
    //return this.api.get(`wfapibm/listview/getDmo/` + processData);
    return this.api.get_gateway(`wfapibm/DataModel/getDmo/` + processData);
  }
dmoListOrderByDMO(processData,CanvasType?:any) {
    if(CanvasType === null || CanvasType === undefined) {
      CanvasType = 'AdminView';
    }
    return this.api.get_gateway(`wfapibm/DataModel/getDmo/${processData}?isSortByDMO=true&CanvasType=${CanvasType}`);
  }
//Change for customer master sap data sending
  deleteGridData(id: string){  
      return this.api.deleteGrid('application/deleteTransaction?TransactionIDs=' + id);      
  }
  ExportToExcel(userData: any) {
     if(userData.ProcessName == 'announcement'){
      return this.api.postGetFile(`listview/ExportToExlAnncmntData`, userData, 'blob');
     }
     else{
      return this.api.postGetFile(`listview/exportToExcel`, userData, 'blob');
     }
  }
  ExportToPDF(userData: any) {   
      return this.api.postGetFile(`listview/ExportToPDF`, userData, 'blob');
  }
  ExportFileWithEndPointURL(userData: any, url) {
    return this.api.postGetFileWithEndPoint(url, userData, 'blob');
  }
  deleteGridConfigData(configData){
    return this.api.deleteGrid(`listview/deleteGridConfig` + "?processName=" + configData.ProcessName + "&gridGuid=" + configData.GridGuid + "&viewName=" + configData.ViewName);
  }
  GetDataFromIceAPI(url: string, resultType: any) {
    return this.api.GetDataFromIceAPI(url, resultType);
  }
  userActionPermission(processName?: string): Observable<GridPermissions> {
    if (processName !== undefined && processName !== null && processName !== '') {
      return this.api.get('listview/GetUserActionPermission', { ProcessName: processName });
    } else {
      return this.api.get('listview/GetUserActionPermission');
    }
  }
  // listview/exportToExcel

  noteMessage(id){
    return this.api.get(`application/comment/` + null + '/' + null + "?transactionId=" + id)
  }
  sendNoteMessage(message){
    return this.api.post(`application/postcomment`, message);
  }

  userList(userData){
    return this.api.get(`formview/getUsername` + "?processName=" + userData.processname + "&searchText=" + userData.searchtext);
  }
  UploadFile(formData: FormData) {
    return this.api.UploadFile('application/bulkUploadnew', formData);
  }
   uploadFiles(url: string, formData: FormData) {
    return this.api.post(url , formData);
  }

  downloadFile(downloadRequiredata) {
    return this.api.postGetFile(`application/downloadFileDiscussionBoard?transctionID=` + downloadRequiredata.transactionid + '&fileID='
     + downloadRequiredata.fileid, downloadRequiredata, 'blob');
  }
  UpdateCell(applicationObj){
    return this.api.post(`application/updateapplication`, applicationObj);
  }
  getProcess() {
    return this.api.get('application/processList');
  }

  getAllQuickMind(processname) {
    return this.api.get('quickmind/getallqmind' + '?processName=' + processname);
  }

  deleteQuickmind(processName , id) {
    return this.api.delete('quickmind/deleteqmind', '?processName=' + processName + '&qminds=' + id);
  } 
 
}
