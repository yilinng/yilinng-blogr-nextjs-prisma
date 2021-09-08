"use strict";
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
// lib/prisma.ts


if (false) {} else {
  if (!global.prisma) {
    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
  }

  prisma = global.prisma;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);

/***/ }),

/***/ "./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ "next-auth");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ "next-auth/providers");
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_adapters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/adapters */ "next-auth/adapters");
/* harmony import */ var next_auth_adapters__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_adapters__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/prisma */ "./lib/prisma.ts");





const authHandler = (req, res) => next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authHandler);
const options = {
  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().GitHub({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  })],
  adapter: next_auth_adapters__WEBPACK_IMPORTED_MODULE_2___default().Prisma.Adapter({
    prisma: _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.default
  }),
  secret: process.env.SECRET
};

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/adapters":
/*!*************************************!*\
  !*** external "next-auth/adapters" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("next-auth/adapters");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFNQSxJQUFJLE9BQXVDLEVBQTNDLE1BRU87QUFDTCxNQUFJLENBQUNFLE1BQU0sQ0FBQ0QsTUFBWixFQUFvQjtBQUNsQkMsSUFBQUEsTUFBTSxDQUFDRCxNQUFQLEdBQWdCLElBQUlELHdEQUFKLEVBQWhCO0FBQ0Q7O0FBQ0RDLEVBQUFBLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFoQjtBQUNEOztBQUVELGlFQUFlQSxNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNSyxXQUEyQixHQUFHLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjTCxnREFBUSxDQUFDSSxHQUFELEVBQU1DLEdBQU4sRUFBV0MsT0FBWCxDQUExRDs7QUFDQSxpRUFBZUgsV0FBZjtBQUVBLE1BQU1HLE9BQU8sR0FBRztBQUNkQyxFQUFBQSxTQUFTLEVBQUUsQ0FDVE4saUVBQUEsQ0FBaUI7QUFDZlEsSUFBQUEsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsU0FEUDtBQUVmQyxJQUFBQSxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRztBQUZYLEdBQWpCLENBRFMsQ0FERztBQU9kQyxFQUFBQSxPQUFPLEVBQUViLHdFQUFBLENBQXdCO0FBQUVKLElBQUFBLE1BQU1BLGtEQUFBQTtBQUFSLEdBQXhCLENBUEs7QUFRZG9CLEVBQUFBLE1BQU0sRUFBRVIsT0FBTyxDQUFDQyxHQUFSLENBQVlRO0FBUk4sQ0FBaEI7Ozs7Ozs7Ozs7QUNUQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9saWIvcHJpc21hLnRzIiwid2VicGFjazovL2hlbGxvLW5leHQvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzIiwid2VicGFjazovL2hlbGxvLW5leHQvZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIiwid2VicGFjazovL2hlbGxvLW5leHQvZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIiIsIndlYnBhY2s6Ly9oZWxsby1uZXh0L2V4dGVybmFsIFwibmV4dC1hdXRoL2FkYXB0ZXJzXCIiLCJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC9leHRlcm5hbCBcIm5leHQtYXV0aC9wcm92aWRlcnNcIiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWIvcHJpc21hLnRzXHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICB2YXIgcHJpc21hOiBQcmlzbWFDbGllbnQ7XHJcbn1cclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG59IGVsc2Uge1xyXG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xyXG4gICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuICB9XHJcbiAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hOyIsImltcG9ydCB7IE5leHRBcGlIYW5kbGVyIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnO1xyXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMnO1xyXG5pbXBvcnQgQWRhcHRlcnMgZnJvbSAnbmV4dC1hdXRoL2FkYXB0ZXJzJztcclxuaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi8uLi9saWIvcHJpc21hJztcclxuXHJcbmNvbnN0IGF1dGhIYW5kbGVyOiBOZXh0QXBpSGFuZGxlciA9IChyZXEsIHJlcykgPT4gTmV4dEF1dGgocmVxLCByZXMsIG9wdGlvbnMpO1xyXG5leHBvcnQgZGVmYXVsdCBhdXRoSGFuZGxlcjtcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBQcm92aWRlcnMuR2l0SHViKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVULFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBhZGFwdGVyOiBBZGFwdGVycy5QcmlzbWEuQWRhcHRlcih7IHByaXNtYSB9KSxcclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFQ1JFVCxcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2FkYXB0ZXJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9wcm92aWRlcnNcIik7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCIsIk5leHRBdXRoIiwiUHJvdmlkZXJzIiwiQWRhcHRlcnMiLCJhdXRoSGFuZGxlciIsInJlcSIsInJlcyIsIm9wdGlvbnMiLCJwcm92aWRlcnMiLCJHaXRIdWIiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfU0VDUkVUIiwiYWRhcHRlciIsIlByaXNtYSIsIkFkYXB0ZXIiLCJzZWNyZXQiLCJTRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9