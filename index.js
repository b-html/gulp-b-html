var bHtml = require('b-html');
var gutil = require('gulp-util');
var through = require('through2');

module.exports = function() {
  var newError = function(e) {
    return new gutil.PluginError('gulp-b-html', e);
  };

  return through.obj(function(file, encoding, callback) {
    if (file.isNull()) {
      return callback(null ,file);
    }

    if (file.isStream()) {
      return callback(newError('Stream is not supported.'))
    }

    try {
      // convert to vinyl 0.5.x
      var f = new gutil.File(file);
      if (f.extname !== '.bhtml') {
        return callback(null, file);
      }
      f.contents = new Buffer(bHtml(f.contents.toString(encoding)));
      f.extname = '.html';
      return callback(null, f);
    } catch (err) {
      return callback(newError(err));
    }
  });
};
