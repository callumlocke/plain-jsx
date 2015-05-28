# plain-jsx

> Alternative JSX renderer. Creates plain DOM nodes instead of React objects.


## explanation/usage

[JSX](http://facebook.github.io/jsx/) doesn't have to be used with React. If you add `/** @jsx foo */` at the top of your script, the JSX transformer will use `foo` instead of `React.createElement` as your rendering function.

Use `plainJSX` as your rendering function and you'll get **real elements** that you can append directly to the DOM.

For example, if you put this through a JSX renderer (<a href="https://babeljs.io/repl/#?experimental=false&evaluate=true&loose=false&spec=false&code=%2F**%20%40jsx%20plainJSX%20*%2F%0A%0Adocument.body.appendChild(%0A%20%20%3Csection%3E%0A%20%20%20%20%3Ch1%3EABC%3C%2Fh1%3E%0A%0A%20%20%20%20%3Cul%20class%3D%22list%22%3E%0A%20%20%20%20%20%20%7B%5B'A'%2C%20'B'%2C%20'C'%5D.map(function%20(letter)%20%7B%0A%20%20%20%20%20%20%20%20return%20%3Cli%3E%7Bletter%7D%3C%2Fli%3E%3B%0A%20%20%20%20%20%20%7D)%7D%0A%20%20%20%20%3C%2Ful%3E%0A%20%20%3C%2Fsection%3E%0A)%3B">try it in Babel</a>):

```jsx
/** @jsx plainJSX */

document.body.appendChild(
  <section>
    <h1>ABC</h1>

    <ul class="list">
      {['A', 'B', 'C'].map(function (letter) {
        return <li>{letter}</li>;
      })}
    </ul>
  </section>
);
```

...you get this:

```js
/** @jsx plainJSX */

document.body.appendChild(plainJSX(
  'section',
  null,
  plainJSX(
    'h1',
    null,
    'ABC'
  ),
  plainJSX(
    'ul',
    { 'class': 'list' },
    ['A', 'B', 'C'].map(function (letter) {
      return plainJSX(
        'li',
        null,
        letter
      );
    })
  )
));
```

To make that work, you just need the `plainJSX` global to exist:

```html
<script src="plain-jsx/index.js"></script>
```

It's a [tiny function](https://github.com/callumlocke/plain-jsx/blob/master/index.js) that returns real DOM elements, constructed using nothing but `document.createElement`, `.setAttribute`, `.appendChild`, `document.createTextNode`.


## install

```sh
$ bower install --save plain-jsx
```

```sh
$ npm install --save-dev plain-jsx
```

Or just copy and paste it somewhere.


## status

This is new and probably misses parts of JSX. [Open an issue](https://github.com/callumlocke/plain-jsx/issues) if there's something else it should do.


## licence

MIT
