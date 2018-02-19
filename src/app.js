/**
 * Demo page scripts.
 */
import './app.scss';
import Scroller from './scroller';

// setup scroller on target element
const s = new Scroller();

// when scroll position changes (throttled)
s.onChange( pos => {
  console.log( 'scrolling', pos );
});

// when scrolling up (triggered once)
s.onUp( pos => {
  console.log( 'going up', pos );
});

// when scrolling down (triggered once)
s.onDown( pos => {
  console.log( 'going down', pos );
});

// when scroll position is greater than a number (triggered once)
s.moreThan( 200, pos => {
  console.log( 'scrolled past 200', pos );
});

// when scroll position is less than a number (triggered once)
s.lessThan( 200, pos => {
  console.log( 'scrolled less than 200', pos );
});

// buttons
let btns = document.querySelectorAll( '[data-scroll]' );

for ( let i = 0; i < btns.length; ++i ) {
  btns[ i ].addEventListener( 'click', e => {
    e.preventDefault();
    s.jumpTo( e.target.getAttribute( 'data-scroll' ) || '' );
  });
}

