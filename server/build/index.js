var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/martin.nirtl/development/dynatrace/appsec-reporter/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
    },
    {
      rel: "icon",
      href: "https://dt-cdn.net/images/favicon-48x48-transparent-48-9b4df9c769.png"
    }
  ];
};
var meta = () => {
  return { title: "AppSec Reporter" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route-module:/Users/martin.nirtl/development/dynatrace/appsec-reporter/app/routes/generate.tsx
var generate_exports = {};
__export(generate_exports, {
  loader: () => loader
});
init_react();
async function loader({ params }) {
  const report = await getReport(params.id);
  const pdf = await generateReportPDF(report);
  return new Response(pdf, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf"
    }
  });
}

// route-module:/Users/martin.nirtl/development/dynatrace/appsec-reporter/app/routes/explore.tsx
var explore_exports = {};
__export(explore_exports, {
  default: () => Index,
  loader: () => loader2,
  meta: () => meta2
});
init_react();
var import_remix3 = __toModule(require_remix());
var import_react_table = __toModule(require("react-table"));
var import_react = __toModule(require("react"));

// app/components/navbar.tsx
init_react();
function Navbar() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "navbar",
    role: "navigation",
    "aria-label": "main navigation"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "navbar-brand"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "navbar-item",
    href: "https://bulma.io"
  }, "foo"), /* @__PURE__ */ React.createElement("a", {
    role: "button",
    className: "navbar-burger",
    "aria-label": "menu",
    "aria-expanded": "false",
    "data-target": "navbarBasicExample"
  }, /* @__PURE__ */ React.createElement("span", {
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("span", {
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("span", {
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React.createElement("div", {
    id: "navbarBasicExample",
    className: "navbar-menu"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "navbar-start"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "navbar-item"
  }, "Home"), /* @__PURE__ */ React.createElement("a", {
    className: "navbar-item"
  }, "Documentation"), /* @__PURE__ */ React.createElement("div", {
    className: "navbar-item has-dropdown is-hoverable"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "navbar-link"
  }, "More"), /* @__PURE__ */ React.createElement("div", {
    className: "navbar-dropdown"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "navbar-item"
  }, "About"), /* @__PURE__ */ React.createElement("a", {
    className: "navbar-item"
  }, "Jobs"), /* @__PURE__ */ React.createElement("a", {
    className: "navbar-item"
  }, "Contact"), /* @__PURE__ */ React.createElement("hr", {
    className: "navbar-divider"
  }), /* @__PURE__ */ React.createElement("a", {
    className: "navbar-item"
  }, "Report an issue")))), /* @__PURE__ */ React.createElement("div", {
    className: "navbar-end"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "navbar-item"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "buttons"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "button is-primary"
  }, /* @__PURE__ */ React.createElement("strong", null, "Sign up")), /* @__PURE__ */ React.createElement("a", {
    className: "button is-light"
  }, "Log in"))))));
}

// app/helpers/dynatrace.tsx
init_react();
var getComputedSecurityProblems = async () => {
  const SECURITY_PROBLEMS_API = `${process.env.DT_TENANT}/api/v2/securityProblems?pageSize=500`;
  const SECURITY_PROBLEMS_DETAILS_API = `${process.env.DT_TENANT}/api/v2/securityProblems/`;
  const FIELDS = "%2BriskAssessment%2C%2BmanagementZones%2C%2Bdescription%2C%2Bevents%2C%2BvulnerableComponents%2C%2BaffectedEntities%2C%2BexposedEntities%2C%2BreachableDataAssets%2C%2BrelatedEntities%2C%2BrelatedContainerImages";
  const securityProblemsList = [];
  let nextPageKey = "";
  do {
    const res = await fetch(nextPageKey ? `${SECURITY_PROBLEMS_API}&nextPageKey=${nextPageKey}` : SECURITY_PROBLEMS_API, { method: "GET", headers: { "Authorization": `Api-Token ${process.env.DT_TOKEN}` } });
    const body = await res.json();
    securityProblemsList.push(...body.securityProblems);
    nextPageKey = body.nextPageKey;
  } while (!!nextPageKey);
  const detailedSecurityProblemsList = (await Promise.allSettled(securityProblemsList.map(async ({ securityProblemId }) => {
    const res = await fetch(SECURITY_PROBLEMS_DETAILS_API + securityProblemId + `?fields=${FIELDS}`, { method: "GET", headers: { "Authorization": `Api-Token ${process.env.DT_TOKEN}` } });
    const p = await res.json();
    return p;
  }))).map((e) => e.status === "fulfilled" ? e.value : e.reason);
  let idCount = 0;
  return detailedSecurityProblemsList.reduce((list, p, i) => {
    const flattenedProblems = p.affectedEntities.map((entity) => {
      var _a;
      return {
        id: ++idCount,
        entity,
        status: p.status,
        riskLevel: p.riskAssessment.riskLevel,
        riskScore: p.riskAssessment.riskScore,
        exposed: p.riskAssessment.exposure !== "NOT_AVAILABLE",
        dataAssets: p.riskAssessment.dataAssets !== "NOT_AVAILABLE",
        publicExploit: p.riskAssessment.publicExploit !== "NOT_AVAILABLE",
        muted: p.muted,
        technology: p.technology,
        internalLink: p.url,
        externalLink: ((_a = p.externalVulnerabilityId) == null ? void 0 : _a.startsWith("SNYK")) ? `https://security.snyk.io/vuln/${p.externalVulnerabilityId}` : "-",
        firstSeen: p.firstSeenTimestamp,
        lastUpdated: p.lastUpdatedTimestamp
      };
    });
    list.push(...flattenedProblems);
    return list;
  }, []);
};

// route-module:/Users/martin.nirtl/development/dynatrace/appsec-reporter/app/routes/explore.tsx
var meta2 = () => {
  return { title: "AppSec Explorer" };
};
var loader2 = async () => {
  return getComputedSecurityProblems();
};
function Index() {
  const loadedData = (0, import_remix3.useLoaderData)();
  const cols = Object.keys(loadedData[0]);
  const columns = (0, import_react.useMemo)(() => [
    {
      id: "expander",
      Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => /* @__PURE__ */ React.createElement("span", __spreadValues({}, getToggleAllRowsExpandedProps()), isAllRowsExpanded ? "\u{1F447}" : "\u{1F449}"),
      Cell: ({ row }) => row.canExpand ? /* @__PURE__ */ React.createElement("span", __spreadValues({}, row.getToggleRowExpandedProps({
        style: {
          paddingLeft: `${row.depth * 2}rem`
        }
      })), row.isExpanded ? "\u{1F447}" : "\u{1F449}") : null
    },
    ...cols.map((c) => ({ Header: c, accessor: c }))
  ], []);
  const data = (0, import_react.useMemo)(() => loadedData, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { groupBy, expanded }
  } = (0, import_react_table.useTable)({
    columns,
    data
  }, import_react_table.useGroupBy, import_react_table.useSortBy, import_react_table.useExpanded);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("div", {
    className: "section"
  }, /* @__PURE__ */ React.createElement("div", {
    style: { height: "100vh" }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "table-container"
  }, /* @__PURE__ */ React.createElement("table", __spreadValues({
    className: "table is-fullwidth is-hoverable"
  }, getTableProps()), /* @__PURE__ */ React.createElement("thead", null, headerGroups.map((headerGroup) => /* @__PURE__ */ React.createElement("tr", __spreadValues({}, headerGroup.getHeaderGroupProps()), headerGroup.headers.map((column) => /* @__PURE__ */ React.createElement("th", __spreadValues({}, column.getHeaderProps(column.getSortByToggleProps())), column.canGroupBy ? /* @__PURE__ */ React.createElement("span", __spreadValues({}, column.getGroupByToggleProps()), column.isGrouped ? "\u{1F6D1} " : "\u{1F44A} ") : null, column.render("Header")))))), /* @__PURE__ */ React.createElement("tbody", __spreadValues({}, getTableBodyProps()), rows.map((row) => {
    prepareRow(row);
    return /* @__PURE__ */ React.createElement("tr", __spreadValues({}, row.getRowProps()), row.cells.map((cell) => {
      return /* @__PURE__ */ React.createElement("td", __spreadValues({}, cell.getCellProps()), cell.render("Cell"));
    }));
  })))))));
}

// route-module:/Users/martin.nirtl/development/dynatrace/appsec-reporter/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2
});
init_react();
function Index2() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "is-flex is-justify-content-center is-align-items-center",
    style: { height: "100vh" }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-5",
    style: { width: "800px" }
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "title has-text-danger"
  }, "AppSec Reporter"), /* @__PURE__ */ React.createElement("h2", {
    className: "subtitle"
  }, "Generate security reports based on Dynatrace Application Security"), /* @__PURE__ */ React.createElement("p", {
    className: ""
  }, "Dynatrace ", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.dynatrace.com/support/help/how-to-use-dynatrace/application-security"
  }, "Application Security"), " enables you to detect, visualize, analyze, monitor, and remediate open-source and third-party vulnerabilities in production and pre-production environments at runtime."), /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit,
    className: "mt-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "field"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "select is-fullwidth"
  }, /* @__PURE__ */ React.createElement("select", null, /* @__PURE__ */ React.createElement("option", null, "Select a report"), /* @__PURE__ */ React.createElement("option", null, "Report A")))), /* @__PURE__ */ React.createElement("div", {
    className: "field"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button is-danger is-fullwidth",
    type: "submit",
    value: "Submit"
  }, "Generate")), /* @__PURE__ */ React.createElement("p", {
    className: "help"
  }, "Need help? Reach out to ", /* @__PURE__ */ React.createElement("a", {
    href: "mailto:martin.nirtl@dynatrace.com"
  }, "martin.nirtl@dynatrace.com")))));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/generate": {
    id: "routes/generate",
    parentId: "root",
    path: "generate",
    index: void 0,
    caseSensitive: void 0,
    module: generate_exports
  },
  "routes/explore": {
    id: "routes/explore",
    parentId: "root",
    path: "explore",
    index: void 0,
    caseSensitive: void 0,
    module: explore_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJ0aW4ubmlydGwvZGV2ZWxvcG1lbnQvZHluYXRyYWNlL2FwcHNlYy1yZXBvcnRlci9hcHAvcm9vdC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJ0aW4ubmlydGwvZGV2ZWxvcG1lbnQvZHluYXRyYWNlL2FwcHNlYy1yZXBvcnRlci9hcHAvcm91dGVzL2dlbmVyYXRlLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL21hcnRpbi5uaXJ0bC9kZXZlbG9wbWVudC9keW5hdHJhY2UvYXBwc2VjLXJlcG9ydGVyL2FwcC9yb3V0ZXMvZXhwbG9yZS50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyLnRzeCIsICIuLi8uLi9hcHAvaGVscGVycy9keW5hdHJhY2UudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbWFydGluLm5pcnRsL2RldmVsb3BtZW50L2R5bmF0cmFjZS9hcHBzZWMtcmVwb3J0ZXIvYXBwL3JvdXRlcy9pbmRleC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9tYXJ0aW4ubmlydGwvZGV2ZWxvcG1lbnQvZHluYXRyYWNlL2FwcHNlYy1yZXBvcnRlci9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvbWFydGluLm5pcnRsL2RldmVsb3BtZW50L2R5bmF0cmFjZS9hcHBzZWMtcmVwb3J0ZXIvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9tYXJ0aW4ubmlydGwvZGV2ZWxvcG1lbnQvZHluYXRyYWNlL2FwcHNlYy1yZXBvcnRlci9hcHAvcm91dGVzL2dlbmVyYXRlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvbWFydGluLm5pcnRsL2RldmVsb3BtZW50L2R5bmF0cmFjZS9hcHBzZWMtcmVwb3J0ZXIvYXBwL3JvdXRlcy9leHBsb3JlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvbWFydGluLm5pcnRsL2RldmVsb3BtZW50L2R5bmF0cmFjZS9hcHBzZWMtcmVwb3J0ZXIvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL2dlbmVyYXRlXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvZ2VuZXJhdGVcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJnZW5lcmF0ZVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2V4cGxvcmVcIjoge1xuICAgIGlkOiBcInJvdXRlcy9leHBsb3JlXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiZXhwbG9yZVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlM1xuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9idWxtYUAwLjkuMy9jc3MvYnVsbWEubWluLmNzc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6IFwiaWNvblwiLFxuICAgICAgaHJlZjogXCJodHRwczovL2R0LWNkbi5uZXQvaW1hZ2VzL2Zhdmljb24tNDh4NDgtdHJhbnNwYXJlbnQtNDgtOWI0ZGY5Yzc2OS5wbmdcIlxuICAgIH1cbiAgXTtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBcIkFwcFNlYyBSZXBvcnRlclwiIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcih7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHJlcG9ydCA9IGF3YWl0IGdldFJlcG9ydChwYXJhbXMuaWQpO1xuICBjb25zdCBwZGYgPSBhd2FpdCBnZW5lcmF0ZVJlcG9ydFBERihyZXBvcnQpO1xuICByZXR1cm4gbmV3IFJlc3BvbnNlKHBkZiwge1xuICAgIHN0YXR1czogMjAwLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vcGRmXCJcbiAgICB9XG4gIH0pO1xufSIsICJpbXBvcnQgeyBNZXRhRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHVzZVRhYmxlLCB1c2VTb3J0QnksIHVzZUdyb3VwQnksIHVzZUV4cGFuZGVkIH0gZnJvbSAncmVhY3QtdGFibGUnO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJ+L2NvbXBvbmVudHMvbmF2YmFyXCI7XG5pbXBvcnQgeyBnZXRDb21wdXRlZFNlY3VyaXR5UHJvYmxlbXMgfSBmcm9tIFwifi9oZWxwZXJzL2R5bmF0cmFjZVwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJBcHBTZWMgRXhwbG9yZXJcIiB9O1xufTtcblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4gZ2V0Q29tcHV0ZWRTZWN1cml0eVByb2JsZW1zKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgbG9hZGVkRGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcbiAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobG9hZGVkRGF0YSwgbnVsbCwgMikpXG5cbiAgY29uc3QgY29scyA9IE9iamVjdC5rZXlzKGxvYWRlZERhdGFbMF0pO1xuXG4gIGNvbnN0IGNvbHVtbnMgPSB1c2VNZW1vKCgpPT4gW1xuICAgIHtcbiAgICAgIC8vIEJ1aWxkIG91ciBleHBhbmRlciBjb2x1bW5cbiAgICAgIGlkOiAnZXhwYW5kZXInLCAvLyBNYWtlIHN1cmUgaXQgaGFzIGFuIElEXG4gICAgICBIZWFkZXI6ICh7IGdldFRvZ2dsZUFsbFJvd3NFeHBhbmRlZFByb3BzLCBpc0FsbFJvd3NFeHBhbmRlZCB9KSA9PiAoXG4gICAgICAgIDxzcGFuIHsuLi5nZXRUb2dnbGVBbGxSb3dzRXhwYW5kZWRQcm9wcygpfT5cbiAgICAgICAgICB7aXNBbGxSb3dzRXhwYW5kZWQgPyAnXHVEODNEXHVEQzQ3JyA6ICdcdUQ4M0RcdURDNDknfVxuICAgICAgICA8L3NwYW4+XG4gICAgICApLFxuICAgICAgQ2VsbDogKHsgcm93IH0pID0+XG4gICAgICAgIC8vIFVzZSB0aGUgcm93LmNhbkV4cGFuZCBhbmQgcm93LmdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMgcHJvcCBnZXR0ZXJcbiAgICAgICAgLy8gdG8gYnVpbGQgdGhlIHRvZ2dsZSBmb3IgZXhwYW5kaW5nIGEgcm93XG4gICAgICAgIHJvdy5jYW5FeHBhbmQgPyAoXG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIHsuLi5yb3cuZ2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wcyh7XG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgLy8gV2UgY2FuIGV2ZW4gdXNlIHRoZSByb3cuZGVwdGggcHJvcGVydHlcbiAgICAgICAgICAgICAgICAvLyBhbmQgcGFkZGluZ0xlZnQgdG8gaW5kaWNhdGUgdGhlIGRlcHRoXG4gICAgICAgICAgICAgICAgLy8gb2YgdGhlIHJvd1xuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBgJHtyb3cuZGVwdGggKiAyfXJlbWAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cm93LmlzRXhwYW5kZWQgPyAnXHVEODNEXHVEQzQ3JyA6ICdcdUQ4M0RcdURDNDknfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKSA6IG51bGwsXG4gICAgfSxcbiAgICAuLi5jb2xzLm1hcChjID0+ICh7IEhlYWRlcjogYywgYWNjZXNzb3I6IGMgfSkpXG4gICAgLy8geyBIZWFkZXI6ICdzdGF0dXMnLCBhY2Nlc3NvcjogJ3N0YXR1cycgfSxcbiAgICAvLyB7IEhlYWRlcjogJ2Rpc3BsYXlJZCcsIGFjY2Vzc29yOiAnZGlzcGxheUlkJyB9LFxuICAgIC8vIHsgSGVhZGVyOiAndGVjaG5vbG9neScsIGFjY2Vzc29yOiAndGVjaG5vbG9neScgfSxcbiAgICAvLyB7IEhlYWRlcjogJ211dGVkJywgYWNjZXNzb3I6ICdtdXRlZCcgfSxcbiAgICAvLyB7IEhlYWRlcjogJ3RpdGxlJywgYWNjZXNzb3I6ICd0aXRsZScgfSxcbiAgXSwgW10pO1xuXG4gIGNvbnN0IGRhdGEgPSB1c2VNZW1vKCgpPT4gbG9hZGVkRGF0YSwgW10pO1xuXG4gIC8vIHJldHVybiAoXG4gIC8vICAgPGRpdj5cbiAgLy8gICAgIHtKU09OLnN0cmluZ2lmeShkYXRhWzBdLCBudWxsLCAyKX1cbiAgLy8gICA8L2Rpdj5cbiAgLy8gKVxuICBcblxuICAvLyB7IFxuICAvLyAgIFwic2VjdXJpdHlQcm9ibGVtSWRcIjogXCI1NDgzMDU0NTY5MDU2OTI3NTE5XCIsIFxuICAvLyAgIFwiZGlzcGxheUlkXCI6IFwiUy0xXCIsIFxuICAvLyAgIFwic3RhdHVzXCI6IFwiT1BFTlwiLCBcbiAgLy8gICBcIm11dGVkXCI6IGZhbHNlLCBcbiAgLy8gICBcImV4dGVybmFsVnVsbmVyYWJpbGl0eUlkXCI6IFwiU05ZSy1ET1RORVQtU1lTVEVNRElSRUNUT1JZU0VSVklDRVNQUk9UT0NPTFMtMTczMDU2OVwiLCBcbiAgLy8gICBcInZ1bG5lcmFiaWxpdHlUeXBlXCI6IFwiVEhJUkRfUEFSVFlcIiwgXG4gIC8vICAgXCJ0aXRsZVwiOiBcIkNyZWRlbnRpYWwgRXhwb3N1cmVcIiwgXG4gIC8vICAgXCJwYWNrYWdlTmFtZVwiOiBcIlN5c3RlbS5EaXJlY3RvcnlTZXJ2aWNlcy5Qcm90b2NvbHNcIiwgXG4gIC8vICAgXCJ1cmxcIjogXCJodHRwczovL3drcDg0MDU1LmxpdmUuZHluYXRyYWNlLmNvbS91aS9zZWN1cml0eS9wcm9ibGVtLzU0ODMwNTQ1NjkwNTY5Mjc1MTlcIiwgXG4gIC8vICAgXCJ0ZWNobm9sb2d5XCI6IFwiRE9UTkVUXCIsIFxuICAvLyAgIFwiZmlyc3RTZWVuVGltZXN0YW1wXCI6IDE2NDAwNzUxNTU1MjcsIFxuICAvLyAgIFwibGFzdFVwZGF0ZWRUaW1lc3RhbXBcIjogMTY0NDUyMzQzNjA2MCwgXG4gIC8vICAgXCJjdmVJZHNcIjogWyBcIkNWRS0yMDIxLTQxMzU1XCIgXSwgXG4gIC8vICAgXCJtdXRlU3RhdGVDaGFuZ2VJblByb2dyZXNzXCI6IGZhbHNlXG4gIC8vIH1cbiAgY29uc3Qge1xuICAgIGdldFRhYmxlUHJvcHMsXG4gICAgZ2V0VGFibGVCb2R5UHJvcHMsXG4gICAgaGVhZGVyR3JvdXBzLFxuICAgIHJvd3MsXG4gICAgcHJlcGFyZVJvdyxcbiAgICBzdGF0ZTogeyBncm91cEJ5LCBleHBhbmRlZCB9XG4gIH0gPSB1c2VUYWJsZShcbiAgICB7IFxuICAgICAgY29sdW1ucywgXG4gICAgICBkYXRhIFxuICAgIH0sXG4gICAgdXNlR3JvdXBCeSwgXG4gICAgdXNlU29ydEJ5LFxuICAgIHVzZUV4cGFuZGVkLFxuICApO1xuXG4gIC8vIGNvbnN0IGZpcnN0UGFnZVJvd3MgPSByb3dzLnNsaWNlKDAsIDIwKVxuXG4gIHJldHVybiAoPD5cbiAgICAgIDxOYXZiYXI+PC9OYXZiYXI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgIHsvKiA8cHJlPlxuICAgICAgICA8Y29kZT57SlNPTi5zdHJpbmdpZnkoeyBncm91cEJ5LCBleHBhbmRlZCB9LCBudWxsLCAyKX08L2NvZGU+XG4gICAgICA8L3ByZT4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWNvbnRhaW5lclwiPlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgaXMtZnVsbHdpZHRoIGlzLWhvdmVyYWJsZVwiIHsuLi5nZXRUYWJsZVByb3BzKCl9PlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIHsvLyBMb29wIG92ZXIgdGhlIGhlYWRlciByb3dzXG4gICAgICAgICAgICBoZWFkZXJHcm91cHMubWFwKGhlYWRlckdyb3VwID0+IChcbiAgICAgICAgICAgICAgLy8gQXBwbHkgdGhlIGhlYWRlciByb3cgcHJvcHNcbiAgICAgICAgICAgICAgPHRyIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxuICAgICAgICAgICAgICAgIHsvLyBMb29wIG92ZXIgdGhlIGhlYWRlcnMgaW4gZWFjaCByb3dcbiAgICAgICAgICAgICAgICBoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxuICAgICAgICAgICAgICAgICAgLy8gQXBwbHkgdGhlIGhlYWRlciBjZWxsIHByb3BzXG4gICAgICAgICAgICAgICAgICA8dGggey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcyhjb2x1bW4uZ2V0U29ydEJ5VG9nZ2xlUHJvcHMoKSl9PlxuICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmNhbkdyb3VwQnkgPyAoXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjb2x1bW4gY2FuIGJlIGdyb3VwZWQsIGxldCdzIGFkZCBhIHRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4uY29sdW1uLmdldEdyb3VwQnlUb2dnbGVQcm9wcygpfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmlzR3JvdXBlZCA/ICdcdUQ4M0RcdURFRDEgJyA6ICdcdUQ4M0RcdURDNEEgJ31cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIHsvLyBSZW5kZXIgdGhlIGhlYWRlclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX1cbiAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIHsvKiBBcHBseSB0aGUgdGFibGUgYm9keSBwcm9wcyAqL31cbiAgICAgICAgICA8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxuICAgICAgICAgICAgey8vIExvb3Agb3ZlciB0aGUgdGFibGUgcm93c1xuICAgICAgICAgICAgcm93cy5tYXAocm93ID0+IHtcbiAgICAgICAgICAgICAgLy8gUHJlcGFyZSB0aGUgcm93IGZvciBkaXNwbGF5XG4gICAgICAgICAgICAgIHByZXBhcmVSb3cocm93KVxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIC8vIEFwcGx5IHRoZSByb3cgcHJvcHNcbiAgICAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cbiAgICAgICAgICAgICAgICAgIHsvLyBMb29wIG92ZXIgdGhlIHJvd3MgY2VsbHNcbiAgICAgICAgICAgICAgICAgIHJvdy5jZWxscy5tYXAoY2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBjZWxsIHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvLyBSZW5kZXIgdGhlIGNlbGwgY29udGVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucmVuZGVyKCdDZWxsJyl9XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiIHJvbGU9XCJuYXZpZ2F0aW9uXCIgYXJpYS1sYWJlbD1cIm1haW4gbmF2aWdhdGlvblwiPlxuICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxuICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCIgaHJlZj1cImh0dHBzOi8vYnVsbWEuaW9cIj5cbiAgICAgIHsvKiA8aW1nIHNyYz1cImh0dHBzOi8vYnVsbWEuaW8vaW1hZ2VzL2J1bG1hLWxvZ28ucG5nXCIgd2lkdGg9XCIxMTJcIiBoZWlnaHQ9XCIyOFwiIC8+ICovfWZvb1xuICAgIDwvYT5cblxuICAgIDxhIHJvbGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYXZiYXItYnVyZ2VyXCIgYXJpYS1sYWJlbD1cIm1lbnVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBkYXRhLXRhcmdldD1cIm5hdmJhckJhc2ljRXhhbXBsZVwiPlxuICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgIDwvYT5cbiAgPC9kaXY+XG5cbiAgPGRpdiBpZD1cIm5hdmJhckJhc2ljRXhhbXBsZVwiIGNsYXNzTmFtZT1cIm5hdmJhci1tZW51XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItc3RhcnRcIj5cbiAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+XG4gICAgICAgIEhvbWVcbiAgICAgIDwvYT5cblxuICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgRG9jdW1lbnRhdGlvblxuICAgICAgPC9hPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtIGhhcy1kcm9wZG93biBpcy1ob3ZlcmFibGVcIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWxpbmtcIj5cbiAgICAgICAgICBNb3JlXG4gICAgICAgIDwvYT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1kcm9wZG93blwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+XG4gICAgICAgICAgICBBYm91dFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxuICAgICAgICAgICAgSm9ic1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxuICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibmF2YmFyLWRpdmlkZXJcIiAvPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+XG4gICAgICAgICAgICBSZXBvcnQgYW4gaXNzdWVcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1lbmRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXByaW1hcnlcIj5cbiAgICAgICAgICAgIDxzdHJvbmc+U2lnbiB1cDwvc3Ryb25nPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHRcIj5cbiAgICAgICAgICAgIExvZyBpblxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiAgKVxufTtcbiIsICJcblxuZXhwb3J0IGNvbnN0IGEgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IFNFQ1VSSVRZX1BST0JMRU1TX0FQSSA9IGAke3Byb2Nlc3MuZW52LkRUX1RFTkFOVH0vYXBpL3YyL3NlY3VyaXR5UHJvYmxlbXM/cGFnZVNpemU9NTAwYDtcbiAgY29uc3QgU0VDVVJJVFlfUFJPQkxFTVNfREVUQUlMU19BUEkgPSBgJHtwcm9jZXNzLmVudi5EVF9URU5BTlR9L2FwaS92Mi9zZWN1cml0eVByb2JsZW1zL2A7XG4gIGNvbnN0IEZJRUxEUyA9ICclMkJyaXNrQXNzZXNzbWVudCUyQyUyQm1hbmFnZW1lbnRab25lcyUyQyUyQmRlc2NyaXB0aW9uJTJDJTJCZXZlbnRzJTJDJTJCdnVsbmVyYWJsZUNvbXBvbmVudHMlMkMlMkJhZmZlY3RlZEVudGl0aWVzJTJDJTJCZXhwb3NlZEVudGl0aWVzJTJDJTJCcmVhY2hhYmxlRGF0YUFzc2V0cyUyQyUyQnJlbGF0ZWRFbnRpdGllcyUyQyUyQnJlbGF0ZWRDb250YWluZXJJbWFnZXMnXG4gIFxuICBjb25zdCBzZWN1cml0eVByb2JsZW1zTGlzdCA9IFtdO1xuICBsZXQgbmV4dFBhZ2VLZXk9ICcnOyBcbiAgZG8ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKG5leHRQYWdlS2V5ID8gYCR7U0VDVVJJVFlfUFJPQkxFTVNfQVBJfSZuZXh0UGFnZUtleT0ke25leHRQYWdlS2V5fWAgOiBTRUNVUklUWV9QUk9CTEVNU19BUEksIHsgbWV0aG9kOiAnR0VUJywgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IGBBcGktVG9rZW4gJHtwcm9jZXNzLmVudi5EVF9UT0tFTn1gIH19KTtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHNlY3VyaXR5UHJvYmxlbXNMaXN0LnB1c2goLi4uYm9keS5zZWN1cml0eVByb2JsZW1zKTtcblxuICAgIG5leHRQYWdlS2V5ID0gYm9keS5uZXh0UGFnZUtleTtcbiAgfSB3aGlsZSghIW5leHRQYWdlS2V5KTtcblxuICByZXR1cm4gKGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChzZWN1cml0eVByb2JsZW1zTGlzdC5tYXAoXG4gICAgYXN5bmMgKHsgc2VjdXJpdHlQcm9ibGVtSWQgfTogeyBzZWN1cml0eVByb2JsZW1JZDogbnVtYmVyIH0pID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFNFQ1VSSVRZX1BST0JMRU1TX0RFVEFJTFNfQVBJICsgc2VjdXJpdHlQcm9ibGVtSWQgKyBgP2ZpZWxkcz0ke0ZJRUxEU31gLCB7IG1ldGhvZDogJ0dFVCcsIGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiBgQXBpLVRva2VuICR7cHJvY2Vzcy5lbnYuRFRfVE9LRU59YCB9fSk7XG4gICAgICBjb25zdCBwID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IHAuZGlzcGxheUlkLFxuICAgICAgICBzdGF0dXM6IHAuc3RhdHVzLFxuICAgICAgICBtdXRlZDogcC5tdXRlZCA/ICdZJyA6ICdOJyxcbiAgICAgICAgc255a0xpbms6IHAuZXh0ZXJuYWxWdWxuZXJhYmlsaXR5SWQ/LnN0YXJ0c1dpdGgoJ1NOWUsnKSA/IGBodHRwczovL3NlY3VyaXR5LnNueWsuaW8vdnVsbi8ke3AuZXh0ZXJuYWxWdWxuZXJhYmlsaXR5SWR9YCA6ICctJyxcbiAgICAgICAgLy8gZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb24sXG4gICAgICAgIGZpcnN0U2VlbjogcC5maXJzdFNlZW5UaW1lc3RhbXAsXG4gICAgICAgIGxhc3RVcGRhdGVkOiBwLmxhc3RVcGRhdGVkVGltZXN0YW1wLFxuICAgICAgICByaXNrTGV2ZWw6IHAucmlza0xldmVsLFxuICAgICAgICByaXNrU2NvcmU6IHAucmlza1Njb3JlLFxuICAgICAgICAvLyBzdGF0dXM6IHA/LnN0YXR1cyxcbiAgICAgIH07XG4gICAgfVxuICApKSkubWFwKGUgPT4gZS5zdGF0dXMgPT09ICdmdWxmaWxsZWQnID8gZS52YWx1ZSA6IGUucmVhc29uKTtcbn1cblxuXG5cbmV4cG9ydCBjb25zdCBnZXRDb21wdXRlZFNlY3VyaXR5UHJvYmxlbXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IFNFQ1VSSVRZX1BST0JMRU1TX0FQSSA9IGAke3Byb2Nlc3MuZW52LkRUX1RFTkFOVH0vYXBpL3YyL3NlY3VyaXR5UHJvYmxlbXM/cGFnZVNpemU9NTAwYDtcbiAgY29uc3QgU0VDVVJJVFlfUFJPQkxFTVNfREVUQUlMU19BUEkgPSBgJHtwcm9jZXNzLmVudi5EVF9URU5BTlR9L2FwaS92Mi9zZWN1cml0eVByb2JsZW1zL2A7XG4gIGNvbnN0IEZJRUxEUyA9ICclMkJyaXNrQXNzZXNzbWVudCUyQyUyQm1hbmFnZW1lbnRab25lcyUyQyUyQmRlc2NyaXB0aW9uJTJDJTJCZXZlbnRzJTJDJTJCdnVsbmVyYWJsZUNvbXBvbmVudHMlMkMlMkJhZmZlY3RlZEVudGl0aWVzJTJDJTJCZXhwb3NlZEVudGl0aWVzJTJDJTJCcmVhY2hhYmxlRGF0YUFzc2V0cyUyQyUyQnJlbGF0ZWRFbnRpdGllcyUyQyUyQnJlbGF0ZWRDb250YWluZXJJbWFnZXMnXG4gIFxuICBjb25zdCBzZWN1cml0eVByb2JsZW1zTGlzdCA9IFtdO1xuICBsZXQgbmV4dFBhZ2VLZXk9ICcnOyBcbiAgZG8ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKG5leHRQYWdlS2V5ID8gYCR7U0VDVVJJVFlfUFJPQkxFTVNfQVBJfSZuZXh0UGFnZUtleT0ke25leHRQYWdlS2V5fWAgOiBTRUNVUklUWV9QUk9CTEVNU19BUEksIHsgbWV0aG9kOiAnR0VUJywgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IGBBcGktVG9rZW4gJHtwcm9jZXNzLmVudi5EVF9UT0tFTn1gIH19KTtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHNlY3VyaXR5UHJvYmxlbXNMaXN0LnB1c2goLi4uYm9keS5zZWN1cml0eVByb2JsZW1zKTtcblxuICAgIG5leHRQYWdlS2V5ID0gYm9keS5uZXh0UGFnZUtleTtcbiAgfSB3aGlsZSghIW5leHRQYWdlS2V5KTtcblxuICBjb25zdCBkZXRhaWxlZFNlY3VyaXR5UHJvYmxlbXNMaXN0ID0gKGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChzZWN1cml0eVByb2JsZW1zTGlzdC5tYXAoXG4gICAgYXN5bmMgKHsgc2VjdXJpdHlQcm9ibGVtSWQgfTogeyBzZWN1cml0eVByb2JsZW1JZDogbnVtYmVyIH0pID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFNFQ1VSSVRZX1BST0JMRU1TX0RFVEFJTFNfQVBJICsgc2VjdXJpdHlQcm9ibGVtSWQgKyBgP2ZpZWxkcz0ke0ZJRUxEU31gLCB7IG1ldGhvZDogJ0dFVCcsIGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiBgQXBpLVRva2VuICR7cHJvY2Vzcy5lbnYuRFRfVE9LRU59YCB9fSk7XG4gICAgICBjb25zdCBwID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgICAgcmV0dXJuIHA7XG4gICAgfVxuICApKSkubWFwKGUgPT4gZS5zdGF0dXMgPT09ICdmdWxmaWxsZWQnID8gZS52YWx1ZSA6IGUucmVhc29uKTtcblxuICBsZXQgaWRDb3VudCA9IDA7XG4gIHJldHVybiBkZXRhaWxlZFNlY3VyaXR5UHJvYmxlbXNMaXN0LnJlZHVjZSgobGlzdCwgcCwgaSkgPT4ge1xuICAgIGNvbnN0IGZsYXR0ZW5lZFByb2JsZW1zID0gcC5hZmZlY3RlZEVudGl0aWVzLm1hcCgoZW50aXR5KSA9PiAoe1xuICAgICAgaWQ6ICsraWRDb3VudCxcbiAgICAgIGVudGl0eSxcbiAgICAgIHN0YXR1czogcC5zdGF0dXMsXG4gICAgICByaXNrTGV2ZWw6IHAucmlza0Fzc2Vzc21lbnQucmlza0xldmVsLFxuICAgICAgcmlza1Njb3JlOiBwLnJpc2tBc3Nlc3NtZW50LnJpc2tTY29yZSxcbiAgICAgIGV4cG9zZWQ6IHAucmlza0Fzc2Vzc21lbnQuZXhwb3N1cmUgIT09IFwiTk9UX0FWQUlMQUJMRVwiLFxuICAgICAgZGF0YUFzc2V0czogcC5yaXNrQXNzZXNzbWVudC5kYXRhQXNzZXRzICE9PSBcIk5PVF9BVkFJTEFCTEVcIixcbiAgICAgIHB1YmxpY0V4cGxvaXQ6IHAucmlza0Fzc2Vzc21lbnQucHVibGljRXhwbG9pdCAhPT0gXCJOT1RfQVZBSUxBQkxFXCIsXG4gICAgICBtdXRlZDogcC5tdXRlZCxcbiAgICAgIHRlY2hub2xvZ3k6IHAudGVjaG5vbG9neSxcbiAgICAgIGludGVybmFsTGluazogcC51cmwsXG4gICAgICAvLyBUT0RPIGNoYW5nZSB0byBhcnJheSB3aGljaCBob2xkcyBsaW5rIHRleHQgYW5kIGhyZWZcbiAgICAgIGV4dGVybmFsTGluazogcC5leHRlcm5hbFZ1bG5lcmFiaWxpdHlJZD8uc3RhcnRzV2l0aCgnU05ZSycpID8gYGh0dHBzOi8vc2VjdXJpdHkuc255ay5pby92dWxuLyR7cC5leHRlcm5hbFZ1bG5lcmFiaWxpdHlJZH1gIDogJy0nLFxuICAgICAgLy8gY3ZlSWRzOiBwLmN2ZUlkcyxcbiAgICAgIGZpcnN0U2VlbjogcC5maXJzdFNlZW5UaW1lc3RhbXAsXG4gICAgICBsYXN0VXBkYXRlZDogcC5sYXN0VXBkYXRlZFRpbWVzdGFtcCxcbiAgICB9KSk7XG5cbiAgICBsaXN0LnB1c2goLi4uZmxhdHRlbmVkUHJvYmxlbXMpXG5cbiAgICByZXR1cm4gbGlzdFxuICB9LCBbXSk7XG59IiwgImltcG9ydCB7IEZvcm1FdmVudEhhbmRsZXIgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdDogRm9ybUV2ZW50SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlzLWZsZXggaXMtanVzdGlmeS1jb250ZW50LWNlbnRlciBpcy1hbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01XCIgc3R5bGU9e3sgd2lkdGg6ICc4MDBweCcgfX0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSBoYXMtdGV4dC1kYW5nZXJcIj5BcHBTZWMgUmVwb3J0ZXI8L2gxPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5HZW5lcmF0ZSBzZWN1cml0eSByZXBvcnRzIGJhc2VkIG9uIER5bmF0cmFjZSBBcHBsaWNhdGlvbiBTZWN1cml0eTwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPkR5bmF0cmFjZSA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZHluYXRyYWNlLmNvbS9zdXBwb3J0L2hlbHAvaG93LXRvLXVzZS1keW5hdHJhY2UvYXBwbGljYXRpb24tc2VjdXJpdHlcIj5BcHBsaWNhdGlvbiBTZWN1cml0eTwvYT4gZW5hYmxlcyB5b3UgdG8gZGV0ZWN0LCB2aXN1YWxpemUsIGFuYWx5emUsIG1vbml0b3IsIGFuZCByZW1lZGlhdGUgb3Blbi1zb3VyY2UgYW5kIHRoaXJkLXBhcnR5IHZ1bG5lcmFiaWxpdGllcyBpbiBwcm9kdWN0aW9uIGFuZCBwcmUtcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgYXQgcnVudGltZS48L3A+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIm10LTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdCBpcy1mdWxsd2lkdGhcIj5cbiAgICAgICAgICAgICAgPHNlbGVjdD5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPlNlbGVjdCBhIHJlcG9ydDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+UmVwb3J0IEE8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWRhbmdlciBpcy1mdWxsd2lkdGhcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIj5HZW5lcmF0ZTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhlbHBcIj5OZWVkIGhlbHA/IFJlYWNoIG91dCB0byA8YSBocmVmPVwibWFpbHRvOm1hcnRpbi5uaXJ0bEBkeW5hdHJhY2UuY29tXCI+bWFydGluLm5pcnRsQGR5bmF0cmFjZS5jb208L2E+PC9wPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FB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
