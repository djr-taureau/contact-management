import { Injectable } from '@angular/core';
import { FAQ } from '@app/shared/pages/full-pages/faq/faq.model';

@Injectable()
export class FaqService {
  constructor() {}

  public faqs: FAQ[] = [
    new FAQ(
      1,
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      `Aenean eget leo vel lorem tincidunt tempor sit amet non e x.
             Aenean porta, velit ut efficitur fringilla, enim est suscipit augue, in porta ex nisi quis est.
             Phasellus ut odio in dolor eleifend tincidunt eget id tellus.`
    ),
    new FAQ(
      2,
      'Vestibulum hendrerit eros id finibus fermentum?',
      `Nam tincidunt rhoncus dolor nec imperdiet. Ut ut mauris tortor. Nulla cursus mattis elit, sed egestas augue laoreet id.
             Etiam eu velit felis. Duis at vehicula ligula, et suscipit nunc.`
    ),
    new FAQ(
      3,
      'Nunc maximus turpis et vulputate euismod?',
      `Aenean eget leo vel lorem tincidunt tempor sit amet non ex.
            Aenean porta, velit ut efficitur fringilla, enim est suscipit augue, in porta ex nisi quis est.
            Phasellus ut odio in dolor eleifend tincidunt eget id tellus.`
    ),
    new FAQ(
      4,
      'Vivamus pulvinar diam at viverra sagittis?',
      `Nam tincidunt rhoncus dolor nec imperdiet. Ut ut mauris tortor. Nulla cursus mattis elit, sed egestas augue laoreet id. Etiam eu velit felis.
             Duis at vehicula ligula, et suscipit nunc.`
    ),
    new FAQ(
      5,
      'Sed elementum nisl ac lectus luctus viverra?',
      `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`
    ),
    new FAQ(
      6,
      'Nulla ut tortor et arcu porttitor sollicitudin a a odio?',
      `Sed sit amet feugiat mi. Morbi dui dui, ultrices id commodo in, commodo ut erat. Ut vitae condimentum lorem. Cras eu viverra metus, fringilla tincidunt est. Aenean cursus,
             lacus ut posuere convallis, est dolor tincidunt nunc, nec viverra justo lorem a enim.`
    ),
    new FAQ(
      7,
      'Phasellus imperdiet eros vitae mi malesuada consectetur?',
      `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`
    ),
    new FAQ(
      8,
      'Duis at metus eleifend, elementum mauris eu, tincidunt du?',
      `Sed sit amet feugiat mi. Morbi dui dui, ultrices id commodo in, commodo ut erat. Ut vitae condimentum lorem. Cras eu viverra metus, fringilla tincidunt est.
             Aenean cursus, lacus ut posuere convallis, est dolor tincidunt nunc, nec viverra justo lorem a enim`
    ),
    new FAQ(
      9,
      'Sed sit amet lacus sagittis, viverra ex at, volutpat leo?',
      `Vivamus eu consectetur dui. Pellentesque eu mi et lacus mollis tempor. Etiam sed lobortis sapien. Mauris ultrices bibendum elit, at egestas felis elementum vitae.
             Mauris viverra nulla vitae pulvinar sollicitudin. Morbi non iaculis tortor. In hac habitasse platea dictumst`
    ),
    new FAQ(
      10,
      'Proin facilisis magna congue mattis mattis?',
      `Integer ornare elementum augue, in scelerisque magna efficitur non. Suspendisse laoreet purus nec augue malesuada auctor. Donec mollis eleifend auctor. Aliquam arcu erat, aliquam placerat risus at, fermentum efficitur nibh.
             Ut sed viverra neque, nec hendrerit tortor. `
    ),
    new FAQ(
      11,
      'Suspendisse eget nibh ut urna tincidunt efficitur?',
      `Vivamus eu consectetur dui. Pellentesque eu mi et lacus mollis tempor. Etiam sed lobortis sapien. Mauris ultrices bibendum elit, at egestas felis elementum vitae. Mauris viverra nulla vitae pulvinar sollicitudin.
             Morbi non iaculis tortor. In hac habitasse platea dictumst`
    ),
    new FAQ(
      12,
      'Fusce sed velit ut nibh blandit posuere?',
      `Integer ornare elementum augue, in scelerisque magna efficitur non. Suspendisse laoreet purus nec augue malesuada auctor. Donec mollis eleifend auctor. Aliquam arcu erat, aliquam placerat risus at, fermentum efficitur nibh.
             Ut sed viverra neque, nec hendrerit tortor. `
    ),
    new FAQ(
      13,
      'Etiam auctor nisi non sollicitudin aliquet?',
      `Aenean eget leo vel lorem tincidunt tempor sit amet non ex.
            Aenean porta, velit ut efficitur fringilla, enim est suscipit augue, in porta ex nisi quis est.
            Phasellus ut odio in dolor eleifend tincidunt eget id tellus.`
    ),
    new FAQ(
      14,
      'Donec sit amet orci sit amet tellus laoreet tempus?',
      `Integer ornare elementum augue, in scelerisque magna efficitur non. Suspendisse laoreet purus nec augue malesuada auctor. Donec mollis eleifend auctor. Aliquam arcu erat, aliquam placerat risus at, fermentum efficitur nibh.
             Ut sed viverra neque, nec hendrerit tortor. `
    ),
    new FAQ(
      15,
      'Nullam consequat urna ac nunc lobortis ullamcorper?',
      `Aenean eget leo vel lorem tincidunt tempor sit amet non ex.
            Aenean porta, velit ut efficitur fringilla, enim est suscipit augue, in porta ex nisi quis est.
            Phasellus ut odio in dolor eleifend tincidunt eget id tellus.`
    )
  ];
}
