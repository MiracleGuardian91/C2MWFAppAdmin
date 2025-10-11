import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilService } from '@app/shared/services/util.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-simple-loader',
  templateUrl: './simple-loader.component.html',
  styleUrls: ['./simple-loader.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SimpleLoaderComponent implements OnInit, OnDestroy {
  icons = [
    { src: UtilService.getUrlForImage('/assets/styles/images/icon-2.svg'), alt: 'Icon 2' },
    { src: UtilService.getUrlForImage('/assets/styles/images/icon-1.svg'), alt: 'Icon 1' },
    { src: UtilService.getUrlForImage('/assets/styles/images/icon-3.svg'), alt: 'Icon 3' },
    { src: UtilService.getUrlForImage('/assets/styles/images/icon-4.svg'), alt: 'Icon 4' },
    { src: UtilService.getUrlForImage('/assets/styles/images/icon-2.svg'), alt: 'Icon 2 Duplicate' },
    { src: UtilService.getUrlForImage('/assets/styles/images/icon-1.svg'), alt: 'Icon 1 Duplicate' },
    { src: UtilService.getUrlForImage('/assets/styles/images/icon-3.svg'), alt: 'Icon 3 Duplicate' }
  ];

  loaderSvgUrl = UtilService.getUrlForImage('/assets/styles/images/clean_loader.svg');

  itemWidth = 70;
  currentIndex = 0;
  trackTranslate = 0;
  carouselSub?: Subscription;

  ngOnInit(): void {
    this.updateActive();
    this.carouselSub = interval(500).subscribe(() => this.slideNext());
  }

  ngOnDestroy(): void {
    this.carouselSub?.unsubscribe();
  }

  slideNext(): void {
    this.currentIndex++;
    if (this.currentIndex >= this.icons.length - 2) {
      setTimeout(() => {
        this.currentIndex = 0;
        this.updateActive(false);
      }, 400);
    } else {
      this.updateActive(true);
    }
  }

  updateActive(withTransition = true): void {
    const offset = this.currentIndex * this.itemWidth;
    this.trackTranslate = offset;
  }

  isActive(index: number): boolean {
    return index === this.currentIndex + 1;
  }
}
