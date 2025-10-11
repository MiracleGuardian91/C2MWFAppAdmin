import { EventBus, EventType } from "../models/bpmn";

export class DiagramInit {
  constructor(private eventBus: EventBus) {}
  private _initComplete = false;
  private static $inject = ['eventBus'];

  get initComplete() {
    return this._initComplete;
  }

  public completeInit() {
    this._initComplete = true;
    this.eventBus.fire(EventType.InitComplete, {initComplete: this._initComplete})
  }
}