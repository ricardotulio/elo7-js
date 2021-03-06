'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var isFunction = function isFunction(x) {
  return (0, _ramda.equals)((0, _ramda.type)(x), 'Function');
};

var bindSession = function bindSession(session, resources) {
  var bind = function bind(func) {
    return func(session);
  };

  var bindRecursive = (0, _ramda.ifElse)(isFunction, bind, function (resource) {
    return (0, _ramda.map)(bindRecursive, resource);
  });

  return (0, _ramda.map)(bindRecursive, resources);
};

exports.default = bindSession;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQvYmluZFNlc3Npb24uanMiXSwibmFtZXMiOlsiaXNGdW5jdGlvbiIsIngiLCJiaW5kU2Vzc2lvbiIsInNlc3Npb24iLCJyZXNvdXJjZXMiLCJiaW5kIiwiZnVuYyIsImJpbmRSZWN1cnNpdmUiLCJyZXNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBT0EsSUFBTUEsYUFBYSxTQUFiQSxVQUFhO0FBQUEsU0FBSyxtQkFBTyxpQkFBS0MsQ0FBTCxDQUFQLEVBQWdCLFVBQWhCLENBQUw7QUFBQSxDQUFuQjs7QUFFQSxJQUFNQyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsT0FBRCxFQUFVQyxTQUFWLEVBQXdCO0FBQzFDLE1BQU1DLE9BQU8sU0FBUEEsSUFBTztBQUFBLFdBQVFDLEtBQUtILE9BQUwsQ0FBUjtBQUFBLEdBQWI7O0FBRUEsTUFBTUksZ0JBQWdCLG1CQUNwQlAsVUFEb0IsRUFFcEJLLElBRm9CLEVBR3BCO0FBQUEsV0FBWSxnQkFBSUUsYUFBSixFQUFtQkMsUUFBbkIsQ0FBWjtBQUFBLEdBSG9CLENBQXRCOztBQU1BLFNBQU8sZ0JBQUlELGFBQUosRUFBbUJILFNBQW5CLENBQVA7QUFDRCxDQVZEOztrQkFZZUYsVyIsImZpbGUiOiJiaW5kU2Vzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGVxdWFscyxcbiAgaWZFbHNlLFxuICB0eXBlLFxuICBtYXAsXG59IGZyb20gJ3JhbWRhJ1xuXG5jb25zdCBpc0Z1bmN0aW9uID0geCA9PiBlcXVhbHModHlwZSh4KSwgJ0Z1bmN0aW9uJylcblxuY29uc3QgYmluZFNlc3Npb24gPSAoc2Vzc2lvbiwgcmVzb3VyY2VzKSA9PiB7XG4gIGNvbnN0IGJpbmQgPSBmdW5jID0+IGZ1bmMoc2Vzc2lvbilcblxuICBjb25zdCBiaW5kUmVjdXJzaXZlID0gaWZFbHNlKFxuICAgIGlzRnVuY3Rpb24sXG4gICAgYmluZCxcbiAgICByZXNvdXJjZSA9PiBtYXAoYmluZFJlY3Vyc2l2ZSwgcmVzb3VyY2UpLFxuICApXG5cbiAgcmV0dXJuIG1hcChiaW5kUmVjdXJzaXZlLCByZXNvdXJjZXMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGJpbmRTZXNzaW9uXG4iXX0=