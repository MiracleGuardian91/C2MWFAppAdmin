import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { DropzoneDirective } from '../../directives/dropzone.directive';

@Component({
    selector: 'app-file-uploader',
    templateUrl: './file-uploader.component.html',
    styleUrls: ['./file-uploader.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgIf,
        DropzoneDirective,
        NgTemplateOutlet,
    ],
})
export class FileUploaderComponent {
  @Input() set allowedExtensions(extensions: string[]) {
    this.extensions = new Set(extensions);
  }
  @Input() uploading = false;
  @Input() multiple = false;
  @Input() disabled = false;
  @Output() files = new EventEmitter<File[]>();
  @Output() ignored = new EventEmitter<File[]>();

  private extensions: Set<string>;

  public isHovering: boolean;

  public toggleHover(event: boolean) {
    this.isHovering = event;
  }
  

  public onDrop(fileList: FileList) {
    if (!this.multiple && fileList.length > 1) {
      return;
    }
    const files = [];
    const ignored = [];
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList.item(i);
      const ext = file.name.split('.').pop();
      if (this.extensions && !this.extensions.has(ext)) {
        ignored.push(file);
      } else {
        files.push(file);
      }
    }
    if (files.length) this.files.emit(files);
    if (ignored.length) this.ignored.emit(ignored);
    
  }

}
