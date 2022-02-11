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

// route-module:/Users/martin.nirtl/development/dynatrace/appsec-reporter/app/routes/explore.tsx
var explore_exports = {};
__export(explore_exports, {
  default: () => Index,
  loader: () => loader,
  meta: () => meta2
});
init_react();
var import_remix3 = __toModule(require_remix());

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

// app/components/table/table.tsx
init_react();
var import_react = __toModule(require("react"));
var import_react_table = __toModule(require("react-table"));
function Table({ columns: rawColumns, data: rawData }) {
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
    ...rawColumns.map((c) => ({ Header: c, accessor: c }))
  ], []);
  const data = (0, import_react.useMemo)(() => rawData, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { groupBy, expanded, hiddenColumns }
  } = (0, import_react_table.useTable)({
    columns,
    data
  }, import_react_table.useGroupBy, import_react_table.useSortBy, import_react_table.useExpanded);
  return /* @__PURE__ */ React.createElement("div", {
    className: "table-container"
  }, /* @__PURE__ */ React.createElement("table", __spreadValues({
    className: "table is-fullwidth is-hoverable"
  }, getTableProps()), /* @__PURE__ */ React.createElement("thead", null, headerGroups.map((headerGroup) => /* @__PURE__ */ React.createElement("tr", __spreadValues({}, headerGroup.getHeaderGroupProps()), headerGroup.headers.map((column) => /* @__PURE__ */ React.createElement("th", __spreadValues({}, column.getHeaderProps(column.getSortByToggleProps())), column.canGroupBy ? /* @__PURE__ */ React.createElement("span", __spreadValues({}, column.getGroupByToggleProps()), column.isGrouped ? "\u{1F6D1} " : "\u{1F44A} ") : null, column.render("Header")))))), /* @__PURE__ */ React.createElement("tbody", __spreadValues({}, getTableBodyProps()), rows.map((row) => {
    prepareRow(row);
    return /* @__PURE__ */ React.createElement("tr", __spreadValues({}, row.getRowProps()), row.cells.map((cell) => {
      return /* @__PURE__ */ React.createElement("td", __spreadValues({}, cell.getCellProps()), cell.render("Cell"));
    }));
  }))));
}

// route-module:/Users/martin.nirtl/development/dynatrace/appsec-reporter/app/routes/explore.tsx
var meta2 = () => {
  return { title: "AppSec Explorer" };
};
var loader = async () => {
  return getComputedSecurityProblems();
};
function Index() {
  const data = (0, import_remix3.useLoaderData)();
  const columns = Object.keys(data[0]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("div", {
    className: "section"
  }, /* @__PURE__ */ React.createElement("div", {
    style: { height: "100vh" }
  }, /* @__PURE__ */ React.createElement(Table, {
    columns,
    data
  }))));
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
  }, "Dynatrace", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.dynatrace.com/support/help/how-to-use-dynatrace/application-security"
  }, "Application Security"), " ", "enables you to detect, visualize, analyze, monitor, and remediate open-source and third-party vulnerabilities in production and pre-production environments at runtime."), /* @__PURE__ */ React.createElement("form", {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJ0aW4ubmlydGwvZGV2ZWxvcG1lbnQvZHluYXRyYWNlL2FwcHNlYy1yZXBvcnRlci9hcHAvcm9vdC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJ0aW4ubmlydGwvZGV2ZWxvcG1lbnQvZHluYXRyYWNlL2FwcHNlYy1yZXBvcnRlci9hcHAvcm91dGVzL2V4cGxvcmUudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL25hdmJhci50c3giLCAiLi4vLi4vYXBwL2hlbHBlcnMvZHluYXRyYWNlLnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy90YWJsZS90YWJsZS50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJ0aW4ubmlydGwvZGV2ZWxvcG1lbnQvZHluYXRyYWNlL2FwcHNlYy1yZXBvcnRlci9hcHAvcm91dGVzL2luZGV4LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL21hcnRpbi5uaXJ0bC9kZXZlbG9wbWVudC9keW5hdHJhY2UvYXBwc2VjLXJlcG9ydGVyL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9tYXJ0aW4ubmlydGwvZGV2ZWxvcG1lbnQvZHluYXRyYWNlL2FwcHNlYy1yZXBvcnRlci9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL21hcnRpbi5uaXJ0bC9kZXZlbG9wbWVudC9keW5hdHJhY2UvYXBwc2VjLXJlcG9ydGVyL2FwcC9yb3V0ZXMvZXhwbG9yZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL21hcnRpbi5uaXJ0bC9kZXZlbG9wbWVudC9keW5hdHJhY2UvYXBwc2VjLXJlcG9ydGVyL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9leHBsb3JlXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvZXhwbG9yZVwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImV4cGxvcmVcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tICdyZW1peCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0LFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+KTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZSgnPCFET0NUWVBFIGh0bWw+JyArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgTGlua3MsIExpdmVSZWxvYWQsIE1ldGEsIE91dGxldCwgU2NyaXB0cywgU2Nyb2xsUmVzdG9yYXRpb24gfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ3JlbWl4JztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYnVsbWFAMC45LjMvY3NzL2J1bG1hLm1pbi5jc3MnLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiAnaWNvbicsXG4gICAgICBocmVmOiAnaHR0cHM6Ly9kdC1jZG4ubmV0L2ltYWdlcy9mYXZpY29uLTQ4eDQ4LXRyYW5zcGFyZW50LTQ4LTliNGRmOWM3NjkucG5nJyxcbiAgICB9LFxuICBdO1xufTtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6ICdBcHBTZWMgUmVwb3J0ZXInIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IE1ldGFGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tICdyZW1peCc7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnfi9jb21wb25lbnRzL25hdmJhcic7XG5pbXBvcnQgeyBnZXRDb21wdXRlZFNlY3VyaXR5UHJvYmxlbXMgfSBmcm9tICd+L2hlbHBlcnMvZHluYXRyYWNlJztcbmltcG9ydCBUYWJsZSBmcm9tICd+L2NvbXBvbmVudHMvdGFibGUvdGFibGUnO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogJ0FwcFNlYyBFeHBsb3JlcicgfTtcbn07XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIGdldENvbXB1dGVkU2VjdXJpdHlQcm9ibGVtcygpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG5cbiAgY29uc3QgY29sdW1ucyA9IE9iamVjdC5rZXlzKGRhdGFbMF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZiYXI+PC9OYXZiYXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICAgICAgPFRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGE9e2RhdGF9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCIgcm9sZT1cIm5hdmlnYXRpb25cIiBhcmlhLWxhYmVsPVwibWFpbiBuYXZpZ2F0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiIGhyZWY9XCJodHRwczovL2J1bG1hLmlvXCI+XG4gICAgICAgICAgey8qIDxpbWcgc3JjPVwiaHR0cHM6Ly9idWxtYS5pby9pbWFnZXMvYnVsbWEtbG9nby5wbmdcIiB3aWR0aD1cIjExMlwiIGhlaWdodD1cIjI4XCIgLz4gKi99Zm9vXG4gICAgICAgIDwvYT5cblxuICAgICAgICA8YVxuICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci1idXJnZXJcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJtZW51XCJcbiAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgIGRhdGEtdGFyZ2V0PVwibmF2YmFyQmFzaWNFeGFtcGxlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBpZD1cIm5hdmJhckJhc2ljRXhhbXBsZVwiIGNsYXNzTmFtZT1cIm5hdmJhci1tZW51XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXN0YXJ0XCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5Ib21lPC9hPlxuXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5Eb2N1bWVudGF0aW9uPC9hPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbSBoYXMtZHJvcGRvd24gaXMtaG92ZXJhYmxlXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItbGlua1wiPk1vcmU8L2E+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+QWJvdXQ8L2E+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+Sm9iczwvYT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5Db250YWN0PC9hPlxuICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibmF2YmFyLWRpdmlkZXJcIiAvPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlJlcG9ydCBhbiBpc3N1ZTwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1lbmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPlNpZ24gdXA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gaXMtbGlnaHRcIj5Mb2cgaW48L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJcblxuZXhwb3J0IGNvbnN0IGEgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IFNFQ1VSSVRZX1BST0JMRU1TX0FQSSA9IGAke3Byb2Nlc3MuZW52LkRUX1RFTkFOVH0vYXBpL3YyL3NlY3VyaXR5UHJvYmxlbXM/cGFnZVNpemU9NTAwYDtcbiAgY29uc3QgU0VDVVJJVFlfUFJPQkxFTVNfREVUQUlMU19BUEkgPSBgJHtwcm9jZXNzLmVudi5EVF9URU5BTlR9L2FwaS92Mi9zZWN1cml0eVByb2JsZW1zL2A7XG4gIGNvbnN0IEZJRUxEUyA9ICclMkJyaXNrQXNzZXNzbWVudCUyQyUyQm1hbmFnZW1lbnRab25lcyUyQyUyQmRlc2NyaXB0aW9uJTJDJTJCZXZlbnRzJTJDJTJCdnVsbmVyYWJsZUNvbXBvbmVudHMlMkMlMkJhZmZlY3RlZEVudGl0aWVzJTJDJTJCZXhwb3NlZEVudGl0aWVzJTJDJTJCcmVhY2hhYmxlRGF0YUFzc2V0cyUyQyUyQnJlbGF0ZWRFbnRpdGllcyUyQyUyQnJlbGF0ZWRDb250YWluZXJJbWFnZXMnXG4gIFxuICBjb25zdCBzZWN1cml0eVByb2JsZW1zTGlzdCA9IFtdO1xuICBsZXQgbmV4dFBhZ2VLZXk9ICcnOyBcbiAgZG8ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKG5leHRQYWdlS2V5ID8gYCR7U0VDVVJJVFlfUFJPQkxFTVNfQVBJfSZuZXh0UGFnZUtleT0ke25leHRQYWdlS2V5fWAgOiBTRUNVUklUWV9QUk9CTEVNU19BUEksIHsgbWV0aG9kOiAnR0VUJywgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IGBBcGktVG9rZW4gJHtwcm9jZXNzLmVudi5EVF9UT0tFTn1gIH19KTtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHNlY3VyaXR5UHJvYmxlbXNMaXN0LnB1c2goLi4uYm9keS5zZWN1cml0eVByb2JsZW1zKTtcblxuICAgIG5leHRQYWdlS2V5ID0gYm9keS5uZXh0UGFnZUtleTtcbiAgfSB3aGlsZSghIW5leHRQYWdlS2V5KTtcblxuICByZXR1cm4gKGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChzZWN1cml0eVByb2JsZW1zTGlzdC5tYXAoXG4gICAgYXN5bmMgKHsgc2VjdXJpdHlQcm9ibGVtSWQgfTogeyBzZWN1cml0eVByb2JsZW1JZDogbnVtYmVyIH0pID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFNFQ1VSSVRZX1BST0JMRU1TX0RFVEFJTFNfQVBJICsgc2VjdXJpdHlQcm9ibGVtSWQgKyBgP2ZpZWxkcz0ke0ZJRUxEU31gLCB7IG1ldGhvZDogJ0dFVCcsIGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiBgQXBpLVRva2VuICR7cHJvY2Vzcy5lbnYuRFRfVE9LRU59YCB9fSk7XG4gICAgICBjb25zdCBwID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IHAuZGlzcGxheUlkLFxuICAgICAgICBzdGF0dXM6IHAuc3RhdHVzLFxuICAgICAgICBtdXRlZDogcC5tdXRlZCA/ICdZJyA6ICdOJyxcbiAgICAgICAgc255a0xpbms6IHAuZXh0ZXJuYWxWdWxuZXJhYmlsaXR5SWQ/LnN0YXJ0c1dpdGgoJ1NOWUsnKSA/IGBodHRwczovL3NlY3VyaXR5LnNueWsuaW8vdnVsbi8ke3AuZXh0ZXJuYWxWdWxuZXJhYmlsaXR5SWR9YCA6ICctJyxcbiAgICAgICAgLy8gZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb24sXG4gICAgICAgIGZpcnN0U2VlbjogcC5maXJzdFNlZW5UaW1lc3RhbXAsXG4gICAgICAgIGxhc3RVcGRhdGVkOiBwLmxhc3RVcGRhdGVkVGltZXN0YW1wLFxuICAgICAgICByaXNrTGV2ZWw6IHAucmlza0xldmVsLFxuICAgICAgICByaXNrU2NvcmU6IHAucmlza1Njb3JlLFxuICAgICAgICAvLyBzdGF0dXM6IHA/LnN0YXR1cyxcbiAgICAgIH07XG4gICAgfVxuICApKSkubWFwKGUgPT4gZS5zdGF0dXMgPT09ICdmdWxmaWxsZWQnID8gZS52YWx1ZSA6IGUucmVhc29uKTtcbn1cblxuXG5cbmV4cG9ydCBjb25zdCBnZXRDb21wdXRlZFNlY3VyaXR5UHJvYmxlbXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IFNFQ1VSSVRZX1BST0JMRU1TX0FQSSA9IGAke3Byb2Nlc3MuZW52LkRUX1RFTkFOVH0vYXBpL3YyL3NlY3VyaXR5UHJvYmxlbXM/cGFnZVNpemU9NTAwYDtcbiAgY29uc3QgU0VDVVJJVFlfUFJPQkxFTVNfREVUQUlMU19BUEkgPSBgJHtwcm9jZXNzLmVudi5EVF9URU5BTlR9L2FwaS92Mi9zZWN1cml0eVByb2JsZW1zL2A7XG4gIGNvbnN0IEZJRUxEUyA9ICclMkJyaXNrQXNzZXNzbWVudCUyQyUyQm1hbmFnZW1lbnRab25lcyUyQyUyQmRlc2NyaXB0aW9uJTJDJTJCZXZlbnRzJTJDJTJCdnVsbmVyYWJsZUNvbXBvbmVudHMlMkMlMkJhZmZlY3RlZEVudGl0aWVzJTJDJTJCZXhwb3NlZEVudGl0aWVzJTJDJTJCcmVhY2hhYmxlRGF0YUFzc2V0cyUyQyUyQnJlbGF0ZWRFbnRpdGllcyUyQyUyQnJlbGF0ZWRDb250YWluZXJJbWFnZXMnXG4gIFxuICBjb25zdCBzZWN1cml0eVByb2JsZW1zTGlzdCA9IFtdO1xuICBsZXQgbmV4dFBhZ2VLZXk9ICcnOyBcbiAgZG8ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKG5leHRQYWdlS2V5ID8gYCR7U0VDVVJJVFlfUFJPQkxFTVNfQVBJfSZuZXh0UGFnZUtleT0ke25leHRQYWdlS2V5fWAgOiBTRUNVUklUWV9QUk9CTEVNU19BUEksIHsgbWV0aG9kOiAnR0VUJywgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IGBBcGktVG9rZW4gJHtwcm9jZXNzLmVudi5EVF9UT0tFTn1gIH19KTtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHNlY3VyaXR5UHJvYmxlbXNMaXN0LnB1c2goLi4uYm9keS5zZWN1cml0eVByb2JsZW1zKTtcblxuICAgIG5leHRQYWdlS2V5ID0gYm9keS5uZXh0UGFnZUtleTtcbiAgfSB3aGlsZSghIW5leHRQYWdlS2V5KTtcblxuICBjb25zdCBkZXRhaWxlZFNlY3VyaXR5UHJvYmxlbXNMaXN0ID0gKGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChzZWN1cml0eVByb2JsZW1zTGlzdC5tYXAoXG4gICAgYXN5bmMgKHsgc2VjdXJpdHlQcm9ibGVtSWQgfTogeyBzZWN1cml0eVByb2JsZW1JZDogbnVtYmVyIH0pID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFNFQ1VSSVRZX1BST0JMRU1TX0RFVEFJTFNfQVBJICsgc2VjdXJpdHlQcm9ibGVtSWQgKyBgP2ZpZWxkcz0ke0ZJRUxEU31gLCB7IG1ldGhvZDogJ0dFVCcsIGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiBgQXBpLVRva2VuICR7cHJvY2Vzcy5lbnYuRFRfVE9LRU59YCB9fSk7XG4gICAgICBjb25zdCBwID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgICAgcmV0dXJuIHA7XG4gICAgfVxuICApKSkubWFwKGUgPT4gZS5zdGF0dXMgPT09ICdmdWxmaWxsZWQnID8gZS52YWx1ZSA6IGUucmVhc29uKTtcblxuICBsZXQgaWRDb3VudCA9IDA7XG4gIHJldHVybiBkZXRhaWxlZFNlY3VyaXR5UHJvYmxlbXNMaXN0LnJlZHVjZSgobGlzdCwgcCwgaSkgPT4ge1xuICAgIGNvbnN0IGZsYXR0ZW5lZFByb2JsZW1zID0gcC5hZmZlY3RlZEVudGl0aWVzLm1hcCgoZW50aXR5KSA9PiAoe1xuICAgICAgaWQ6ICsraWRDb3VudCxcbiAgICAgIGVudGl0eSxcbiAgICAgIHN0YXR1czogcC5zdGF0dXMsXG4gICAgICByaXNrTGV2ZWw6IHAucmlza0Fzc2Vzc21lbnQucmlza0xldmVsLFxuICAgICAgcmlza1Njb3JlOiBwLnJpc2tBc3Nlc3NtZW50LnJpc2tTY29yZSxcbiAgICAgIGV4cG9zZWQ6IHAucmlza0Fzc2Vzc21lbnQuZXhwb3N1cmUgIT09IFwiTk9UX0FWQUlMQUJMRVwiLFxuICAgICAgZGF0YUFzc2V0czogcC5yaXNrQXNzZXNzbWVudC5kYXRhQXNzZXRzICE9PSBcIk5PVF9BVkFJTEFCTEVcIixcbiAgICAgIHB1YmxpY0V4cGxvaXQ6IHAucmlza0Fzc2Vzc21lbnQucHVibGljRXhwbG9pdCAhPT0gXCJOT1RfQVZBSUxBQkxFXCIsXG4gICAgICBtdXRlZDogcC5tdXRlZCxcbiAgICAgIHRlY2hub2xvZ3k6IHAudGVjaG5vbG9neSxcbiAgICAgIGludGVybmFsTGluazogcC51cmwsXG4gICAgICAvLyBUT0RPIGNoYW5nZSB0byBhcnJheSB3aGljaCBob2xkcyBsaW5rIHRleHQgYW5kIGhyZWZcbiAgICAgIGV4dGVybmFsTGluazogcC5leHRlcm5hbFZ1bG5lcmFiaWxpdHlJZD8uc3RhcnRzV2l0aCgnU05ZSycpID8gYGh0dHBzOi8vc2VjdXJpdHkuc255ay5pby92dWxuLyR7cC5leHRlcm5hbFZ1bG5lcmFiaWxpdHlJZH1gIDogJy0nLFxuICAgICAgLy8gY3ZlSWRzOiBwLmN2ZUlkcyxcbiAgICAgIGZpcnN0U2VlbjogcC5maXJzdFNlZW5UaW1lc3RhbXAsXG4gICAgICBsYXN0VXBkYXRlZDogcC5sYXN0VXBkYXRlZFRpbWVzdGFtcCxcbiAgICB9KSk7XG5cbiAgICBsaXN0LnB1c2goLi4uZmxhdHRlbmVkUHJvYmxlbXMpXG5cbiAgICByZXR1cm4gbGlzdFxuICB9LCBbXSk7XG59IiwgImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUYWJsZSwgdXNlU29ydEJ5LCB1c2VHcm91cEJ5LCB1c2VFeHBhbmRlZCB9IGZyb20gJ3JlYWN0LXRhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFibGUoeyBjb2x1bW5zOiByYXdDb2x1bW5zLCBkYXRhOiByYXdEYXRhIH0pIHtcbiAgY29uc3QgY29sdW1ucyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gW1xuICAgICAge1xuICAgICAgICAvLyBCdWlsZCBvdXIgZXhwYW5kZXIgY29sdW1uXG4gICAgICAgIGlkOiAnZXhwYW5kZXInLCAvLyBNYWtlIHN1cmUgaXQgaGFzIGFuIElEXG4gICAgICAgIEhlYWRlcjogKHsgZ2V0VG9nZ2xlQWxsUm93c0V4cGFuZGVkUHJvcHMsIGlzQWxsUm93c0V4cGFuZGVkIH0pID0+IChcbiAgICAgICAgICA8c3BhbiB7Li4uZ2V0VG9nZ2xlQWxsUm93c0V4cGFuZGVkUHJvcHMoKX0+e2lzQWxsUm93c0V4cGFuZGVkID8gJ1x1RDgzRFx1REM0NycgOiAnXHVEODNEXHVEQzQ5J308L3NwYW4+XG4gICAgICAgICksXG4gICAgICAgIENlbGw6ICh7IHJvdyB9KSA9PlxuICAgICAgICAgIC8vIFVzZSB0aGUgcm93LmNhbkV4cGFuZCBhbmQgcm93LmdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMgcHJvcCBnZXR0ZXJcbiAgICAgICAgICAvLyB0byBidWlsZCB0aGUgdG9nZ2xlIGZvciBleHBhbmRpbmcgYSByb3dcbiAgICAgICAgICByb3cuY2FuRXhwYW5kID8gKFxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgey4uLnJvdy5nZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzKHtcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgLy8gV2UgY2FuIGV2ZW4gdXNlIHRoZSByb3cuZGVwdGggcHJvcGVydHlcbiAgICAgICAgICAgICAgICAgIC8vIGFuZCBwYWRkaW5nTGVmdCB0byBpbmRpY2F0ZSB0aGUgZGVwdGhcbiAgICAgICAgICAgICAgICAgIC8vIG9mIHRoZSByb3dcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBgJHtyb3cuZGVwdGggKiAyfXJlbWAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtyb3cuaXNFeHBhbmRlZCA/ICdcdUQ4M0RcdURDNDcnIDogJ1x1RDgzRFx1REM0OSd9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKSA6IG51bGwsXG4gICAgICB9LFxuICAgICAgLi4ucmF3Q29sdW1ucy5tYXAoYyA9PiAoeyBIZWFkZXI6IGMsIGFjY2Vzc29yOiBjIH0pKSxcbiAgICAgIC8vIHsgSGVhZGVyOiAnc3RhdHVzJywgYWNjZXNzb3I6ICdzdGF0dXMnIH0sXG4gICAgICAvLyB7IEhlYWRlcjogJ2Rpc3BsYXlJZCcsIGFjY2Vzc29yOiAnZGlzcGxheUlkJyB9LFxuICAgICAgLy8geyBIZWFkZXI6ICd0ZWNobm9sb2d5JywgYWNjZXNzb3I6ICd0ZWNobm9sb2d5JyB9LFxuICAgICAgLy8geyBIZWFkZXI6ICdtdXRlZCcsIGFjY2Vzc29yOiAnbXV0ZWQnIH0sXG4gICAgICAvLyB7IEhlYWRlcjogJ3RpdGxlJywgYWNjZXNzb3I6ICd0aXRsZScgfSxcbiAgICBdLFxuICAgIFtdLFxuICApO1xuXG4gIGNvbnN0IGRhdGEgPSB1c2VNZW1vKCgpID0+IHJhd0RhdGEsIFtdKTtcblxuICBjb25zdCB7XG4gICAgZ2V0VGFibGVQcm9wcyxcbiAgICBnZXRUYWJsZUJvZHlQcm9wcyxcbiAgICBoZWFkZXJHcm91cHMsXG4gICAgcm93cyxcbiAgICBwcmVwYXJlUm93LFxuICAgIHN0YXRlOiB7IGdyb3VwQnksIGV4cGFuZGVkLCBoaWRkZW5Db2x1bW5zIH0sXG4gIH0gPSB1c2VUYWJsZShcbiAgICB7XG4gICAgICBjb2x1bW5zLFxuICAgICAgZGF0YSxcbiAgICB9LFxuICAgIHVzZUdyb3VwQnksXG4gICAgdXNlU29ydEJ5LFxuICAgIHVzZUV4cGFuZGVkLFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1jb250YWluZXJcIj5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSBpcy1mdWxsd2lkdGggaXMtaG92ZXJhYmxlXCIgey4uLmdldFRhYmxlUHJvcHMoKX0+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyBMb29wIG92ZXIgdGhlIGhlYWRlciByb3dzXG4gICAgICAgICAgICBoZWFkZXJHcm91cHMubWFwKGhlYWRlckdyb3VwID0+IChcbiAgICAgICAgICAgICAgLy8gQXBwbHkgdGhlIGhlYWRlciByb3cgcHJvcHNcbiAgICAgICAgICAgICAgPHRyIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIC8vIExvb3Agb3ZlciB0aGUgaGVhZGVycyBpbiBlYWNoIHJvd1xuICAgICAgICAgICAgICAgICAgaGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoY29sdW1uID0+IChcbiAgICAgICAgICAgICAgICAgICAgLy8gQXBwbHkgdGhlIGhlYWRlciBjZWxsIHByb3BzXG4gICAgICAgICAgICAgICAgICAgIDx0aCB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKGNvbHVtbi5nZXRTb3J0QnlUb2dnbGVQcm9wcygpKX0+XG4gICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5jYW5Hcm91cEJ5ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNvbHVtbiBjYW4gYmUgZ3JvdXBlZCwgbGV0J3MgYWRkIGEgdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4uY29sdW1uLmdldEdyb3VwQnlUb2dnbGVQcm9wcygpfT57Y29sdW1uLmlzR3JvdXBlZCA/ICdcdUQ4M0RcdURFRDEgJyA6ICdcdUQ4M0RcdURDNEEgJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVuZGVyIHRoZSBoZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi5yZW5kZXIoJ0hlYWRlcicpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgey8qIEFwcGx5IHRoZSB0YWJsZSBib2R5IHByb3BzICovfVxuICAgICAgICA8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIExvb3Agb3ZlciB0aGUgdGFibGUgcm93c1xuICAgICAgICAgICAgcm93cy5tYXAocm93ID0+IHtcbiAgICAgICAgICAgICAgLy8gUHJlcGFyZSB0aGUgcm93IGZvciBkaXNwbGF5XG4gICAgICAgICAgICAgIHByZXBhcmVSb3cocm93KTtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAvLyBBcHBseSB0aGUgcm93IHByb3BzXG4gICAgICAgICAgICAgICAgPHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vIExvb3Agb3ZlciB0aGUgcm93cyBjZWxsc1xuICAgICAgICAgICAgICAgICAgICByb3cuY2VsbHMubWFwKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBjZWxsIHByb3BzXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW5kZXIgdGhlIGNlbGwgY29udGVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbmRlcignQ2VsbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IEZvcm1FdmVudEhhbmRsZXIgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBoYW5kbGVTdWJtaXQ6IEZvcm1FdmVudEhhbmRsZXIgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaXMtZmxleCBpcy1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGlzLWFsaWduLWl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01XCIgc3R5bGU9e3sgd2lkdGg6ICc4MDBweCcgfX0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSBoYXMtdGV4dC1kYW5nZXJcIj5BcHBTZWMgUmVwb3J0ZXI8L2gxPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5HZW5lcmF0ZSBzZWN1cml0eSByZXBvcnRzIGJhc2VkIG9uIER5bmF0cmFjZSBBcHBsaWNhdGlvbiBTZWN1cml0eTwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIER5bmF0cmFjZXsnICd9XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmR5bmF0cmFjZS5jb20vc3VwcG9ydC9oZWxwL2hvdy10by11c2UtZHluYXRyYWNlL2FwcGxpY2F0aW9uLXNlY3VyaXR5XCI+XG4gICAgICAgICAgICBBcHBsaWNhdGlvbiBTZWN1cml0eVxuICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgIGVuYWJsZXMgeW91IHRvIGRldGVjdCwgdmlzdWFsaXplLCBhbmFseXplLCBtb25pdG9yLCBhbmQgcmVtZWRpYXRlIG9wZW4tc291cmNlIGFuZCB0aGlyZC1wYXJ0eSB2dWxuZXJhYmlsaXRpZXNcbiAgICAgICAgICBpbiBwcm9kdWN0aW9uIGFuZCBwcmUtcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgYXQgcnVudGltZS5cbiAgICAgICAgPC9wPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJtdC02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3QgaXMtZnVsbHdpZHRoXCI+XG4gICAgICAgICAgICAgIDxzZWxlY3Q+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5TZWxlY3QgYSByZXBvcnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPlJlcG9ydCBBPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtZGFuZ2VyIGlzLWZ1bGx3aWR0aFwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPlxuICAgICAgICAgICAgICBHZW5lcmF0ZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVscFwiPlxuICAgICAgICAgICAgTmVlZCBoZWxwPyBSZWFjaCBvdXQgdG8gPGEgaHJlZj1cIm1haWx0bzptYXJ0aW4ubmlydGxAZHluYXRyYWNlLmNvbVwiPm1hcnRpbi5uaXJ0bEBkeW5hdHJhY2UuY29tPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZ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
