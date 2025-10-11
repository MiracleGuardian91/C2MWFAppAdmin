import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root',
})
export class ApplicationApiService extends BaseHttpService {
  private readonly baseurl = `${environment.Setting.BaseAPIUrl}/application`;

 
}
