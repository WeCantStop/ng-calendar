import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
const TODAY_STR = new Date('2019-10-17').toISOString()
.replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    // id: createEventId(),
    title: 'All-day event',
    start: TODAY_STR,
    end: new Date('2021-02-09').toISOString()
    .replace(/T.*$/, '')
  },
  {
    // id: createEventId(),
    title: 'Timed event',
    start: new Date('2021-02-11').toISOString()
    .replace(/T.*$/, '')
  },
  {
    // id: createEventId(),
    title: 'Timed event',
    start: new Date('2021-02-15').toISOString()
    .replace(/T.*$/, '')
  },
  {
    // id: createEventId(),
    title: 'Timed event',
    start: new Date('2021-02-18').toISOString()
    .replace(/T.*$/, '')
  }
];

export function createEventId(): string {
  return String(eventGuid++);
}
