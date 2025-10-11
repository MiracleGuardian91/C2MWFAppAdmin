import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormViewApiService } from '@app/core/services/form-view-api.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBatchUpdateDmo } from '../../models';
import { NgIf, AsyncPipe } from '@angular/common';
import { AssociationComponent } from '../../../lib/association/association.component';

@Component({
    selector: 'app-batch-update',
    templateUrl: './batch-update.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgIf,
        AssociationComponent,
        AsyncPipe,
    ],
})
export class BatchUpdateComponent implements OnInit {
  bmId: string;
  processId: string;
  associations$: Observable<any[]>;
  selectedItems: IBatchUpdateDmo[];

  constructor(
    readonly formViewApi: FormViewApiService,
    public ref: NgbActiveModal,
  ) {}

  ngOnInit(): void {
    this.associations$ = this.getBatchUpdateDmos(this.bmId);
  }

  getBatchUpdateDmos(bmId: string) {
    return forkJoin([
      this.formViewApi.getDmosByBMId(bmId),
      this.formViewApi.getSelectedDmosForBatchUpdate(bmId).pipe(map(res => res.Table)),
    ])
    .pipe(
      map(([all, selected]) => {
        const updatedSelected = [];
        selected.forEach(item => {
          const found = all.find(rec => +rec.dmoid === item.dmoid);
          if (found) {
            found['selected'] = true;
            updatedSelected.push(found);          
          }
        });
        return [all, updatedSelected]
      }),
    );
  }

  onSelect = (items: IBatchUpdateDmo[]) => this.selectedItems = items;
  displayWith = (item: IBatchUpdateDmo) => `${item.bmoNameArea} > ${item.dmogNameArea} > ${item.dmoNameArea}`;
  uniqueWith = (item: IBatchUpdateDmo) => item.dmoid;
  onSubmit() {
    const ids = this.selectedItems.map(item => item.dmoid).toString();
    this.formViewApi.saveBatchUpdateDmos(this.bmId, this.processId, ids).subscribe(res => this.ref.close(res));
  }

}
