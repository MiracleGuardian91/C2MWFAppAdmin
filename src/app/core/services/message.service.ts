import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MessageComponent } from '@app/shared/components/message/message.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
@Injectable({
    providedIn: 'root'
})
export class MessageService {
    constructor(private modalService: NgbModal) {

    }

	showMessage(type: MessageType, options: MessagePopup = {}) {
		options.header = options.header || type;
		if (options.isDelete)
			options.isConfirmation = true;
		options.cancelBtn = !!options.isConfirmation;

		const modalRef = this.modalService.open(MessageComponent, {backdrop: 'static', windowClass: 'Confirm_popup', size: options.isNewDesign?'dialog-centered newAlertPop':options.size?options.size:'lg'});
		const modalInstance: MessageComponent = modalRef.componentInstance;
		modalInstance.MessagePopup = modalRef;
		modalInstance.MessageHeader = options.header;
		modalInstance.Message = options.body;
		modalInstance.ButtonText = options.btnText;
		modalInstance.IsConfirmation = options.isConfirmation;
		modalInstance.isCancelabel = options.cancelBtn;
		modalInstance.CallBackMethod = options.callback;
		modalInstance.Caller = options.caller;
		modalInstance.ConfirmationText = options.checkboxText;
		modalInstance.IsDelete = options.isDelete;
		modalInstance.IsDefaultView = !options.isDelete;
		modalInstance.CancelButtonText = options.cancelBtnText || 'Cancel';
		modalInstance.AutoFocusOnConfirm = !!options.autoFocusOnConfirm;
		modalInstance.undoable = options.undoable;
		modalInstance.isNewDesign=options.isNewDesign ? options.isNewDesign :false
		return modalRef;
	}

	showComponent<C>(component: ComponentType<C>, bindings: Partial<Binding<C>> = {}, options: NgbModalOptions = {size:'lg', backdrop: true}) {
		
		const ref = this.modalService.open(component, options);
		const instance = ref.componentInstance;
		Object.keys(bindings).forEach(key => {
			if (typeof instance[key] !== 'function' && typeof bindings[key] === 'function') {
				instance[key] = bindings[key](instance[key]);
			} else {
				instance[key] = bindings[key];
			}
		});
		return ref;
	}

	dismissAll() {
		this.modalService.dismissAll();
	}
}

type Binding<C> = {
	[K in keyof C]: C[K] | ((original: C[K]) => C[K]);
}

interface MessagePopup {
    header?: string;
    body?: string;
		btnText?: string;
		cancelBtn?: boolean;
		checkboxText?: string;
		callback?: Function;
		caller?: any;
		data?: any;
		isDelete?: boolean;
		isConfirmation?: boolean;
		size?: 'lg' | 'sm';
		cancelBtnText?: string;
		autoFocusOnConfirm?: boolean;
		undoable?: boolean;
		isNewDesign?:true;
}

type MessageType =
| 'Success'
| 'Warning'
| 'Fail';

