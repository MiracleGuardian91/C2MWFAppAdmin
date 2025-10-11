import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BmApiService } from '@app/admin/core/services/bm-api.service';
import { UniqueConstraintDMO } from '@app/admin/models';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgIf, AsyncPipe } from '@angular/common';
import { AssociationComponent } from '../../../lib/association/association.component';

type Item = UniqueConstraintDMO & { selected?: boolean };
@Component({
    selector: 'app-unique-constraint',
    templateUrl: './unique-constraint.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgIf,
        AssociationComponent,
        AsyncPipe,
    ],
})
export class UniqueConstraintComponent implements OnInit {
  bmId: string;
  selectedItems: Item[];
  associations$: Observable<Item[][]>;

  constructor(private readonly bmApi: BmApiService, public readonly ref: NgbActiveModal) {}

  ngOnInit() {
    this.associations$ = this.getUniqueDmos();
  }

  private getUniqueDmos = () => {
    return this.bmApi.getUniqueDmos(this.bmId).pipe(
      map(({ AvaialableDmo, SelectedDmo }) => {
        const updatedSelected = [];
        SelectedDmo.forEach((dmo) => {
          const found = AvaialableDmo.find((item) => item.DmoId === dmo.DmoId);
          found['selected'] = true;
          updatedSelected.push(found);
        });
        return [AvaialableDmo, updatedSelected];
      })
    );
  }

  onSelect = (items: Item[]) => (this.selectedItems = items);
  displayWith = (item: Item) => `${item.DisplayName}`;
  uniqueWith = (item: Item) => `${item.DmoId}`;
  onSubmit() {
    const ids = this.selectedItems.map((item) => item.DmoGuid).toString();
    this.bmApi.saveUniqueDmos(this.bmId, ids).subscribe((res) => this.ref.close(res));
  }
}
