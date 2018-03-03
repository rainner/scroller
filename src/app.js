/**
 * Demo page scripts.
 */
import './app.scss';
import Scroller from './scroller';

const s = new Scroller();
const header = document.querySelector( '#header' );
const statPosReal = document.querySelector( '#stat-pos-real' );
const statPosSlow = document.querySelector( '#stat-pos-slow' );
const statDirection = document.querySelector( '#stat-direction' );
const statTrigger = document.querySelector( '#stat-trigger' );
const btns = document.querySelectorAll( '[data-scroll]' );

for ( let i = 0; i < btns.length; ++i ) {
  btns[ i ].addEventListener( 'click', e => {
    e.preventDefault();
    s.jumpTo( e.target.getAttribute( 'data-scroll' ) || '' );
  });
}

s.onVisible( '.reveal', 'visible' );

s.onScroll( e => {
  statPosReal.textContent = e.pageY;
});

s.onChange( pos => {
  statPosSlow.textContent = pos;
});

s.onUp( pos => {
  header.classList.remove( 'hidden' );
  statDirection.textContent = 'Going up';
});

s.onDown( pos => {
  header.classList.add( 'hidden' );
  statDirection.textContent = 'Going down';
});

s.moreThan( 20, pos => {
  header.classList.add( 'solid' );
});

s.lessThan( 20, pos => {
  header.classList.remove( 'solid' );
});

s.moreThan( 200, pos => {
  statTrigger.textContent = 'More than 200px';
});

s.lessThan( 200, pos => {
  statTrigger.textContent = 'Less than 200px';
});

