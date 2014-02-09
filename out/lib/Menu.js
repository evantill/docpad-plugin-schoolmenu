// Generated by CoffeeScript 1.6.3
(function() {
  var Menu, config,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  config = require('./Config').current();

  Menu = (function() {
    function Menu(menuFileName, days, comments) {
      this.menuFileName = menuFileName;
      this.days = days;
      this.comments = comments;
      this.toJSON = __bind(this.toJSON, this);
      this.week = this.menuFileName.week;
      this.schoolLevels = this.menuFileName.schoolLevels;
    }

    Menu.prototype.generateDaysUrl = function(baseUrl) {
      var day, groups, prefix, suffix, url, urls, _i, _len, _ref;
      urls = [];
      groups = config.urlRegexpPattern.exec(baseUrl);
      if (groups != null) {
        prefix = groups[1];
        suffix = groups[2];
        _ref = this.week.days();
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          day = _ref[_i];
          url = [prefix, day.format('YYYY-MM-DD'), suffix].join('');
          urls.push(url);
        }
      }
      return urls;
    };

    Menu.prototype.toJSON = function() {
      var d;
      return {
        fileName: this.menuFileName.toJSON(),
        comments: this.comments,
        days: (function() {
          var _i, _len, _ref, _results;
          _ref = this.days;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            d = _ref[_i];
            _results.push(d.toJSON());
          }
          return _results;
        }).call(this)
      };
    };

    return Menu;

  })();

  module.exports = Menu;

}).call(this);
