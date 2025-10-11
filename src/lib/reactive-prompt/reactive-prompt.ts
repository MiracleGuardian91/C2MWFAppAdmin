import { Subject } from "rxjs";
import { take } from "rxjs/operators";

export class ReactivePrompt<T> {
  private readonly prompt = new Subject<T | null>();

  constructor(readonly data: T) {}

  /** Result emits only once. There is no need to clean up the subscription */
  readonly result$ = this.prompt.pipe(take(1));

  confirm() {
    this.prompt.next(this.data);
  };

  cancel() {
    this.prompt.next(null);
  }


}