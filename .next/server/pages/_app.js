"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/Navbar.js



function Navbar() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "logo",
                className: "flex cursor-pointer items-center justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: "/logo.png",
                        alt: "logo",
                        width: "245",
                        height: "67",
                        layout: "intrinsic"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "links",
                className: "hidden font-semibold space-x-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "/about",
                        children: " About Me "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "/about",
                        children: " Projects "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "/about",
                        children: " Resume "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "/about",
                        children: " Contact "
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./pages/_app.js

// pages/_app.js




function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                        strategy: "afterInteractive",
                        dangerouslySetInnerHTML: {
                            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NQV9XGS');
        `
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "/favicon.ico",
                        type: "image/x-icon"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico",
                        type: "image/x-icon"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "website developer, software developer, programmer, open source, developer, Nigeria, Edidiong, Technicaldee"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Information about TechnicalDee, software developer."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "subject",
                        content: "Software developer"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "copyright",
                        content: "TechnicalDee"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "language",
                        content: "EN"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "index,follow"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "revised",
                        content: "Thursday, March 17th, 2022, 2:30 pm"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "abstract",
                        content: "Software Developer"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "topic",
                        content: "Tech"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "summary",
                        content: "Information about TechnicalDee"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "Classification",
                        content: "Technology"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: "name, technical@technicaldee.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "designer",
                        content: "Edidiong Udoh"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "copyright",
                        content: "2022 TechnicalDee"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "reply-to",
                        content: "gisthive@gmail.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "owner",
                        content: "Edidiong Udoh"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "url",
                        content: "http://www.technicaldee.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "identifier-URL",
                        content: "http://www.technicaldee.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "directory",
                        content: "submission"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "category",
                        content: "Technology"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "coverage",
                        content: "Worldwide"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "distribution",
                        content: "Global"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "rating",
                        content: "General"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "revisit-after",
                        content: "7 days"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        "http-equiv": "Expires",
                        content: "0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        "http-equiv": "Pragma",
                        content: "no-cache"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        "http-equiv": "Cache-Control",
                        content: "no-cache"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: "https://technicaldee.com/"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: "🛠️ Dee - Programming and web development"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: "Programming and web development"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: "/seo.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:url",
                        content: "https://technicaldee.com/"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:title",
                        content: "🛠️ Dee - Programming and web development"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:description",
                        content: "Programming and web development"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:image",
                        content: "/seo.png"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-6 space-y-12 md:px-20 lg:px-20 px-8 ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675], () => (__webpack_exec__(930)));
module.exports = __webpack_exports__;

})();