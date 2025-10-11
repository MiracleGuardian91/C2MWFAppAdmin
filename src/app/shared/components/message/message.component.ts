import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgIf, NgStyle, NgFor } from '@angular/common';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss'],
    standalone: true,
    imports: [NgIf, NgStyle, NgFor]
})
export class MessageComponent implements OnInit {

  IsDefaultView: boolean;
  MessagePopup: NgbModalRef;
  MessageHeader = 'Confirmation';
  Message: string;
  CallBackMethod: any;
  IsConfirmation: boolean;
  Caller: any;
  ButtonText: string;
  isCancelabel = true;
  IsDelete: boolean;
  ConfirmationText: string;
  CancelButtonText: string;
  AutoFocusOnConfirm: boolean;
  undoable: boolean;
  isNewDesign:boolean;

  constructor() {
    this.ButtonText = 'Ok';
  }

  ngOnInit() {
  }

  Continue() {
    if (this.CallBackMethod) {
      this.CallBackMethod(this.MessagePopup, this.Caller);
      this.MessagePopup.close(true);
    } else {
      this.MessagePopup.close(true);
    }
  }

  CloseErrorMsg() {
    this.MessagePopup.close(false);
  }

  // Function execute when user click on X button for close the popup.
  // And pass null value for not execute IF and ELSE statement.
  CloseFromTop() {
    this.MessagePopup.close(null);
  }
  setIsDefaultView() {
    this.IsDefaultView = !this.IsDefaultView;
    
  }

  splitText(text: string, keyword: string): string[] {
    return text.split(new RegExp(`(${keyword})`, 'g'));
  }

}
