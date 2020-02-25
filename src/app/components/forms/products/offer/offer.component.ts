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
      title: 'platano',
    },
    {
      kilo: 2,
      title: 'manzana',
    },
    {
      kilo: 2,
      title: 'Fruta de temporada',
      tooltip: 'Puede ser guayaba, mango, kiwi, pera'
    }
  ];
  mas: Fruits[] = [
    {
      kilo: 3,
      title: 'platano',
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
  prima: Fruits[] = [
    {
      kilo: 2,
      title: 'platano',
    },
    {
      kilo: 2,
      title: 'manzana',
    },
    {
      kilo: 1,
      title: 'de uva',
    },
    {
      kilo: 3,
      title: 'Fruta de temporada',
      tooltip: 'Puede ser guayaba, mango, kiwi, pera'
    }
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
