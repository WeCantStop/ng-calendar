import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CalendarOptions,  DateSelectArg, EventApi, EventClickArg } from '@fullcalendar/angular';
import zhLocale from '@fullcalendar/core/locales/zh-cn';
import { INITIAL_EVENTS, createEventId } from './event-utils';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public currentEvents: EventApi[] = [];
  public calendarOptions: CalendarOptions = {
    headerToolbar: {
      center: 'prevYear, nextYear',
    },
    initialView: 'dayGridMonth',
    locale: zhLocale,
    weekends: true,
    selectable: true,
    dayMaxEvents: 1,
    dayMaxEventRows: 1,
    initialEvents: INITIAL_EVENTS, // 默认显示的数据
    eventClick: this.handleEventClick.bind(this),
    select: this.handleDateSelect.bind(this),
    eventsSet: this.handleEvents.bind(this),
  };


  public ngOnInit(): void {
    // const str = formatDate(new Date(), {
    //   month: 'long',
    //   year: 'numeric',
    //   day: 'numeric'
    // });
    // console.log(str);
  }

  public toggleWeekends(): void {
    this.calendarOptions.weekends = !this.calendarOptions.weekends; // toggle the boolean!
  }

  public handleDateSelect(selectInfo: DateSelectArg): void {
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection
    calendarApi.addEvent({
      id: createEventId(),
      title: '选中',
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay
    });
  }

 public handleEventClick(clickInfo: EventClickArg): void {
    clickInfo.event.remove();
  }

  public handleEvents(events: EventApi[]): void {
    this.currentEvents = events;
    const test = [];
    this.currentEvents.forEach((event) => {
      test.push({title: event.title, start: event.start, end: event.end});
    });
    console.log('ininin');
    console.log(this.currentEvents);
    console.log(test);
  }
}
