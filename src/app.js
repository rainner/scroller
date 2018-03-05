/**
 * Demo page scripts.
 */
import './app.scss';
import Scroller from './scroller';

const s = new Scroller();
const header = document.querySelector( '#header' );
const stats = document.querySelector( '#stats-wrap' );
const statPosReal = document.querySelector( '#stat-pos-real' );
const statPosSlow = document.querySelector( '#stat-pos-slow' );
const statDirection = document.querySelector( '#stat-direction' );
const statTrigger = document.querySelector( '#stat-trigger' );
const btns = document.querySelectorAll( '[data-scroll]' );

// setup buttons that trigger scroll event
for ( let i = 0; i < btns.length; ++i ) {
  btns[ i ].addEventListener( 'click', e => {
    e.preventDefault();
    s.jumpTo( e.target.getAttribute( 'data-scroll' ) );
  });
}

// toggle visible class on elements that enter/leave the viewport
s.onVisible( '.reveal', ( elm, visible, pos ) => {
  let func = visible ? 'add' : 'remove';
  elm.classList[ func ]( 'visible' );
});

// lazy-load images on elements that enter viewport once
s.onVisible( 'img[data-image]', ( elm, visible, pos ) => {
  if ( !visible || !elm.hasAttribute( 'data-image' ) ) return;
  let url = elm.getAttribute( 'data-image' );
  elm.removeAttribute( 'data-image' );
  let img = new Image();
  img.addEventListener( 'load', e => { elm.src = img.src; } );
  img.src = url;
});

// realtime scroll event
s.onScroll( e => {
  statPosReal.textContent = e.pageY | 0;
});

// throttled scroll interval
s.onChange( pos => {
  statPosSlow.textContent = pos;
});

// scrolling up (called once)
s.onUp( pos => {
  header.classList.remove( 'hidden' );
  stats.classList.remove( 'moveup' );
  statDirection.textContent = 'Going up';
});

// scrolling down (called once)
s.onDown( pos => {
  header.classList.add( 'hidden' );
  stats.classList.add( 'moveup' );
  statDirection.textContent = 'Going down';
});

// scrolled more than 20px (called once)
s.moreThan( 20, pos => {
  header.classList.add( 'solid' );
});

// scrolled less than 20px (called once)
s.lessThan( 20, pos => {
  header.classList.remove( 'solid' );
});

// scrolled more than 200px (called once)
s.moreThan( 200, pos => {
  statTrigger.textContent = 'More than 200px';
});

// scrolled less than 200px (called once)
s.lessThan( 200, pos => {
  statTrigger.textContent = 'Less than 200px';
});

