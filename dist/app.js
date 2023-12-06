"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;
var _express = _interopRequireDefault(require("express"));
require("./config/database.js");
var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));
var _indexRoutes = _interopRequireDefault(require("./routes/index.routes.js"));
var _path = _interopRequireDefault(require("path"));
var _morgan = _interopRequireDefault(require("morgan"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = exports.app = (0, _express["default"])();
app.set('views', _path["default"].join(__dirname, 'views'));
app.engine('.hbs', (0, _expressHandlebars["default"])({
  layoutsDir: _path["default"].join(app.get('views'), 'layouts'),
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares --------------------------------------------------------------------------------------------
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].urlencoded({
  extended: false
}));

// Static files ----------------------------------------------------------------------------------------------
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public')));

// Routes -----------------------------------------------------------------------------------------------------
app.use('/', _indexRoutes["default"]);
// -404-
app.use('*', function (req, res) {
  res.status(404).json({
    message: '404 - Not found...'
  });
});