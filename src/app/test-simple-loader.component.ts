import { Component } from '@angular/core';
import { ApiService } from '@app/admin/core/services/api.service';
import { SimpleLoaderService } from '@app/shared/services/simple-loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-simple-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 20px;">
      <h2>🎨 Enhanced API Service Loader Test</h2>
      <p><strong>All API methods now automatically show loaders!</strong></p>
      <p>Test different loaders based on URL patterns - each API method handles loaders automatically:</p>
      
      <div style="margin-bottom: 20px;">
        <button 
          class="btn btn-primary" 
          style="margin-right: 10px; padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;"
          (click)="testLoaderA()"
          [disabled]="isLoading">
          Test Loader A (SaveDmogProps)
        </button>
        
        <button 
          class="btn btn-info" 
          style="margin-right: 10px; padding: 10px 20px; background: #17a2b8; color: white; border: none; border-radius: 4px; cursor: pointer;"
          (click)="testLoaderB()"
          [disabled]="isLoading">
          Test Loader B (Other URLs)
        </button>
        
        <button 
          class="btn btn-secondary" 
          style="margin-right: 10px; padding: 10px 20px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;"
          (click)="testManualLoader()"
          [disabled]="isLoading">
          Test Manual Loader
        </button>
        
        <button 
          class="btn btn-warning" 
          style="margin-right: 10px; padding: 10px 20px; background: #ffc107; color: black; border: none; border-radius: 4px; cursor: pointer;"
          (click)="testGetRequest()"
          [disabled]="isLoading">
          Test GET Request (Auto Loader)
        </button>
        
        <button 
          class="btn btn-success" 
          style="padding: 10px 20px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;"
          (click)="hideLoader()">
          Force Hide Loader
        </button>
      </div>
      
      <div *ngIf="isLoading" style="font-weight: bold; padding: 15px; border-radius: 4px; margin: 10px 0; border: 2px solid;">
        <div *ngIf="loaderService.currentLoaderType === 'A'" style="color: #007bff; background: #e3f2fd; border-color: #007bff;">
          🎨 LOADER A ACTIVE - Fancy Carousel with Icons and Progress Bar!
        </div>
        <div *ngIf="loaderService.currentLoaderType === 'B'" style="color: #EB583B; background: #fff3e0; border-color: #EB583B;">
          🔧 LOADER B ACTIVE - Orange Spinning Ring Loader!
        </div>
      </div>
      
      <div *ngIf="lastResponse" style="margin-top: 20px;">
        <h4>Last Response:</h4>
        <pre style="background: #f8f9fa; padding: 10px; border-radius: 4px;">{{ lastResponse }}</pre>
      </div>
      
      <div *ngIf="lastError" style="margin-top: 20px; color: #dc3545;">
        <h4>Last Error:</h4>
        <p>{{ lastError }}</p>
      </div>
    </div>
  `
})
export class TestSimpleLoaderComponent {
  lastResponse: string = '';
  lastError: string = '';
  
  constructor(
    private apiService: ApiService,
    public loaderService: SimpleLoaderService
  ) {}

  get isLoading(): boolean {
    return this.loaderService.isLoading;
  }

  testLoaderA(): void {
    this.lastResponse = '';
    this.lastError = '';
    
    console.log('🎨 Testing Loader A - Should show fancy carousel loader (SaveDmogProps)...');
    
    // This should trigger Loader A (fancy carousel)
    this.apiService.postgateway('', 'SaveDmogProps', { test: 'data' })
      .subscribe({
        next: (response) => {
          console.log('✅ Loader A test completed');
          this.lastResponse = 'Loader A (Fancy Carousel) - SaveDmogProps URL triggered';
        },
        error: (error) => {
          console.log('❌ Loader A test error');
          this.lastError = error.message || 'Unknown error occurred';
        }
      });
  }

  testLoaderB(): void {
    this.lastResponse = '';
    this.lastError = '';
    
    console.log('🔧 Testing Loader B - Should show simple ring loader (Other URL)...');
    
    // This should trigger Loader B (simple ring)
    this.apiService.postgateway('', 'other-endpoint', { test: 'data' })
      .subscribe({
        next: (response) => {
          console.log('✅ Loader B test completed');
          this.lastResponse = 'Loader B (Simple Ring) - Other URL triggered';
        },
        error: (error) => {
          console.log('❌ Loader B test error');
          this.lastError = error.message || 'Unknown error occurred';
        }
      });
  }

  testManualLoader(): void {
    this.lastResponse = '';
    this.lastError = '';
    
    console.log('🔧 Testing manual fancy loader control...');
    
    // Show beautiful loader manually
    this.loaderService.show();
    
    // Simulate some work - enjoy the animations!
    setTimeout(() => {
      this.lastResponse = 'Manual fancy loader test completed! Did you see the icon carousel and progress bar?';
      this.loaderService.hide();
      console.log('✅ Manual fancy loader test completed');
    }, 5000);
  }

  testGetRequest(): void {
    this.lastResponse = '';
    this.lastError = '';
    
    console.log('📡 Testing GET Request - Should automatically show loader...');
    
    // API service now automatically shows loader for ALL HTTP requests
    this.apiService.get('test-get-endpoint')
      .subscribe({
        next: (response) => {
          console.log('✅ GET Request test completed');
          this.lastResponse = 'GET Request - Automatic loader detection by enhanced API service';
        },
        error: (error) => {
          console.log('❌ GET Request test error');
          this.lastError = error.message || 'Unknown error occurred';
        }
      });
  }

  hideLoader(): void {
    this.loaderService.hide();
    console.log('🛑 Loader manually hidden');
  }
}
