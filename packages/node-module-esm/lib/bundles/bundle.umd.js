(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["node-module-esm"] = {}));
})(this, (function (exports) { 'use strict';

  const echo = text => {
    console.log(text);
    return text;
  };

  exports.echo = echo;

}));
//# sourceMappingURL=bundle.umd.js.map
