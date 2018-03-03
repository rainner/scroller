[twitter]: http://twitter.com/raintek_
[demo]: https://rainner.github.io/scroller/
[mit]: http://www.opensource.org/licenses/mit-license.php

# Scroller

Listen for scroll events on the document or a custom target element, fire events while scrolling, or jump to a specified section. This class uses throttling to preserve scroll performance. No bloat or dependencies.

[Check out the demo][demo]

### Install

```bash
npm install rainner/scroller
```

### Usage
Import as a module and bundle using your preferred bundling method (Webpack, Gulp, etc)...

```js
// import class
import Scroller from 'scroller';

// setup scroller on target element (default: documentElement)
let scroller = new Scroller( null );

// toggle "visible" class on all ".reveal" elements when they enter/leave the visible area of the window
scroller.onVisible( '.reveal', 'visible' );

// when scroll position changes (realtime)
scroller.onScroll( e => {
    console.log( e.pageY );
});

// when scroll position changes (throttled)
scroller.onChange( pos => {
    console.log( pos );
});

// when scrolling up (triggered once)
scroller.onUp( pos => {
    console.log( 'going up', pos );
});

// when scrolling down (triggered once)
scroller.onDown( pos => {
    console.log( 'going down', pos );
});

// when scroll position is greater than a number (triggered once)
scroller.moreThan( 200, pos => {
    console.log( 'scrolled past 200', pos );
});

// when scroll position is less than a number (triggered once)
scroller.lessThan( 200, pos => {
    console.log( 'scrolled less than 200', pos );
});

// scroll to position by number
button.addEventListener( 'click', e => {
    scroller.jumpTo( 500 );
});

// scroll to position by selector
button.addEventListener( 'click', e => {
    scroller.jumpTo( '#someElement' );
});
```

### Author

Rainner Lins: [@raintek_][twitter]

### License

Licensed under [MIT][mit].



