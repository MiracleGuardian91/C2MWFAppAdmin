import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormViewApiService } from '@app/core/services/form-view-api.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBatchUpdateDmo } from '../../models';
import { NgIf, AsyncPipe } from '@angular/common';
import { AssociationComponent } from '../../../lib/association/association.component';

type Item = IBatchUpdateDmo & {selected?: boolean};

@Component({
    selector: 'app-bulk-trigger',
    templateUrl: './bulk-trigger.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgIf,
        AssociationComponent,
        AsyncPipe,
    ],
})
export class BulkTriggerComponent implements OnInit {
  bmId: string;
  processId: string;
  associations$: Observable<any[]>;
  selectedItems: Item[];

  constructor(
    private formViewApi: FormViewApiService,
    public ref: NgbActiveModal,
  ) {}

  ngOnInit(): void {
    this.associations$ = this.getBatchUpdateDmos(this.bmId);
  }

  getBatchUpdateDmos(bmId: string) {
    return forkJoin([
      this.formViewApi.getDmosByBMId(bmId),
      this.formViewApi.getSelectedDmosForBulkTrigger(bmId).pipe(map(res => res.Table)),
    ]).pipe(
      map(([all, selected]) => {
        const updatedSelected = [];
        selected.forEach(item => {
          const found = all.find(rec => +rec.dmoid === item.dmoid);
          found['selected'] = true;
          updatedSelected.push(found);          
        });
        return [all, updatedSelected]
      }),
    );
  }
  onSelect = (items: Item[]) => this.selectedItems = items;
  displayWith = (item: Item) => `${item.bmoNameArea} > ${item.dmogNameArea} > ${item.dmoNameArea}`;
  uniqueWith = (item: Item) => item.dmoid;
  
  onSubmit() {
    const ids = this.selectedItems.map(item => item.dmoid).toString();
    this.formViewApi.saveBulkTriggerDmos(this.bmId, this.processId, ids).subscribe(res => this.ref.close(res));
  }
}
