import { a1 } from './lib/a1.js';
import { a2 } from './lib/a2.js';
import { a3 } from './lib/a3.js';
import { a4 } from './lib/a4.js';
import { a5 } from './lib/a5.js';
import { a6 } from './lib/a6.js';
import { a7 } from './lib/a7.js';
import { a8 } from './lib/a8.js';
import { a9 } from './lib/a9.js';



const myModules=[
  a1,
  ...a2,
  ...a3,
  ...a4,
  ...a5,
  ...a6,
  ...a7,
  ...a8,
  ...a9,
];


(function (modules) {
  // Cache to store loaded modules
  var installedModules = {};

  // Function to load modules
  function __webpack_require__(moduleId) {
    // Check if the module is already in cache
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }

    // Create a new module and store it in the cache
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false, // Indicates if the module is loaded
      exports: {},
    });

    // Execute the module function and fill the exports
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    // Mark the module as loaded
    module.l = true;

    // Return the exports of the module
    return module.exports;
  }

  // Store the module definitions
  __webpack_require__.m = modules;

  // Store the module cache
  __webpack_require__.c = installedModules;

  // Define a getter for exports to make them available
  __webpack_require__.d = function (exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        configurable: false,
        enumerable: true,
        get: getter,
      });
    }
  };

  // Define the default export function for compatibility with ES6 modules
  __webpack_require__.n = function (module) {
    var getter =
      module && module.__esModule
        ? function () {
            return module.default;
          }
        : function () {
            return module;
          };
    __webpack_require__.d(getter, "a", getter);
    return getter;
  };

  // Check if an object has a property
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };

  // The public path for loading assets
  __webpack_require__.p = "/";

  // Load the entry module (module with ID 197) and return its exports
  return __webpack_require__((__webpack_require__.s = 197));
})(myModules);
