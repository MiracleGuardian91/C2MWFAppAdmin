import {
  GridExportComponent,
  WorkflowBmAssociationComponent
} from "./chunk-C5NFJAYY.js";
import {
  CompanyAssociationComponent
} from "./chunk-NIXK6VWY.js";
import {
  GenericGridComponent,
  QuillModule
} from "./chunk-BQKXR4UC.js";
import {
  AutocompleteLibModule,
  DpDatePickerModule,
  ImageCropperModule,
  MentionModule
} from "./chunk-FRU5HPWK.js";
import {
  CdkDrag,
  CdkDropList
} from "./chunk-WACMUXJB.js";
import {
  ApplicationService
} from "./chunk-43FCU5DY.js";
import {
  FormsModule,
  NgSelectModule,
  NgbModule,
  ReactiveFormsModule,
  ToastrModule,
  animate,
  environment,
  state,
  style,
  transition,
  trigger
} from "./chunk-L2L6ECIJ.js";
import {
  ActivatedRoute,
  CommonModule,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  RouterModule,
  Subject,
  filter,
  fromEvent,
  isPlatformBrowser,
  map,
  merge,
  mergeMap,
  pairwise,
  setClassMetadata,
  share,
  take,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-ZQT4GMOS.js";
import {
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/core/models/log-header-mapping.ts
var LogHeaderMapping = class {
  constructor() {
    this.activityHeaderMap = {
      config: {
        header: {
          columns: [
            {
              objectKey: "Date_Time",
              displayName: "Date & Time",
              dataType: "Date",
              format: environment.Setting.dateTimeFormatNoSeconds,
              timeZone: (/* @__PURE__ */ new Date()).getTimezoneOffset().toString(),
              width: "15%"
            },
            {
              objectKey: "Modified_By",
              displayName: "Modified By",
              width: "15%"
            },
            {
              objectKey: "Role",
              displayName: "Role",
              width: "30%"
            },
            {
              objectKey: "Previous_Stage",
              displayName: "Previous Stage",
              width: "15%"
            },
            {
              objectKey: "Current_Stage",
              displayName: "Current Stage",
              width: "15%"
            },
            {
              objectKey: "Previous_State",
              displayName: "Previous State",
              width: "15%"
            },
            {
              objectKey: "Current_State",
              displayName: "Current State",
              width: "15%"
            },
            {
              objectKey: "Action",
              displayName: "Action",
              width: "15%"
            }
          ],
          action: false
        },
        paging: true
      }
    };
    this.historyHeaderMap = {
      config: {
        header: {
          columns: [
            // {
            //     objectKey: 'Date_Time',
            //     displayName: 'Date & Time',
            //     dataType: 'Date',
            //     format: 'MM/dd/yyyy h:mm a',
            //     timeZone: localStorage.currentUser ? JSON.parse(localStorage.currentUser).TimeZone.toString() : ''
            // }, {
            //     objectKey: 'Modified_By',
            //     displayName: 'Modified By',
            // }, {
            //     objectKey: 'IP_Address',
            //     displayName: 'IP Address',
            // }, {
            //     objectKey: 'Field_Modified',
            //     displayName: 'Field Modified',
            // }, {
            //     objectKey: 'Previous_Value',
            //     displayName: 'Previous Value',
            // }, {
            //     objectKey: 'New_Value',
            //     displayName: 'New Value',
            // }
          ],
          action: false
        },
        paging: true
      }
    };
    this.notificationHeaderMap = {
      config: {
        header: {
          columns: [
            {
              objectKey: "Date_Time",
              displayName: "Date & Time",
              dataType: "Date",
              format: environment.Setting.dateTimeFormatNoSeconds,
              timeZone: (/* @__PURE__ */ new Date()).getTimezoneOffset().toString()
            },
            {
              objectKey: "Mail_To",
              displayName: "Mail To"
            },
            {
              objectKey: "Mail_CC",
              displayName: "Mail CC"
            },
            {
              objectKey: "Subject",
              displayName: "Subject"
            },
            {
              objectKey: "Attachment",
              displayName: "Attachment"
            },
            {
              objectKey: "Status",
              displayName: "Status"
            },
            // {
            //     objectKey: 'Mail_Body',
            //     displayName: 'Mail Body',
            // }, 
            {
              objectKey: "Mail_From",
              displayName: "Mail From"
            },
            {
              objectKey: "Stage",
              displayName: "Stage"
            },
            {
              objectKey: "State",
              displayName: "State"
            },
            {
              objectKey: "Trigger_Name",
              displayName: "Trigger Name"
            }
          ],
          action: {
            Placement: "Mail_Body",
            Link: {
              Action: {}
            },
            DropDown: false
          }
        },
        paging: true
      }
    };
  }
};

// src/app/admin/data-modeler1/services1/service-provider.service.ts
var ServiceProviderService = class _ServiceProviderService {
  constructor() {
    this.BmogSubject = new Subject();
    this.BmoSubject = new Subject();
    this.NewlyBmogSubject = new Subject();
    this.DmoStatesSubject = new Subject();
    this.HideContextMenu = new Subject();
    this.DeleteDmoSubject = new Subject();
    this.MoveDmoSubject = new Subject();
    this.reloadParentSubject = new Subject();
    this.UpdateDmogSettingSubject = new Subject();
    this.UpdateDmogStyleSettingSubject = new Subject();
    this.CloseSidebarNav = new Subject();
    this.UpdatedContainerWidth = new Subject();
    this.UpdatedColumnData = new Subject();
    this.OpenSidebarNav = new Subject();
    this.IsRowEmpty = new Subject();
  }
  setreloadParent(data) {
    this.reloadParentSubject.next(data);
  }
  getreloadParent() {
    return this.reloadParentSubject.asObservable();
  }
  setBmog(data) {
    this.BmogSubject.next(data);
  }
  getBmog() {
    return this.BmogSubject.asObservable();
  }
  setBmo(data) {
    this.BmoSubject.next(data);
  }
  getBmo() {
    return this.BmoSubject.asObservable();
  }
  setNewlyBmog(data) {
    this.NewlyBmogSubject.next(data);
  }
  getNewlyBmog() {
    return this.NewlyBmogSubject.asObservable();
  }
  setHideContextMenu(data) {
    this.HideContextMenu.next(data);
  }
  getHideContextMenu() {
    return this.HideContextMenu.asObservable();
  }
  setDmoStates(data) {
    this.DmoStatesSubject.next(data);
  }
  getDmoStates() {
    return this.DmoStatesSubject.asObservable();
  }
  setDeleteDmo(data) {
    this.DeleteDmoSubject.next(data);
  }
  getDeleteDmo() {
    return this.DeleteDmoSubject.asObservable();
  }
  setMoveDmo(data) {
    this.MoveDmoSubject.next(data);
  }
  getMoveDmo() {
    return this.MoveDmoSubject.asObservable();
  }
  setUpdateDmogSettings(data) {
    this.UpdateDmogSettingSubject.next(data);
  }
  getUpdateDmogSettings() {
    return this.UpdateDmogSettingSubject.asObservable();
  }
  setUpdateDmogStyleSettings(data) {
    this.UpdateDmogStyleSettingSubject.next(data);
  }
  getUpdateDmogStyleSettings() {
    return this.UpdateDmogStyleSettingSubject.asObservable();
  }
  setSidebarclose(data) {
    this.CloseSidebarNav.next(data);
  }
  getSidebarclose() {
    return this.CloseSidebarNav.asObservable();
  }
  setUpdatedContainerWidth(data) {
    this.UpdatedContainerWidth.next(data);
  }
  geUpdatedContainerWidth() {
    return this.UpdatedContainerWidth.asObservable();
  }
  setUpdatedColumnData(data) {
    this.UpdatedColumnData.next(data);
  }
  geUpdatedColumnData() {
    return this.UpdatedColumnData.asObservable();
  }
  setOpenSidebarNav(data) {
    this.OpenSidebarNav.next(data);
  }
  getOpenSidebarNav() {
    return this.OpenSidebarNav.asObservable();
  }
  setIsRowEmpty(data) {
    this.IsRowEmpty.next(data);
  }
  getIsRowEmpty() {
    return this.IsRowEmpty.asObservable();
  }
  static {
    this.\u0275fac = function ServiceProviderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ServiceProviderService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ServiceProviderService, factory: _ServiceProviderService.\u0275fac, providedIn: "root" });
  }
};

// src/app/admin/Shared/tab/tab.component.ts
var _c0 = ["*"];
var TabComponent = class _TabComponent {
  // @Input() trnsctnId: any;
  // @Input() ChildProcessName: string;
  // @Input() ParentDmoValue: any;
  // @Input() ChildDmoGuid: any;
  // @Input() ProcessType: any;
  constructor(el, dataProvider) {
    this.el = el;
    this.dataProvider = dataProvider;
    this.active = false;
    this.hasInvalidForm = false;
    this.bmodisplay = true;
    this.disabled = false;
    this.enableActions = false;
    this.shared = false;
    this.showActions = false;
    this.isBMO = false;
    this.isNewDesign = false;
    this.isView = false;
    this.isSection = false;
    this.showPlucIcon = false;
  }
  ngOnInit() {
    if (this.isBMO && this.active) {
      this.dataProvider.setBmo(this.data);
    }
  }
  static {
    this.\u0275fac = function TabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TabComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ServiceProviderService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TabComponent, selectors: [["app-tab"]], inputs: { data: "data", title: "title", active: "active", hasInvalidForm: "hasInvalidForm", bmodisplay: "bmodisplay", disabled: "disabled", enableActions: "enableActions", shared: "shared", isBMO: "isBMO", isNewDesign: "isNewDesign", isView: "isView", isSection: "isSection", showPlucIcon: "showPlucIcon" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "pane", 3, "hidden"]], template: function TabComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("hidden", !ctx.active);
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TabComponent, { className: "TabComponent", filePath: "src\\app\\admin\\Shared\\tab\\tab.component.ts", lineNumber: 10 });
})();

// src/app/admin/Shared/tabs/tabs.component.ts
var _c02 = ["*"];
function TabsComponent_div_0_ng_container_1_li_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275listener("click", function TabsComponent_div_0_ng_container_1_li_2_span_2_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const tab_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTabEdit(tab_r4));
    });
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275elementEnd();
  }
}
function TabsComponent_div_0_ng_container_1_li_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275listener("click", function TabsComponent_div_0_ng_container_1_li_2_span_3_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const tab_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTabRemove(tab_r4));
    });
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275elementEnd();
  }
}
function TabsComponent_div_0_ng_container_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 7);
    \u0275\u0275listener("mouseenter", function TabsComponent_div_0_ng_container_1_li_2_Template_li_mouseenter_0_listener() {
      const tab_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(tab_r4.showActions = true);
    })("mouseleave", function TabsComponent_div_0_ng_container_1_li_2_Template_li_mouseleave_0_listener() {
      const tab_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(tab_r4.showActions = false);
    });
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275template(2, TabsComponent_div_0_ng_container_1_li_2_span_2_Template, 2, 0, "span", 9)(3, TabsComponent_div_0_ng_container_1_li_2_span_3_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 11);
    \u0275\u0275listener("click", function TabsComponent_div_0_ng_container_1_li_2_Template_a_click_4_listener() {
      const tab_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.selectTab(tab_r4);
      return \u0275\u0275resetView(ctx_r1.onTabClick(tab_r4));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", tab_r4.active)("form-invalid", tab_r4.hasInvalidForm);
    \u0275\u0275property("hidden", !tab_r4.bmodisplay);
    \u0275\u0275advance();
    \u0275\u0275classProp("open", (ctx_r1.editable || ctx_r1.deletable) && tab_r4.showActions && !tab_r4.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deletable);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", tab_r4 == null ? null : tab_r4.title, " ");
  }
}
function TabsComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ul", 5);
    \u0275\u0275listener("cdkDropListDropped", function TabsComponent_div_0_ng_container_1_Template_ul_cdkDropListDropped_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDropped($event));
    });
    \u0275\u0275template(2, TabsComponent_div_0_ng_container_1_li_2_Template, 6, 10, "li", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.tabs);
  }
}
function TabsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275template(1, TabsComponent_div_0_ng_container_1_Template, 3, 1, "ng-container", 4);
    \u0275\u0275projection(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tabs.length > 0);
  }
}
function TabsComponent_div_1_div_1_div_2_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275elementEnd();
  }
}
function TabsComponent_div_1_div_1_div_2_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275listener("click", function TabsComponent_div_1_div_1_div_2_div_1_span_7_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const tab_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTabEdit(tab_r9));
    });
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275elementEnd();
  }
}
function TabsComponent_div_1_div_1_div_2_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275listener("click", function TabsComponent_div_1_div_1_div_2_div_1_span_8_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const tab_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTabRemove(tab_r9));
    });
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275elementEnd();
  }
}
function TabsComponent_div_1_div_1_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "a", 11);
    \u0275\u0275listener("click", function TabsComponent_div_1_div_1_div_2_div_1_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r10);
      const tab_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.selectTab(tab_r9);
      return \u0275\u0275resetView(ctx_r1.onTabClick(tab_r9));
    });
    \u0275\u0275template(3, TabsComponent_div_1_div_1_div_2_div_1_span_3_Template, 2, 0, "span", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 24)(6, "div", 8);
    \u0275\u0275template(7, TabsComponent_div_1_div_1_div_2_div_1_span_7_Template, 2, 0, "span", 9)(8, TabsComponent_div_1_div_1_div_2_div_1_span_8_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tab_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", tab_r9.shared);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r9 == null ? null : tab_r9.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("open", (ctx_r1.editable || ctx_r1.deletable) && tab_r9.showActions && !tab_r9.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deletable);
  }
}
function TabsComponent_div_1_div_1_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 11);
    \u0275\u0275listener("click", function TabsComponent_div_1_div_1_div_2_div_2_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const tab_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.selectTab(tab_r9);
      return \u0275\u0275resetView(ctx_r1.onTabClick(tab_r9));
    });
    \u0275\u0275element(2, "i", 27);
    \u0275\u0275elementEnd()();
  }
}
function TabsComponent_div_1_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("mouseenter", function TabsComponent_div_1_div_1_div_2_Template_div_mouseenter_0_listener() {
      const tab_r9 = \u0275\u0275restoreView(_r8).$implicit;
      return \u0275\u0275resetView(tab_r9.showActions = true);
    })("mouseleave", function TabsComponent_div_1_div_1_div_2_Template_div_mouseleave_0_listener() {
      const tab_r9 = \u0275\u0275restoreView(_r8).$implicit;
      return \u0275\u0275resetView(tab_r9.showActions = false);
    });
    \u0275\u0275template(1, TabsComponent_div_1_div_1_div_2_div_1_Template, 9, 6, "div", 20)(2, TabsComponent_div_1_div_1_div_2_div_2_Template, 3, 0, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r9 = ctx.$implicit;
    \u0275\u0275classProp("active", tab_r9.active)("form-invalid", tab_r9.hasInvalidForm);
    \u0275\u0275property("hidden", !tab_r9.bmodisplay);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !tab_r9.showPlucIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r9.showPlucIcon);
  }
}
function TabsComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 17);
    \u0275\u0275listener("cdkDropListDropped", function TabsComponent_div_1_div_1_Template_div_cdkDropListDropped_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDropped($event));
    });
    \u0275\u0275template(2, TabsComponent_div_1_div_1_div_2_Template, 3, 7, "div", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.tabs);
  }
}
function TabsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, TabsComponent_div_1_div_1_Template, 3, 1, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tabs.length > 0);
  }
}
function TabsComponent_div_2_div_1_div_2_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275listener("click", function TabsComponent_div_2_div_1_div_2_div_1_span_6_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const tab_r16 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTabEdit(tab_r16));
    });
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275elementEnd();
  }
}
function TabsComponent_div_2_div_1_div_2_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275listener("click", function TabsComponent_div_2_div_1_div_2_div_1_span_7_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const tab_r16 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTabRemove(tab_r16));
    });
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275elementEnd();
  }
}
function TabsComponent_div_2_div_1_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 32)(2, "a", 11);
    \u0275\u0275listener("click", function TabsComponent_div_2_div_1_div_2_div_1_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r17);
      const tab_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.selectTab(tab_r16);
      return \u0275\u0275resetView(ctx_r1.onTabClick(tab_r16));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 24)(5, "div", 8);
    \u0275\u0275template(6, TabsComponent_div_2_div_1_div_2_div_1_span_6_Template, 2, 0, "span", 9)(7, TabsComponent_div_2_div_1_div_2_div_1_span_7_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tab_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", tab_r16 == null ? null : tab_r16.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("open", (ctx_r1.editable || ctx_r1.deletable) && tab_r16.showActions && !tab_r16.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editable);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deletable);
  }
}
function TabsComponent_div_2_div_1_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 11);
    \u0275\u0275listener("click", function TabsComponent_div_2_div_1_div_2_div_2_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r20);
      const tab_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.selectTab(tab_r16);
      return \u0275\u0275resetView(ctx_r1.onTabClick(tab_r16));
    });
    \u0275\u0275element(2, "i", 27);
    \u0275\u0275elementEnd()();
  }
}
function TabsComponent_div_2_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("mouseenter", function TabsComponent_div_2_div_1_div_2_Template_div_mouseenter_0_listener() {
      const tab_r16 = \u0275\u0275restoreView(_r15).$implicit;
      return \u0275\u0275resetView(tab_r16.showActions = true);
    })("mouseleave", function TabsComponent_div_2_div_1_div_2_Template_div_mouseleave_0_listener() {
      const tab_r16 = \u0275\u0275restoreView(_r15).$implicit;
      return \u0275\u0275resetView(tab_r16.showActions = false);
    });
    \u0275\u0275template(1, TabsComponent_div_2_div_1_div_2_div_1_Template, 8, 5, "div", 20)(2, TabsComponent_div_2_div_1_div_2_div_2_Template, 3, 0, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r16 = ctx.$implicit;
    \u0275\u0275classProp("active", tab_r16.active)("form-invalid", tab_r16.hasInvalidForm);
    \u0275\u0275property("hidden", !tab_r16.bmodisplay);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !tab_r16.showPlucIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r16.showPlucIcon);
  }
}
function TabsComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 17);
    \u0275\u0275listener("cdkDropListDropped", function TabsComponent_div_2_div_1_Template_div_cdkDropListDropped_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDropped($event));
    });
    \u0275\u0275template(2, TabsComponent_div_2_div_1_div_2_Template, 3, 7, "div", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.tabs);
  }
}
function TabsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, TabsComponent_div_2_div_1_Template, 3, 1, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tabs.length > 0);
  }
}
var TabsComponent = class _TabsComponent {
  set actions(actions) {
    this.deletable = actions.delete;
    this.editable = actions.edit;
  }
  constructor(route, applicationService, el, dataProvider) {
    this.route = route;
    this.applicationService = applicationService;
    this.el = el;
    this.dataProvider = dataProvider;
    this.deletable = false;
    this.editable = false;
    this.enableActions = false;
    this.confirmSwitchTab = false;
    this.isNewDesign = false;
    this.isView = false;
    this.isSection = false;
    this.confirmed$ = new Subject();
    this.tabSelected = new EventEmitter();
    this.tabClicked = new EventEmitter();
    this.tabEdit = new EventEmitter();
    this.tabRemove = new EventEmitter();
    this.dropped = new EventEmitter();
    this.showIcon = false;
    this.logHeaderMapping = new LogHeaderMapping();
    this.unsubscribe = [];
  }
  ngOnInit() {
    const checkValidationSub = this.applicationService.checkValidation.subscribe((isCheck) => {
      if (isCheck) {
        setTimeout(() => {
          this.makeValidate();
        });
      }
    });
    this.unsubscribe.push(checkValidationSub);
  }
  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
  // contentChildren are set
  ngAfterContentInit() {
    setTimeout(() => {
      const activeTabs = this.tabs.filter((tab) => tab.active);
      if (activeTabs.length === 0) {
        this.selectTab(this.tabs.first);
      }
    });
  }
  makeValidate() {
    const allTabs = this.el.nativeElement.querySelectorAll("app-tab");
    if (this.tabs) {
      const tabCmp = this.tabs.toArray();
      for (let index = 0; index < allTabs.length; index++) {
        const invalidElement = allTabs[index].querySelector(".invalid-feedback");
        if (invalidElement) {
          tabCmp[index].hasInvalidForm = true;
        } else {
          tabCmp[index].hasInvalidForm = false;
        }
      }
    }
  }
  onDropped(e) {
    this.dropped.emit({ from: e.previousIndex, to: e.currentIndex });
  }
  onTabClick(tab) {
    this.tabClicked.emit(tab);
  }
  onTabEdit(tab) {
    this.tabEdit.emit(tab);
  }
  onTabRemove(tab) {
    this.tabRemove.emit(tab);
  }
  selectTab(tab) {
    if (tab?.disabled)
      return;
    if (this.confirmSwitchTab) {
      const confirmSubr = this.confirmed$.subscribe((isConfirmed) => {
        if (isConfirmed) {
          this.tabs.toArray().forEach((tabItem) => tabItem.active = false);
          this.getLogData(tab.title);
          tab.active = true;
        }
      });
      this.unsubscribe.push(confirmSubr);
    } else {
      this.tabs.toArray().forEach((tabItem) => tabItem.active = false);
      if (!!tab && !!tab.title) {
        this.getLogData(tab.title);
        tab.active = true;
      }
    }
    if (!!tab && !!tab.title) {
      this.tabSelected.emit(tab);
    }
  }
  getLogData(title, trnsctnId, ProcessType, ChildProcessName) {
    this.unsubscribe.push(this.route.paramMap.subscribe((params) => {
      if (title) {
        return;
      }
    }));
  }
  OpenAddPopup(bm) {
    if (bm) {
    }
  }
  static {
    this.\u0275fac = function TabsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TabsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ApplicationService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ServiceProviderService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TabsComponent, selectors: [["app-tabs"]], contentQueries: function TabsComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, TabComponent, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tabs = _t);
      }
    }, inputs: { actions: "actions", enableActions: "enableActions", confirmSwitchTab: "confirmSwitchTab", isNewDesign: "isNewDesign", isView: "isView", isSection: "isSection", confirmed$: "confirmed$" }, outputs: { tabSelected: "tabSelected", tabClicked: "tabClicked", tabEdit: "tabEdit", tabRemove: "tabRemove", dropped: "dropped" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c02, decls: 3, vars: 3, consts: [["class", "tabs", 4, "ngIf"], ["class", "tab-inner", 4, "ngIf"], ["class", "tab-inner-section", 4, "ngIf"], [1, "tabs"], [4, "ngIf"], ["cdkdra", "", "cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "nav", "nav-tabs", "tab-link", 3, "cdkDropListDropped"], ["style", "min-width: 50px;", "cdkDrag", "", 3, "hidden", "active", "form-invalid", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 2, "min-width", "50px", 3, "mouseenter", "mouseleave", "hidden"], [1, "actions"], ["class", "edit", 3, "click", 4, "ngIf"], ["class", "remove", 3, "click", 4, "ngIf"], [3, "click"], [1, "edit", 3, "click"], [1, "fas", "fa-pencil-alt"], [1, "remove", 3, "click"], [1, "far", "fa-trash-alt"], [1, "tab-inner"], ["cdkdra", "", "cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "center-plex", 3, "cdkDropListDropped"], ["class", "tab active tab-hover", "cdkDrag", "", 3, "hidden", "active", "form-invalid", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "tab", "active", "tab-hover", 3, "mouseenter", "mouseleave", "hidden"], ["class", "tab-content", 4, "ngIf"], ["class", "add-tab-view", 4, "ngIf"], [1, "tab-content"], [1, "title-head-view"], [1, "tab-acction"], [1, "fas", "fa-link"], [1, "add-tab-view"], [1, "fa", "fa-plus"], [1, "tab-inner-section"], ["class", "section active", "style", "min-width: 50px;", "cdkDrag", "", 3, "hidden", "active", "form-invalid", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "section", "active", 2, "min-width", "50px", 3, "mouseenter", "mouseleave", "hidden"], ["class", "add-tab-section", 4, "ngIf"], [1, "title-head-sec"], [1, "fas", "fa-unlink"], [1, "add-tab-section"]], template: function TabsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, TabsComponent_div_0_Template, 3, 1, "div", 0)(1, TabsComponent_div_1_Template, 2, 1, "div", 1)(2, TabsComponent_div_2_Template, 2, 1, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.isNewDesign);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isNewDesign && ctx.isView);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isNewDesign && ctx.isSection);
      }
    }, dependencies: [NgIf, CdkDropList, NgForOf, CdkDrag], styles: ['\n\n.tabs[_ngcontent-%COMP%]   ul.tab-link[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e1ddd8;\n}\n.tabs[_ngcontent-%COMP%]   ul.tab-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 8px;\n  padding-bottom: 2px;\n  position: relative;\n}\n.tabs[_ngcontent-%COMP%]   ul.tab-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(51, 51, 51, 0.7);\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  line-height: 19px;\n  text-transform: capitalize;\n  margin-left: 4px;\n  margin-right: 4px;\n}\n.tabs[_ngcontent-%COMP%]   ul.tab-link[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  border-bottom: 5px solid #EB583B;\n}\n.tabs[_ngcontent-%COMP%]   ul.tab-link[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #EB583B;\n  font-weight: bold;\n}\n.tabs[_ngcontent-%COMP%]   ul.tab-link[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:hover {\n  border-bottom: 5px solid #EB583B;\n}\n.tabs[_ngcontent-%COMP%]   ul.tab-link[_ngcontent-%COMP%]   li.form-invalid[_ngcontent-%COMP%] {\n  border-bottom: 4px solid #ea485b;\n}\n.tabs[_ngcontent-%COMP%]   ul.tab-link[_ngcontent-%COMP%]   li.form-invalid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #EB583B;\n  font-weight: bold;\n}\n.tabs[_ngcontent-%COMP%]   ul.tab-link[_ngcontent-%COMP%]   li.form-invalid[_ngcontent-%COMP%]:hover {\n  border-bottom: 4px solid #EB583B;\n}\n.tabs[_ngcontent-%COMP%]   ul.tab-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.tabs[_ngcontent-%COMP%]   ul.tab-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  background: none;\n  border: none !important;\n}\n.actions[_ngcontent-%COMP%] {\n  position: relative;\n  right: 0;\n  left: 10px;\n  top: 4px;\n  align-items: flex-end;\n  font-size: 12px;\n  display: flex;\n  gap: 3px;\n  overflow: hidden;\n  width: 0;\n  background-color: transparent;\n  transition: transform 0.2s ease-in-out, width 0.2s ease-in-out;\n  transform-origin: right;\n}\n.actions[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.actions.open[_ngcontent-%COMP%] {\n  width: 27px;\n}\n.actions[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%] {\n  color: rgb(0, 89, 150);\n}\n.actions[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%] {\n  color: rgb(0, 89, 150);\n}\n.actions[_ngcontent-%COMP%]   .fa-pencil[_ngcontent-%COMP%] {\n  color: black;\n  background: transparent;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  min-width: 100px !important;\n  background-color: white;\n  list-style: none;\n  display: flex;\n  align-items: center;\n  color: rgba(54, 66, 79, 0.7);\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  line-height: 19px;\n  text-transform: capitalize;\n  box-sizing: border-box;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-preview.active[_ngcontent-%COMP%] {\n  border-bottom: 5px solid #71ad1a;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\nul.cdk-drop-list-dragging[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: space-between;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n}\n.tab-container[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 2px solid #ddd;\n  padding-bottom: 5px;\n  overflow-x: auto;\n  margin-top: 58px;\n}\n.tab[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 8px 15px 5px 13px;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n  border: 1px solid #ddd;\n  margin-right: 5px;\n  cursor: pointer;\n  white-space: nowrap;\n  border-radius: 5px 5px 0px 0px;\n  background: rgba(51, 51, 51, 0.05);\n}\n.tab.active[_ngcontent-%COMP%] {\n  background: #fdecea;\n  border-bottom: 5px solid #EB583B;\n  color: #EB583B !important;\n  text-align: center;\n  font-family: "Museo Sans";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 20px;\n  letter-spacing: 0.7px;\n}\n.tab.active[_ngcontent-%COMP%]   .title-head-view[_ngcontent-%COMP%] {\n  color: #EB583B !important;\n}\n.add-tab[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  background: #f8f8f8;\n  cursor: pointer;\n}\n.add-tab-section[_ngcontent-%COMP%] {\n  height: 38px;\n  width: 38px;\n  padding: 10px 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #ddd;\n  border-radius: 5px 5px 0px 0px;\n  background: #f8f8f8;\n  cursor: pointer;\n}\n.section-container[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 15px;\n  border-bottom: 2px solid #ddd;\n  padding-bottom: 5px;\n  overflow-x: auto;\n}\n.section[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 10px;\n  color: #555;\n  display: flex;\n  padding: 8px 8px 0px 8px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 4px;\n}\n.section.active[_ngcontent-%COMP%] {\n  border-bottom: 5px solid #005996;\n  text-align: center;\n  font-family: "Museo Sans";\n  font-style: normal;\n  line-height: 22.4px;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0.7px;\n}\n.section.active[_ngcontent-%COMP%]   .title-head-sec[_ngcontent-%COMP%] {\n  color: #005996 !important;\n}\n.center-plex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.tab-content[_ngcontent-%COMP%] {\n  display: flex;\n}\n.title-head-sec[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: "Roboto";\n  font-style: normal;\n  line-height: 22.4px;\n  color: rgba(51, 51, 51, 0.7);\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0.7px;\n}\n.title-head-view[_ngcontent-%COMP%] {\n  color: rgba(51, 51, 51, 0.7019607843);\n  text-align: center;\n  font-family: "Roboto";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 20px;\n}\n.tab-inner[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(51, 51, 51, 0.2);\n}\n.tab-inner-section[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(51, 51, 51, 0.1);\n}\n.tab-hover[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: rgba(219, 219, 219, 0.7);\n}\n/*# sourceMappingURL=tabs.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TabsComponent, { className: "TabsComponent", filePath: "src\\app\\admin\\Shared\\tabs\\tabs.component.ts", lineNumber: 30 });
})();

// src/app/admin/Shared/accordion-item/accordion-item.component.ts
var _c03 = [[["", 8, "accordion-item-header"]], [["", 8, "accordion-item-content"]]];
var _c1 = [".accordion-item-header", ".accordion-item-content"];
var _c2 = (a0, a1, a2) => ({ "accordion-item--isOpen": a0, "accordion-item--isClose": a1, "accordion-item--isInvalidForm": a2 });
var AccordionItemComponent = class _AccordionItemComponent {
  get isOpen() {
    return this.isOpened;
  }
  set isOpen(value) {
    this.isOpened = value;
    this.state = this.isOpened ? "isOpen" : "isClose";
  }
  constructor(el, applicationService) {
    this.el = el;
    this.applicationService = applicationService;
    this.state = "isClose";
    this.hasInvalidForm = false;
    this.Toggle = new EventEmitter();
  }
  ngOnInit() {
    this.checkValidationSub = this.applicationService.checkValidation.subscribe((isCheck) => {
      if (isCheck) {
        setTimeout(() => {
          this.makeValidate();
        });
      }
    });
  }
  ngOnDestroy() {
    this.checkValidationSub.unsubscribe();
  }
  makeValidate() {
    const invalidElement = this.el.nativeElement.querySelector(".invalid-feedback");
    if (invalidElement) {
      this.hasInvalidForm = true;
    } else {
      this.hasInvalidForm = false;
    }
  }
  onClickHeader() {
    this.isOpen = this.isOpen ? false : true;
    this.Toggle.emit(this.isOpen);
  }
  static {
    this.\u0275fac = function AccordionItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccordionItemComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ApplicationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccordionItemComponent, selectors: [["app-accordion-item"]], inputs: { isOpen: "isOpen", title: "title" }, outputs: { Toggle: "Toggle" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c1, decls: 7, vars: 8, consts: [[1, "accordion-item", 3, "ngClass"], [1, "accordion-item__header", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-chevron-down", 3, "ngClass"], [1, "accordion-item__content"]], template: function AccordionItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c03);
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275listener("click", function AccordionItemComponent_Template_div_click_1_listener() {
          return ctx.onClickHeader();
        });
        \u0275\u0275projection(2);
        \u0275\u0275text(3);
        \u0275\u0275element(4, "i", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275projection(6, 1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(4, _c2, ctx.state == "isOpen", ctx.state == "isClose", ctx.hasInvalidForm === true));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.title, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.state == "isOpen" ? "up" : "down");
        \u0275\u0275advance();
        \u0275\u0275property("@accordionItemContentAnimation", ctx.state);
      }
    }, dependencies: [NgClass], styles: ["\n\n.accordion-item[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.accordion-item__header[_ngcontent-%COMP%] {\n  padding: 12px 4px 4px 8px;\n  cursor: pointer;\n  border-bottom: 1px solid black;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.accordion-item__header[_ngcontent-%COMP%]   i.fa-chevron-down.down[_ngcontent-%COMP%] {\n  font-size: 12px;\n  top: 1px;\n  left: -4px;\n  display: inline-block;\n  position: relative;\n  -webkit-text-stroke: 0.4px white;\n  stroke: 0.4px white;\n  transform: scale(2.5, 1.7);\n  -webkit-transform: scale(2.5, 1.7);\n  transition: all 0.3s ease-out 0s;\n  -webkit-transition: all 0.3s ease-out 0s;\n}\n.accordion-item__header[_ngcontent-%COMP%]   i.fa-chevron-down.up[_ngcontent-%COMP%] {\n  font-size: 12px;\n  top: -1px;\n  left: -2px;\n  display: inline-block;\n  position: relative;\n  -webkit-text-stroke: 0.4px white;\n  stroke: 0.4px white;\n  transform: rotate(180deg) scale(2.5, 1.7);\n  -webkit-transform: rotate(180deg) scale(2.5, 1.7);\n  transition: all 0.3s ease-out 0s;\n  -webkit-transition: all 0.3s ease-out 0s;\n}\n.accordion-item__content[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.accordion-item--isInvalidForm[_ngcontent-%COMP%]   .accordion-item__header[_ngcontent-%COMP%] {\n  border-bottom-color: #EA485B;\n}\n.accordion-item--isInvalidForm[_ngcontent-%COMP%]   .accordion-item__header[_ngcontent-%COMP%]  .accordion-item-header {\n  color: #EA485B;\n}\n.accordion-item--isInvalidForm[_ngcontent-%COMP%]   .accordion-item__header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #EA485B;\n}\n/*# sourceMappingURL=accordion-item.component.css.map */"], data: { animation: [
      trigger("accordionItemContentAnimation", [
        state("isOpen", style({ height: "*", overflow: "visible" })),
        state("isClose", style({ height: 0, overflow: "hidden" })),
        transition("isClose => *", [animate(".5s", style({ height: "*", overflow: "hidden" }))]),
        transition("* => isClose", [
          animate("0s", style({ height: "*", overflow: "hidden" })),
          animate(".5s", style({ height: 0, overflow: "hidden" }))
        ])
      ])
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccordionItemComponent, { className: "AccordionItemComponent", filePath: "src\\app\\admin\\Shared\\accordion-item\\accordion-item.component.ts", lineNumber: 24 });
})();

// src/app/admin/Shared/accordion/accordion.component.ts
var _c04 = ["*"];
var AccordionComponent = class _AccordionComponent {
  constructor() {
  }
  ngAfterContentInit() {
    this.items.toArray().forEach((item) => {
      item.Toggle.subscribe(() => {
        this.itemToggleHandler(item);
      });
    });
  }
  itemToggleHandler(item) {
  }
  static {
    this.\u0275fac = function AccordionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccordionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccordionComponent, selectors: [["app-accordion"]], contentQueries: function AccordionComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, AccordionItemComponent, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.items = _t);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c04, decls: 2, vars: 0, consts: [[1, "accordion"]], template: function AccordionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccordionComponent, { className: "AccordionComponent", filePath: "src\\app\\admin\\Shared\\accordion\\accordion.component.ts", lineNumber: 11 });
})();

// node_modules/angular-resizable-element/fesm2020/angular-resizable-element.mjs
var IS_TOUCH_DEVICE = (() => {
  if (typeof window === "undefined") {
    return false;
  } else {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }
})();
function deepCloneNode(node) {
  const clone = node.cloneNode(true);
  const descendantsWithId = clone.querySelectorAll("[id]");
  const nodeName = node.nodeName.toLowerCase();
  clone.removeAttribute("id");
  descendantsWithId.forEach((descendant) => {
    descendant.removeAttribute("id");
  });
  if (nodeName === "canvas") {
    transferCanvasData(node, clone);
  } else if (nodeName === "input" || nodeName === "select" || nodeName === "textarea") {
    transferInputData(node, clone);
  }
  transferData("canvas", node, clone, transferCanvasData);
  transferData("input, textarea, select", node, clone, transferInputData);
  return clone;
}
function transferData(selector, node, clone, callback) {
  const descendantElements = node.querySelectorAll(selector);
  if (descendantElements.length) {
    const cloneElements = clone.querySelectorAll(selector);
    for (let i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
}
var cloneUniqueId = 0;
function transferInputData(source, clone) {
  if (clone.type !== "file") {
    clone.value = source.value;
  }
  if (clone.type === "radio" && clone.name) {
    clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
  }
}
function transferCanvasData(source, clone) {
  const context = clone.getContext("2d");
  if (context) {
    try {
      context.drawImage(source, 0, 0);
    } catch {
    }
  }
}
function getNewBoundingRectangle(startingRect, edges, clientX, clientY) {
  const newBoundingRect = {
    top: startingRect.top,
    bottom: startingRect.bottom,
    left: startingRect.left,
    right: startingRect.right
  };
  if (edges.top) {
    newBoundingRect.top += clientY;
  }
  if (edges.bottom) {
    newBoundingRect.bottom += clientY;
  }
  if (edges.left) {
    newBoundingRect.left += clientX;
  }
  if (edges.right) {
    newBoundingRect.right += clientX;
  }
  newBoundingRect.height = newBoundingRect.bottom - newBoundingRect.top;
  newBoundingRect.width = newBoundingRect.right - newBoundingRect.left;
  return newBoundingRect;
}
function getElementRect(element, ghostElementPositioning) {
  let translateX = 0;
  let translateY = 0;
  const style2 = element.nativeElement.style;
  const transformProperties = ["transform", "-ms-transform", "-moz-transform", "-o-transform"];
  const transform = transformProperties.map((property) => style2[property]).find((value) => !!value);
  if (transform && transform.includes("translate")) {
    translateX = transform.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/, "$1");
    translateY = transform.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/, "$2");
  }
  if (ghostElementPositioning === "absolute") {
    return {
      height: element.nativeElement.offsetHeight,
      width: element.nativeElement.offsetWidth,
      top: element.nativeElement.offsetTop - translateY,
      bottom: element.nativeElement.offsetHeight + element.nativeElement.offsetTop - translateY,
      left: element.nativeElement.offsetLeft - translateX,
      right: element.nativeElement.offsetWidth + element.nativeElement.offsetLeft - translateX
    };
  } else {
    const boundingRect = element.nativeElement.getBoundingClientRect();
    return {
      height: boundingRect.height,
      width: boundingRect.width,
      top: boundingRect.top - translateY,
      bottom: boundingRect.bottom - translateY,
      left: boundingRect.left - translateX,
      right: boundingRect.right - translateX,
      scrollTop: element.nativeElement.scrollTop,
      scrollLeft: element.nativeElement.scrollLeft
    };
  }
}
var DEFAULT_RESIZE_CURSORS = Object.freeze({
  topLeft: "nw-resize",
  topRight: "ne-resize",
  bottomLeft: "sw-resize",
  bottomRight: "se-resize",
  leftOrRight: "col-resize",
  topOrBottom: "row-resize"
});
function getResizeCursor(edges, cursors) {
  if (edges.left && edges.top) {
    return cursors.topLeft;
  } else if (edges.right && edges.top) {
    return cursors.topRight;
  } else if (edges.left && edges.bottom) {
    return cursors.bottomLeft;
  } else if (edges.right && edges.bottom) {
    return cursors.bottomRight;
  } else if (edges.left || edges.right) {
    return cursors.leftOrRight;
  } else if (edges.top || edges.bottom) {
    return cursors.topOrBottom;
  } else {
    return "";
  }
}
function getEdgesDiff({
  edges,
  initialRectangle,
  newRectangle
}) {
  const edgesDiff = {};
  Object.keys(edges).forEach((edge) => {
    edgesDiff[edge] = (newRectangle[edge] || 0) - (initialRectangle[edge] || 0);
  });
  return edgesDiff;
}
var RESIZE_ACTIVE_CLASS = "resize-active";
var RESIZE_GHOST_ELEMENT_CLASS = "resize-ghost-element";
var MOUSE_MOVE_THROTTLE_MS = 50;
var ResizableDirective = class {
  /**
   * @hidden
   */
  constructor(platformId, renderer, elm, zone) {
    this.platformId = platformId;
    this.renderer = renderer;
    this.elm = elm;
    this.zone = zone;
    this.enableGhostResize = false;
    this.resizeSnapGrid = {};
    this.resizeCursors = DEFAULT_RESIZE_CURSORS;
    this.ghostElementPositioning = "fixed";
    this.allowNegativeResizes = false;
    this.mouseMoveThrottleMS = MOUSE_MOVE_THROTTLE_MS;
    this.resizeStart = new EventEmitter();
    this.resizing = new EventEmitter();
    this.resizeEnd = new EventEmitter();
    this.mouseup = new Subject();
    this.mousedown = new Subject();
    this.mousemove = new Subject();
    this.destroy$ = new Subject();
    this.pointerEventListeners = PointerEventListeners.getInstance(renderer, zone);
  }
  /**
   * @hidden
   */
  ngOnInit() {
    const mousedown$ = merge(this.pointerEventListeners.pointerDown, this.mousedown);
    const mousemove$ = merge(this.pointerEventListeners.pointerMove, this.mousemove).pipe(tap(({
      event
    }) => {
      if (currentResize) {
        try {
          event.preventDefault();
        } catch (e) {
        }
      }
    }), share());
    const mouseup$ = merge(this.pointerEventListeners.pointerUp, this.mouseup);
    let currentResize;
    const removeGhostElement = () => {
      if (currentResize && currentResize.clonedNode) {
        this.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);
        this.renderer.setStyle(this.elm.nativeElement, "visibility", "inherit");
      }
    };
    const getResizeCursors = () => {
      return __spreadValues(__spreadValues({}, DEFAULT_RESIZE_CURSORS), this.resizeCursors);
    };
    const mousedrag = mousedown$.pipe(mergeMap((startCoords) => {
      function getDiff(moveCoords) {
        return {
          clientX: moveCoords.clientX - startCoords.clientX,
          clientY: moveCoords.clientY - startCoords.clientY
        };
      }
      const getSnapGrid = () => {
        const snapGrid = {
          x: 1,
          y: 1
        };
        if (currentResize) {
          if (this.resizeSnapGrid.left && currentResize.edges.left) {
            snapGrid.x = +this.resizeSnapGrid.left;
          } else if (this.resizeSnapGrid.right && currentResize.edges.right) {
            snapGrid.x = +this.resizeSnapGrid.right;
          }
          if (this.resizeSnapGrid.top && currentResize.edges.top) {
            snapGrid.y = +this.resizeSnapGrid.top;
          } else if (this.resizeSnapGrid.bottom && currentResize.edges.bottom) {
            snapGrid.y = +this.resizeSnapGrid.bottom;
          }
        }
        return snapGrid;
      };
      function getGrid(coords, snapGrid) {
        return {
          x: Math.ceil(coords.clientX / snapGrid.x),
          y: Math.ceil(coords.clientY / snapGrid.y)
        };
      }
      return merge(mousemove$.pipe(take(1)).pipe(map((coords) => [, coords])), mousemove$.pipe(pairwise())).pipe(map(([previousCoords, newCoords]) => {
        return [previousCoords ? getDiff(previousCoords) : previousCoords, getDiff(newCoords)];
      })).pipe(filter(([previousCoords, newCoords]) => {
        if (!previousCoords) {
          return true;
        }
        const snapGrid = getSnapGrid();
        const previousGrid = getGrid(previousCoords, snapGrid);
        const newGrid = getGrid(newCoords, snapGrid);
        return previousGrid.x !== newGrid.x || previousGrid.y !== newGrid.y;
      })).pipe(map(([, newCoords]) => {
        const snapGrid = getSnapGrid();
        return {
          clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
          clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
        };
      })).pipe(takeUntil(merge(mouseup$, mousedown$)));
    })).pipe(filter(() => !!currentResize));
    mousedrag.pipe(map(({
      clientX,
      clientY
    }) => {
      return getNewBoundingRectangle(currentResize.startingRect, currentResize.edges, clientX, clientY);
    })).pipe(filter((newBoundingRect) => {
      return this.allowNegativeResizes || !!(newBoundingRect.height && newBoundingRect.width && newBoundingRect.height > 0 && newBoundingRect.width > 0);
    })).pipe(filter((newBoundingRect) => {
      return this.validateResize ? this.validateResize({
        rectangle: newBoundingRect,
        edges: getEdgesDiff({
          edges: currentResize.edges,
          initialRectangle: currentResize.startingRect,
          newRectangle: newBoundingRect
        })
      }) : true;
    }), takeUntil(this.destroy$)).subscribe((newBoundingRect) => {
      if (currentResize && currentResize.clonedNode) {
        this.renderer.setStyle(currentResize.clonedNode, "height", `${newBoundingRect.height}px`);
        this.renderer.setStyle(currentResize.clonedNode, "width", `${newBoundingRect.width}px`);
        this.renderer.setStyle(currentResize.clonedNode, "top", `${newBoundingRect.top}px`);
        this.renderer.setStyle(currentResize.clonedNode, "left", `${newBoundingRect.left}px`);
      }
      if (this.resizing.observers.length > 0) {
        this.zone.run(() => {
          this.resizing.emit({
            edges: getEdgesDiff({
              edges: currentResize.edges,
              initialRectangle: currentResize.startingRect,
              newRectangle: newBoundingRect
            }),
            rectangle: newBoundingRect
          });
        });
      }
      currentResize.currentRect = newBoundingRect;
    });
    mousedown$.pipe(map(({
      edges
    }) => {
      return edges || {};
    }), filter((edges) => {
      return Object.keys(edges).length > 0;
    }), takeUntil(this.destroy$)).subscribe((edges) => {
      if (currentResize) {
        removeGhostElement();
      }
      const startingRect = getElementRect(this.elm, this.ghostElementPositioning);
      currentResize = {
        edges,
        startingRect,
        currentRect: startingRect
      };
      const resizeCursors = getResizeCursors();
      const cursor = getResizeCursor(currentResize.edges, resizeCursors);
      this.renderer.setStyle(document.body, "cursor", cursor);
      this.setElementClass(this.elm, RESIZE_ACTIVE_CLASS, true);
      if (this.enableGhostResize) {
        currentResize.clonedNode = deepCloneNode(this.elm.nativeElement);
        this.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);
        this.renderer.setStyle(this.elm.nativeElement, "visibility", "hidden");
        this.renderer.setStyle(currentResize.clonedNode, "position", this.ghostElementPositioning);
        this.renderer.setStyle(currentResize.clonedNode, "left", `${currentResize.startingRect.left}px`);
        this.renderer.setStyle(currentResize.clonedNode, "top", `${currentResize.startingRect.top}px`);
        this.renderer.setStyle(currentResize.clonedNode, "height", `${currentResize.startingRect.height}px`);
        this.renderer.setStyle(currentResize.clonedNode, "width", `${currentResize.startingRect.width}px`);
        this.renderer.setStyle(currentResize.clonedNode, "cursor", getResizeCursor(currentResize.edges, resizeCursors));
        this.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS);
        currentResize.clonedNode.scrollTop = currentResize.startingRect.scrollTop;
        currentResize.clonedNode.scrollLeft = currentResize.startingRect.scrollLeft;
      }
      if (this.resizeStart.observers.length > 0) {
        this.zone.run(() => {
          this.resizeStart.emit({
            edges: getEdgesDiff({
              edges,
              initialRectangle: startingRect,
              newRectangle: startingRect
            }),
            rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
          });
        });
      }
    });
    mouseup$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      if (currentResize) {
        this.renderer.removeClass(this.elm.nativeElement, RESIZE_ACTIVE_CLASS);
        this.renderer.setStyle(document.body, "cursor", "");
        this.renderer.setStyle(this.elm.nativeElement, "cursor", "");
        if (this.resizeEnd.observers.length > 0) {
          this.zone.run(() => {
            this.resizeEnd.emit({
              edges: getEdgesDiff({
                edges: currentResize.edges,
                initialRectangle: currentResize.startingRect,
                newRectangle: currentResize.currentRect
              }),
              rectangle: currentResize.currentRect
            });
          });
        }
        removeGhostElement();
        currentResize = null;
      }
    });
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.setStyle(document.body, "cursor", "");
    }
    this.mousedown.complete();
    this.mouseup.complete();
    this.mousemove.complete();
    this.destroy$.next();
  }
  setElementClass(elm, name, add) {
    if (add) {
      this.renderer.addClass(elm.nativeElement, name);
    } else {
      this.renderer.removeClass(elm.nativeElement, name);
    }
  }
};
ResizableDirective.\u0275fac = function ResizableDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ResizableDirective)(\u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
};
ResizableDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: ResizableDirective,
  selectors: [["", "mwlResizable", ""]],
  inputs: {
    validateResize: "validateResize",
    enableGhostResize: "enableGhostResize",
    resizeSnapGrid: "resizeSnapGrid",
    resizeCursors: "resizeCursors",
    ghostElementPositioning: "ghostElementPositioning",
    allowNegativeResizes: "allowNegativeResizes",
    mouseMoveThrottleMS: "mouseMoveThrottleMS"
  },
  outputs: {
    resizeStart: "resizeStart",
    resizing: "resizing",
    resizeEnd: "resizeEnd"
  },
  exportAs: ["mwlResizable"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizableDirective, [{
    type: Directive,
    args: [{
      selector: "[mwlResizable]",
      exportAs: "mwlResizable"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    validateResize: [{
      type: Input
    }],
    enableGhostResize: [{
      type: Input
    }],
    resizeSnapGrid: [{
      type: Input
    }],
    resizeCursors: [{
      type: Input
    }],
    ghostElementPositioning: [{
      type: Input
    }],
    allowNegativeResizes: [{
      type: Input
    }],
    mouseMoveThrottleMS: [{
      type: Input
    }],
    resizeStart: [{
      type: Output
    }],
    resizing: [{
      type: Output
    }],
    resizeEnd: [{
      type: Output
    }]
  });
})();
var PointerEventListeners = class _PointerEventListeners {
  constructor(renderer, zone) {
    this.pointerDown = new Observable((observer) => {
      let unsubscribeMouseDown;
      let unsubscribeTouchStart;
      zone.runOutsideAngular(() => {
        unsubscribeMouseDown = renderer.listen("document", "mousedown", (event) => {
          observer.next({
            clientX: event.clientX,
            clientY: event.clientY,
            event
          });
        });
        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchStart = renderer.listen("document", "touchstart", (event) => {
            observer.next({
              clientX: event.touches[0].clientX,
              clientY: event.touches[0].clientY,
              event
            });
          });
        }
      });
      return () => {
        unsubscribeMouseDown();
        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchStart();
        }
      };
    }).pipe(share());
    this.pointerMove = new Observable((observer) => {
      let unsubscribeMouseMove;
      let unsubscribeTouchMove;
      zone.runOutsideAngular(() => {
        unsubscribeMouseMove = renderer.listen("document", "mousemove", (event) => {
          observer.next({
            clientX: event.clientX,
            clientY: event.clientY,
            event
          });
        });
        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchMove = renderer.listen("document", "touchmove", (event) => {
            observer.next({
              clientX: event.targetTouches[0].clientX,
              clientY: event.targetTouches[0].clientY,
              event
            });
          });
        }
      });
      return () => {
        unsubscribeMouseMove();
        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchMove();
        }
      };
    }).pipe(share());
    this.pointerUp = new Observable((observer) => {
      let unsubscribeMouseUp;
      let unsubscribeTouchEnd;
      let unsubscribeTouchCancel;
      zone.runOutsideAngular(() => {
        unsubscribeMouseUp = renderer.listen("document", "mouseup", (event) => {
          observer.next({
            clientX: event.clientX,
            clientY: event.clientY,
            event
          });
        });
        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchEnd = renderer.listen("document", "touchend", (event) => {
            observer.next({
              clientX: event.changedTouches[0].clientX,
              clientY: event.changedTouches[0].clientY,
              event
            });
          });
          unsubscribeTouchCancel = renderer.listen("document", "touchcancel", (event) => {
            observer.next({
              clientX: event.changedTouches[0].clientX,
              clientY: event.changedTouches[0].clientY,
              event
            });
          });
        }
      });
      return () => {
        unsubscribeMouseUp();
        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchEnd();
          unsubscribeTouchCancel();
        }
      };
    }).pipe(share());
  }
  static getInstance(renderer, zone) {
    if (!_PointerEventListeners.instance) {
      _PointerEventListeners.instance = new _PointerEventListeners(renderer, zone);
    }
    return _PointerEventListeners.instance;
  }
};
var ResizeHandleDirective = class {
  constructor(renderer, element, zone, resizableDirective) {
    this.renderer = renderer;
    this.element = element;
    this.zone = zone;
    this.resizableDirective = resizableDirective;
    this.resizeEdges = {};
    this.eventListeners = {};
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.listenOnTheHost("mousedown").subscribe((event) => {
        this.onMousedown(event, event.clientX, event.clientY);
      });
      this.listenOnTheHost("mouseup").subscribe((event) => {
        this.onMouseup(event.clientX, event.clientY);
      });
      if (IS_TOUCH_DEVICE) {
        this.listenOnTheHost("touchstart").subscribe((event) => {
          this.onMousedown(event, event.touches[0].clientX, event.touches[0].clientY);
        });
        merge(this.listenOnTheHost("touchend"), this.listenOnTheHost("touchcancel")).subscribe((event) => {
          this.onMouseup(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
        });
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.unsubscribeEventListeners();
  }
  /**
   * @hidden
   */
  onMousedown(event, clientX, clientY) {
    event.preventDefault();
    if (!this.eventListeners.touchmove) {
      this.eventListeners.touchmove = this.renderer.listen(this.element.nativeElement, "touchmove", (touchMoveEvent) => {
        this.onMousemove(touchMoveEvent, touchMoveEvent.targetTouches[0].clientX, touchMoveEvent.targetTouches[0].clientY);
      });
    }
    if (!this.eventListeners.mousemove) {
      this.eventListeners.mousemove = this.renderer.listen(this.element.nativeElement, "mousemove", (mouseMoveEvent) => {
        this.onMousemove(mouseMoveEvent, mouseMoveEvent.clientX, mouseMoveEvent.clientY);
      });
    }
    this.resizable.mousedown.next({
      clientX,
      clientY,
      edges: this.resizeEdges
    });
  }
  /**
   * @hidden
   */
  onMouseup(clientX, clientY) {
    this.unsubscribeEventListeners();
    this.resizable.mouseup.next({
      clientX,
      clientY,
      edges: this.resizeEdges
    });
  }
  // directive might be passed from DI or as an input
  get resizable() {
    return this.resizableDirective || this.resizableContainer;
  }
  onMousemove(event, clientX, clientY) {
    this.resizable.mousemove.next({
      clientX,
      clientY,
      edges: this.resizeEdges,
      event
    });
  }
  unsubscribeEventListeners() {
    Object.keys(this.eventListeners).forEach((type) => {
      this.eventListeners[type]();
      delete this.eventListeners[type];
    });
  }
  listenOnTheHost(eventName) {
    return fromEvent(this.element.nativeElement, eventName).pipe(takeUntil(this.destroy$));
  }
};
ResizeHandleDirective.\u0275fac = function ResizeHandleDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ResizeHandleDirective)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ResizableDirective, 8));
};
ResizeHandleDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: ResizeHandleDirective,
  selectors: [["", "mwlResizeHandle", ""]],
  inputs: {
    resizeEdges: "resizeEdges",
    resizableContainer: "resizableContainer"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeHandleDirective, [{
    type: Directive,
    args: [{
      selector: "[mwlResizeHandle]"
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: ResizableDirective,
      decorators: [{
        type: Optional
      }]
    }];
  }, {
    resizeEdges: [{
      type: Input
    }],
    resizableContainer: [{
      type: Input
    }]
  });
})();
var ResizableModule = class {
};
ResizableModule.\u0275fac = function ResizableModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ResizableModule)();
};
ResizableModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: ResizableModule
});
ResizableModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizableModule, [{
    type: NgModule,
    args: [{
      declarations: [ResizableDirective, ResizeHandleDirective],
      exports: [ResizableDirective, ResizeHandleDirective]
    }]
  }], null, null);
})();

// src/app/admin/Shared/shared.module.ts
var SharedModule = class _SharedModule {
  static {
    this.\u0275fac = function SharedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SharedModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      NgbModule,
      ToastrModule.forRoot({
        preventDuplicates: true
      }),
      NgSelectModule,
      AutocompleteLibModule,
      MentionModule,
      ImageCropperModule,
      DpDatePickerModule,
      ResizableModule,
      GenericGridComponent,
      GridExportComponent,
      WorkflowBmAssociationComponent,
      CompanyAssociationComponent,
      QuillModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      NgbModule,
      ToastrModule,
      NgSelectModule,
      MentionModule,
      AutocompleteLibModule,
      DpDatePickerModule,
      ResizableModule
    ] });
  }
};

export {
  ServiceProviderService,
  TabComponent,
  TabsComponent,
  SharedModule
};
//# sourceMappingURL=chunk-AVHCICF3.js.map
