import {
  nameToGuid,
  require_lodash
} from "./chunk-BQKXR4UC.js";
import {
  NgbActiveModal,
  UntypedFormBuilder
} from "./chunk-L2L6ECIJ.js";
import {
  EventEmitter,
  of,
  takeWhile,
  ɵɵdefineDirective,
  ɵɵdirectiveInject
} from "./chunk-ZQT4GMOS.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-N6ESDQJH.js";

// src/app/admin/data-modeler/models/dmog.model.ts
var DMOGType;
(function(DMOGType2) {
  DMOGType2["Standard"] = "Normal";
  DMOGType2["Grid"] = "Grid";
  DMOGType2["Media"] = "Media";
  DMOGType2["JSONStaticGrid"] = "JSONStaticGrid";
})(DMOGType || (DMOGType = {}));

// src/app/admin/data-modeler/models/bmo.model.ts
var BMOType;
(function(BMOType2) {
  BMOType2["Form"] = "Forms";
  BMOType2["Contact"] = "Contacts";
  BMOType2["Attachment"] = "Attachments";
  BMOType2["Document"] = "Documents";
  BMOType2["SubProcess"] = "Subprocess";
  BMOType2["ChildProcess"] = "ChildProcess";
  BMOType2["SharedChildProcess"] = "SharedChildProcess";
})(BMOType || (BMOType = {}));
var FormBmoType;
(function(FormBmoType2) {
  FormBmoType2["Form"] = "Forms";
})(FormBmoType || (FormBmoType = {}));

// src/app/admin/data-modeler/models/bmog.model.ts
var CanvasType;
(function(CanvasType2) {
  CanvasType2["Admin"] = "AdminView";
  CanvasType2["Form"] = "Form";
  CanvasType2["User"] = "UserView";
  CanvasType2["View1"] = "View1";
  CanvasType2["View2"] = "View2";
  CanvasType2["View3"] = "View3";
  CanvasType2["View4"] = "View4";
  CanvasType2["View5"] = "View5";
  CanvasType2["View6"] = "View6";
})(CanvasType || (CanvasType = {}));
var EnableTLCorner;
(function(EnableTLCorner2) {
  EnableTLCorner2["Yes"] = "1";
  EnableTLCorner2["No"] = "0";
})(EnableTLCorner || (EnableTLCorner = {}));
var canvasType = {
  "Admin View": CanvasType.Admin,
  "Form View": CanvasType.Form,
  "User View": CanvasType.User,
  "View 1": CanvasType.View1,
  "View 2": CanvasType.View2,
  "View 3": CanvasType.View3,
  "View 4": CanvasType.View4,
  "View 5": CanvasType.View5,
  "View 6": CanvasType.View6
};

// src/app/admin/data-modeler/models/formio.model.ts
var DataSource;
(function(DataSource2) {
  DataSource2["Values"] = "values";
  DataSource2["JSON"] = "json";
  DataSource2["C2MIceApi"] = "c2miceapi";
  DataSource2["WFApi"] = "wfapigetdata";
  DataSource2["Custom"] = "custom";
})(DataSource || (DataSource = {}));
var CustomDataSource;
(function(CustomDataSource2) {
  CustomDataSource2["Country"] = "wf_GetCountry";
  CustomDataSource2["State"] = "wf_GetState";
  CustomDataSource2["City"] = "wf_GetCity";
  CustomDataSource2["UserByRole"] = "WF_API_ROLECONTROLUSER";
})(CustomDataSource || (CustomDataSource = {}));
var RegExType;
(function(RegExType2) {
  RegExType2["Alphabetic"] = "alphabates";
  RegExType2["Alphanumeric"] = "alphanumeric";
  RegExType2["Integer"] = "integer";
  RegExType2["Float"] = "float";
  RegExType2["Percent"] = "percent";
  RegExType2["Dollar"] = "dollar";
  RegExType2["Custom"] = "custom";
})(RegExType || (RegExType = {}));
var StorageProvider;
(function(StorageProvider2) {
  StorageProvider2["Base64"] = "base64";
  StorageProvider2["Dropbox"] = "dropbox";
  StorageProvider2["S3"] = "s3";
  StorageProvider2["Url"] = "url";
  StorageProvider2["Azure"] = "azurefileservices";
})(StorageProvider || (StorageProvider = {}));

// src/app/admin/data-modeler/models/object-detail.class.ts
var ObjectDetail = class _ObjectDetail {
  get f() {
    return this.form.controls;
  }
  constructor(ref, fb) {
    this.ref = ref;
    this.fb = fb;
    this.formActions = [];
    this.output = new EventEmitter();
    this.submitted = false;
    this.newObject = false;
    this.componentActive = true;
  }
  ngOnInit() {
    this.beforeFormInit();
    this.initForm();
  }
  ngAfterViewInit() {
    this.initFormActions();
    this.afterFormInit();
  }
  initFormActions() {
    this.formActions.forEach((action) => {
      this.form.get(action.controlName).valueChanges.pipe(takeWhile((_) => this.componentActive)).subscribe((val) => action.handler(val));
    });
  }
  beforeFormInit() {
    return;
  }
  initForm() {
    return;
  }
  afterFormInit() {
    return;
  }
  onCancel() {
    this.ref.close();
  }
  onSubmit() {
  }
  ngOnDestroy() {
    this.componentActive = false;
  }
  static {
    this.\u0275fac = function ObjectDetail_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ObjectDetail)(\u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ObjectDetail, inputs: { title: "title", data: "data", dmr: "dmr", parent: "parent", formActions: "formActions" }, outputs: { output: "output" } });
  }
};

// src/app/admin/data-modeler/models/condition.model.ts
var ActionState;
(function(ActionState2) {
  ActionState2[ActionState2["No"] = 0] = "No";
  ActionState2[ActionState2["Yes"] = 1] = "Yes";
  ActionState2[ActionState2["NA"] = 2] = "NA";
})(ActionState || (ActionState = {}));

// src/app/admin/data-modeler/models/status.model.ts
var Status;
(function(Status2) {
  Status2["Active"] = "1";
  Status2["Inactive"] = "0";
})(Status || (Status = {}));
var DMOStatus;
(function(DMOStatus2) {
  DMOStatus2["Active"] = "1";
  DMOStatus2["Inactive"] = "2";
})(DMOStatus || (DMOStatus = {}));
var NotificationOption;
(function(NotificationOption2) {
  NotificationOption2[NotificationOption2["None"] = 0] = "None";
  NotificationOption2[NotificationOption2["Custom_Notification"] = 1] = "Custom_Notification";
})(NotificationOption || (NotificationOption = {}));

// src/app/admin/data-modeler/classes/base-object.class.ts
var BaseObject = class {
  constructor(obj = {}, parent) {
    this.parent = parent;
    this.id = obj.id || "";
    this.Name = obj.Name || "";
    this.Version = obj.Version || parent?.Version || "";
    this.Children = obj.Children || [];
    this.Status = obj.Status || "0";
    this.childrenMap = {};
  }
  getChild(guid) {
    return this.childrenMap[guid];
  }
  addChild(child) {
    if (!this.Children.includes(child.id)) {
      this.Children.push(child.id);
    }
    this.childrenMap[child.id] = child;
  }
  addChildAt(child, index) {
    if (!this.Children.includes(child.id)) {
      this.Children = this.Children.slice(0, index).concat(child.id, this.Children.slice(index));
    }
    this.childrenMap[child.id] = child;
  }
  removeChild(id) {
    this.Children = this.Children.filter((cid) => cid !== id);
    delete this.childrenMap[id];
  }
  update(obj = {}) {
    Object.entries(obj).forEach(([key, value]) => {
      this[key] = value;
    });
  }
  unreference() {
    const _a = this, { childrenMap, parent, root } = _a, rest = __objRest(_a, ["childrenMap", "parent", "root"]);
    if ("DMOGID" in this) {
      delete rest["formData"];
      delete rest["Children"];
      delete rest["Roles"];
    }
    return rest;
  }
};

// src/app/admin/data-modeler/classes/bmo.class.ts
var BMO = class extends BaseObject {
  constructor(obj, parent) {
    super(obj, parent);
    this.BMOID = obj.BMOID;
    this.DisplayName = obj.DisplayName;
    this.ShortDesc = obj.ShortDesc;
    this.LongDesc = obj.LongDesc;
    this.Parent = obj.Parent || parent.id;
    this.Share = obj.Share || [];
    this.GUID = obj.GUID;
    this.BmoType = obj.BmoType;
    this.SubProcessId = obj.SubProcessId;
    this.ChildProcessId = obj.ChildProcessId;
    this.ParentProcessDmoGuid = obj.ParentProcessDmoGuid;
    this.ChildProcessDmoGuid = obj.ChildProcessDmoGuid;
    this.root = parent.parent;
  }
  get shared() {
    return this.parent.Share.some(({ value }) => value === this.id);
  }
};

// src/app/admin/data-modeler/classes/bmog.class.ts
var BMOG = class extends BaseObject {
  constructor(obj, parent) {
    super(obj, parent);
    this.BMOGID = obj.BMOGID;
    this.CanvasType = obj.CanvasType;
    this.LongDesc = obj.LongDesc;
    this.Parent = obj.Parent || parent.id;
    this.Share = obj.Share || [];
    this.root = parent;
    this.EnableTLCorner = obj.EnableTLCorner;
  }
};

// src/app/admin/data-modeler/classes/dm-component.class.ts
var import_lodash = __toESM(require_lodash());
var DMComponent = class _DMComponent {
  get shared() {
    return this.parent.Share.some(({ value }) => value === this.guid);
  }
  constructor(obj = {}, parent) {
    this.parent = parent;
    this._protected = false;
    this.parentDmo = null;
    this.authenticate = false;
    this.allowCalculateOverride = false;
    this.allowInput = false;
    this.autoAdjust = false;
    this.autofocus = false;
    this.calculateValue = "";
    this.clearOnHide = false;
    this.clearOnRefresh = false;
    this.clonedIndex = 0;
    this.fromApi = true;
    this.column = 0;
    this.comparatorSelect = null;
    this.compareOprator = null;
    this.conditional = { show: null, when: null, eq: "" };
    this.conditionNA = false;
    this.conditions = [];
    this.customClass = "";
    this.customDefaultValue = "";
    this.dataGridLabel = false;
    this.dataSrc = DataSource.Values;
    this.dbIndex = false;
    this.default_Value = "";
    this.defaultValue = "";
    this.description = "";
    this.dmoName = null;
    this.dmoId = null;
    this.enableDate = false;
    this.enableTime = false;
    this.errorLabel = "";
    this.expression = "";
    this.expressionMessage = "";
    this.fieldSet = false;
    this.hideChild = false;
    this.id = (0, import_lodash.uniqueId)();
    this.image = false;
    this.inline = false;
    this.input = true;
    this.inputType = null;
    this.is24hourformat = false;
    this.isalphanumeric = false;
    this.isautoCrop = false;
    this.isEncrypt = false;
    this.israndom = false;
    this.key = null;
    this.label = null;
    this.labelMargin = 3;
    this.labelPosition = "top";
    this.labelWidth = 30;
    this.mask = false;
    this.minlength = "";
    this.minSearch = 0;
    this.multiple = false;
    this.persistent = false;
    this.placeholder = "";
    this.prefix = "";
    this.protected = false;
    this.RangeCal = null;
    this.regxType = null;
    this.refreshOn = "";
    this.searchEnabled = false;
    this.searchField = "";
    this.selectFields = "";
    this.showtooltip = false;
    this.startwith = null;
    this.status = Status.Active;
    this.suffix = "";
    this.tabindex = "";
    this.tableView = true;
    this.theme = "info";
    this.tooltip = "";
    this.tree = false;
    this.type = null;
    this.unique = false;
    this.uploadLimit = null;
    this.uploadOnly = false;
    this.useLocaleSettings = false;
    this.validateOn = "change";
    this.values = [];
    this.widget = null;
    this.data = {
      values: [],
      json: [],
      url: "",
      headers: [],
      resource: "",
      custom: "",
      apiparams: null,
      apiurl: null,
      fieldparams: null,
      modelbody: null,
      datasource: null,
      mappings: [],
      emitonstart: false,
      dependencydmos: [],
      dependentdmos: []
    };
    this.validate = {
      required: false,
      customPrivate: false,
      maxLength: "",
      disabled: false,
      custom: "",
      maxWords: null,
      minLength: "",
      minWords: null,
      pattern: null
    };
    Object.entries(obj).forEach(([key, value]) => {
      if (value && typeof value === "object" && !Array.isArray(value)) {
        Object.entries(value).forEach(([k, v]) => {
          if (!this[key])
            this[key] = {};
          this[key][k] = obj[key] && obj[key][k] ? obj[key][k] : v;
        });
      } else {
        this[key] = obj[key] ?? this[key];
      }
    });
    this.guid = obj.guid;
  }
  clone() {
    const cloned = new _DMComponent(this, this.parent);
    cloned.label = cloned.label + ` Copy ${this.clonedIndex}`;
    cloned.dmoName = `${cloned.dmoName}_copy_${this.clonedIndex}`;
    cloned.id = `${cloned.id}${this.clonedIndex}`;
    cloned.clonedIndex = 0;
    cloned.fromApi = false;
    cloned.guid = this.guid + `copy${this.clonedIndex}`;
    this.clonedIndex++;
    return cloned;
  }
  asObject() {
    const _a = this, { conditions, parent, clonedIndex } = _a, rest = __objRest(_a, ["conditions", "parent", "clonedIndex"]);
    return rest;
  }
  dmoListByType(type) {
    const list = [];
    Object.values(this.parent.root.childrenMap).flatMap((bmog) => Object.values(bmog.childrenMap)).flatMap((bmo) => Object.values(bmo.childrenMap)).flatMap((dmog) => Object.values(dmog.childrenMap)).forEach((dmo) => {
      if (type) {
        if (dmo.type === type && dmo.dmoName !== this.dmoName) {
          list.push({
            key: dmo.guid,
            value: dmo.label,
            parent: dmo.parent.DisplayName
          });
        }
      } else {
        if (!list.some((lst) => lst.key === dmo.guid))
          list.push({
            key: dmo.guid,
            value: dmo.label,
            parent: dmo.parent.DisplayName
          });
      }
    });
    return list;
  }
  addCondition(condition) {
    this.conditions.push(condition);
  }
};

// src/app/admin/data-modeler/classes/dmog.class.ts
var DMOG = class extends BaseObject {
  constructor(obj, parent) {
    super(obj, parent);
    this.childrenMap = {};
    this.GUID = obj.GUID;
    this.DMOGID = obj.DMOGID;
    this.DisplayName = obj.DisplayName;
    this.IsCollapsed = obj.IsCollapsed;
    this.DefCollapsed = obj.DefCollapsed;
    this.showHelp = obj.showHelp;
    this.LongDesc = obj.LongDesc;
    this.Parent = obj.Parent || parent.id;
    this.Type = obj.Type;
    this.Share = obj.Share || [];
    this.LnkBmoDmogID = obj.LnkBmoDmogID;
    this.IsHidden = obj.IsHidden;
    this.Children = obj.Children || [];
    this.Roles = obj.Roles || [];
    this.root = parent.parent.parent;
    this.formData = this.generateFormDataBoilerplate();
  }
  get shared() {
    return this.parent.Share.some(({ value }) => value === this.id);
  }
  addFormData(formData) {
    if (formData?.components?.length > 0) {
      this.formData = formData;
    }
  }
  addChild(child) {
    if (!this.Children.includes(child.dmoName)) {
      this.Children.push(child.dmoName);
    }
    this.childrenMap[child.dmoName] = child;
  }
  removeChild(name) {
    this.Children = this.Children.filter((c) => c !== name);
    delete this.childrenMap[name];
  }
  getChild(name) {
    return this.childrenMap[name];
  }
  findDmo(name) {
    if (!name)
      return null;
    const rows = this.formData.components;
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      for (let j = 0; j < row.columns.length; j++) {
        const col = row.columns[j];
        for (let k = 0; k < col.components.length; k++) {
          const dmo = col.components[k];
          if (dmo.dmoName === name) {
            return {
              rowIndex: i,
              columnIndex: j,
              dmoIndex: k,
              dmo
            };
          }
        }
      }
    }
    return null;
  }
  findDmoAndThen(name, cb) {
    const child = this.findDmo(name);
    cb(child || null);
    return child;
  }
  update(obj = {}) {
    Object.entries(obj).forEach(([key, value]) => {
      this[key] = value;
    });
  }
  generateFormDataBoilerplate() {
    return {
      display: "form",
      // ROWS
      components: [
        {
          input: false,
          key: "columns",
          label: "Columns",
          type: "columns",
          // COLUMNS
          columns: [
            {
              // DMOS
              components: [],
              width: 50,
              offset: 0,
              push: 0,
              pull: 0,
              type: "column",
              input: true,
              key: "column1",
              hideOnChildrenHidden: false,
              tableView: true
            },
            {
              components: [],
              width: 50,
              offset: 0,
              push: 0,
              pull: 0,
              type: "column",
              input: true,
              key: "column2",
              hideOnChildrenHidden: false,
              tableView: true
            }
          ],
          tableView: false,
          dataSrc: 2,
          columns1: [
            {
              width: 50
            },
            {
              width: 50
            }
          ]
        }
      ],
      _id: this.id
    };
  }
};

// src/app/admin/data-modeler/classes/bm.class.ts
var BM = class _BM extends BaseObject {
  get selectedBMOG() {
    return this._selectedBMOG;
  }
  set selectedBMOG(bmog) {
    this._selectedBMOG = bmog;
  }
  get selectedBMO() {
    return this._selectedBMO;
  }
  set selectedBMO(bmo) {
    this._selectedBMO = bmo;
  }
  get selectedDMOG() {
    return this._selectedDMOG;
  }
  set selectedDMOG(bmo) {
    this._selectedDMOG = bmo;
  }
  constructor(obj, parent) {
    super(obj, parent);
    this.DisplayName = obj.DisplayName;
    this.Mode = obj.Mode;
    this.IntegrateWorkspace = obj.IntegrateWorkspace || "0";
    this.Description = obj.Description;
    this.BMId = obj.BMId;
    this.Share = obj.Share || [];
    this.ProcessName = obj.ProcessName;
    this.Status = obj.Status || "0";
    this.EnableLoad = obj.EnableLoad;
    this.ProcessId = obj.ProcessId;
    this.TypeId = obj.TypeId;
    this.root = this;
  }
  get published() {
    return this.Mode === "Published";
  }
  get payload() {
    const _a = this, { childrenMap, _selectedBMO, _selectedBMOG, _selectedDMOG, root } = _a, rest = __objRest(_a, ["childrenMap", "_selectedBMO", "_selectedBMOG", "_selectedDMOG", "root"]);
    const bmog = this.unreferenceChildren(childrenMap);
    const bmo = {};
    const dmog = {};
    const dmo = {};
    Object.values(this.childrenMap).forEach((bmog2) => {
      Object.entries(bmog2.childrenMap).forEach(([id, bmoClass]) => {
        bmo[id] = bmoClass.unreference();
        Object.entries(bmoClass.childrenMap).forEach(([id2, dmogClass]) => {
          dmo[id2] = dmogClass.formData;
          dmog[id2] = dmogClass.unreference();
        });
      });
    });
    if (_selectedDMOG?.formData) {
      dmo[_selectedDMOG.id] = _selectedDMOG.formData;
    }
    const currentDmo = {};
    return {
      bm: __spreadProps(__spreadValues({}, rest), {
        selectedBMOG: _selectedBMOG?.id,
        selectedBMO: _selectedBMO?.id,
        selectedDMOG: _selectedDMOG?.id
      }),
      bmog,
      bmo,
      dmog,
      dmo,
      currentDmo,
      _BmogName: _selectedBMOG?.id,
      _BmoName: _selectedBMO?.id,
      _DmogName: _selectedDMOG?.id
    };
  }
  unreferenceAll() {
    const _a = this, { childrenMap, _selectedBMO, _selectedBMOG, _selectedDMOG, root } = _a, rest = __objRest(_a, ["childrenMap", "_selectedBMO", "_selectedBMOG", "_selectedDMOG", "root"]);
    return rest;
  }
  unreferenceChildren(childrenMap) {
    const children = {};
    Object.entries(childrenMap || {}).forEach(([id, obj]) => {
      children[id] = obj.unreference();
    });
    return children;
  }
  updateSelectedObjects(obj) {
    if (!obj)
      return;
    if ("BMOGID" in obj) {
      this.selectedBMOG = obj;
    }
    if ("BMOID" in obj) {
      this.selectedBMO = obj;
    }
    if ("DMOGID" in obj) {
      this.selectedDMOG = obj;
    }
    if ("dmoName" in obj) {
      return;
    }
    const childId = obj?.Children[0];
    if (childId) {
      const firstChild = obj.childrenMap[childId];
      this.updateSelectedObjects(firstChild);
    } else {
      switch (obj.id) {
        case this.selectedBMOG?.id:
          this.selectedBMO = null;
          break;
        case this.selectedBMO?.id:
          this.selectedDMOG = null;
          break;
        default:
          break;
      }
    }
    this.cacheObjectIds();
  }
  onRemoveChild(removedObjectId) {
    switch (removedObjectId) {
      case this.selectedBMOG?.id:
        this.selectedBMOG = null;
        break;
      case this.selectedBMO?.id:
        this.selectedBMO = null;
        break;
      case this.selectedDMOG?.id:
        this.selectedDMOG = null;
        break;
      default:
        break;
    }
  }
  static fromResponse(res) {
    const bm = new _BM(res.Item1, void 0);
    bm.Children.forEach((bmogId) => {
      const bmog = new BMOG(res.Item2[bmogId], bm);
      bm.addChild(bmog);
      bmog.Children.forEach((bmoid) => {
        const bmo = new BMO(res.Item3[bmoid], bmog);
        bmog.addChild(bmo);
        bmo.Children.forEach((dmogid) => {
          const dmog = new DMOG(res.Item4[dmogid], bmo);
          bmo.addChild(dmog);
          res.Item5[dmogid]?.components.forEach((row) => {
            row.columns.forEach((col, i) => {
              col?.components?.forEach((dmoObj) => {
                const guid = nameToGuid(dmoObj.dmoName);
                dmoObj.dmoId = +res?.Item7.dmoIds[guid];
                dmoObj.guid = guid;
                dmoObj.column = i;
                const dmo = new DMComponent(dmoObj, dmog);
                dmog.addChild(dmo);
                res?.Item6[dmo.guid]?.Condition.forEach((cond) => {
                  dmo.addCondition(cond);
                });
              });
            });
          });
          dmog.addFormData(res.Item5[dmogid]);
        });
      });
    });
    bm.setInitialSelectedObjects();
    return bm;
  }
  setInitialSelectedObjects() {
    const { selectedBMOG, selectedBMO, selectedDMOG } = localStorage;
    this._setInitialSelectedObject(this, [{ selectedDMOG }, { selectedBMO }, { selectedBMOG }]);
  }
  /** Recursively go through objects children and set them as selected objects
   *
   *  @param parent is of type ObjectClass excluding DMComponent,
   *
   *  namely {@link BMOG} | {@link BMO} | {@link DMOG}
   */
  _setInitialSelectedObject(parent, ids) {
    if (ids.length === 0)
      return;
    const [[key, id]] = Object.entries(ids.pop());
    const child = parent.childrenMap[id];
    if (child) {
      this[key] = child;
      this._setInitialSelectedObject(child, ids);
    } else {
      const firstChildId = parent.Children[0];
      firstChildId && this.updateSelectedObjects(parent.childrenMap[firstChildId]);
    }
  }
  /** Invoked when an {@link ObjectClass} excluding {@link DMComponent} is saved or created */
  cacheObjectId(obj) {
    if ("BMOGID" in obj) {
      localStorage.selectedBMOG = obj.id;
    }
    if ("BMOID" in obj) {
      localStorage.selectedBMO = obj.id;
    }
    if ("DMOGID" in obj) {
      localStorage.selectedDMOG = obj.id;
    }
  }
  cacheObjectIds() {
    localStorage.selectedBMOG = this.selectedBMOG?.id;
    localStorage.selectedBMO = this.selectedBMO?.id;
    localStorage.selectedDMOG = this.selectedDMOG?.id;
  }
};

// src/app/admin/data-modeler/classes/object-control.class.ts
var ObjectControl = class {
  constructor(config) {
    this.name = config.name;
    this.label = config?.label || config.name;
    this.type = config.type || "text";
    this.show = config.show || of(true);
    this.options = config.options;
    this.multiple = config.multiple;
    this.hint = config.hint;
    this.required = config.required;
    this.readonly = config.readonly;
    this.class = config.class;
    this.group = config.group;
    this.config = config.config;
    this.groupOptionsBy = config.groupOptionsBy;
    this.placeholder = config.placeholder || "";
  }
};

export {
  DMOGType,
  BMOType,
  FormBmoType,
  EnableTLCorner,
  canvasType,
  DataSource,
  CustomDataSource,
  RegExType,
  StorageProvider,
  ObjectDetail,
  ActionState,
  Status,
  DMOStatus,
  BMO,
  BMOG,
  DMComponent,
  DMOG,
  BM,
  ObjectControl
};
//# sourceMappingURL=chunk-74OCJGBF.js.map
