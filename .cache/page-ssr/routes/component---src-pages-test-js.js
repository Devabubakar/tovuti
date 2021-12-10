exports.id = "component---src-pages-test-js";
exports.ids = ["component---src-pages-test-js"];
exports.modules = {

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");




const Header = ({
  siteTitle
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
  style: {
    background: `rebeccapurple`,
    marginBottom: `1.45rem`
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  style: {
    margin: `0 auto`,
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
  style: {
    margin: 0
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
  to: "/",
  style: {
    color: `white`,
    textDecoration: `none`
  }
}, siteTitle))));

Header.propTypes = {
  siteTitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
Header.defaultProps = {
  siteTitle: ``
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2326376460_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/2326376460.json */ "./public/page-data/sq/d/2326376460.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./src/components/header.js");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.css */ "./src/components/layout.css");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_layout_css__WEBPACK_IMPORTED_MODULE_4__);


/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */





const Layout = ({
  children
}) => {
  var _data$site$siteMetada, _data$site$siteMetada2;

  const data = _public_page_data_sq_d_2326376460_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    siteTitle: ((_data$site$siteMetada = data.site.siteMetadata) === null || _data$site$siteMetada === void 0 ? void 0 : _data$site$siteMetada.title) || `Title`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      margin: `0 auto`,
      maxWidth: 960,
      padding: `0 1.0875rem 1.45rem`
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("main", null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("footer", {
    style: {
      marginTop: `2rem`
    }
  }, "\xA9 ", new Date().getFullYear(), ", Built with", ` `, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    href: "https://www.github.com/Devabubakar"
  }, (_data$site$siteMetada2 = data.site.siteMetadata) === null || _data$site$siteMetada2 === void 0 ? void 0 : _data$site$siteMetada2.author))));
};

Layout.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/63159454.json */ "./public/page-data/sq/d/63159454.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");


/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */




function Seo({
  description,
  lang,
  meta,
  title
}) {
  var _site$siteMetadata, _site$siteMetadata2;

  const {
    site
  } = _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = (_site$siteMetadata = site.siteMetadata) === null || _site$siteMetadata === void 0 ? void 0 : _site$siteMetadata.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet, {
    htmlAttributes: {
      lang
    },
    title: title,
    titleTemplate: defaultTitle ? `%s | ${defaultTitle}` : null,
    meta: [{
      name: `description`,
      content: metaDescription
    }, {
      property: `og:title`,
      content: title
    }, {
      property: `og:description`,
      content: metaDescription
    }, {
      property: `og:type`,
      content: `website`
    }, {
      name: `twitter:card`,
      content: `summary`
    }, {
      name: `twitter:creator`,
      content: ((_site$siteMetadata2 = site.siteMetadata) === null || _site$siteMetadata2 === void 0 ? void 0 : _site$siteMetadata2.author) || ``
    }, {
      name: `twitter:title`,
      content: title
    }, {
      name: `twitter:description`,
      content: metaDescription
    }].concat(meta)
  });
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};
Seo.propTypes = {
  description: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  lang: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  meta: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./src/pages/test.js":
/*!***************************!*\
  !*** ./src/pages/test.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_962566616_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/962566616.json */ "./public/page-data/sq/d/962566616.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");







const Test = () => {
  const data = _public_page_data_sq_d_962566616_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const BlogLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link).withConfig({
    displayName: "test__BlogLink"
  })(["color:blue;"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Page Test"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", null, "Hi from the Test Page"), data.allMarkdownRemark.edges.map(({
    node
  }) => {
    var _node$frontmatter, _node$frontmatter2;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      key: node.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(BlogLink, {
      to: node.fields.slug
    }, (_node$frontmatter = node.frontmatter) === null || _node$frontmatter === void 0 ? void 0 : _node$frontmatter.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, (_node$frontmatter2 = node.frontmatter) === null || _node$frontmatter2 === void 0 ? void 0 : _node$frontmatter2.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), node.excerpt);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/"
  }, "Go back to the homepage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/page-2"
  }, "Go To Page 2"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Test);

/***/ }),

/***/ "./src/components/layout.css":
/*!***********************************!*\
  !*** ./src/components/layout.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./public/page-data/sq/d/2326376460.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2326376460.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Simple Blog","author":"@🚀AbubakarAli"}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/63159454.json":
/*!*********************************************!*\
  !*** ./public/page-data/sq/d/63159454.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Simple Blog","description":"Simple Blog Built","author":"@🚀AbubakarAli"}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/962566616.json":
/*!**********************************************!*\
  !*** ./public/page-data/sq/d/962566616.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"allMarkdownRemark":{"totalCount":2,"edges":[{"node":{"frontmatter":{"title":"Netflix Clone ","date":"2021-11-20"},"html":"<h1>Netflix Clone</h1>\\n<h2>Table of contents</h2>\\n<ul>\\n<li><a href=\\"#overview\\">Overview</a>\\n<ul>\\n<li><a href=\\"#screenshot\\">Screenshot</a></li>\\n<li><a href=\\"#links\\">Links</a></li>\\n<li><a href=\\"#built-with\\">Built with</a></li>\\n<li><a href=\\"#what-i-learned\\">What I learned</a></li>\\n<li><a href=\\"#useful-resources\\">Useful resources</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#author\\">Author</a></li>\\n<li><a href=\\"#acknowledgments\\">Acknowledgments</a></li>\\n</ul>\\n<h2>Overview</h2>\\n<p>Mobile responsive Netflix clone built with ReactJS, styled - component,react router , firebase and context api for state management 🚀</p>\\n<h3>Screenshot</h3>\\n<h2>Desktop</h2>\\n<p><img src=\\"./src/assets/desktop.png\\" alt=\\"\\"></p>\\n<h2>Mobile</h2>\\n<p><img src=\\"./src/assets/mobile.png\\" alt=\\"\\"></p>\\n<h3>Links</h3>\\n<ul>\\n<li>Live Site: <a href=\\"https://netflix-live-clone.herokuapp.com/\\">Heroku</a></li>\\n</ul>\\n<h3>Built with</h3>\\n<ul>\\n<li>React Js</li>\\n<li>Styled Component</li>\\n</ul>\\n<h3>What I learned</h3>\\n<pre><code class=\\"language-js\\">//custom hook for firebase auth\\n//wrapper provider component\\nconst AuthProvider = ({ children }) => {\\n  const auth = useProvideAuth();\\n  return &#x3C;AuthContext.Provider value={auth}>{children}&#x3C;/AuthContext.Provider>;\\n};\\n</code></pre>\\n<h3>Useful resources</h3>\\n<ul>\\n<li><a href=\\"https://beta.reactjs.org/\\">React docs</a> - The react js docs is very intuitive and easy to follow along</li>\\n</ul>\\n<h2>Author</h2>\\n<ul>\\n<li>\\n<p>Website - <a href=\\"https://www.github.com/Devabubakar\\">Abubakar Ali</a></p>\\n</li>\\n<li>\\n<p>Twitter - <a href=\\"https://www.twitter.com/Devabubakar\\">Devabubakar</a></p>\\n</li>\\n</ul>\\n<h2>Acknowledgments</h2>\\n<ul>\\n<li>ps;; I forgot how to align a div inside a div - got help from stackoverflow</li>\\n</ul>","excerpt":"Netflix Clone Table of contents Overview Screenshot Links Built with What I learned Useful resources Author Acknowledgments Overview Mobile…","id":"ad262c50-b647-5b16-ade8-f8e7af0106e6","fields":{"slug":"/firstpost/"}}},{"node":{"frontmatter":{"title":"second Blog","date":"2020 - 02 -12"},"html":"<h3>Testing</h3>\\n<p>Bismillahi Rahmani Rahim</p>\\n<h2>Inshallah</h2>\\n<p>ALlah is the Best</p>","excerpt":"Testing Bismillahi Rahmani Rahim Inshallah ALlah is the Best","id":"736f62b4-a80d-5c99-bb1d-0c8f6c65e870","fields":{"slug":"/secondpost/"}}}]}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-test-js.js.map