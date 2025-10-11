import { assign } from 'min-dash';
import {
  DiagramEl,
  ElementFactory,
  ElementType,
  EventDef,
} from '../models/bpmn';

const t = ElementType;

export default function CustomPalette(
  palette: any,
  create: any,
  elementFactory: ElementFactory,
  translate: any,
  spaceTool: any,
  lassoTool: any,
  bpmnFactory: any
) {
  this._palette = palette;
  this._create = create;
  this._elementFactory = elementFactory;
  this._translate = translate;
  this._spaceTool = spaceTool;
  this._lassoTool = lassoTool;
  this._bpmnFactory = bpmnFactory;
  this._isAiFlow = location.pathname?.includes('ai-flow')
  

  palette.registerProvider(this);

  // Initialize keyboard shortcuts
  //this.initKeyboardShortcuts();
}

// Inject necessary dependencies
CustomPalette.$inject = ['palette', 'create', 'elementFactory', 'translate', 'spaceTool', 'lassoTool', 'bpmnFactory'];

CustomPalette.prototype.initKeyboardShortcuts = function () {
  const self = this;

  document.addEventListener('keydown', function (event) {
    if (event.shiftKey && event.altKey && event.code === 'KeyS') {
      event.preventDefault();
      self.activateSpaceTool();
    }

    if (event.shiftKey && event.altKey && event.code === 'KeyL') {
      event.preventDefault();
      self.activateLassoTool();
    }
  });
};

CustomPalette.prototype.activateSpaceTool = function () {
  if (this._spaceTool) {
    this._spaceTool.activateSelection();
    console.log('Space Tool activated');
  } else {
    console.warn('Space Tool service not found.');
  }
};

CustomPalette.prototype.activateLassoTool = function () {
  if (this._lassoTool) {
    this._lassoTool.activateSelection();
    console.log('Lasso Tool activated');
  } else {
    console.warn('Lasso Tool service not found.');
  }
};

CustomPalette.prototype.getPaletteEntries = function (_element: DiagramEl) {
  const actions = {},
    create = this._create,
    elementFactory = this._elementFactory,
    translate = this._translate,
    bpmnFactory = this._bpmnFactory;

  function createAction(
    type: ElementType,
    group: string,
    className: string,
    title: string,
    options?: any
  ) {
    function createListener(event: any) {
      const shape = elementFactory.createShape(assign({ type: type }, options));
  
        if (options) {
          const di = shape.di || shape.businessObject?.di;
          if (di) {
            di.isExpanded = options.isExpanded;
          }
        }
  
        create.start(event, shape);
      
    }

    const shortType = type.replace(/^bpmn:/, '');

    return {
      group: group,
      className: className,
      title: title || translate('Create {type}', { type: shortType }),
      action: {
        dragstart: createListener,
        click: createListener,
      },
    };
  }

  function createSubprocess(event: any) {
    const subProcess = elementFactory.createShape({
      type: ElementType.SubProcess,
      x: 0,
      y: 0,
    });

    create.start(event, [subProcess], {});
  }

  function createParticipant(event: any) {
    create.start(event, elementFactory.createParticipantShape());
  }

  if(this._isAiFlow){
    assign(actions, {
      'create.start-event': createAction(
        t.StartState,
        'event',
        'bpmn-icon-start-event-none',
        translate('Start')
      ),
      'create.end-event': createAction(
        t.EndState,
        'event',
        'bpmn-icon-end-event-none',
        translate('End')
      ),
      'create.intermediate-event': createAction(
        t.State,
        'event',
        'bpmn-icon-task',
        translate('Agent')
      ),
      'create.exclusive-gateway': createAction(
        t.Gateway,
        'event',
        'bpmn-icon-gateway-none',
        translate('Switch')
      ),
      'create.text-annotation': createAction(
        t.Annotation,
        'event',
        'bpmn-icon-text-annotation',
        translate('Text Annotation')
      ),
      'create-api': createAction(
        t.API,
        'event',
        'bpmn-api',
        translate('API')
      ),
     'create-data-schema': createAction(
        t.DataSchema,
        'event',
        'bpmn-data-schema',
        translate('Data schema')
    ),
      'create-human-in-loop': createAction(
        t.HumanInLoop,
        'event',
        'bpmn-human-in-loop',
        translate('Human in the loop')
      ),
      'create-llm': createAction(
        t.LLM,
        'event',
        'bpmn-llm',
        translate('LLM'),
      ),
       'create-prompt-variable': createAction(
        t.PromptVariable,
        'event',
        'bpmn-prompt-variable',
        translate('Prompt variable')
       ),
      'create-scheduler': createAction(
        t.Scheduler, 
        'event',
        'bpmn-scheduler',
        translate('Scheduler'),        
      ),
      'create-sql-query': createAction(
       t.SqlQuery,
       'event',
       'bpmn-sql-query',
       translate('SQL query')
      ),
      'create-vector': createAction(
        t.Vector,
        'event',
       'bpmn-vector',
        translate('Vector'),        
      ),
      'create.subprocess': {
        group: 'event',
        className: 'bpmn-icon-subprocess-collapsed',
        title: translate('Agentic Flow'),
        action: {
          dragstart: createSubprocess,
          click: createSubprocess,
        },
      },
      
    })
  }else{
    assign(actions, {
      'create.participant-expanded': {
        group: 'collaboration',
        className: 'bpmn-icon-participant',
        title: translate('Pool/Participant'),
        action: {
          dragstart: createParticipant,
          click: createParticipant,
        },
      },
      'create.start-event': createAction(
        t.StartState,
        'event',
        'bpmn-icon-start-event-none',
        translate('Start State')
      ),
      'create.intermediate-event': createAction(
        t.State,
        'event',
        'bpmn-icon-task',
        translate('Intermediate State')
      ),
      'create.exclusive-gateway': createAction(
        t.Gateway,
        'event',
        'bpmn-icon-gateway-none',
        translate('Exclusive Gateway')
      ),
      'create.intermediate-catch-event': createAction(
        t.TriggerExtension,
        'event',
        'bpmn-icon-intermediate-event-catch-timer',
        translate('Timer Trigger'),
        { eventDefinitionType: EventDef.Timer }
      ),
      // 'create.message-intermediate-catch-event': createAction(
      //   t.TriggerExtension,
      //   'event',
      //   'bpmn-icon-intermediate-event-catch-message',
      //   translate('Notify Trigger'),
      //   { eventDefinitionType: EventDef.Notify }
      // ),
      'create.condition-intermediate-catch-event': createAction(
        t.TriggerExtension,
        'event',
        'bpmn-icon-intermediate-event-catch-condition',
        translate('System Trigger'),
        { eventDefinitionType: EventDef.System }
      ),
      'create.text-annotation': createAction(
        t.Annotation,
        'event',
        'bpmn-icon-text-annotation',
        translate('Text Annotation')
      ),
      'create.end-event': createAction(
        t.EndState,
        'event',
        'bpmn-icon-end-event-none',
        translate('End State')
      ),
      'create.subprocess': {
        group: 'event',
        className: 'bpmn-icon-subprocess-collapsed',
        title: translate('SubProcess'),
        action: {
          dragstart: createSubprocess,
          click: createSubprocess,
        },
      },
      // Add Space Tool
      'tool.space': {
        group: 'tools',
        className: 'bpmn-icon-space-tool d-none',
        title: translate('Space Tool'),
        action: {
          click: this.activateSpaceTool.bind(this),
        },
      },
      // Add Lasso Tool
      'tool.lasso': {
        group: 'tools',
        className: 'bpmn-icon-lasso-tool d-none',
        title: translate('Lasso Tool'),
        action: {
          click: this.activateLassoTool.bind(this),
        },
      },
    });
  }

  return actions;
};
