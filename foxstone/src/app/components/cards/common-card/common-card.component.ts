import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-card',
  templateUrl: './common-card.component.html',
  styleUrls: ['./common-card.component.sass']
})
export class CommonCardComponent implements OnInit {
  @Input() cardObject;
  constructor() { }

  ngOnInit() {
  }

}
