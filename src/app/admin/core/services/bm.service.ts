import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SimpleLoaderService } from '@app/shared/services/simple-loader.service';


@Injectable({
  providedIn: 'root'
})
export class BmService {

  constructor(
    private api: ApiService,
    private simpleLoader: SimpleLoaderService
  ) {}

  private withLoader<T>(url: string, request$: Observable<T>): Observable<T> {
    this.simpleLoader.show(url,true);
    return request$.pipe(finalize(() => this.simpleLoader.hide()));
  }

  getWFGrid(processName: string, bodyData: any) {
    const url = `wfapibm/DataModel/getbmgrid/${processName}`;
    return this.withLoader(url, this.api.postgateway('', url, bodyData));
  }
   
  generateXML1(processname: any, Version: any) {
    const url = `wfapibm/DataModel/SaveBmJsonNew/${processname}?Version=${Version}`;
    return this.withLoader(url, this.api.postgateway('', url, null));
  }

  generateXML(processname: any, Version: any) {
    const url = `wfapibm/DataModel/SaveBMJson/${processname}?Version=${Version}`;
    return this.withLoader(url, this.api.postgateway('', url, null));
  }

  UploadFile(formData: FormData, processName: any) {
    const url = `wfapibm/DataModel/Upload/BM?processName=${processName}`;
    return this.withLoader(url, this.api.UploadFileGateway(url, formData));
  }

  DownloadWFTemp(processName: any) {
    const url = `wfapibm/DataModel/DownloadTemplateBM?processName=${processName}`;
    return this.withLoader(url, this.api.postGetFile_Gateway(url, null, 'Blob'));
  }

  AddUpdateBM(form: any) {
    const url = `wfapibm/DataModel/updatedatamodel`;
    return this.withLoader(url, this.api.postgateway('', url, form));
  }

  ChangeBMStatus(bmids: any, Status: any) {
    const url = `wfapibm/DataModel/ChangeBMStatus/${bmids}/${Status}`;
    return this.withLoader(url, this.api.postgateway('', url, null));
  }

  ChangeBMMode(bmids: any, Mode: any) {
    const url = `wfapibm/DataModel/updateMode/${bmids}/${Mode}`;
    return this.withLoader(url, this.api.postgateway('', url, null));
  }

  DeleteBM(id: string) {
    const url = `wfapibm/DataModel/Delete/BM?bmId=${id}`;
    return this.withLoader(url, this.api.deleteViaGateway(url));
  }

  CreateBMVersion(bmId: any, timezone: any) {
    const url = `wfapibm/DataModel/CreateBMVersion/${bmId}/${timezone}`;
    return this.withLoader(url, this.api.postgateway('', url, null));
  }

  ExportBMData(bmId: string, timezone: any) {
    const url = `wfapibm/DataModel/ExportBMData?bmId=${bmId}&timezone=${timezone}`;
    return this.withLoader(url, this.api.postGetFile_Gateway(url, null, 'blob'));
  }

  getBMColumns() {
    return [
      { DisplayName: "Business Model Name", Name: "nam", IsAdd: "0" },
      { DisplayName: "Friendly Name", Name: "DISPNAME", IsAdd: "0" },
      { DisplayName: "Version", Name: "Ver", IsAdd: "0" },
      { DisplayName: "Status", Name: "LiveSTATUS", IsAdd: "0" },
      { DisplayName: "Date Added", Name: "crtdon", IsAdd: "0" },
      { DisplayName: "Date Modified", Name: "modfon", IsAdd: "0" }
    ];
  }

  ExportToExcel(processName: any, bmData: any, BMIds: any) {
    const url = `wfapibm/DataModel/ExportBMGrid?processname=${processName}&BMIds=${BMIds}`;
    return this.withLoader(url, this.api.postGetFile_Gateway(url, bmData, 'blob'));
  }

  GetBMService(bmid: any) {
    const url = `wfapibm/DataModel/GetBmog/${bmid}`;
    return this.withLoader(url, this.api.postgateway('', url, null));
  }

  GetBmAssociatedWf(bmId: any) {
    const url = `wfapibm/DataModel/GetBmAssociatedWf/${bmId}`;
    return this.withLoader(url, this.api.get_gateway(url));
  }

  SaveBMAssociatedWF(wfIds: any, bmId: any) {
    const url = `wfapibm/DataModel/SaveBMAssociatedWF/${wfIds}/${bmId}`;
    return this.withLoader(url, this.api.postgateway('', url, null));
  }

  GetBusinessModel(bmId: any) {
    const url = `wfapibm/DataModel/businessmodel?bmId=${bmId}`;
    return this.withLoader(url, this.api.get_gateway(url));
  }

  GetDataModelBM(processName: any, businessModel: any, Version: any) {
    const url = `wfapibm/DataModel/datamodelbm/${processName}/${businessModel}?version=${Version}`;
    return this.withLoader(url, this.api.get_gateway(url));
  }

  ImportJsonBM(processName: any, BMID: any, parsedData: any) {
    const url = `wfapibm/compare/ImportJsonBM?importBMID=${BMID}&processName=${processName}`;
    return this.withLoader(url, this.api.ImportBM(url, parsedData));
  }

  GenerateDMOGPROPS(BMID: any) {
    const url = `wfapibm/compare/GenerateDMOGPROPS?BMID=${BMID}`;
    return this.withLoader(url, this.api.ImportBM(url, ''));
  }

  GetBmData(ProcessName: any, BMID: any) {
    const url = `wfapibm/compare/GetBmRecords?processName=${ProcessName}&bmID=${BMID}`;
    return this.withLoader(url, this.api.ImportBM(url, null));
  }
}
