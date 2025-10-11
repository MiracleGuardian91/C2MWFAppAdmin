import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilService } from '@app/shared/services/util.service';
import { interval, Subscription } from 'rxjs';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class LoaderAComponent implements OnInit, OnDestroy {
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
@Component({
  selector: 'app-loader-b',
  template: `<div class="lds-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>`,
  styles: [`.lds-ring {
  position: fixed;
  z-index: 999999;
  width: 50px;
  height: 50px;
  overflow: visible;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0px;
}

.lds-ring:before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 45px;
  height: 45px;
  margin: 6px;
  border: 6px solid #EB583B;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #EB583B transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
`]
})
export class LoaderBComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
