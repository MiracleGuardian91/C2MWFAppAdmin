import { Injectable, Output, EventEmitter, Directive } from '@angular/core';
import { ApiService } from './api.service';
@Directive()
@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  Count: number;
  constructor(private api: ApiService) { }

  @Output() change: EventEmitter<number> = new EventEmitter(); 

  
}
