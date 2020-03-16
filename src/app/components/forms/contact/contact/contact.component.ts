import {Component} from '@angular/core';

export interface WorkingWeek {
  day: string,
  hours: string,
  style?: string
}
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{

  constructor() { }

  week: WorkingWeek[] = [
    {
      day: 'Contact.WorkingHours.Monday',
      hours: '8 am - 5 pm'
    },
    {
      day: 'Contact.WorkingHours.Tuesday',
      hours: '8 am - 5 pm'
    },
    {
      day: 'Contact.WorkingHours.Wednesday',
      hours: '8 am - 5 pm'
    },
    {
      day: 'Contact.WorkingHours.Thursday',
      hours: '8 am - 5 pm'
    },
    {
      day: 'Contact.WorkingHours.Friday',
      hours: '8 am - 4 pm'
    },
    {
      day: 'Contact.WorkingHours.Saturday',
      hours: 'Contact.WorkingHours.DayOff',
      style: 'red'
    },
    {
      day: 'Contact.WorkingHours.Sunday',
      hours: 'Contact.WorkingHours.DayOff',
      style: 'red'
    }
  ]
}
