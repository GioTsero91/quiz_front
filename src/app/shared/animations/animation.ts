import {
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/animations';

export const animation = [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

        state('in', style({opacity: 1})),

        transition(':enter', [
            style({opacity: 0}),
            animate(400 )
        ]),

        transition(':leave',
            animate(400, style({opacity: 0})))
    ]),
    trigger('loaderAnimation', [

        state('in', style({opacity: 1})),

        transition(':enter', [
            style({opacity: 0}),
            animate(100 )
        ]),

        transition(':leave',
            animate(200, style({opacity: 0})))
    ])
];
