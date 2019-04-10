import { trigger, transition, state, style, animate } from '@angular/animations';

export let fade = trigger('fade', [
    state('void', style({opacity:0})),
    // transition('void <=> *', [ //if you have the same transitions and have the same implamentations, we can refactor them going bi-directional
    // transition(':enter, :leave', [ // void <=> *
    transition('void => *', [ //fade in
      animate(500)
    ]),

    transition('*=>void', [ //fade out
      animate(500)
    ])
  ])
