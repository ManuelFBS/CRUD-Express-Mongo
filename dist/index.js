"use strict";

var _app = require("./app.js");
_app.app.set('port', process.env.PORT || 7000);
_app.app.listen(_app.app.get('port'), function () {
  console.log('Server is running on port: ', _app.app.get('port'));
});