"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ client)
});

;// CONCATENATED MODULE: external "@sanity/client"
const client_namespaceObject = require("@sanity/client");
var client_default = /*#__PURE__*/__webpack_require__.n(client_namespaceObject);
;// CONCATENATED MODULE: ./client.js
// client.js

/* harmony default export */ const client = (client_default()({
    projectId: "8qhsphaw",
    dataset: "production",
    useCdn: false // `false` if you want to ensure fresh data
}));


/***/ }),

/***/ 8125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "groq"
var external_groq_ = __webpack_require__(1360);
var external_groq_default = /*#__PURE__*/__webpack_require__.n(external_groq_);
// EXTERNAL MODULE: ./client.js + 1 modules
var client = __webpack_require__(481);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "next-seo"
const external_next_seo_namespaceObject = require("next-seo");
;// CONCATENATED MODULE: ./pages/index.js






const Index = ({ posts , project  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_namespaceObject.NextSeo, {
                title: "Web Developer and Digital Marketer, TechnicalDee",
                description: "Get your Web application setup and get expert social management with TechnicalDee",
                openGraph: {
                    type: "website",
                    url: "https://www.technicaldee.com",
                    title: "Web Developer and Digital Marketer, TechnicalDee",
                    description: "Get your Web application setup and get expert social management with TechnicalDee",
                    images: [
                        {
                            url: "https://www.technicaldee.com/edidiong.png",
                            width: 800,
                            height: 600,
                            alt: "Edidiong Udoh"
                        }, 
                    ]
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_namespaceObject.FAQPageJsonLd, {
                mainEntity: [
                    {
                        questionName: "How long is the delivery time?",
                        acceptedAnswerText: "7-15 business days."
                    },
                    {
                        questionName: "Where can I find information about your services?",
                        acceptedAnswerText: "Read more on our website."
                    }, 
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_namespaceObject.LogoJsonLd, {
                logo: "http://www.technicaldee.com/logo.png",
                url: "http://www.technicaldee.com"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_namespaceObject.SocialProfileJsonLd, {
                type: "Person",
                name: "Edidiong Udoh",
                url: "http://www.technicaldee.com",
                sameAs: [
                    "http://instagram.com/technicaldee",
                    "http://www.linkedin.com/in/technicaldee", 
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_namespaceObject.DefaultSeo, {
                openGraph: {
                    type: "website",
                    locale: "en_NG",
                    url: "https://www.technicaldee.com/",
                    site_name: "TechnicalDee"
                },
                twitter: {
                    handle: "@technicaldee",
                    site: "@technicaldee",
                    cardType: "summary_large_image"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Web Developer and Digital Marketer, TechnicalDee"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "card",
                className: "flex items-center justify-center w-full shadow-2xl rounded-xl",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-3/4 px-0 py-6 space-y-3 md:p-6 lg:p-6 h-4/5 md:flex lg:flex md:space-y-0 lg:space-y-0 md:space-x-4 lg:space-x-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/edidiong.png",
                            width: "240",
                            height: "240"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            id: "bio",
                            className: "flex flex-col justify-center space-y-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-4xl font-bold",
                                    children: "Edidiong Udoh (\uD83D\uDEE0 Dee)"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    id: "cta",
                                    className: "my-4 space-x-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/resume.pdf",
                                            className: "p-2 px-4 text-white rounded-xl bg-brand hover:bg-indigo-500 ",
                                            children: " Resume"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "mailto:technical@technicaldee.com",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "p-2 px-4 text-black border-2 cursor-pointer rounded-xl border-brand hover:bg-indigo-100",
                                                children: "Contact"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "text-lg font-light",
                                    children: [
                                        "I am a ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                            children: "Software Developer"
                                        }),
                                        ", ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                            children: "Digital Marketer"
                                        }),
                                        " and ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                            children: "Content Creator"
                                        }),
                                        " based in Nigeria. My favourite technologies are React (JavaScript) and Laravel(PHP)."
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    id: "icons",
                                    className: "flex space-x-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://github.com/technicaldee",
                                            className: "flex items-center justify-center w-8 h-8 text-white rounded-full bg-brand hover:bg-indigo-500",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "28",
                                                fill: "white",
                                                className: "w-6 rounded-full bg-brand",
                                                viewBox: "0 0 16 16",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.youtube.com/channel/UCWrC-YpAIbl4DfMkPuJpeEw",
                                            className: "flex items-center justify-center w-8 h-8 text-white rounded-full bg-brand hover:bg-indigo-500",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "32",
                                                fill: "white",
                                                className: "w-6 rounded-full",
                                                viewBox: "0 0 16 16",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.linkedin.com/in/technicaldee",
                                            className: "flex items-center justify-center w-8 h-8 text-white rounded-full bg-brand hover:bg-indigo-500",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "32",
                                                fill: "white",
                                                className: "w-6 rounded-full",
                                                viewBox: "0 0 16 16",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.instagram.com/technicaldee",
                                            className: "flex items-center justify-center w-8 h-8 text-white rounded-full bg-brand hover:bg-indigo-500",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "32",
                                                fill: "white",
                                                className: "w-6 rounded-full",
                                                viewBox: "0 0 16 16",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "services",
                className: "flex justify-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-4/5 space-y-6",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-4xl font-bold",
                            children: "Services I Provide"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full p-4 font-bold shadow-xl rounded-xl",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                        children: "UI/UX Design"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full p-4 font-bold shadow-xl rounded-xl",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                        children: "Web Development"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full p-4 font-bold shadow-xl rounded-xl",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                                        children: "Digital Marketing"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "projects",
                className: "flex justify-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-4/5 space-y-6",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-4xl font-bold",
                            children: "My Work"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2",
                            children: project.map(({ _id , title ="" , slug ="" , link ="" , publishedAt =""  })=>slug && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full p-4 shadow-xl rounded-xl",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: link,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "text-2xl font-semibold",
                                            children: title
                                        })
                                    })
                                }, _id)
                            )
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "blog",
                className: "flex justify-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-4/5 space-y-6",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-4xl font-bold",
                            children: "What's New?"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            id: "categories",
                            className: "hidden my-4 space-x-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "p-2 px-4 text-white rounded-xl bg-brand hover:bg-indigo-500 ",
                                    children: " All"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "p-2 px-4 text-black border-2 rounded-xl border-brand hover:bg-indigo-100",
                                    children: "Cat 1"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-3",
                            children: posts.length > 0 && posts.map(({ _id , title ="" , slug ="" , publishedAt =""  })=>slug && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "w-full p-4 shadow-xl rounded-xl",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: `${slug.current}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-2xl font-semibold",
                                                children: title
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "(",
                                        new Date(publishedAt).toDateString(),
                                        ")"
                                    ]
                                }, _id)
                            )
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-6 text-brand",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("center", {
                    children: [
                        "Made with \uD83D\uDC4C ",
                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                            children: "in Uyo"
                        }),
                        " by ",
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://technicaldee.com",
                            children: "TechnicalDee"
                        })
                    ]
                })
            })
        ]
    });
};
async function getServerSideProps() {
    const posts = await client/* default.fetch */.Z.fetch((external_groq_default())`
      *[_type == "post"] | order(publishedAt desc)
    `);
    const project = await client/* default.fetch */.Z.fetch((external_groq_default())`
      *[_type == "project"] | order(publishedAt desc)
    `);
    return {
        props: {
            posts,
            project
        }
    };
}
/* harmony default export */ const pages = (Index);


/***/ }),

/***/ 1360:
/***/ ((module) => {

module.exports = require("groq");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
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
var __webpack_exports__ = __webpack_require__.X(0, [505,664], () => (__webpack_exec__(8125)));
module.exports = __webpack_exports__;

})();