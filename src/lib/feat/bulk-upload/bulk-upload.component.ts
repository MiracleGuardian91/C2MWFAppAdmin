import { NgIf } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ApplicationApiService } from '@lib/services';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-bulk-upload',
  templateUrl: './bulk-upload.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, NgbModalModule],
})
export class BulkUploadComponent {
  @Input() processName: string;
  @Input() viewLog = true;
  file: File | null = null;

  private readonly extension = '.xlsx';

  constructor(
    private readonly modalRef: NgbActiveModal,
    private readonly appApi: ApplicationApiService
  ) { }

  handleFileInput(files: FileList) {
    this.file = files.item(0);
  }

  upload(file: File, processName: string) {
    this.appApi
      .bulkUpload(file, processName)
      .subscribe((res) => this.modalRef.close(res));
  }

  downloadTemplate() {
    this.appApi
      .downloadBulkUploadTemplate(this.processName)
      .subscribe((res) => this.saveFile(res));
  }

  constructFileName(_res: HttpResponse<Blob>) {
    let appDispName: any;
    if (sessionStorage.getItem('DisplayName')) {
      appDispName = localStorage.getItem(
        this.processName + '~~~DownloadBulkTemp'
      );
      if (appDispName === undefined || appDispName === null)
        appDispName = sessionStorage.getItem('DisplayName');
    }
    const curDate = new Date();
    const fileName =
      appDispName.replace(' ', '_') +
      '_Template' +
      '_' +
      (curDate.getMonth() + 1).toString() +
      '_' +
      curDate.getDate() +
      '_' +
      curDate.getFullYear() +
      '_' +
      curDate.getHours() +
      '_' +
      curDate.getMinutes() +
      '_' +
      curDate.getSeconds() +
      this.extension;
    return fileName;
  }

  private saveFile(res: HttpResponse<Blob>) {
    const blob = res.body;
    const fileName = this.constructFileName(res);
    saveAs(blob, fileName);
  }

  viewBulkLogRecord() {
    window.open(`/process_control/${this.processName}/bulk-log`, '_blank');
  }

  close() {
    this.modalRef.close();
  }
}
