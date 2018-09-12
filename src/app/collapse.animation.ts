import {animate, style, transition, trigger} from '@angular/animations';

export const collapse = trigger('collapse', [
  transition(':enter', [
    style({height: 0}),
    animate(300, style({height: '*'}))
  ]),
  transition(':leave', [
    animate(300, style({height: 0}))
  ])
]);