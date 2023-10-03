// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import{factory as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-contains@v0.1.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-remove-first@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-remove-first-code-point@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-remove-first-grapheme-cluster@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";var p=["grapheme","code_point","code_unit"],h={grapheme:n,code_point:m,code_unit:o},j=t(p);function l(t){var o,m,n,l;if(!e(t))throw new TypeError(d("1P73F,Ex",t));if(n={mode:"grapheme"},1===(m=arguments.length))l=1;else if(2===m){if(s(l=arguments[1]))o=l,l=1;else if(!i(l))throw new TypeError(d("1P73X,F1",l))}else{if(!i(l=arguments[1]))throw new TypeError(d("1P73X,F1",l));if(!s(o=arguments[2]))throw new TypeError(d("1P72V,FD",o))}if(o&&r(o,"mode")&&(n.mode=o.mode,!j(n.mode)))throw new TypeError(d("1P7Li","mode",p.join('", "'),n.mode));return h[n.mode](t,l)}export{l as default};
//# sourceMappingURL=index.mjs.map
