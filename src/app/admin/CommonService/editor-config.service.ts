import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditorConfigService {

  readonly toolbarOptions: any = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // Text styles
      ['blockquote', 'code-block'],                     // Block styles
      [{ 'header': 1 }, { 'header': 2 }],                // Headers
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],     // Lists
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // Indent
      [{ 'script': 'sub' }, { 'script': 'super' }],      // Scripts
      [{ 'direction': 'rtl' }],                         // Text direction
      [{ 'size': ['small', false, 'large', 'huge'] }],   // Font sizes
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],         // More headers
      [{ 'color': [] }, { 'background': [] }],           // Colors
      [{ 'font': [] }],                                 // Font family
      [{ 'align': [] }],                                // Text alignment
      ['link'],                                       // Embeds -- 'image' , 'video'
      ['clean']                                          // Clear formatting
    ],
    placeholder: null
  };


  constructor() { }

   /** Get the toolbar configuration */
   getToolbarOptions(): any {
    return this.toolbarOptions;
  }
}
