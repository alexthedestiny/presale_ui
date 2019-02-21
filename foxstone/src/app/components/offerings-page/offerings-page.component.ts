import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OfferingsService } from '../../services/offerings.service';

@Component({
  selector: 'app-offerings-page',
  templateUrl: './offerings-page.component.html',
  styleUrls: ['./offerings-page.component.sass']
})
export class OfferingsPageComponent implements OnInit {
  offeringsData: Array<any>;

  constructor(private offeringsService: OfferingsService) { }

  ngOnInit() {
  	this.offeringsService.getOfferings().subscribe( data => {
  		data.forEach(value => {
  			value.mainPhoto.url = value.mainPhoto.url.replace(/\\/g, '');
  		});
  		this.offeringsData = data;
  		console.log(this.offeringsData)
  	})
  }

}
