import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'flat-navigation',
  templateUrl: './flat-navigation.component.html',
  styleUrls: ['./flat-navigation.component.scss']
})
export class FlatNavigationComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSidenavClose = () => {
    this.sidenavClose.emit()
  }

}
