import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UtilService } from '@app/shared/services/util.service';

@Component({
    selector: 'app-dm-header',
    template: `
    <header>
      <img [src]="imgUrl" alt="C2M Logo" style="height: 45px" />
      <span>Data Modeler</span>
    </header>
  `,
    styles: [`
      header {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #fff;
      background: #aaadaa;
      text-transform: uppercase;
      padding: 0.2rem 1rem;
      display:none;
    }
  `],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class DmHeaderComponent {
  readonly imgUrl = UtilService.getUrlForImage('/assets/styles/images/datamodeler-icon.png');
}
