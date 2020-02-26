import {Component, OnInit} from '@angular/core';

export interface Fruits {
  kilo: number;
  title: string;
  tooltip?: string;
}

@Component({
  selector: 'offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  standar: Fruits[] = [
    {
      kilo: 5,
      title: 'plátano',
    },
    {
      kilo: 3,
      title: 'manzana',
    },
    {
      kilo: 1,
      title: 'Fruta de temporada',
      tooltip: 'Puede ser guayaba, mango, kiwi, pera'
    }
  ];
  plus: Fruits[] = [
    {
      kilo: 4,
      title: 'plátano',
    },
    {
      kilo: 2,
      title: 'manzana',
    },
    {
      kilo: 3,
      title: 'Fruta de temporada',
      tooltip: 'Puede ser guayaba, mango, kiwi, pera'
    }
  ];
  premium: Fruits[] = [
    {
      kilo: 3,
      title: 'plátano',
    },
    {
      kilo: 2,
      title: 'manzana',
    },
    {
      kilo: 1,
      title: 'verdura',
      tooltip: 'Puede ser pepino, zanahoria, pimiento'
    },
    {
      kilo: 4,
      title: 'Fruta de temporada',
      tooltip: 'Puede ser guayaba, uva, mango, kiwi, pera'
    }
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
