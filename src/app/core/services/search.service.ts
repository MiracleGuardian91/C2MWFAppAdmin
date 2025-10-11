import { Injectable } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ListviewService } from './list-view.service';

import { GridConfiguration, Condition, GridCondition, FilterType, GridFilter } from '..';
import { environment } from '@env/environment';

@Injectable({providedIn: 'root'})
export class SearchService {

  private _timezone = new Date().getTimezoneOffset();

  private _PICList = new BehaviorSubject<string[]>([]);

  private _categories = new BehaviorSubject<Array<CustomDropdown>>([]);
  private _products = new BehaviorSubject<Array<CustomDropdown>>([]);
  private _breeds = new BehaviorSubject<Array<CustomDropdown>>([]);

  get PICList() { return this._PICList.asObservable() }

  get productCategories(): Observable<Array<CustomDropdown>> { return this._categories.asObservable() }
  get products(): Observable<Array<CustomDropdown>> { return this._products.asObservable() }
  get productBreeds(): Observable<Array<CustomDropdown>> { return this._breeds.asObservable() }

  constructor(
    private listView: ListviewService, 
    private http: HttpClient,
    ) {}
}

const utilSort = (a: any, b: any) => {
  if (a.code > b.code) return 1;
  if (a.code < b.code) return - 1;
  return 0;
}

interface CustomDropdown {
  code: string;
  value: string;
}

export interface PostalInfo {
  location: string;
  state: string;
  postcode: number;
}

interface BidHistoryItem {
  BuyerName: string;
  TradingName: string;
  AccountNumber: string;
  BidStatus: string;
  State: string;
  PriceType: '$/head' | 'c/kg';
  BidAmount: string;
  BidDate: string;
  // BidTime?: string;
}

interface SearchResponse {
  Data: any[];
  RecordsCount: string;
  Begin: string;
  End: string;
  PageNumber: string;
  PageSize: string;
}