import { EventBus, EventType, Modeling } from "../models/bpmn";
import { DiagramEl,ConnectionShape,Parent,Label,Shape, } from '../models/bpmn';

export class ReadOnly<T extends ConnectionShape, U extends DiagramEl, V extends Label, W extends Parent, X extends Shape> {
  private _readOnly = false;
  constructor(
    private eventBus: EventBus,
    private contextPad: any,
    private dragging: any,
    private directEditing: any,
    private editorActions: any,
    private modeling: Modeling<T, U, V, W, X>,
    private palette: any,
    private paletteProvider: any,
  ) {
    eventBus.on(EventType.ReadonlyMode, ({readOnly}) => {
      this._readOnly = readOnly;
      if (this._readOnly) {
        this.directEditing.cancel();
        this.contextPad.close();
        this.dragging.cancel();
        palette.close();
        const el: HTMLDivElement = document.querySelector('.djs-palette');
        el.style.display = 'none';
      } else {
        palette.open();
      }
      // this.palette._update();
    });

    this.ignore(this.contextPad, 'open');
    this.ignore(this.dragging, 'init');
    this.ignore(this.directEditing, 'activate');
    this.ignore(this.paletteProvider, 'getPaletteEntries');
    
    const ignoredActions = ['undo', 'redo', 'copy', 'paste', 'removeSelection'];
    const ignoredTools = ['spaceTool', 'lassoTool', 'globalConnectTool', 'distributeElements', 'alignElements', 'directEditing'];
    const ignoredModelingActions = [
      'moveShape', 'updateAttachment', 'moveElements', 'moveConnection', 'layoutConnection', 'createConnection',
      'createShape', 'createLabel', 'appendShape', 'removeElements', 'distributeElements', 'removeShape', 'removeConnection',
      'replaceShape', 'pasteElements', 'alignElements', 'resizeShape', 'createSpace', 'updateWaypoints', 'reconnectStart', 'reconnectEnd'
    ];
    ignoredModelingActions.forEach(action => this.ignore(this.modeling, action))
    eventBus.on(EventType.InitializeEditorActions, () => {
      ignoredActions.forEach(action => this.ignore(this.editorActions._actions, action));
      ignoredTools.forEach(tool => this.ignore(this.editorActions._actions, tool));
    });
  }

  public readOnly(val: boolean) {
    let newValue = !!val,
      oldValue = !!this._readOnly;

    if (val === undefined || newValue === oldValue) {
      return oldValue;
    }

    this._readOnly = newValue;
    this.eventBus.fire(EventType.ReadonlyMode, { readOnly: newValue });
    return newValue;
  }

  private static $inject = [
    'eventBus',
    'contextPad',
    'dragging',
    'directEditing',
    'editorActions',
    'modeling',
    'palette',
    'paletteProvider',
  ];

  private intercept(caller: any, fnName: string, cb: Function) {
    let fn = caller[fnName];
    caller[fnName] = function () {
      return cb.call(caller, fn, arguments);
    };
  }

  private ignore(caller: any, fnName: string) {
    this.intercept(caller, fnName, (fn: Function, args: IArguments) => {
      if (this._readOnly) {
        return;
      }

      return fn.apply(caller, args);
    });
  }
  
}