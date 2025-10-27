import {
  EditorConfigService
} from "./chunk-FKDZX6HV.js";
import {
  QuillEditorComponent,
  QuillModule,
  toFormGroup
} from "./chunk-BQKXR4UC.js";
import {
  WFService
} from "./chunk-U3QHRRQH.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgbActiveModal,
  ReactiveFormsModule,
  ToastrService,
  UntypedFormBuilder
} from "./chunk-L2L6ECIJ.js";
import {
  NgForOf,
  NgIf,
  SlicePipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZQT4GMOS.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/admin/wf/components/additional-permission/additional-permission.component.ts
function AdditionalPermissionComponent_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 9)(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const col_r1 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("width", col_r1.width);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(col_r1.displayName);
  }
}
function AdditionalPermissionComponent_tbody_11_tr_1_td_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 15)(1, "label", 16)(2, "input", 17);
    \u0275\u0275listener("change", function AdditionalPermissionComponent_tbody_11_tr_1_td_4_Template_input_change_2_listener() {
      \u0275\u0275restoreView(_r2);
      const i_r3 = \u0275\u0275nextContext().index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onSubmit(i_r3));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "i", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const col_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("formControlName", col_r5.objectKey);
  }
}
function AdditionalPermissionComponent_tbody_11_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 12)(1, "td")(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, AdditionalPermissionComponent_tbody_11_tr_1_td_4_Template, 4, 1, "td", 14);
    \u0275\u0275pipe(5, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r3.forms[i_r3]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.DISPNAME);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(5, 3, ctx_r3.columns, 1));
  }
}
function AdditionalPermissionComponent_tbody_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tbody");
    \u0275\u0275template(1, AdditionalPermissionComponent_tbody_11_tr_1_Template, 6, 6, "tr", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.dataSource);
  }
}
var AdditionalPermissionComponent = class _AdditionalPermissionComponent {
  constructor(activeModal, wfsrvc, toastr) {
    this.activeModal = activeModal;
    this.wfsrvc = wfsrvc;
    this.toastr = toastr;
    this.processName = sessionStorage.getItem("AppName");
    this.columns = [
      {
        objectKey: "DISPNAME",
        displayName: "Role",
        width: "17%"
      },
      {
        objectKey: "DELETEAPPLICATION",
        displayName: "Delete",
        width: "8%"
      },
      {
        objectKey: "BulkUploadPermission",
        displayName: "Bulk Upload",
        width: "11%"
      },
      {
        objectKey: "BulkUpdatePermission",
        displayName: "Bulk Update",
        width: "10%"
      },
      {
        objectKey: "BulkTriggerPermission",
        displayName: "Bulk Trigger",
        width: "10%"
      },
      {
        objectKey: "CopyRecordPermission",
        displayName: "Copy Record",
        width: "11%"
      },
      {
        objectKey: "NewEntryPermission",
        displayName: "New Entry",
        width: "10%"
        // },{
        //   objectKey: 'ExcelPermission',
        //   displayName: 'Excel',
        //   width: '8%'
        // },{
        //   objectKey: 'PDFPermission',
        //   displayName: 'PDF',
        //   width: '8%'
      },
      {
        objectKey: "NotesPermission",
        displayName: "Notes",
        width: "8%"
      },
      {
        objectKey: "NotificationPermission",
        displayName: "Notification",
        width: "10%"
      },
      {
        objectKey: "ActivityLogPermission",
        displayName: "Activity Log",
        width: "10%"
      },
      {
        objectKey: "ChangeLogPermission",
        displayName: "Change Log",
        width: "10%"
        // },{
        //   objectKey: 'InLnEditPermission',
        //   displayName: 'Inline Edit',
        //   width: '10%'
      },
      {
        objectKey: "ManageDDLPermission",
        displayName: "Manage DDL",
        width: "11%"
      }
    ];
  }
  ngOnInit() {
    this.GetAdditionalPermission();
  }
  GetAdditionalPermission() {
    this.wfsrvc.GetAdditionalPermission(this.processName).subscribe((data) => {
      this.dataSource = data;
      this.forms = data.map((item) => toFormGroup(item));
    }, (err) => {
      console.log(err);
    });
  }
  onSubmit(index) {
    let value = this.forms[index].value;
    const payload = __spreadProps(__spreadValues({}, value), {
      RoleName: value.DISPNAME,
      DelApp: value.DELETEAPPLICATION,
      InlineEditPermission: false
    });
    this.wfsrvc.AddUpdateAdditionalPermission(this.processName, payload).subscribe((res) => {
      if (res == "Success." || res?.message === "Success.") {
        this.forms[index].markAsPristine({ onlySelf: true });
      }
    }, (err) => {
      console.log(err);
    });
  }
  static {
    this.\u0275fac = function AdditionalPermissionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdditionalPermissionComponent)(\u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(WFService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdditionalPermissionComponent, selectors: [["app-additional-permission"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 2, consts: [[1, "modal-header"], [1, "modal-titlewf"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-times-circle", "fa-fw"], [1, "modal-body"], [1, "contents"], [1, "basicTable", "stripped", 2, "border-top", "0", "border-right", "0", "border-left", "0"], [3, "width", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "width"], [1, "colHead", 2, "padding-left", "0px"], [3, "formGroup", 4, "ngFor", "ngForOf"], [3, "formGroup"], ["name", "role"], ["style", "text-align: center;", 4, "ngFor", "ngForOf"], [2, "text-align", "center"], [1, "checkbox", "ml-2", "mt-1", 2, "width", "16px"], ["type", "checkbox", 3, "change", "formControlName"], [1, "skin"]], template: function AdditionalPermissionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1);
        \u0275\u0275text(2, "Additional Permission");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 2);
        \u0275\u0275listener("click", function AdditionalPermissionComponent_Template_button_click_3_listener() {
          return ctx.activeModal.close();
        });
        \u0275\u0275element(4, "span", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "table", 6)(8, "thead")(9, "tr");
        \u0275\u0275template(10, AdditionalPermissionComponent_th_10_Template, 3, 2, "th", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, AdditionalPermissionComponent_tbody_11_Template, 2, 1, "tbody", 8);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("ngForOf", ctx.columns);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.dataSource);
      }
    }, dependencies: [NgForOf, NgIf, ReactiveFormsModule, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, SlicePipe], styles: ['\n\n.modal-header[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n  padding: 24px 16px 0 34px;\n  display: flex;\n  justify-content: space-between;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-titlewf[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.72px;\n  line-height: 33px;\n}\nbutton.close[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n}\n.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.modal-body[_ngcontent-%COMP%]   .dmog-tooltip[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.drow[_ngcontent-%COMP%] {\n  clear: both;\n  padding: 1rem !important;\n}\n.dcolumns[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px;\n  vertical-align: top;\n  box-sizing: border-box;\n  width: 50%;\n}\n.tdcls[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.fontawasm[_ngcontent-%COMP%] {\n  color: #4c9e00;\n}\n.checkbox[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0px;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -webkit-tap-highlight-color: transparent;\n  height: 20px;\n  margin: 0px;\n  padding: 0px;\n  opacity: 0;\n  outline: none;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 20px;\n  z-index: 1;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked:not(:disabled)    + .skin[_ngcontent-%COMP%] {\n  background-color: #EB583B;\n  border-color: #EB583B;\n  border-radius: 2px;\n}\n.checkbox[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%], \n.radio[_ngcontent-%COMP%]   .skin[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  display: inline-block;\n  height: 16px;\n  left: 0;\n  position: absolute;\n  margin-right: 10px;\n  top: -2px;\n  width: 16px;\n  float: left;\n}\n.checkbox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.radio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 0;\n  margin-left: 30px;\n  position: relative;\n  top: 1px;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .skin[_ngcontent-%COMP%]:after {\n  height: 19px;\n  width: 19px;\n  background-color: transparent;\n  font-size: 14px;\n  text-align: center;\n  line-height: 14px;\n  color: #fff;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .skin[_ngcontent-%COMP%]:after {\n  content: "\\f00c";\n}\n.close[_ngcontent-%COMP%]:before, \n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .skin[_ngcontent-%COMP%]:after, \n.checkbox[_ngcontent-%COMP%]   input.indeterminate[_ngcontent-%COMP%]    + .skin[_ngcontent-%COMP%]:after {\n  font-family: "Font Awesome 5 Free" !important;\n  font-style: normal;\n  font-size: 12px;\n  font-weight: 900;\n  font-variant: normal;\n  height: 0.3em;\n  margin-right: 0px;\n  text-transform: none;\n  line-height: 1px;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: none;\n  position: absolute;\n  speak: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: middle;\n  width: 1.2em;\n  top: 8px;\n  left: 0px;\n}\n.checkbox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.radio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 0;\n  margin-left: 25px;\n  position: relative;\n  top: -6px;\n}\n/*# sourceMappingURL=additional-permission.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdditionalPermissionComponent, { className: "AdditionalPermissionComponent", filePath: "src\\app\\admin\\wf\\components\\additional-permission\\additional-permission.component.ts", lineNumber: 16 });
})();

// src/app/admin/wf/components/grid-config-static-col/grid-config-static-col.component.ts
function GridConfigStaticColComponent_ng_container_24_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "input", 17);
    \u0275\u0275listener("blur", function GridConfigStaticColComponent_ng_container_24_tr_1_Template_input_blur_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.CheckValidation());
    });
    \u0275\u0275twoWayListener("ngModelChange", function GridConfigStaticColComponent_ng_container_24_tr_1_Template_input_ngModelChange_5_listener($event) {
      const i_r3 = \u0275\u0275restoreView(_r1).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.gridColList[i_r3].DisplayName, $event) || (ctx_r1.gridColList[i_r3].DisplayName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 18)(7, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function GridConfigStaticColComponent_ng_container_24_tr_1_Template_input_ngModelChange_7_listener($event) {
      const i_r3 = \u0275\u0275restoreView(_r1).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.gridColList[i_r3].IsSelected, $event) || (ctx_r1.gridColList[i_r3].IsSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.gridColList[i_r3].ColName);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.gridColList[i_r3].DisplayName);
    \u0275\u0275property("value", ctx_r1.gridColList[i_r3].DisplayName);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.gridColList[i_r3].IsSelected);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.gridColList[i_r3].IsSelected);
    \u0275\u0275property("value", ctx_r1.gridColList[i_r3].IsSelected);
  }
}
function GridConfigStaticColComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, GridConfigStaticColComponent_ng_container_24_tr_1_Template, 8, 6, "tr", 15);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.gridColList);
  }
}
var GridConfigStaticColComponent = class _GridConfigStaticColComponent {
  constructor(formBuilder, activeModal, wfsrvc, toastr) {
    this.formBuilder = formBuilder;
    this.activeModal = activeModal;
    this.wfsrvc = wfsrvc;
    this.toastr = toastr;
    this.isRoleSubmit = false;
    this.isEdit = false;
    this.availableColList = [];
    this.gridColList = [];
    this.IsDisabled = true;
  }
  ngOnInit() {
    this.GetGridConfigStaticCol();
  }
  GetGridConfigStaticCol() {
    this.wfsrvc.GetGridConfigStaticCol(this.ProcessName).subscribe((res) => {
      if (!!res) {
        this.gridColList = [];
        this.gridColList = res;
      }
    }, (error) => {
      console.log(error);
      this.toastr.warning(error.error || "Unknown error");
    });
  }
  SaveGridConfigStaticCol() {
    this.wfsrvc.SaveGridConfigStaticCol(this.ProcessName, this.gridColList).subscribe((result) => {
      if (result === "Success" || result.message === "Success") {
        this.toastr.success("Saved successfully.");
      }
    }, (error) => {
      console.log(error);
    });
  }
  CheckValidation() {
    let arrEmpty = this.gridColList.filter((x) => x.DisplayName.trim() == "");
    if (arrEmpty.length > 0) {
      this.IsDisabled = true;
    } else {
      this.IsDisabled = false;
    }
    return this.IsDisabled;
  }
  static {
    this.\u0275fac = function GridConfigStaticColComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GridConfigStaticColComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(WFService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GridConfigStaticColComponent, selectors: [["app-grid-config-static-col"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 3, consts: [[1, "modal-header"], [1, "modal-titlewf"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-times-circle", "fa-fw"], [1, "modal-body"], [1, "contents"], [1, "form-group", "row"], [1, "col-sm-12"], [1, "basicTable", "stripped", 2, "border-top", "0", "border-right", "0", "border-left", "0"], [1, "span-row"], [1, "text-center", 2, "width", "80px"], [4, "ngIf"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [4, "ngFor", "ngForOf"], [2, "padding-left", "10px"], ["type", "text", 1, "form-control", 3, "blur", "ngModelChange", "ngModel", "value"], [1, "d-flex", "align-items-center", "justify-content-around"], ["type", "checkbox", 3, "ngModelChange", "checked", "ngModel", "value"]], template: function GridConfigStaticColComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "h4", 1);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275listener("click", function GridConfigStaticColComponent_Template_button_click_4_listener() {
          return ctx.activeModal.close(false);
        });
        \u0275\u0275element(5, "span", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "section")(11, "table", 8)(12, "thead")(13, "tr", 9)(14, "th")(15, "span");
        \u0275\u0275text(16, "Grid Columns");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "th")(18, "span");
        \u0275\u0275text(19, "Display Name");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "th", 10)(21, "span");
        \u0275\u0275text(22, "Actions");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "tbody");
        \u0275\u0275template(24, GridConfigStaticColComponent_ng_container_24_Template, 2, 1, "ng-container", 11);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(25, "div", 12)(26, "button", 13);
        \u0275\u0275listener("click", function GridConfigStaticColComponent_Template_button_click_26_listener() {
          return ctx.SaveGridConfigStaticCol();
        });
        \u0275\u0275text(27, "Save");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 14);
        \u0275\u0275listener("click", function GridConfigStaticColComponent_Template_button_click_28_listener() {
          return ctx.activeModal.close(false);
        });
        \u0275\u0275text(29, "Cancel");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("Grid Config Static Columns (", ctx.ProcessName, ")");
        \u0275\u0275advance(21);
        \u0275\u0275property("ngIf", ctx.gridColList);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.CheckValidation());
      }
    }, dependencies: [NgIf, NgForOf, ReactiveFormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, FormsModule, NgModel], styles: ['\n\n.modal-header[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n  padding: 24px 16px 0 15px;\n  display: flex;\n  justify-content: space-between;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-titlewf[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.72px;\n  line-height: 33px;\n}\nbutton.close[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n}\n.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.modal-body[_ngcontent-%COMP%]   .dmog-tooltip[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.modal-body[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  border-bottom: 1px solid black;\n  font-size: 14px;\n  color: black;\n  font-weight: bold;\n  letter-spacing: 0.7px;\n}\n.modal-body[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  float: right;\n  text-decoration: none;\n  color: black;\n}\n.modal-body[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   [class*=fa-][_ngcontent-%COMP%] {\n  -webkit-text-stroke: 0.4px white;\n  stroke: 0.4px white;\n  display: inline-block;\n  position: relative;\n  right: -4px;\n  top: 1px;\n  transform: scale(2.5, 1.7);\n  -webkit-transform: scale(2.5, 1.7);\n  transition: all 0.3s ease-out 0s;\n  -webkit-transition: all 0.3s ease-out 0s;\n}\n.modal-body[_ngcontent-%COMP%]   .heading.Hide[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   [class*=fa-][_ngcontent-%COMP%] {\n  transform: rotate(-180deg) scale(2.5, 1.7);\n  -webkit-transform: rotate(-180deg) scale(2.5, 1.7);\n  transition: all 0.3s ease-out 0s;\n  -webkit-transition: all 0.3s ease-out 0s;\n}\n.drow[_ngcontent-%COMP%] {\n  clear: both;\n  padding: 1rem !important;\n}\n.dcolumns[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px;\n  vertical-align: top;\n  box-sizing: border-box;\n  width: 50%;\n}\n.color-code-option[_ngcontent-%COMP%] {\n  height: 13px;\n  width: 13px;\n  border-radius: 13px;\n  margin: auto;\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 10px;\n  line-height: 22px;\n}\n.date-tz-picker[_ngcontent-%COMP%] {\n  display: flex;\n}\n.date-tz-picker[_ngcontent-%COMP%]   .date-picker[_ngcontent-%COMP%] {\n  width: 125px;\n}\n.date-tz-picker[_ngcontent-%COMP%]   .time-picker[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.date-tz-picker[_ngcontent-%COMP%]   .tz-picker[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%] {\n  border: 1px solid #4C9E00;\n  height: 24px;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label.is-invalid[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: -0.75rem;\n  color: #EA485B;\n  font-size: 11px;\n  font-weight: bold;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%]::after {\n  content: "Browse";\n  background-color: #4C9E00;\n  color: white;\n  height: 23px;\n  line-height: 8px;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0px;\n  list-style: none;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 2px 2px 2px 20px;\n  display: block;\n  overflow: auto;\n  position: relative;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  padding: 0px 3px;\n}\n.uploadList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.input-label[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n.dmo-tooltip[_ngcontent-%COMP%] {\n  color: #4C9E00 !important;\n  margin-left: 8px;\n  vertical-align: middle;\n  font-size: 14px;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin-top: 0.4rem;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0.46px;\n}\n.form-control[_ngcontent-%COMP%] {\n  height: 24px;\n  border-radius: 3px;\n  font-size: 12px;\n}\n.input-group[_ngcontent-%COMP%] {\n  align-items: center;\n  flex-wrap: nowrap;\n}\n.input-group[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  height: 24px;\n  display: flex;\n  outline: none;\n  box-shadow: none;\n}\n.input-group.is-invalid[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.input-group.is-invalid[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.input-group.is-invalid[_ngcontent-%COMP%]    ~ .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n.invalid-feedback1[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: bold;\n}\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-style: italic;\n}\n[_ngcontent-%COMP%]:-moz-placeholder {\n  font-style: italic;\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  font-style: italic;\n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  font-style: italic;\n}\n.mat-option[_ngcontent-%COMP%] {\n  color: #4D4D51 !important;\n  font-size: 13px !important;\n  line-height: 1.8 !important;\n  height: 20px !important;\n  padding-left: 5px !important;\n  font-family: "Museo Sans", "sans-serif" !important;\n  margin: 0px !important;\n}\n.cstmBrdr[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 1px solid #4C9E00;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 8px;\n  line-height: 12px;\n  vertical-align: text-top;\n}\ndp-date-picker[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  width: 100%;\n  padding: 0;\n  border: 0;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-picker-input {\n  height: 24px !important;\n  font-size: 12px !important;\n  width: 100% !important;\n  color: #495057 !important;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n  padding: 6px 12px !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-picker-input[disabled] {\n  background-color: #e9ecef;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container {\n  background-color: #f8f9fa !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container .dp-calendar-nav-left, \ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container .dp-calendar-nav-right {\n  color: #4c9e00 !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-nav-container .dp-current-location-btn {\n  background: #4c9e00;\n  border-color: #4c9e00;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-weekdays {\n  font-size: 80% !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-weekdays .dp-calendar-weekday {\n  color: #17a2b8 !important;\n  font-weight: 500 !important;\n  width: 1.6rem;\n  height: 1.6rem;\n  line-height: 2rem;\n  font-style: italic;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-day-calendar .dp-calendar-day {\n  width: 1.6rem;\n  height: 1.6rem;\n  border-radius: 0.25rem;\n}\ndp-date-picker[_ngcontent-%COMP%]  dp-month-calendar .dp-calendar-month {\n  width: 45px !important;\n  height: 45px !important;\n  border: none !important;\n  border-radius: 0.25rem !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-selected {\n  background: #4c9e00 !important;\n}\ndp-date-picker[_ngcontent-%COMP%]  .dp-current-day {\n  border-color: #4C9E00 !important;\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background-color: #e9ecef;\n  color: #495057;\n  opacity: 1;\n}\n.form-control[readonly][_ngcontent-%COMP%] {\n  background-color: white;\n  color: #495057;\n  opacity: 1;\n}\n.range-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.d-flex.input-group[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.textareaHeight[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  min-height: 50px;\n}\n.invalid-feedback1[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: bold;\n  letter-spacing: 0.3px;\n  color: rgba(234, 72, 91, 0.9294117647);\n}\n.update_detail[_ngcontent-%COMP%] {\n  padding: 40px 0 25px;\n  text-align: right;\n}\n.update_detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 150px;\n}\n.update_detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  border-color: #4C9E00;\n  background-color: #fff;\n  color: #4C9E00;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  height: auto !important;\n}\n.ng-select.form-control[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-select-container {\n  min-height: 22px;\n  min-width: 100px;\n  height: 22px;\n  border-radius: 3px;\n  border: none;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-select-container .ng-input {\n  top: 0 !important;\n}\n.ng-select[_ngcontent-%COMP%]  .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n  height: 22px;\n  padding: 2px 12px;\n}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]  .ng-select-container {\n  height: 100%;\n}\n.ng-select.ng-select-disabled[_ngcontent-%COMP%]    >   .ng-select-container {\n  background-color: #e9ecef !important;\n}\n.input-label[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n.drag_grid.state-filter-wrap[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  border-bottom: 0px !important;\n}\n.drag_grid[_ngcontent-%COMP%] {\n  border: 1px solid #C3BBB1;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:first-child {\n  border-bottom: 1px solid #C3BBB1;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%] {\n  border-left: 1px solid #dfdfdf;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: bottom;\n  text-align: left;\n  width: 50%;\n  padding: 20px 15px;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .wfMainGSearch[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .wfMainGSearch[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  overflow: hidden;\n  max-width: 600px;\n  margin: auto;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .wfMainGSearch[_ngcontent-%COMP%]   .globalSearchWrap[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .wfMainGSearch[_ngcontent-%COMP%]   .globalSearchWrap[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%] {\n  width: auto;\n  height: 205px;\n  overflow: auto;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-right: 5px;\n  margin: 0px;\n  padding-left: 0px;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  border-bottom: 2px solid #dfdfdf;\n  cursor: default;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child, \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0px;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: left;\n  height: 26px;\n  font-size: 13px;\n  color: #4d4d4d;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .left_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child, \n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .right_cell[_ngcontent-%COMP%]   .scroll_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  width: 50px;\n  text-align: right;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child   .left_cell[_ngcontent-%COMP%] {\n  padding: 15px 15px !important;\n}\n.drag_grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child   .right_cell[_ngcontent-%COMP%] {\n  padding: 15px 15px !important;\n}\n.selectFilter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -webkit-appearance: radio;\n  width: auto;\n}\n.radio-container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  height: 12px;\n  width: 12px;\n  border: 1px solid #EB583B;\n}\n.radio-container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  background: #EB583B;\n  border: 0.5px solid #EB583B;\n  width: 8px;\n  height: 8px;\n}\ntable.basicTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  color: #fff;\n  font-size: 10px;\n  letter-spacing: 0.3px;\n  line-height: 1.9;\n  background-color: #EB583B;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.modal-footer[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\n  color: white;\n  display: flex;\n  width: 140px;\n  height: 40px;\n  padding: 8px 0px 9px 0px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  border-radius: 8px;\n}\n.modal-footer[_ngcontent-%COMP%]   button[type=button][_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 8px;\n  border: 1px solid #CCC;\n  background: #F6F6F6;\n  display: flex;\n  color: #000;\n  width: 130px;\n  height: 40px;\n  padding: 4px 65px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\ntable.basicTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-left: none;\n}\ntable.basicTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  color: #000000;\n  font-size: 10px;\n  letter-spacing: 0.3px;\n  line-height: 1.9;\n  background-color: #FFFFFF;\n}\ntable[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked {\n  accent-color: #EB583B;\n}\n/*# sourceMappingURL=grid-config-static-col.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GridConfigStaticColComponent, { className: "GridConfigStaticColComponent", filePath: "src\\app\\admin\\wf\\components\\grid-config-static-col\\grid-config-static-col.component.ts", lineNumber: 15 });
})();

// src/app/admin/wf/wfemailtemplate/components/wf-email-template/wf-email-template.component.ts
var _c0 = (a0) => ({ toolbar: a0 });
function WfEmailTemplateComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span");
    \u0275\u0275text(2, "This field is required");
    \u0275\u0275elementEnd()();
  }
}
var WfEmailTemplateComponent = class _WfEmailTemplateComponent {
  constructor(formBuilder, activeModal, wfsrvc, editorConfigService) {
    this.formBuilder = formBuilder;
    this.activeModal = activeModal;
    this.wfsrvc = wfsrvc;
    this.editorConfigService = editorConfigService;
    this.EmailDescription = "";
    this.Submitted = false;
  }
  ngOnInit() {
    this.GetWFEmailTemplate();
    this.editorConfig = this.editorConfigService.getToolbarOptions();
  }
  AddEmailTemplate() {
    this.Submitted = true;
    if (this.EmailDescription !== "" && this.EmailDescription != void 0) {
      this.Submitted = false;
      const bodyData = {
        wfId: this.WFId,
        WorkflowName: this.WFName,
        Version: this.Version,
        EmailTemplate: this.EmailDescription
      };
      this.wfsrvc.SaveWFEmailTemplate(bodyData).subscribe((result) => {
        if (!!result && result === "Data saved successfully.") {
          this.activeModal.close(true);
          this.Submitted = false;
          return true;
        }
      }, (error) => {
        console.log(error);
      });
    } else {
      this.Submitted = true;
      return;
    }
  }
  GetWFEmailTemplate() {
    this.wfsrvc.GetWFEmailTemplate(this.WFId).subscribe((res) => {
      if (!!res) {
        this.EmailDescription = res?.EmailTemplate || "";
      }
    }, (error) => {
      console.log(error);
    });
  }
  static {
    this.\u0275fac = function WfEmailTemplateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WfEmailTemplateComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(WFService), \u0275\u0275directiveInject(EditorConfigService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WfEmailTemplateComponent, selectors: [["app-wf-email-template"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 7, consts: [[1, "modal-header"], [1, "modal-titlewf"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-times-circle", "fa-fw"], [1, "modal-body"], [1, "contents"], [1, "form-group", "row"], [1, "col-sm-12"], ["for", "ex2", 1, "input-label"], [1, "Ql-container"], ["name", "EmailDescription", 1, "Ql-InsideContainer", 3, "ngModelChange", "modules", "ngModel"], ["class", "invalid-feedback1", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "invalid-feedback1"]], template: function WfEmailTemplateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "h4", 1);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275listener("click", function WfEmailTemplateComponent_Template_button_click_4_listener() {
          return ctx.activeModal.close(false);
        });
        \u0275\u0275element(5, "span", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "label", 8);
        \u0275\u0275text(11, "Add Email Template*");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9)(13, "quill-editor", 10);
        \u0275\u0275twoWayListener("ngModelChange", function WfEmailTemplateComponent_Template_quill_editor_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.EmailDescription, $event) || (ctx.EmailDescription = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(14, WfEmailTemplateComponent_div_14_Template, 3, 0, "div", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 12)(16, "button", 13);
        \u0275\u0275listener("click", function WfEmailTemplateComponent_Template_button_click_16_listener() {
          return ctx.activeModal.close(false);
        });
        \u0275\u0275text(17, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 14);
        \u0275\u0275listener("click", function WfEmailTemplateComponent_Template_button_click_18_listener() {
          return ctx.AddEmailTemplate();
        });
        \u0275\u0275text(19, " Save ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" Workflow Email Template (", ctx.WFName, " ", ctx.Version, ") ");
        \u0275\u0275advance(10);
        \u0275\u0275property("modules", \u0275\u0275pureFunction1(5, _c0, ctx.editorConfig.toolbar));
        \u0275\u0275twoWayProperty("ngModel", ctx.EmailDescription);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.Submitted && (ctx.EmailDescription === "" || ctx.EmailDescription === void 0));
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, QuillModule, QuillEditorComponent, NgIf], styles: ['\n\n.modal-header[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n  padding: 24px 16px 0 15px;\n  display: flex;\n  justify-content: space-between;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-titlewf[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.72px;\n  line-height: 33px;\n}\nbutton.close[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n}\n.modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.modal-body[_ngcontent-%COMP%]   .dmog-tooltip[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.modal-body[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  border-bottom: 1px solid black;\n  font-size: 14px;\n  color: black;\n  font-weight: bold;\n  letter-spacing: 0.7px;\n}\n.modal-body[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  float: right;\n  text-decoration: none;\n  color: black;\n}\n.modal-body[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   [class*=fa-][_ngcontent-%COMP%] {\n  -webkit-text-stroke: 0.4px white;\n  stroke: 0.4px white;\n  display: inline-block;\n  position: relative;\n  right: -4px;\n  top: 1px;\n  transform: scale(2.5, 1.7);\n  -webkit-transform: scale(2.5, 1.7);\n  transition: all 0.3s ease-out 0s;\n  -webkit-transition: all 0.3s ease-out 0s;\n}\n.modal-body[_ngcontent-%COMP%]   .heading.Hide[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   [class*=fa-][_ngcontent-%COMP%] {\n  transform: rotate(-180deg) scale(2.5, 1.7);\n  -webkit-transform: rotate(-180deg) scale(2.5, 1.7);\n  transition: all 0.3s ease-out 0s;\n  -webkit-transition: all 0.3s ease-out 0s;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%] {\n  border: 1px solid #4C9E00;\n  height: 24px;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label.is-invalid[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: -0.75rem;\n  color: #EA485B;\n  font-size: 11px;\n  font-weight: bold;\n}\n.custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%]::after {\n  content: "Browse";\n  background-color: #4C9E00;\n  color: white;\n  height: 23px;\n  line-height: 8px;\n}\n.invalid-feedback1[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: bold;\n  color: #EA485B;\n}\nlabel[_ngcontent-%COMP%] {\n  color: #4D4D51;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.modal-footer[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\n  color: white;\n  display: flex;\n  width: 140px;\n  height: 40px;\n  padding: 8px 0px 9px 0px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  border-radius: 8px;\n}\n.modal-footer[_ngcontent-%COMP%]   button[type=button][_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 8px;\n  border: 1px solid #CCC;\n  background: #F6F6F6;\n  display: flex;\n  width: 130px;\n  height: 40px;\n  padding: 4px 65px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=wf-email-template.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WfEmailTemplateComponent, { className: "WfEmailTemplateComponent", filePath: "src\\app\\admin\\wf\\wfemailtemplate\\components\\wf-email-template\\wf-email-template.component.ts", lineNumber: 21 });
})();

export {
  AdditionalPermissionComponent,
  WfEmailTemplateComponent,
  GridConfigStaticColComponent
};
//# sourceMappingURL=chunk-OS2A2RL6.js.map
