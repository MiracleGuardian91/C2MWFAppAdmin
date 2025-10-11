import { Pipe, PipeTransform } from '@angular/core';

const B = 1024;
const KB = B * B;
const MB = KB * B;
@Pipe({
    name: 'filesize',
    standalone: true
})
export class FileSizePipe implements PipeTransform {
  transform(value: string): string {
    const size = +value;
    if (size < B) return `${size} B`;
    if (size < KB) return `${(size / B).toFixed(2)} KB`;
    if (size < MB) return `${(size / KB).toFixed(2)} MB`;
  }
}