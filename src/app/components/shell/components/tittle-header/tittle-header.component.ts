import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tittle-header',
  templateUrl: './tittle-header.component.html',
  styleUrls: ['./tittle-header.component.scss']
})
export class TittleHeaderComponent implements OnInit {

  @Input()
  color: string;

  @Input()
  text: string;

  constructor() { }

  ngOnInit() {
    const container = document.getElementById('header');
    container.classList.add(this.color);
    const  text = document.getElementById('text');
    text.innerText = this.text;
  }

}
