// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-next-grapheme-cluster-break@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function i(i,n){var m;if(!s(i))throw new TypeError(t("0hP3R",i));if(arguments.length>1){if(!e(n))throw new TypeError(t("0hP3k",n));for(m=0;n>0;)m=r(i,m),n-=1}else m=r(i);return""===i||-1===m?"":i.substring(m)}export{i as default};
//# sourceMappingURL=index.mjs.map
