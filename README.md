# gulp-b-html

A [gulp](https://github.com/gulpjs/gulp) plugin for [b-html](http://github.com/b-html/b-html).

## Installation

```
$ npm install --save-dev gulp-b-html
```

## Usage

```javascript
var bHtml = require('gulp-b-html');

gulp.src('./views/*.bhtml')
    .pipe(bHtml())
    .pipe(gulp.dest('./dist'));
```

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][email]&gt; ([http://bouzuya.net][url])

[user]: https://github.com/bouzuya
[email]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
