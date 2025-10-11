import { Injectable } from '@angular/core';
import { UserDetail } from '@app/core/models/user-detail';
import { BMO } from '@lib/models';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DetailViewService {
  private readonly _tabChange = new Subject<BMO>();
  private readonly _triggerFired = new Subject<string>();
  private readonly _currentState = new BehaviorSubject<string>(null);

  readonly tabChange$ = this._tabChange.asObservable();
  readonly triggerFired$ = this._triggerFired.asObservable();
  readonly currentState$ = this._currentState.asObservable();

  constructor(private readonly user: UserDetail) { }

  showRevertTrigger(opts: RevertTriggerOpts) {
    return true;
  }

  showSaveTrigger() {
    return true;
  }

  changeTab(bmo: BMO) {
    this._tabChange.next(bmo);
  }

  fireTrigger(triggerName: string) {
    this._triggerFired.next(triggerName);
  }

  updateCurrentState(guid: string) {
    this._currentState.next(guid);
  }
}

type RevertTriggerOpts = {
  processName: string;
  stateGuid: string;
};
