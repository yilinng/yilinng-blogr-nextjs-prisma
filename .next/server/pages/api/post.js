"use strict";
(() => {
var exports = {};
exports.id = "pages/api/post";
exports.ids = ["pages/api/post"];
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

/***/ "./pages/api/post/index.ts":
/*!*********************************!*\
  !*** ./pages/api/post/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handle)
/* harmony export */ });
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/prisma */ "./lib/prisma.ts");

 // POST /api/post
// Required fields in body: title
// Optional fields in body: content

async function handle(req, res) {
  var _session$user;

  const {
    title,
    content
  } = req.body;
  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({
    req
  });
  const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.default.post.create({
    data: {
      title: title,
      content: content,
      author: {
        connect: {
          email: session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.email
        }
      }
    }
  });
  res.json(result);
}

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/post/index.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3Bvc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBTUEsSUFBSSxPQUF1QyxFQUEzQyxNQUVPO0FBQ0wsTUFBSSxDQUFDRSxNQUFNLENBQUNELE1BQVosRUFBb0I7QUFDbEJDLElBQUFBLE1BQU0sQ0FBQ0QsTUFBUCxHQUFnQixJQUFJRCx3REFBSixFQUFoQjtBQUNEOztBQUNEQyxFQUFBQSxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0QsTUFBaEI7QUFDRDs7QUFFRCxpRUFBZUEsTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7Q0FHQTtBQUNBO0FBQ0E7O0FBQ2UsZUFBZUcsTUFBZixDQUFzQkMsR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQUE7O0FBQzdDLFFBQU07QUFBRUMsSUFBQUEsS0FBRjtBQUFTQyxJQUFBQTtBQUFULE1BQXFCSCxHQUFHLENBQUNJLElBQS9CO0FBRUEsUUFBTUMsT0FBTyxHQUFHLE1BQU1QLDREQUFVLENBQUM7QUFBRUUsSUFBQUE7QUFBRixHQUFELENBQWhDO0FBQ0EsUUFBTU0sTUFBTSxHQUFHLE1BQU1WLDREQUFBLENBQW1CO0FBQ3RDYSxJQUFBQSxJQUFJLEVBQUU7QUFDSlAsTUFBQUEsS0FBSyxFQUFFQSxLQURIO0FBRUpDLE1BQUFBLE9BQU8sRUFBRUEsT0FGTDtBQUdKTyxNQUFBQSxNQUFNLEVBQUU7QUFBRUMsUUFBQUEsT0FBTyxFQUFFO0FBQUVDLFVBQUFBLEtBQUssRUFBRVAsT0FBRixhQUFFQSxPQUFGLHdDQUFFQSxPQUFPLENBQUVRLElBQVgsa0RBQUUsY0FBZUQ7QUFBeEI7QUFBWDtBQUhKO0FBRGdDLEdBQW5CLENBQXJCO0FBT0FYLEVBQUFBLEdBQUcsQ0FBQ2EsSUFBSixDQUFTUixNQUFUO0FBQ0Q7Ozs7Ozs7Ozs7QUNsQkQ7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5leHQvLi9saWIvcHJpc21hLnRzIiwid2VicGFjazovL2hlbGxvLW5leHQvLi9wYWdlcy9hcGkvcG9zdC9pbmRleC50cyIsIndlYnBhY2s6Ly9oZWxsby1uZXh0L2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiIsIndlYnBhY2s6Ly9oZWxsby1uZXh0L2V4dGVybmFsIFwibmV4dC1hdXRoL2NsaWVudFwiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYi9wcmlzbWEudHNcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIHZhciBwcmlzbWE6IFByaXNtYUNsaWVudDtcclxufVxyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbn0gZWxzZSB7XHJcbiAgaWYgKCFnbG9iYWwucHJpc21hKSB7XHJcbiAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG4gIH1cclxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7IiwiaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnO1xyXG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uLy4uL2xpYi9wcmlzbWEnO1xyXG5cclxuLy8gUE9TVCAvYXBpL3Bvc3RcclxuLy8gUmVxdWlyZWQgZmllbGRzIGluIGJvZHk6IHRpdGxlXHJcbi8vIE9wdGlvbmFsIGZpZWxkcyBpbiBib2R5OiBjb250ZW50XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgdGl0bGUsIGNvbnRlbnQgfSA9IHJlcS5ib2R5O1xyXG5cclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KTtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEucG9zdC5jcmVhdGUoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgIGF1dGhvcjogeyBjb25uZWN0OiB7IGVtYWlsOiBzZXNzaW9uPy51c2VyPy5lbWFpbCB9IH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIHJlcy5qc29uKHJlc3VsdCk7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvY2xpZW50XCIpOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJnZXRTZXNzaW9uIiwiaGFuZGxlIiwicmVxIiwicmVzIiwidGl0bGUiLCJjb250ZW50IiwiYm9keSIsInNlc3Npb24iLCJyZXN1bHQiLCJwb3N0IiwiY3JlYXRlIiwiZGF0YSIsImF1dGhvciIsImNvbm5lY3QiLCJlbWFpbCIsInVzZXIiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==