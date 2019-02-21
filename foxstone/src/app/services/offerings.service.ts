import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../utils/config';

@Injectable({
  providedIn: 'root'
})
export class OfferingsService {

  constructor(private http: HttpClient) { }

  getOfferings() {
  	return this.http.get<any[]>(`${API_URL}/offerings`);
  }
}
