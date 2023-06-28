// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var o=Object.prototype.toString;var r=Object.prototype.hasOwnProperty;var n="function"==typeof Symbol?Symbol.toStringTag:"";var l=t&&"symbol"==typeof Symbol.toStringTag?function(t){var l,e,a,y,i;if(null==t)return o.call(t);e=t[n],i=n,l=null!=(y=t)&&r.call(y,i);try{t[n]=void 0}catch(r){return o.call(t)}return a=o.call(t),l?t[n]=e:delete t[n],a}:function(t){return o.call(t)},e="function"==typeof BigUint64Array;function a(t){return e&&t instanceof BigUint64Array||"[object BigUint64Array]"===l(t)}export{a as default};
//# sourceMappingURL=mod.js.map
