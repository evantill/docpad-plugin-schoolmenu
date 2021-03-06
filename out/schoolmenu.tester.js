// Generated by CoffeeScript 1.6.3
(function() {
  var formatFromDate, formatJsonDate, formatSchoolLevels, formatToDate, joinArrayWithParams, moment,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  joinArrayWithParams = require('./lib/Utils').joinArrayWithParams;

  moment = require('moment');

  formatSchoolLevels = function(menu, opts) {
    return joinArrayWithParams(menu.fileName.schoolLevels, opts);
  };

  formatJsonDate = function(date, fmt) {
    return moment.utc(date).format(fmt);
  };

  formatFromDate = function(menu, fmt) {
    return formatJsonDate(menu.fileName.week.from, fmt);
  };

  formatToDate = function(menu, fmt) {
    return formatJsonDate(menu.fileName.week.to, fmt);
  };

  module.exports = function(testers) {
    var SchoolMenuTester, _ref;
    return SchoolMenuTester = (function(_super) {
      __extends(SchoolMenuTester, _super);

      function SchoolMenuTester() {
        _ref = SchoolMenuTester.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      SchoolMenuTester.prototype.config = {
        removeWhitespace: false
      };

      SchoolMenuTester.prototype.docpadConfig = {
        templateData: {
          prepareMenuTitle: function(menu) {
            var from, joinOpts, schoolLevels, to;
            if (menu == null) {
              return;
            }
            joinOpts = {
              sep: ', ',
              prefix: ' pour le ',
              suffix: '',
              lastSep: ' et le '
            };
            schoolLevels = formatSchoolLevels(menu, joinOpts);
            from = formatFromDate(menu, 'DD/MM/YYYY');
            to = formatToDate(menu, 'DD/MM/YYYY');
            return "Menu du " + from + " au " + to + schoolLevels;
          },
          prepareMenuLongTitle: function(menu) {
            var from, to;
            if (menu == null) {
              return;
            }
            from = formatFromDate(menu, 'dddd DD MMMM YYYY');
            to = formatToDate(menu, 'dddd DD MMMM YYYY');
            return "Menu du " + from + " au " + to;
          },
          prepareMenuDescription: function(menu) {
            var from, joinOpts, schoolLevels, to;
            if (menu == null) {
              return;
            }
            joinOpts = {
              sep: ', ',
              prefix: ' pour le ',
              suffix: '',
              lastSep: ' et le '
            };
            schoolLevels = formatSchoolLevels(menu, joinOpts);
            from = formatFromDate(menu, 'dddd DD MMMM YYYY');
            to = formatToDate(menu, 'dddd DD MMMM YYYY');
            return "Menu du " + from + " au " + to + schoolLevels;
          }
        },
        plugins: {
          schoolmenu: {
            writeMeta: false,
            writeAddedMeta: true,
            defaultMeta: {
              author: 'commission.restauration',
              layout: 'menu',
              additionalLayouts: ['menurss', 'menujson']
            }
          }
        },
        enabledPlugins: {
          'marked': true,
          'eco': true,
          'multiplelayouts': true,
          'handlebars': true
        }
      };

      return SchoolMenuTester;

    })(testers.RendererTester);
  };

}).call(this);
