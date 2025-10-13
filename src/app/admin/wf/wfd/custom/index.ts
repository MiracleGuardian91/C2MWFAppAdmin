import { CustomCommandInterceptor } from './custom-command-interceptor';
import { CustomContextPad } from './custom-context-pad';
import CustomPalette from './custom-palette';
import { CustomRules } from './custom-rules';
import { CustomResize } from './custom-resize';
import { ForceLaneSpace } from './custom-force-lane';
import { ShiftConnectionsByWaypoints } from './shift-connections-by-waypoints';
import { ConnectionOverlapModule } from './connection-overlap-module';
// import { FixConnectionsOnLaneResize } from './fix-connections-after-lane-resize';
import { ReadOnly } from './custom-readonly';
import CustomLabelEditingProvider from './custom-label-editing';
import CustomRenderer from './custom-renderer';
import CustomUpdater from './custom-updater';
import CustomElementFactory from './custom-element-factory';
import { DiagramInit } from './custom-diagram-init';
import { CustomAutoResize } from './custom-autoresize';
import LassoTool from './LassoTool';
import OutlineProvider from './outlineProvider';
import customElementRuleProvider from './custom-element-ruleProvider';
import BpmnRules from './bpmnRules';
import { SharedData } from './share-data';

export const customModules = {
  __init__: [
    'paletteProvider',
    'contextPadProvider',
    'labelEditingProvider',
    'customRules',
    'customCommands',
    'readonly',
    'diagramInit',
    'bpmnAutoResize',
    'lassoTool',
    'customElementRuleProvider',
    'outlineProvider',
    'bpmnRules',
    'sharedData',
    'customResize',
    'forceLaneSpace',
    'shiftConnectionsByWaypoints',
    'connectionOverlapModule',
    // 'fixConnectionsOnLaneResize',
  ],
  paletteProvider: ['type', CustomPalette],
  contextPadProvider: ['type', CustomContextPad],
  customRules: ['type', CustomRules],
  customCommands: ['type', CustomCommandInterceptor],
  readonly: ['type', ReadOnly],
  diagramInit: ['type', DiagramInit],
  labelEditingProvider: ['type', CustomLabelEditingProvider], // disables editing labels on double click
  removeParticipantBehavior: ['value', null], // disable pool conversion to process on pool delete,
  bpmnRenderer: ['type', CustomRenderer],
  elementFactory: ['type', CustomElementFactory],
  customUpdater: ['type', CustomUpdater],
  //elementFactory: ['type', CustomElementFactory],
  //autoResize: [ 'value', null ],
  bpmnAutoResize: ['type', CustomAutoResize],
  lassoTool: ['type', LassoTool],
  customElementRuleProvider: ['type', customElementRuleProvider],
  outlineProvider: ['type', OutlineProvider],
  bpmnRules: ['type', BpmnRules],
  sharedData: ['type', SharedData],
  customResize: ['type', CustomResize],
  forceLaneSpace: ['type', ForceLaneSpace],
  shiftConnectionsByWaypoints: ['type', ShiftConnectionsByWaypoints],
  connectionOverlapModule: ['type', ConnectionOverlapModule],
  // fixConnectionsOnLaneResize: ['type', FixConnectionsOnLaneResize],
  // autoPlace: ["value", null],
  // bpmnAutoPlace: ["value", null],
  // dropOnFlowBehavior: [ 'value', {} ],
  // gridSnapping: [ 'value', null ],
  // gridSnappingAutoPlaceBehavior: [ 'value', null ],
  // gridSnappingCreateParticipantBehavior: [ 'value', null ],
  // gridSnappingLayoutConnectionBehavior: [ 'value', null ],
  // gridSnappingResizeBehavior: [ 'value', null ],
  // gridSnappingSpaceToolBehavior: [ 'value', null ]
};
