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
      title: 'Products.Banana',
    },
    {
      kilo: 3,
      title: 'Products.Apple',
    },
    {
      kilo: 1,
      title: 'Products.SeasonFruit',
      tooltip: 'Products.SeasonFruitTooltipText'
    }
  ];
  plus: Fruits[] = [
    {
      kilo: 4,
      title: 'Products.Banana',
    },
    {
      kilo: 2,
      title: 'Products.Apple',
    },
    {
      kilo: 3,
      title: 'Products.SeasonFruit',
      tooltip: 'Products.SeasonFruitTooltipText'
    }
  ];
  premium: Fruits[] = [
    {
      kilo: 3,
      title: 'Products.Banana',
    },
    {
      kilo: 2,
      title: 'Products.Apple',
    },
    {
      kilo: 1,
      title: 'Products.Vegetable',
      tooltip: 'Products.VegetableTooltipText'
    },
    {
      kilo: 4,
      title: 'Products.SeasonFruit',
      tooltip: 'Products.SeasonFruitTooltipText'
    }
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
