# plain-jsx

> Alternative JSX renderer. Creates plain DOM nodes instead of React objects.


## explanation/usage

[JSX](http://facebook.github.io/jsx/) doesn't have to be used with React. If you add `/** @jsx foo */` at the top of your script, the JSX transformer will use `foo` instead of `React.createElement` as your rendering function.

Use `plainJSX` as your rendering function and you'll get **real elements** that you can append directly to the DOM.

For example, if you put this through Babel (<a href="https://babeljs.io/repl/#?experimental=false&evaluate=true&loose=true&spec=false&code=%2F**%20%40jsx%20plainJSX%20*%2F%0A%0Adocument.body.appendChild(%0A%20%20%3Csection%3E%0A%20%20%20%20%3Ch1%3EABC%3C%2Fh1%3E%0A%0A%20%20%20%20%3Cul%20class%3D%22list%22%3E%0A%20%20%20%20%20%20%7B%5B'A'%2C%20'B'%2C%20'C'%5D.map(letter%20%3D%3E%20%3Cli%3E%7Bletter%7D%3C%2Fli%3E)%7D%0A%20%20%20%20%3C%2Ful%3E%0A%20%20%3C%2Fsection%3E%0A)%3B">try it in the REPL</a>):

```jsx
/** @jsx plainJSX */

document.body.appendChild(
  <section>
    <h1>ABC</h1>

    <ul class="list">
      {['A', 'B', 'C'].map(letter => <li>{letter}</li>)}
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

For this output to run, you just need the `plainJSX` global to exist:

```html
<script src="plain-jsx/index.js"></script>
```

It's a [tiny function](https://github.com/callumlocke/plain-jsx/blob/master/index.js) that returns real DOM elements, constructed using nothing but `document.createElement`, `.setAttribute`, `.appendChild`, `document.createTextNode`.


## install

```sh
$ bower install --save plain-jsx
```

Or:

```sh
$ npm install --save-dev plain-jsx
```

Or you could just copy and paste [the plainJSX function](./index.js) into your app.


## status

Seems to work fine. But it could do with some tests – PRs welcome!


## licence

MIT
