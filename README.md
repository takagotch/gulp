### gulp
---


```
```

```
```


---

https://gulpjs.com/

```js
function defaultTask(cd) {
  cb();
}

exports.default = defaultTask
```

```sh
node --version
node --version
npm --version
npm --version
npx --version
npx --version
npm install --global gulp-cli
npx mkdirp my-project
cd myproject
npm init
npm install --save-dev gulp
gulp --version
gulp
```

```js
const { series } = require('gulp');

function clean(cb) {
  cb();
}

exports.build = build;
exports.default = series(clean, build);

const { series } = require('gulp');

function transpile(cb) {
  cb();
}

function bundle(cb) {
  cb();
}

exports.build = series(transpile, bundle);


const { parallel } = require('gulp');

function javascript(cb) {
  cb();
}

function css(cb) {
  cb();
}

exports.build = parallel(javascript, css);

const { series } = require('gulp');

function minify(cb) {
  cb();
}

function transpile(cb) {
  cb();
}

if(process.env.NODE_ENV === 'production') {
  exports.build = series(transpile, minify);
} else {
  exports.build = series(transpile, livereload);
}

const { series, parallel } = require('gulp');

function clean(cb) {
  cb();
}

function cssTranspile(cb) {
  cb();
}

function cssMinify(cb) {
  cb();
}

funciton jsTranspile(cb) {
  cb();
}

function jsBundle(cb) {
  cb();
}

function jsMinify(cb) {
  cb();
}

function public(cb) {
  cb();
}

exports.build = series(
  clean,
  parallel(
    cssTranspile,
    series(jsTranspile, jsBundle)
  ),
  parallel(cssMinify, jsMinify),
  publish
);

const { series, parallel } = require('gulp');

const clean = function(cb) {
  cb();
};

const css = series(clean, function(cb) {
  cb();
});

const javascript = series(clean, function(cb) {
  cb();
});

exports.build = parallel(css, javascript);

const { series, parallel } = require('gulp');

function clean(cb) {
  cb();
}

function css(cb) {
  cb();
}

function javascript(cb) {
  cb();
}

exports.build = series(clean, parallel(css, javascript));
```


https://www.npmjs.com/package/gulp
https://www.npmjs.com/package/require-dir
https://www.npmjs.com/package/gulp-watch
https://www.npmjs.com/package/gulp-plumber
https://www.npmjs.com/package/autoprefixer
https://www.npmjs.com/package/gulp-postcss
https://www.npmjs.com/package/gulp-imagemin
https://www.npmjs.com/package/run-sequence
https://www.npmjs.com/package/gulp-data
https://www.npmjs.com/package/del
https://www.npmjs.com/package/gulp-copy
https://www.npmjs.com/package/gulp-if
https://www.npmjs.com/package/csswring
https://www.npmjs.com/package/css-mqpacker

---

- tasks
- config.js

---
/fr/.
- gulpfile.js
- package.json
- gulp
  - tasks
  - config.js
```

```
gulp
gulp-sass
require-dir
gulp-watch
gulp-plumber
autoprefixer
gulp-postcss
gulp-svg-sprites
gulp-imagemin
kss
run-sequence
gulp-ejs
gulp-data
del
gulp-copy
gulp-if
csswring
css-mqpacker
gulp-minify-ejs

```

```
npm i
npm run sass
npm run sprite:st
npm run sprite:c
npm run imagemin
npm run kss
npm run ejs
npm run build
npm run build:prod

```

```
.c-disp {display: none;}
@media (max-width: 800px){
  .c-disp {display: block;}
}
@media (max-width: 600px){
  .c-disp {display: none;}
}
@include max-screen($BREAK_POINT_MD) {
  .c-disp {display: block;}
}
@include max-screen($BREAK_POINT_SM) {
  .c-disp {display: nonw;}
}

<meta name="viewport" content="width=device-width, initial-scale=1">

```


```js
// https://gulpjs.com/docs/en/getting-started/async-completion


```


```
```

```
```

```
```

```
```

