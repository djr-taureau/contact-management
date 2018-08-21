import { Component } from '@angular/core';
import { TimelineElement } from '@app/shared/pages/full-pages/timeline/horizontal/component/timeline-element';

@Component({
  selector: 'app-horizontal-timeline-page',
  templateUrl: './horizontal-timeline-page.component.html',
  styleUrls: ['./horizontal-timeline-page.component.scss']
})
export class HorizontalTimelinePageComponent {
  content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae
    ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae,
    ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam
    quisquam, quae, temporibus dolores porro doloribus.`;

  timeline: TimelineElement[] = [
    {
      date: new Date(2014, 1, 16),
      selected: true,
      title: 'Horizontal Timeline',
      content: this.content
    },
    {
      date: new Date(2014, 2, 28),
      title: 'Event title here',
      content: this.content
    },
    {
      date: new Date(2014, 3, 20),
      title: 'Event title here',
      content: this.content
    },
    {
      date: new Date(2014, 5, 20),
      title: 'Event title here',
      content: this.content
    },
    {
      date: new Date(2014, 7, 9),
      title: 'Event title here',
      content: this.content
    },
    {
      date: new Date(2014, 8, 30),
      title: 'Event title here',
      content: this.content
    },
    {
      date: new Date(2014, 9, 15),
      title: 'Event title here',
      content: this.content
    },
    {
      date: new Date(2014, 11, 1),
      title: 'Event title here',
      content: this.content
    },
    {
      date: new Date(2014, 12, 10),
      title: 'Event title here',
      content: this.content
    },
    {
      date: new Date(2015, 1, 19),
      title: 'Event title here',
      content: this.content
    },
    {
      date: new Date(2015, 3, 3),
      title: 'Event title here',
      content: this.content
    }
  ];
}
