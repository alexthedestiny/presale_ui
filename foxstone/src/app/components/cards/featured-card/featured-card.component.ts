import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.sass']
})
export class FeaturedCardComponent implements OnInit {
  @Input() cardObject;
  constructor() { }

  ngOnInit() {
  }

}
