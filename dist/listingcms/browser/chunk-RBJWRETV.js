import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  ɵNgSelectMultipleOption
} from "./chunk-L2L6ECIJ.js";
import {
  forwardRef,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-ZQT4GMOS.js";

// src/app/admin/Shared/editor/editor.component.ts
var _c0 = ["editor"];
var EditorComponent = class _EditorComponent {
  constructor() {
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.value = "";
    this.showSource = false;
    this.history = [];
    this.historyIndex = -1;
  }
  ngAfterViewInit() {
    if (!this.editor) {
      console.error("Editor is not initialized!");
      return;
    }
    this.setupLinkHoverHandlers();
  }
  writeValue(value) {
    this.value = value || "";
    setTimeout(() => {
      if (this.editor) {
        this.editor.nativeElement.innerHTML = this.value;
      }
    });
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /*updateContent(): void {
    if (this.editor) {
      this.value = this.editor.nativeElement.innerHTML;
      this.onChange(this.value);
    }
  }*/
  alignText(align) {
    const selection = window.getSelection();
    if (!selection?.rangeCount)
      return;
    const range = selection.getRangeAt(0);
    let currentNode = range.startContainer;
    while (currentNode?.parentElement) {
      if (currentNode.parentElement instanceof HTMLDivElement || currentNode.parentElement instanceof HTMLParagraphElement) {
        currentNode = currentNode.parentElement;
        break;
      }
      currentNode = currentNode.parentElement;
    }
    if (currentNode instanceof HTMLElement) {
      currentNode.style.textAlign = align;
      this.updateContent();
    }
  }
  formatText(style) {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0)
      return;
    const range = selection.getRangeAt(0);
    if (range.collapsed)
      return;
    const parentElement = this.getParentTag(range.commonAncestorContainer, style);
    if (parentElement) {
      const span = document.createElement("span");
      span.innerHTML = parentElement.innerHTML;
      span.style.cssText = parentElement.style.cssText;
      parentElement.replaceWith(span);
    } else {
      let tagName;
      if (style === "bold") {
        tagName = "b";
      } else if (style === "italic") {
        tagName = "i";
      } else {
        tagName = "u";
      }
      const element = document.createElement(tagName);
      const span = document.createElement("span");
      span.appendChild(range.extractContents());
      span.style.cssText = range.commonAncestorContainer.parentElement?.style.cssText || "";
      element.appendChild(span);
      range.insertNode(element);
    }
    this.updateContent();
  }
  /**
   * Helper function to check if the selected text is already inside a specific tag (b, i, u).
   */
  getParentTag(node, tag) {
    let expectedTag;
    if (tag === "bold") {
      expectedTag = "b";
    } else if (tag === "italic") {
      expectedTag = "i";
    } else {
      expectedTag = "u";
    }
    while (node && node !== this.editor?.nativeElement) {
      if (node instanceof HTMLElement && node.tagName.toLowerCase() === expectedTag) {
        return node;
      }
      node = node.parentNode;
    }
    return null;
  }
  /**
   * Checks if the current selection has the specified format
   * Used to highlight formatting buttons when formatted text is selected
   */
  isFormatActive(format) {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
      return false;
    }
    const range = selection.getRangeAt(0);
    let node = range.commonAncestorContainer;
    return this.getParentTag(node, format) !== null;
  }
  changeTextColor(event) {
    const color = event.target.value;
    this.applyStyle("color", color);
  }
  changeBgColor(event) {
    const color = event.target.value;
    this.applyStyle("backgroundColor", color);
  }
  applyStyle(property, value) {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0)
      return;
    const range = selection.getRangeAt(0);
    if (range.collapsed)
      return;
    const span = document.createElement("span");
    span.style[property] = value;
    span.innerHTML = range.toString();
    range.deleteContents();
    range.insertNode(span);
    this.updateContent();
  }
  updateContent() {
    if (this.editor) {
      this.value = this.editor.nativeElement.innerHTML;
      this.onChange(this.value);
      this.saveToHistory();
    }
  }
  saveToHistory() {
    if (this.historyIndex < this.history.length - 1) {
      this.history.splice(this.historyIndex + 1);
    }
    this.history.push(this.value);
    this.historyIndex = this.history.length - 1;
  }
  undo() {
    if (this.historyIndex > 0) {
      this.historyIndex--;
      this.value = this.history[this.historyIndex];
      this.editor.nativeElement.innerHTML = this.value;
    }
  }
  redo() {
    if (this.historyIndex < this.history.length - 1) {
      this.historyIndex++;
      this.value = this.history[this.historyIndex];
      this.editor.nativeElement.innerHTML = this.value;
    }
  }
  insertList(type) {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0)
      return;
    const range = selection.getRangeAt(0);
    const list = document.createElement(type);
    const listItem = document.createElement("li");
    listItem.textContent = selection.toString();
    list.appendChild(listItem);
    range.deleteContents();
    range.insertNode(list);
    this.updateContent();
  }
  applyBlockFormat(tag) {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0)
      return;
    const range = selection.getRangeAt(0);
    const selectedContent = range.extractContents();
    const blockElement = document.createElement(tag);
    blockElement.appendChild(selectedContent);
    range.insertNode(blockElement);
    selection.removeAllRanges();
    const newRange = document.createRange();
    newRange.selectNodeContents(blockElement);
    newRange.collapse(false);
    selection.addRange(newRange);
  }
  execCommand(command, value) {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0)
      return;
    const range = selection.getRangeAt(0);
    const span = document.createElement("span");
    switch (command) {
      case "bold":
        span.style.fontWeight = "bold";
        break;
      case "italic":
        span.style.fontStyle = "italic";
        break;
      case "underline":
        span.style.textDecoration = "underline";
        break;
      default:
        console.warn(`Unsupported command: ${command}`);
        return;
    }
    span.textContent = range.toString();
    range.deleteContents();
    range.insertNode(span);
    this.updateContent();
  }
  insertLink() {
    const url = prompt("Enter URL:");
    if (!url)
      return;
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0)
      return;
    const range = selection.getRangeAt(0);
    const link = document.createElement("a");
    link.href = url;
    link.textContent = selection.toString() || url;
    link.target = "_blank";
    link.style.wordBreak = "break-word";
    range.deleteContents();
    range.insertNode(link);
    this.updateContent();
  }
  insertTable() {
    const rows = Number(prompt("Enter number of rows:", "2"));
    const cols = Number(prompt("Enter number of columns:", "2"));
    if (rows > 0 && cols > 0) {
      let table = '<table border="1" style="border-collapse: collapse; width: 100%;">';
      for (let i = 0; i < rows; i++) {
        table += "<tr>";
        for (let j = 0; j < cols; j++) {
          table += '<td contenteditable="true">&nbsp;</td>';
        }
        table += "</tr>";
      }
      table += "</table>";
      this.editor.nativeElement.insertAdjacentHTML("beforeend", table);
      this.updateContent();
    }
  }
  toggleSource() {
    this.showSource = !this.showSource;
    if (this.showSource) {
      this.value = this.editor.nativeElement.innerHTML;
    } else {
      this.editor.nativeElement.innerHTML = this.value;
      this.setupLinkHoverHandlers();
    }
  }
  /**
   * Setup event listeners for link hover behavior
   */
  setupLinkHoverHandlers() {
    const observer = new MutationObserver(() => {
      this.attachLinkHoverHandlers();
    });
    observer.observe(this.editor.nativeElement, {
      childList: true,
      subtree: true,
      characterData: true
    });
    this.attachLinkHoverHandlers();
  }
  /**
   * Attach hover handlers to all links in the editor
   */
  attachLinkHoverHandlers() {
    const links = this.editor.nativeElement.querySelectorAll("a");
    links.forEach((link) => {
      if (link.hasAttribute("data-hover-attached")) {
        return;
      }
      link.setAttribute("data-hover-attached", "true");
      link.addEventListener("mouseenter", () => {
        if (!link.querySelector(".link-launch-icon")) {
          const launchIcon = document.createElement("span");
          launchIcon.className = "link-launch-icon";
          launchIcon.innerHTML = "\u{1F517}";
          launchIcon.title = "Open link in new tab";
          launchIcon.style.cursor = "pointer";
          launchIcon.style.marginLeft = "4px";
          launchIcon.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(link.href, "_blank");
          });
          link.appendChild(launchIcon);
        }
      });
      link.addEventListener("mouseleave", (e) => {
        const relatedTarget = e.relatedTarget;
        if (!relatedTarget || !link.contains(relatedTarget)) {
          const icon = link.querySelector(".link-launch-icon");
          if (icon) {
            link.removeChild(icon);
          }
        }
      });
    });
  }
  static {
    this.\u0275fac = function EditorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditorComponent, selectors: [["app-editor"]], viewQuery: function EditorComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editor = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _EditorComponent),
        multi: true
      }
    ]), \u0275\u0275StandaloneFeature], decls: 48, vars: 9, consts: [["editor", ""], [1, "toolbar"], [3, "change"], ["value", "p"], ["value", "h1"], ["value", "h2"], ["value", "h3"], ["value", "h4"], ["value", "h5"], [3, "click"], ["title", "Align Left", 3, "click"], [1, "fas", "fa-align-left"], ["title", "Align Center", 3, "click"], [1, "fas", "fa-align-center"], ["title", "Align Right", 3, "click"], [1, "fas", "fa-align-right"], ["title", "Unordered List", 3, "click"], [1, "fas", "fa-list-ul"], ["title", "Ordered List", 3, "click"], [1, "fas", "fa-list-ol"], ["title", "Insert Table", 3, "click"], [1, "fas", "fa-table"], ["title", "Insert Link", 3, "click"], [1, "fas", "fa-link"], ["type", "color", "title", "Text Color", 3, "input"], ["type", "color", "title", "Background Color", 3, "input"], ["contenteditable", "true", 1, "editor", 3, "input", "hidden"], [1, "source-code", 3, "ngModelChange", "ngModel", "hidden"]], template: function EditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "select", 2);
        \u0275\u0275listener("change", function EditorComponent_Template_select_change_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.applyBlockFormat($event.target.value));
        });
        \u0275\u0275elementStart(2, "option", 3);
        \u0275\u0275text(3, "Paragraph");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "option", 4);
        \u0275\u0275text(5, "Heading 1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "option", 5);
        \u0275\u0275text(7, "Heading 2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "option", 6);
        \u0275\u0275text(9, "Heading 3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "option", 7);
        \u0275\u0275text(11, "Heading 4");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "option", 8);
        \u0275\u0275text(13, "Heading 5");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "button", 9);
        \u0275\u0275listener("click", function EditorComponent_Template_button_click_14_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.formatText("bold"));
        });
        \u0275\u0275elementStart(15, "b");
        \u0275\u0275text(16, "B");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "button", 9);
        \u0275\u0275listener("click", function EditorComponent_Template_button_click_17_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.formatText("italic"));
        });
        \u0275\u0275elementStart(18, "i");
        \u0275\u0275text(19, "I");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "button", 9);
        \u0275\u0275listener("click", function EditorComponent_Template_button_click_20_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.formatText("underline"));
        });
        \u0275\u0275elementStart(21, "u");
        \u0275\u0275text(22, "U");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "button", 10);
        \u0275\u0275listener("click", function EditorComponent_Template_button_click_23_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.alignText("left"));
        });
        \u0275\u0275element(24, "i", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "button", 12);
        \u0275\u0275listener("click", function EditorComponent_Template_button_click_25_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.alignText("center"));
        });
        \u0275\u0275element(26, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 14);
        \u0275\u0275listener("click", function EditorComponent_Template_button_click_27_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.alignText("right"));
        });
        \u0275\u0275element(28, "i", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "button", 16);
        \u0275\u0275listener("click", function EditorComponent_Template_button_click_29_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.insertList("ul"));
        });
        \u0275\u0275element(30, "i", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "button", 18);
        \u0275\u0275listener("click", function EditorComponent_Template_button_click_31_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.insertList("ol"));
        });
        \u0275\u0275element(32, "i", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "button", 20);
        \u0275\u0275listener("click", function EditorComponent_Template_button_click_33_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.insertTable());
        });
        \u0275\u0275element(34, "i", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "button", 22);
        \u0275\u0275listener("click", function EditorComponent_Template_button_click_35_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.insertLink());
        });
        \u0275\u0275element(36, "i", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "input", 24);
        \u0275\u0275listener("input", function EditorComponent_Template_input_input_37_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.changeTextColor($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "input", 25);
        \u0275\u0275listener("input", function EditorComponent_Template_input_input_38_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.changeBgColor($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "button", 9);
        \u0275\u0275listener("click", function EditorComponent_Template_button_click_39_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.undo());
        });
        \u0275\u0275text(40, "\u21A9 Undo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "button", 9);
        \u0275\u0275listener("click", function EditorComponent_Template_button_click_41_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.redo());
        });
        \u0275\u0275text(42, "\u21AA Redo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "button", 9);
        \u0275\u0275listener("click", function EditorComponent_Template_button_click_43_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleSource());
        });
        \u0275\u0275text(44, "\u{1F4DD} Source");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 26, 0);
        \u0275\u0275listener("input", function EditorComponent_Template_div_input_45_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.updateContent());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "textarea", 27);
        \u0275\u0275twoWayListener("ngModelChange", function EditorComponent_Template_textarea_ngModelChange_47_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275classProp("active", ctx.isFormatActive("bold"));
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.isFormatActive("italic"));
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.isFormatActive("underline"));
        \u0275\u0275advance(25);
        \u0275\u0275property("hidden", ctx.showSource);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.value);
        \u0275\u0275property("hidden", !ctx.showSource);
      }
    }, dependencies: [ReactiveFormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, FormsModule, NgModel], styles: ['\n\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  padding: 5px;\n  background: #f1f1f1;\n  border: 1px solid #ccc;\n}\nbutton[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%] {\n  font-family: "Museo Sans", sans-serif;\n  padding: 5px;\n  font-size: 14px;\n  border: 1px solid #ccc;\n  background: white;\n  cursor: pointer;\n}\n.editor[_ngcontent-%COMP%] {\n  height: 100px;\n  border: 1px solid #ccc;\n  padding: 10px;\n  background: #fff;\n  overflow-y: scroll;\n}\n.editor[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.source-code[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  border: 1px solid #ccc;\n  font-family: monospace;\n  padding: 10px;\n}\n.color-picker[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  cursor: pointer;\n  opacity: 0;\n  position: relative;\n  left: 0;\n  top: 0;\n}\nlabel[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 5px;\n  font-size: 18px;\n}\nlabel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\nbutton.active[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  border-color: #999;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=editor.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditorComponent, { className: "EditorComponent", filePath: "src\\app\\admin\\Shared\\editor\\editor.component.ts", lineNumber: 18 });
})();

export {
  EditorComponent
};
//# sourceMappingURL=chunk-RBJWRETV.js.map
