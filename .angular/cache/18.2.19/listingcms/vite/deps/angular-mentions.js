import {
  CommonModule,
  NgForOf,
  NgTemplateOutlet
} from "./chunk-5TIJYM43.js";
import {
  Component,
  ComponentFactoryResolver$1,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewContainerRef,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-CVW4EF2E.js";
import "./chunk-VMI3K6GE.js";
import "./chunk-5KXDAEEK.js";
import "./chunk-WD6C567C.js";
import "./chunk-HM5YLMWO.js";
import "./chunk-N6ESDQJH.js";

// node_modules/angular-mentions/fesm2020/angular-mentions.mjs
var _c0 = ["list"];
var _c1 = ["defaultItemTemplate"];
var _c2 = (a0) => ({
  "item": a0
});
function MentionListComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const item_r1 = ctx.item;
    const ctx_r1 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", item_r1[ctx_r1.labelKey], " ");
  }
}
function MentionListComponent_li_4_ng_template_2_Template(rf, ctx) {
}
function MentionListComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li")(1, "a", 4);
    ɵɵlistener("mousedown", function MentionListComponent_li_4_Template_a_mousedown_1_listener($event) {
      const i_r4 = ɵɵrestoreView(_r3).index;
      const ctx_r1 = ɵɵnextContext();
      ctx_r1.activeIndex = i_r4;
      ctx_r1.itemClick.emit();
      return ɵɵresetView($event.preventDefault());
    });
    ɵɵtemplate(2, MentionListComponent_li_4_ng_template_2_Template, 0, 0, "ng-template", 5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("active", ctx_r1.activeIndex == i_r4)("mention-active", !ctx_r1.styleOff && ctx_r1.activeIndex == i_r4);
    ɵɵadvance();
    ɵɵclassProp("mention-item", !ctx_r1.styleOff);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(8, _c2, item_r5));
  }
}
function setValue(el, value) {
  if (isInputOrTextAreaElement(el)) {
    el.value = value;
  } else {
    el.textContent = value;
  }
}
function getValue(el) {
  return isInputOrTextAreaElement(el) ? el.value : el.textContent;
}
function insertValue(el, start, end, text, iframe, noRecursion = false) {
  if (isTextElement(el)) {
    let val = getValue(el);
    setValue(el, val.substring(0, start) + text + val.substring(end, val.length));
    setCaretPosition(el, start + text.length, iframe);
  } else if (!noRecursion) {
    let selObj = getWindowSelection(iframe);
    if (selObj && selObj.rangeCount > 0) {
      var selRange = selObj.getRangeAt(0);
      var position = selRange.startOffset;
      var anchorNode = selObj.anchorNode;
      insertValue(anchorNode, position - (end - start), position, text, iframe, true);
    }
  }
}
function isInputOrTextAreaElement(el) {
  return el != null && (el.nodeName == "INPUT" || el.nodeName == "TEXTAREA");
}
function isTextElement(el) {
  return el != null && (el.nodeName == "INPUT" || el.nodeName == "TEXTAREA" || el.nodeName == "#text");
}
function setCaretPosition(el, pos, iframe = null) {
  if (isInputOrTextAreaElement(el) && el.selectionStart) {
    el.focus();
    el.setSelectionRange(pos, pos);
  } else {
    let range = getDocument(iframe).createRange();
    range.setStart(el, pos);
    range.collapse(true);
    let sel = getWindowSelection(iframe);
    sel.removeAllRanges();
    sel.addRange(range);
  }
}
function getCaretPosition(el, iframe = null) {
  if (isInputOrTextAreaElement(el)) {
    var val = el.value;
    return val.slice(0, el.selectionStart).length;
  } else {
    var selObj = getWindowSelection(iframe);
    if (selObj.rangeCount > 0) {
      var selRange = selObj.getRangeAt(0);
      var preCaretRange = selRange.cloneRange();
      preCaretRange.selectNodeContents(el);
      preCaretRange.setEnd(selRange.endContainer, selRange.endOffset);
      var position = preCaretRange.toString().length;
      return position;
    }
  }
}
function getDocument(iframe) {
  if (!iframe) {
    return document;
  } else {
    return iframe.contentWindow.document;
  }
}
function getWindowSelection(iframe) {
  if (!iframe) {
    return window.getSelection();
  } else {
    return iframe.contentWindow.getSelection();
  }
}
function getContentEditableCaretCoords(ctx) {
  let markerTextChar = "\uFEFF";
  let markerId = "sel_" + (/* @__PURE__ */ new Date()).getTime() + "_" + Math.random().toString().substr(2);
  let doc = getDocument(ctx ? ctx.iframe : null);
  let sel = getWindowSelection(ctx ? ctx.iframe : null);
  let prevRange = sel.getRangeAt(0);
  let range = doc.createRange();
  range.setStart(sel.anchorNode, prevRange.startOffset);
  range.setEnd(sel.anchorNode, prevRange.startOffset);
  range.collapse(false);
  let markerEl = doc.createElement("span");
  markerEl.id = markerId;
  markerEl.appendChild(doc.createTextNode(markerTextChar));
  range.insertNode(markerEl);
  sel.removeAllRanges();
  sel.addRange(prevRange);
  let coordinates = {
    left: 0,
    top: markerEl.offsetHeight
  };
  localToRelativeCoordinates(ctx, markerEl, coordinates);
  markerEl.parentNode.removeChild(markerEl);
  return coordinates;
}
function localToRelativeCoordinates(ctx, element, coordinates) {
  let obj = element;
  let iframe = ctx ? ctx.iframe : null;
  while (obj) {
    if (ctx.parent != null && ctx.parent == obj) {
      break;
    }
    coordinates.left += obj.offsetLeft + obj.clientLeft;
    coordinates.top += obj.offsetTop + obj.clientTop;
    obj = obj.offsetParent;
    if (!obj && iframe) {
      obj = iframe;
      iframe = null;
    }
  }
  obj = element;
  iframe = ctx ? ctx.iframe : null;
  while (obj !== getDocument(null).body && obj != null) {
    if (ctx.parent != null && ctx.parent == obj) {
      break;
    }
    if (obj.scrollTop && obj.scrollTop > 0) {
      coordinates.top -= obj.scrollTop;
    }
    if (obj.scrollLeft && obj.scrollLeft > 0) {
      coordinates.left -= obj.scrollLeft;
    }
    obj = obj.parentNode;
    if (!obj && iframe) {
      obj = iframe;
      iframe = null;
    }
  }
}
var properties = [
  "direction",
  "boxSizing",
  "width",
  "height",
  "overflowX",
  "overflowY",
  "borderTopWidth",
  "borderRightWidth",
  "borderBottomWidth",
  "borderLeftWidth",
  "borderStyle",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  // https://developer.mozilla.org/en-US/docs/Web/CSS/font
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "fontStretch",
  "fontSize",
  "fontSizeAdjust",
  "lineHeight",
  "fontFamily",
  "textAlign",
  "textTransform",
  "textIndent",
  "textDecoration",
  "letterSpacing",
  "wordSpacing",
  "tabSize",
  "MozTabSize"
];
var isBrowser = typeof window !== "undefined";
var isFirefox = isBrowser && window["mozInnerScreenX"] != null;
function getCaretCoordinates(element, position, options) {
  if (!isBrowser) {
    throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");
  }
  var debug = options && options.debug || false;
  if (debug) {
    var el = document.querySelector("#input-textarea-caret-position-mirror-div");
    if (el) el.parentNode.removeChild(el);
  }
  var div = document.createElement("div");
  div.id = "input-textarea-caret-position-mirror-div";
  document.body.appendChild(div);
  var style = div.style;
  var computed = window.getComputedStyle ? window.getComputedStyle(element) : element.currentStyle;
  var isInput = element.nodeName === "INPUT";
  style.whiteSpace = "pre-wrap";
  if (!isInput) style.wordWrap = "break-word";
  style.position = "absolute";
  if (!debug) style.visibility = "hidden";
  properties.forEach(function(prop) {
    if (isInput && prop === "lineHeight") {
      if (computed.boxSizing === "border-box") {
        var height = parseInt(computed.height);
        var outerHeight = parseInt(computed.paddingTop) + parseInt(computed.paddingBottom) + parseInt(computed.borderTopWidth) + parseInt(computed.borderBottomWidth);
        var targetHeight = outerHeight + parseInt(computed.lineHeight);
        if (height > targetHeight) {
          style.lineHeight = height - outerHeight + "px";
        } else if (height === targetHeight) {
          style.lineHeight = computed.lineHeight;
        } else {
          style.lineHeight = "0";
        }
      } else {
        style.lineHeight = computed.height;
      }
    } else {
      style[prop] = computed[prop];
    }
  });
  if (isFirefox) {
    if (element.scrollHeight > parseInt(computed.height)) style.overflowY = "scroll";
  } else {
    style.overflow = "hidden";
  }
  div.textContent = element.value.substring(0, position);
  if (isInput) div.textContent = div.textContent.replace(/\s/g, " ");
  var span = document.createElement("span");
  span.textContent = element.value.substring(position) || ".";
  div.appendChild(span);
  var coordinates = {
    top: span.offsetTop + parseInt(computed["borderTopWidth"]),
    left: span.offsetLeft + parseInt(computed["borderLeftWidth"]),
    height: parseInt(computed["lineHeight"])
  };
  if (debug) {
    span.style.backgroundColor = "#aaa";
  } else {
    document.body.removeChild(div);
  }
  return coordinates;
}
var MentionListComponent = class {
  constructor(element) {
    this.element = element;
    this.labelKey = "label";
    this.itemClick = new EventEmitter();
    this.items = [];
    this.activeIndex = 0;
    this.hidden = false;
    this.dropUp = false;
    this.styleOff = false;
    this.coords = {
      top: 0,
      left: 0
    };
    this.offset = 0;
  }
  ngAfterContentChecked() {
    if (!this.itemTemplate) {
      this.itemTemplate = this.defaultItemTemplate;
    }
  }
  // lots of confusion here between relative coordinates and containers
  position(nativeParentElement, iframe = null) {
    if (isInputOrTextAreaElement(nativeParentElement)) {
      this.coords = getCaretCoordinates(nativeParentElement, nativeParentElement.selectionStart, null);
      this.coords.top = nativeParentElement.offsetTop + this.coords.top - nativeParentElement.scrollTop;
      this.coords.left = nativeParentElement.offsetLeft + this.coords.left - nativeParentElement.scrollLeft;
      this.offset = this.getBlockCursorDimensions(nativeParentElement).height;
    } else if (iframe) {
      let context = {
        iframe,
        parent: iframe.offsetParent
      };
      this.coords = getContentEditableCaretCoords(context);
    } else {
      let doc = document.documentElement;
      let scrollLeft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
      let scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      let caretRelativeToView = getContentEditableCaretCoords({
        iframe
      });
      let parentRelativeToContainer = nativeParentElement.getBoundingClientRect();
      this.coords.top = caretRelativeToView.top - parentRelativeToContainer.top + nativeParentElement.offsetTop - scrollTop;
      this.coords.left = caretRelativeToView.left - parentRelativeToContainer.left + nativeParentElement.offsetLeft - scrollLeft;
    }
    this.positionElement();
  }
  get activeItem() {
    return this.items[this.activeIndex];
  }
  activateNextItem() {
    let listEl = this.list.nativeElement;
    let activeEl = listEl.getElementsByClassName("active").item(0);
    if (activeEl) {
      let nextLiEl = activeEl.nextSibling;
      if (nextLiEl && nextLiEl.nodeName == "LI") {
        let nextLiRect = nextLiEl.getBoundingClientRect();
        if (nextLiRect.bottom > listEl.getBoundingClientRect().bottom) {
          listEl.scrollTop = nextLiEl.offsetTop + nextLiRect.height - listEl.clientHeight;
        }
      }
    }
    this.activeIndex = Math.max(Math.min(this.activeIndex + 1, this.items.length - 1), 0);
  }
  activatePreviousItem() {
    let listEl = this.list.nativeElement;
    let activeEl = listEl.getElementsByClassName("active").item(0);
    if (activeEl) {
      let prevLiEl = activeEl.previousSibling;
      if (prevLiEl && prevLiEl.nodeName == "LI") {
        let prevLiRect = prevLiEl.getBoundingClientRect();
        if (prevLiRect.top < listEl.getBoundingClientRect().top) {
          listEl.scrollTop = prevLiEl.offsetTop;
        }
      }
    }
    this.activeIndex = Math.max(Math.min(this.activeIndex - 1, this.items.length - 1), 0);
  }
  // reset for a new mention search
  reset() {
    this.list.nativeElement.scrollTop = 0;
    this.checkBounds();
  }
  // final positioning is done after the list is shown (and the height and width are known)
  // ensure it's in the page bounds
  checkBounds() {
    let left = this.coords.left, top = this.coords.top, dropUp = this.dropUp;
    const bounds = this.list.nativeElement.getBoundingClientRect();
    if (bounds.left + bounds.width > window.innerWidth) {
      left -= bounds.left + bounds.width - window.innerWidth + 10;
    }
    if (bounds.top < 0) {
      dropUp = false;
    }
    this.positionElement(left, top, dropUp);
  }
  positionElement(left = this.coords.left, top = this.coords.top, dropUp = this.dropUp) {
    const el = this.element.nativeElement;
    top += dropUp ? 0 : this.offset;
    el.className = dropUp ? "dropup" : null;
    el.style.position = "absolute";
    el.style.left = left + "px";
    el.style.top = top + "px";
  }
  getBlockCursorDimensions(nativeParentElement) {
    const parentStyles = window.getComputedStyle(nativeParentElement);
    return {
      height: parseFloat(parentStyles.lineHeight),
      width: parseFloat(parentStyles.fontSize)
    };
  }
};
MentionListComponent.ɵfac = function MentionListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MentionListComponent)(ɵɵdirectiveInject(ElementRef));
};
MentionListComponent.ɵcmp = ɵɵdefineComponent({
  type: MentionListComponent,
  selectors: [["mention-list"]],
  viewQuery: function MentionListComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
      ɵɵviewQuery(_c1, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.list = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.defaultItemTemplate = _t.first);
    }
  },
  inputs: {
    labelKey: "labelKey",
    itemTemplate: "itemTemplate"
  },
  outputs: {
    itemClick: "itemClick"
  },
  decls: 5,
  vars: 6,
  consts: [["defaultItemTemplate", ""], ["list", ""], [1, "dropdown-menu", "scrollable-menu", 3, "hidden"], [3, "active", "mention-active", 4, "ngFor", "ngForOf"], [1, "dropdown-item", 3, "mousedown"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function MentionListComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, MentionListComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      ɵɵelementStart(2, "ul", 2, 1);
      ɵɵtemplate(4, MentionListComponent_li_4_Template, 3, 10, "li", 3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵclassProp("mention-menu", !ctx.styleOff)("mention-dropdown", !ctx.styleOff && ctx.dropUp);
      ɵɵproperty("hidden", ctx.hidden);
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ctx.items);
    }
  },
  dependencies: [NgForOf, NgTemplateOutlet],
  styles: [".mention-menu[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:11em;padding:.5em 0;margin:.125em 0 0;font-size:1em;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25em}.mention-item[_ngcontent-%COMP%]{display:block;padding:.2em 1.5em;line-height:1.5em;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.mention-active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;background-color:#337ab7;outline:0}.scrollable-menu[_ngcontent-%COMP%]{display:block;height:auto;max-height:292px;overflow:auto}[hidden][_ngcontent-%COMP%]{display:none}.mention-dropdown[_ngcontent-%COMP%]{bottom:100%;top:auto;margin-bottom:2px}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MentionListComponent, [{
    type: Component,
    args: [{
      selector: "mention-list",
      template: `
    <ng-template #defaultItemTemplate let-item="item">
      {{item[labelKey]}}
    </ng-template>
    <ul #list [hidden]="hidden" class="dropdown-menu scrollable-menu"
      [class.mention-menu]="!styleOff" [class.mention-dropdown]="!styleOff && dropUp">
      <li *ngFor="let item of items; let i = index"
        [class.active]="activeIndex==i" [class.mention-active]="!styleOff && activeIndex==i">
        <a class="dropdown-item" [class.mention-item]="!styleOff"
          (mousedown)="activeIndex=i;itemClick.emit();$event.preventDefault()">
          <ng-template [ngTemplateOutlet]="itemTemplate" [ngTemplateOutletContext]="{'item':item}"></ng-template>
        </a>
      </li>
    </ul>
    `,
      styles: [".mention-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:11em;padding:.5em 0;margin:.125em 0 0;font-size:1em;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25em}.mention-item{display:block;padding:.2em 1.5em;line-height:1.5em;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.mention-active>a{color:#fff;text-decoration:none;background-color:#337ab7;outline:0}.scrollable-menu{display:block;height:auto;max-height:292px;overflow:auto}[hidden]{display:none}.mention-dropdown{bottom:100%;top:auto;margin-bottom:2px}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    labelKey: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    list: [{
      type: ViewChild,
      args: ["list", {
        static: true
      }]
    }],
    defaultItemTemplate: [{
      type: ViewChild,
      args: ["defaultItemTemplate", {
        static: true
      }]
    }]
  });
})();
var KEY_BACKSPACE = 8;
var KEY_TAB = 9;
var KEY_ENTER = 13;
var KEY_SHIFT = 16;
var KEY_ESCAPE = 27;
var KEY_SPACE = 32;
var KEY_UP = 38;
var KEY_DOWN = 40;
var KEY_BUFFERED = 229;
var MentionDirective = class {
  constructor(_element, _componentResolver, _viewContainerRef) {
    this._element = _element;
    this._componentResolver = _componentResolver;
    this._viewContainerRef = _viewContainerRef;
    this.mentionConfig = {
      items: []
    };
    this.DEFAULT_CONFIG = {
      items: [],
      triggerChar: "@",
      labelKey: "label",
      maxItems: -1,
      allowSpace: false,
      returnTrigger: false,
      mentionSelect: (item, triggerChar) => {
        return this.activeConfig.triggerChar + item[this.activeConfig.labelKey];
      },
      mentionFilter: (searchString, items) => {
        const searchStringLowerCase = searchString.toLowerCase();
        return items.filter((e) => e[this.activeConfig.labelKey].toLowerCase().startsWith(searchStringLowerCase));
      }
    };
    this.searchTerm = new EventEmitter();
    this.itemSelected = new EventEmitter();
    this.opened = new EventEmitter();
    this.closed = new EventEmitter();
    this.triggerChars = {};
  }
  set mention(items) {
    this.mentionItems = items;
  }
  ngOnChanges(changes) {
    if (changes["mention"] || changes["mentionConfig"]) {
      this.updateConfig();
    }
  }
  updateConfig() {
    let config = this.mentionConfig;
    this.triggerChars = {};
    if (this.mentionItems) {
      config.items = this.mentionItems;
    }
    this.addConfig(config);
    if (config.mentions) {
      config.mentions.forEach((config2) => this.addConfig(config2));
    }
  }
  // add configuration for a trigger char
  addConfig(config) {
    let defaults = Object.assign({}, this.DEFAULT_CONFIG);
    config = Object.assign(defaults, config);
    let items = config.items;
    if (items && items.length > 0) {
      if (typeof items[0] == "string") {
        items = items.map((label) => {
          let object = {};
          object[config.labelKey] = label;
          return object;
        });
      }
      if (config.labelKey) {
        items = items.filter((e) => e[config.labelKey]);
        if (!config.disableSort) {
          items.sort((a, b) => a[config.labelKey].localeCompare(b[config.labelKey]));
        }
      }
    }
    config.items = items;
    this.triggerChars[config.triggerChar] = config;
    if (this.activeConfig && this.activeConfig.triggerChar == config.triggerChar) {
      this.activeConfig = config;
      this.updateSearchList();
    }
  }
  setIframe(iframe) {
    this.iframe = iframe;
  }
  stopEvent(event) {
    if (!event.wasClick) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    }
  }
  blurHandler(event) {
    this.stopEvent(event);
    this.stopSearch();
  }
  inputHandler(event, nativeElement = this._element.nativeElement) {
    if (this.lastKeyCode === KEY_BUFFERED && event.data) {
      let keyCode = event.data.charCodeAt(0);
      this.keyHandler({
        keyCode,
        inputEvent: true
      }, nativeElement);
    }
  }
  // @param nativeElement is the alternative text element in an iframe scenario
  keyHandler(event, nativeElement = this._element.nativeElement) {
    this.lastKeyCode = event.keyCode;
    if (event.isComposing || event.keyCode === KEY_BUFFERED) {
      return;
    }
    let val = getValue(nativeElement);
    let pos = getCaretPosition(nativeElement, this.iframe);
    let charPressed = event.key;
    if (!charPressed) {
      let charCode = event.which || event.keyCode;
      if (!event.shiftKey && charCode >= 65 && charCode <= 90) {
        charPressed = String.fromCharCode(charCode + 32);
      } else {
        charPressed = String.fromCharCode(event.which || event.keyCode);
      }
    }
    if (event.keyCode == KEY_ENTER && event.wasClick && pos < this.startPos) {
      pos = this.startNode.length;
      setCaretPosition(this.startNode, pos, this.iframe);
    }
    let config = this.triggerChars[charPressed];
    if (config) {
      this.activeConfig = config;
      this.startPos = event.inputEvent ? pos - 1 : pos;
      this.startNode = (this.iframe ? this.iframe.contentWindow.getSelection() : window.getSelection()).anchorNode;
      this.searching = true;
      this.searchString = null;
      this.showSearchList(nativeElement);
      this.updateSearchList();
      if (config.returnTrigger) {
        this.searchTerm.emit(config.triggerChar);
      }
    } else if (this.startPos >= 0 && this.searching) {
      if (pos <= this.startPos) {
        this.searchList.hidden = true;
      } else if (event.keyCode !== KEY_SHIFT && !event.metaKey && !event.altKey && !event.ctrlKey && pos > this.startPos) {
        if (!this.activeConfig.allowSpace && event.keyCode === KEY_SPACE) {
          this.startPos = -1;
        } else if (event.keyCode === KEY_BACKSPACE && pos > 0) {
          pos--;
          if (pos == this.startPos) {
            this.stopSearch();
          }
        } else if (this.searchList.hidden) {
          if (event.keyCode === KEY_TAB || event.keyCode === KEY_ENTER) {
            this.stopSearch();
            return;
          }
        } else if (!this.searchList.hidden) {
          if (event.keyCode === KEY_TAB || event.keyCode === KEY_ENTER) {
            this.stopEvent(event);
            this.itemSelected.emit(this.searchList.activeItem);
            const text = this.activeConfig.mentionSelect(this.searchList.activeItem, this.activeConfig.triggerChar);
            insertValue(nativeElement, this.startPos, pos, text, this.iframe);
            if ("createEvent" in document) {
              let evt = document.createEvent("HTMLEvents");
              if (this.iframe) {
                evt.initEvent("change", true, false);
              } else {
                evt.initEvent("input", true, false);
              }
              this._element.nativeElement.dispatchEvent(evt);
            }
            this.startPos = -1;
            this.stopSearch();
            return false;
          } else if (event.keyCode === KEY_ESCAPE) {
            this.stopEvent(event);
            this.stopSearch();
            return false;
          } else if (event.keyCode === KEY_DOWN) {
            this.stopEvent(event);
            this.searchList.activateNextItem();
            return false;
          } else if (event.keyCode === KEY_UP) {
            this.stopEvent(event);
            this.searchList.activatePreviousItem();
            return false;
          }
        }
        if (charPressed.length != 1 && event.keyCode != KEY_BACKSPACE) {
          this.stopEvent(event);
          return false;
        } else if (this.searching) {
          let mention = val.substring(this.startPos + 1, pos);
          if (event.keyCode !== KEY_BACKSPACE && !event.inputEvent) {
            mention += charPressed;
          }
          this.searchString = mention;
          if (this.activeConfig.returnTrigger) {
            const triggerChar = this.searchString || event.keyCode === KEY_BACKSPACE ? val.substring(this.startPos, this.startPos + 1) : "";
            this.searchTerm.emit(triggerChar + this.searchString);
          } else {
            this.searchTerm.emit(this.searchString);
          }
          this.updateSearchList();
        }
      }
    }
  }
  // exposed for external calls to open the mention list, e.g. by clicking a button
  startSearch(triggerChar, nativeElement = this._element.nativeElement) {
    triggerChar = triggerChar || this.mentionConfig.triggerChar || this.DEFAULT_CONFIG.triggerChar;
    const pos = getCaretPosition(nativeElement, this.iframe);
    insertValue(nativeElement, pos, pos, triggerChar, this.iframe);
    this.keyHandler({
      key: triggerChar,
      inputEvent: true
    }, nativeElement);
  }
  stopSearch() {
    if (this.searchList && !this.searchList.hidden) {
      this.searchList.hidden = true;
      this.closed.emit();
    }
    this.activeConfig = null;
    this.searching = false;
  }
  updateSearchList() {
    let matches = [];
    if (this.activeConfig && this.activeConfig.items) {
      let objects = this.activeConfig.items;
      if (!this.activeConfig.disableSearch && this.searchString && this.activeConfig.labelKey) {
        if (this.activeConfig.mentionFilter) {
          objects = this.activeConfig.mentionFilter(this.searchString, objects);
        }
      }
      matches = objects;
      if (this.activeConfig.maxItems > 0) {
        matches = matches.slice(0, this.activeConfig.maxItems);
      }
    }
    if (this.searchList) {
      this.searchList.items = matches;
      this.searchList.hidden = matches.length == 0;
    }
  }
  showSearchList(nativeElement) {
    this.opened.emit();
    if (this.searchList == null) {
      let componentFactory = this._componentResolver.resolveComponentFactory(MentionListComponent);
      let componentRef = this._viewContainerRef.createComponent(componentFactory);
      this.searchList = componentRef.instance;
      this.searchList.itemTemplate = this.mentionListTemplate;
      componentRef.instance["itemClick"].subscribe(() => {
        nativeElement.focus();
        let fakeKeydown = {
          key: "Enter",
          keyCode: KEY_ENTER,
          wasClick: true
        };
        this.keyHandler(fakeKeydown, nativeElement);
      });
    }
    this.searchList.labelKey = this.activeConfig.labelKey;
    this.searchList.dropUp = this.activeConfig.dropUp;
    this.searchList.styleOff = this.mentionConfig.disableStyle;
    this.searchList.activeIndex = 0;
    this.searchList.position(nativeElement, this.iframe);
    window.requestAnimationFrame(() => this.searchList.reset());
  }
};
MentionDirective.ɵfac = function MentionDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MentionDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ComponentFactoryResolver$1), ɵɵdirectiveInject(ViewContainerRef));
};
MentionDirective.ɵdir = ɵɵdefineDirective({
  type: MentionDirective,
  selectors: [["", "mention", ""], ["", "mentionConfig", ""]],
  hostAttrs: ["autocomplete", "off"],
  hostBindings: function MentionDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown", function MentionDirective_keydown_HostBindingHandler($event) {
        return ctx.keyHandler($event);
      })("input", function MentionDirective_input_HostBindingHandler($event) {
        return ctx.inputHandler($event);
      })("blur", function MentionDirective_blur_HostBindingHandler($event) {
        return ctx.blurHandler($event);
      });
    }
  },
  inputs: {
    mention: "mention",
    mentionConfig: "mentionConfig",
    mentionListTemplate: "mentionListTemplate"
  },
  outputs: {
    searchTerm: "searchTerm",
    itemSelected: "itemSelected",
    opened: "opened",
    closed: "closed"
  },
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MentionDirective, [{
    type: Directive,
    args: [{
      selector: "[mention], [mentionConfig]",
      host: {
        "(keydown)": "keyHandler($event)",
        "(input)": "inputHandler($event)",
        "(blur)": "blurHandler($event)",
        "autocomplete": "off"
      }
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ComponentFactoryResolver$1
    }, {
      type: ViewContainerRef
    }];
  }, {
    mention: [{
      type: Input,
      args: ["mention"]
    }],
    mentionConfig: [{
      type: Input
    }],
    mentionListTemplate: [{
      type: Input
    }],
    searchTerm: [{
      type: Output
    }],
    itemSelected: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    closed: [{
      type: Output
    }]
  });
})();
var MentionModule = class {
};
MentionModule.ɵfac = function MentionModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MentionModule)();
};
MentionModule.ɵmod = ɵɵdefineNgModule({
  type: MentionModule,
  declarations: [MentionDirective, MentionListComponent],
  imports: [CommonModule],
  exports: [MentionDirective]
});
MentionModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MentionModule, [{
    type: NgModule,
    args: [{
      declarations: [MentionDirective, MentionListComponent],
      imports: [CommonModule],
      exports: [MentionDirective]
    }]
  }], null, null);
})();
export {
  MentionDirective,
  MentionModule
};
//# sourceMappingURL=angular-mentions.js.map
