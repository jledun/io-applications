'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _debug2 = require('debug');

var _debug3 = _interopRequireDefault(_debug2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : {default: obj}; }

var debug = (0, _debug3.default)();
var warn = function warn(options, message) {
  if (!options.silenceWarnings) {
    console.warn(message);
  }
};

exports.default = function(Model) {
  var bootOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  debug('Uid mixin for Model %s', Model.modelName);

  var options = _extends({
    updatedBy: 'updatedBy',
    required: false,
    validateUpsert: false, // default to turning validation off
    silenceWarnings: false
  }, bootOptions);

  debug('options', options);

  if (!options.validateUpsert && Model.settings.validateUpsert) {
    Model.settings.validateUpsert = false;
    warn(options, Model.pluralModelName + ' settings.validateUpsert was overriden to false');
  }

  if (Model.settings.validateUpsert && options.required) {
    warn(options, 'Upserts for ' + Model.pluralModelName + ' will fail when\n          validation is turned on and time stamps are required');
  }

  Model.defineProperty(options.updatedBy, {
    type: Number,
    required: options.required,
    defaultFn: 0
  });

  Model.observe('before save', function(ctx, next) {
    debug('ctx.options', ctx.options);
    if (ctx.options && ctx.options.skipUpdatedAt) {
      return next();
    }
    if ( ctx.options && ctx.options.accessToken && ctx.options.accessToken.userId ) {
      if (ctx.instance) {
        debug('%s.%s before save: %s', ctx.Model.modelName, options.updatedBy, ctx.instance.id);
        ctx.instance[options.updatedBy] = ctx.options.accessToken.userId;
      } else {
        debug('%s.%s before update matching %j', ctx.Model.pluralModelName, options.updatedBy, ctx.where);
        ctx.data[options.updatedBy] = ctx.options.accessToken.userId;
      }
    }
    return next();
  });
};

module.exports = exports.default;
//# sourceMappingURL=time-stamp.js.map
