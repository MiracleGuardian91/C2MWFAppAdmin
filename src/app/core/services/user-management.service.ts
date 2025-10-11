import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor() { }


  deleteUser(userName: string) {
    const apiEndpoint = 'api/DeleteUser';
    //return this.api.postUserDelete('user/icewebapi', userName, apiEndpoint);
  }
 

  // getUserColumns() {
  //   return this.api.post('user/getusercolumns', null);
  // }  
  getUserGridList(bodyData) {
    //const apiEndpoint = 'api/GetAllManageUserList';
    const apiEndpoint ='api/GetAllManageUserListByApikey';
    //return this.api.postC2M('user/icewebapi', apiEndpoint, bodyData);
  }

  // add by sanju for get all data for export 
  // GetExportData(bodyData) {
  //   const apiEndpoint = 'api/GetAllManageUserList';
  //   return this.api.GetExportData('user/icewebapi', apiEndpoint,  bodyData);
  // }
  validatePhone(event: any) {   
    var specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'Del', 'Delete'];
    if (specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    var val = event.target.value + event.key;
    const regex = '^[0-9+]*$';
    if (!val.match(regex)) {
      event.preventDefault();
    }
  }
}
