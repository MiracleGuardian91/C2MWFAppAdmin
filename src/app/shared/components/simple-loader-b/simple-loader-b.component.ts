import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple-loader-b',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="lds-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>`,
  styles: [`
    .loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99999; 
  display: flex;
  align-items: center;
  justify-content: center;
}
    
    
    .lds-ring {
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
export class SimpleLoaderBComponent {
  constructor() { }
}
