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

// route-module:/Users/martin.nirtl/development/dynatrace/appsec-reporter/app/routes/_generate.tsx
var generate_exports = {};
__export(generate_exports, {
  loader: () => loader
});
init_react();

// app/helpers/dynatrace.tsx
init_react();
var getHostId = (type, entity) => {
  switch (type) {
    case "HOST":
      return entity.entityId;
    case "KUBERNETES_NODE":
      return entity.fromRelationships.isNodeOfHost[0].id;
    case "PROCESS_GROUP_INSTANCE":
      return entity.fromRelationships.isProcessOf[0].id;
    default:
      return "UNSUPPORTED ENTITY TYPE";
  }
};
var extractEntityInformation = (entity) => {
  const type = entity.entityId.split("-")[0];
  return {
    entityDisplayName: entity.displayName,
    entityDetectedName: entity.properties.detectedName,
    hostId: getHostId(type, entity)
  };
};
var getSecurityProblems = async (tenant, token) => {
  const SECURITY_PROBLEMS_API = `${tenant || process.env.DT_TENANT}/api/v2/securityProblems?pageSize=500`;
  const SECURITY_PROBLEMS_DETAILS_API = `${tenant || process.env.DT_TENANT}/api/v2/securityProblems/`;
  const FIELDS = "%2BriskAssessment%2C%2BmanagementZones%2C%2Bdescription%2C%2Bevents%2C%2BvulnerableComponents%2C%2BaffectedEntities%2C%2BexposedEntities%2C%2BreachableDataAssets%2C%2BrelatedEntities%2C%2BrelatedContainerImages";
  const ENTITY_DETAILS_API = `${tenant || process.env.DT_TENANT}/api/v2/entities/`;
  const securityProblemsList = [];
  let nextPageKey = "";
  do {
    const res = await fetch(nextPageKey ? `${SECURITY_PROBLEMS_API}&nextPageKey=${nextPageKey}` : SECURITY_PROBLEMS_API, { method: "GET", headers: { "Authorization": `Api-Token ${token || process.env.DT_TOKEN}` } });
    const body = await res.json();
    securityProblemsList.push(...body.securityProblems);
    nextPageKey = body.nextPageKey;
  } while (!!nextPageKey);
  const detailedSecurityProblemsList = (await Promise.allSettled(securityProblemsList.map(async ({ securityProblemId }) => {
    const res = await fetch(SECURITY_PROBLEMS_DETAILS_API + securityProblemId + `?fields=${FIELDS}`, { method: "GET", headers: { "Authorization": `Api-Token ${token || process.env.DT_TOKEN}` } });
    const p = await res.json();
    return p;
  }))).filter((e) => e.status === "fulfilled").map((e) => e.value);
  let idCount = 0;
  const extendedSecurityProblemsList = detailedSecurityProblemsList.reduce((list, p, i) => {
    const flattenedProblems = p.vulnerableComponents.reduce((entityList, component, j) => {
      entityList.push(...component.affectedEntities.map((entity) => {
        var _a;
        return {
          id: ++idCount,
          displayId: p.displayId,
          securityProblemId: p.securityProblemId,
          entityId: entity,
          title: p.title,
          description: p.description,
          type: p.vulnerabilityType,
          technology: p.technology,
          package: p.packageName,
          component: component.displayName,
          status: p.status,
          riskLevel: p.riskAssessment.riskLevel,
          riskScore: p.riskAssessment.riskScore,
          exposed: p.riskAssessment.exposure !== "NOT_AVAILABLE" ? "yes" : "no",
          dataAssets: p.riskAssessment.dataAssets !== "NOT_AVAILABLE" ? "yes" : "no",
          publicExploit: p.riskAssessment.publicExploit !== "NOT_AVAILABLE" ? "yes" : "no",
          muted: p.muted ? "yes" : "no",
          internalLink: p.url,
          externalLink: ((_a = p.externalVulnerabilityId) == null ? void 0 : _a.startsWith("SNYK")) ? `https://security.snyk.io/vuln/${p.externalVulnerabilityId}` : "-",
          firstSeen: new Date(p.firstSeenTimestamp).toUTCString(),
          lastUpdated: new Date(p.lastUpdatedTimestamp).toUTCString()
        };
      }));
      return entityList;
    }, []);
    list.push(...flattenedProblems);
    return list;
  }, []);
  return (await Promise.allSettled(extendedSecurityProblemsList.map(async (p) => {
    const res = await fetch(ENTITY_DETAILS_API + p.entityId, { method: "GET", headers: { "Authorization": `Api-Token ${token || process.env.DT_TOKEN}` } });
    const entity = await res.json();
    return __spreadValues(__spreadValues({}, p), extractEntityInformation(entity));
  }))).filter((e) => e.status === "fulfilled").map((e) => e.value);
};

// route-module:/Users/martin.nirtl/development/dynatrace/appsec-reporter/app/routes/_generate.tsx
var import_json2csv = __toModule(require("json2csv"));
var loader = async ({
  request
}) => {
  const params = new URL(request.url).searchParams;
  const fields = [
    { label: "ID", value: "id" },
    { label: "Dynatrace ID", value: "displayId" },
    { label: "Security Problem ID", value: "securityProblemId" },
    { label: "Entity ID", value: "entityId" },
    { label: "Entity Name", value: "entityDisplayName" },
    { label: "Title", value: "title" },
    { label: "Type", value: "type" },
    { label: "Technology", value: "technology" },
    { label: "Package", value: "package" },
    { label: "Component", value: "component" },
    { label: "Status", value: "status" },
    { label: "Risk Level", value: "riskLevel" },
    { label: "Risk Score", value: "riskScore" },
    { label: "Exposed", value: "exposed" },
    { label: "Data Assets", value: "dataAssets" },
    { label: "Public Exploit", value: "publicExploit" },
    { label: "Muted", value: "muted" },
    { label: "First seen", value: "firstSeen" },
    { label: "Last updated", value: "lastUpdated" },
    { label: "Host ID", value: "hostId" },
    { label: "Dynatrace Link", value: "internalLink" },
    { label: "External Link", value: "externalLink" },
    { label: "Entity Name (detected)", value: "entityDetectedName" }
  ];
  const problems = await getSecurityProblems(params.get("tenant"), params.get("token"));
  const customParser = new import_json2csv.Parser({
    fields,
    defaultValue: "-",
    delimiter: ";",
    header: true
  });
  const csv = customParser.parse(problems);
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=UTF-8"
    }
  });
};

// route-module:/Users/martin.nirtl/development/dynatrace/appsec-reporter/app/routes/explore.tsx
var explore_exports = {};
__export(explore_exports, {
  default: () => Index,
  loader: () => loader2,
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
var loader2 = async () => {
  return getSecurityProblems();
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
  default: () => Index2,
  loader: () => loader3
});
init_react();
var import_classnames = __toModule(require("classnames"));
var import_react3 = __toModule(require("react"));
var import_remix4 = __toModule(require_remix());

// app/helpers/hooks.ts
init_react();
var import_react2 = __toModule(require("react"));
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = (0, import_react2.useState)(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

// route-module:/Users/martin.nirtl/development/dynatrace/appsec-reporter/app/routes/index.tsx
var loader3 = async () => {
  var _a;
  const splitToken = (_a = process.env.DT_TENANT) == null ? void 0 : _a.split(".");
  let token = "";
  if ((splitToken == null ? void 0 : splitToken.length) === 3) {
    token = splitToken.slice(0, 1).join();
  }
  return {
    tenantUrl: process.env.DT_TENANT || "https://xxxxxxxx.live.dynatrace.com",
    token,
    configuredFromBackend: !!process.env.DT_TENANT && !!process.env.DT_TOKEN
  };
};
function Index2() {
  const { tenantUrl, configuredFromBackend } = (0, import_remix4.useLoaderData)();
  const [tenant, setTenant] = useLocalStorage("dt_tenant", tenantUrl);
  const [token, setToken] = useLocalStorage("dt_token", "");
  const [isLoading, setLoadingState] = (0, import_react3.useState)(false);
  const [file, setFile] = (0, import_react3.useState)(null);
  const [message, setMessage] = (0, import_react3.useState)();
  const updateTenant = (e) => {
    e.preventDefault();
    setTenant(e.target.value);
  };
  const updateToken = (e) => {
    e.preventDefault();
    setToken(e.target.value);
  };
  const generateReport = async () => {
    if (!configuredFromBackend && (!tenant || !token)) {
      setMessage("Please configure tenant and token!");
      return;
    } else {
      setMessage(void 0);
    }
    setLoadingState(true);
    const res = await fetch(`/_generate?tenant=${tenant}&token=${token}`);
    const fileBlob = await res.blob();
    const fileUrl = URL.createObjectURL(fileBlob);
    setFile(fileUrl);
    setLoadingState(false);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "is-flex is-justify-content-center is-align-items-center",
    style: { height: "100vh" }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-5",
    style: { width: "800px" }
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "title"
  }, "AppSec Reporter"), /* @__PURE__ */ React.createElement("h2", {
    className: "subtitle"
  }, "Generate security reports based on Dynatrace Application Security"), /* @__PURE__ */ React.createElement("p", {
    className: ""
  }, "Dynatrace", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.dynatrace.com/support/help/how-to-use-dynatrace/application-security"
  }, "Application Security"), " ", "enables you to detect, visualize, analyze, monitor, and remediate open-source and third-party vulnerabilities in production and pre-production environments at runtime."), /* @__PURE__ */ React.createElement("p", {
    className: "is-size-6 has-text-weight-semibold mt-4"
  }, "The generated CSV-file will use ", /* @__PURE__ */ React.createElement("span", {
    className: "has-text-weight-bold"
  }, ";"), " as delimiter and requires the following token scopes:"), /* @__PURE__ */ React.createElement("div", {
    className: "tags are-small mt-1"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "tag is-info is-light"
  }, "Read security problems"), /* @__PURE__ */ React.createElement("a", {
    className: "tag is-info is-light"
  }, "Read entities")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "field"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "input is-small",
    type: "text",
    placeholder: "Dynatrace Tenant",
    onChange: updateTenant,
    value: tenant,
    disabled: configuredFromBackend
  })), /* @__PURE__ */ React.createElement("div", {
    className: "field"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "input is-small",
    type: "password",
    placeholder: "Dynatrace Token",
    onChange: updateToken,
    value: token,
    disabled: configuredFromBackend
  }), configuredFromBackend && /* @__PURE__ */ React.createElement("p", {
    className: "help is-success"
  }, "Dynatrace tenant and token are configured on the backend.")), /* @__PURE__ */ React.createElement("div", {
    className: "field"
  }, file ? /* @__PURE__ */ React.createElement("a", {
    className: (0, import_classnames.default)("button", "is-success", "is-fullwidth"),
    href: file,
    download: `appsec-report_${new Date().toISOString().slice(0, 10)}.csv`
  }, "Download CSV Report") : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("a", {
    className: (0, import_classnames.default)("button", "is-info", "is-fullwidth", { "is-loading": isLoading }),
    onClick: generateReport
  }, "Generate CSV Report"), message && /* @__PURE__ */ React.createElement("p", {
    className: "help is-danger"
  }, message))), /* @__PURE__ */ React.createElement("p", {
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
  "routes/_generate": {
    id: "routes/_generate",
    parentId: "root",
    path: "_generate",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJ0aW4ubmlydGwvZGV2ZWxvcG1lbnQvZHluYXRyYWNlL2FwcHNlYy1yZXBvcnRlci9hcHAvcm9vdC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJ0aW4ubmlydGwvZGV2ZWxvcG1lbnQvZHluYXRyYWNlL2FwcHNlYy1yZXBvcnRlci9hcHAvcm91dGVzL19nZW5lcmF0ZS50c3giLCAiLi4vLi4vYXBwL2hlbHBlcnMvZHluYXRyYWNlLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL21hcnRpbi5uaXJ0bC9kZXZlbG9wbWVudC9keW5hdHJhY2UvYXBwc2VjLXJlcG9ydGVyL2FwcC9yb3V0ZXMvZXhwbG9yZS50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyLnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy90YWJsZS90YWJsZS50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJ0aW4ubmlydGwvZGV2ZWxvcG1lbnQvZHluYXRyYWNlL2FwcHNlYy1yZXBvcnRlci9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi8uLi9hcHAvaGVscGVycy9ob29rcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL21hcnRpbi5uaXJ0bC9kZXZlbG9wbWVudC9keW5hdHJhY2UvYXBwc2VjLXJlcG9ydGVyL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9tYXJ0aW4ubmlydGwvZGV2ZWxvcG1lbnQvZHluYXRyYWNlL2FwcHNlYy1yZXBvcnRlci9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL21hcnRpbi5uaXJ0bC9kZXZlbG9wbWVudC9keW5hdHJhY2UvYXBwc2VjLXJlcG9ydGVyL2FwcC9yb3V0ZXMvX2dlbmVyYXRlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvbWFydGluLm5pcnRsL2RldmVsb3BtZW50L2R5bmF0cmFjZS9hcHBzZWMtcmVwb3J0ZXIvYXBwL3JvdXRlcy9leHBsb3JlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvbWFydGluLm5pcnRsL2RldmVsb3BtZW50L2R5bmF0cmFjZS9hcHBzZWMtcmVwb3J0ZXIvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL19nZW5lcmF0ZVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL19nZW5lcmF0ZVwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIl9nZW5lcmF0ZVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2V4cGxvcmVcIjoge1xuICAgIGlkOiBcInJvdXRlcy9leHBsb3JlXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiZXhwbG9yZVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlM1xuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gJ3JlbWl4JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHQsXG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz4pO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKCc8IURPQ1RZUEUgaHRtbD4nICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rcywgTGl2ZVJlbG9hZCwgTWV0YSwgT3V0bGV0LCBTY3JpcHRzLCBTY3JvbGxSZXN0b3JhdGlvbiB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9idWxtYUAwLjkuMy9jc3MvYnVsbWEubWluLmNzcycsXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6ICdpY29uJyxcbiAgICAgIGhyZWY6ICdodHRwczovL2R0LWNkbi5uZXQvaW1hZ2VzL2Zhdmljb24tNDh4NDgtdHJhbnNwYXJlbnQtNDgtOWI0ZGY5Yzc2OS5wbmcnLFxuICAgIH0sXG4gIF07XG59O1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogJ0FwcFNlYyBSZXBvcnRlcicgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgZ2V0U2VjdXJpdHlQcm9ibGVtcyB9IGZyb20gXCJ+L2hlbHBlcnMvZHluYXRyYWNlXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICdqc29uMmNzdidcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe1xuICByZXF1ZXN0LFxufSkgPT4ge1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5zZWFyY2hQYXJhbXNcblxuICBjb25zdCBmaWVsZHMgPSBbXG4gICAgeyBsYWJlbDogJ0lEJywgdmFsdWU6ICdpZCcgfSxcbiAgICB7IGxhYmVsOiAnRHluYXRyYWNlIElEJywgdmFsdWU6ICdkaXNwbGF5SWQnIH0sXG4gICAgeyBsYWJlbDogJ1NlY3VyaXR5IFByb2JsZW0gSUQnLCB2YWx1ZTogJ3NlY3VyaXR5UHJvYmxlbUlkJyB9LFxuICAgIHsgbGFiZWw6ICdFbnRpdHkgSUQnLCB2YWx1ZTogJ2VudGl0eUlkJyB9LFxuICAgIHsgbGFiZWw6ICdFbnRpdHkgTmFtZScsIHZhbHVlOiAnZW50aXR5RGlzcGxheU5hbWUnIH0sXG4gICAgeyBsYWJlbDogJ1RpdGxlJywgdmFsdWU6ICd0aXRsZScgfSxcbiAgICAvLyB7IGxhYmVsOiAnRGVzY3JpcHRpb24nLCB2YWx1ZTogJ2Rlc2NyaXB0aW9uJyB9LFxuICAgIHsgbGFiZWw6ICdUeXBlJywgdmFsdWU6ICd0eXBlJyB9LFxuICAgIHsgbGFiZWw6ICdUZWNobm9sb2d5JywgdmFsdWU6ICd0ZWNobm9sb2d5JyB9LFxuICAgIHsgbGFiZWw6ICdQYWNrYWdlJywgdmFsdWU6ICdwYWNrYWdlJyB9LFxuICAgIHsgbGFiZWw6ICdDb21wb25lbnQnLCB2YWx1ZTogJ2NvbXBvbmVudCcgfSxcbiAgICB7IGxhYmVsOiAnU3RhdHVzJywgdmFsdWU6ICdzdGF0dXMnIH0sXG4gICAgeyBsYWJlbDogJ1Jpc2sgTGV2ZWwnLCB2YWx1ZTogJ3Jpc2tMZXZlbCcgfSxcbiAgICB7IGxhYmVsOiAnUmlzayBTY29yZScsIHZhbHVlOiAncmlza1Njb3JlJyB9LFxuICAgIHsgbGFiZWw6ICdFeHBvc2VkJywgdmFsdWU6ICdleHBvc2VkJyB9LFxuICAgIHsgbGFiZWw6ICdEYXRhIEFzc2V0cycsIHZhbHVlOiAnZGF0YUFzc2V0cycgfSxcbiAgICB7IGxhYmVsOiAnUHVibGljIEV4cGxvaXQnLCB2YWx1ZTogJ3B1YmxpY0V4cGxvaXQnIH0sXG4gICAgeyBsYWJlbDogJ011dGVkJywgdmFsdWU6ICdtdXRlZCcgfSxcbiAgICB7IGxhYmVsOiAnRmlyc3Qgc2VlbicsIHZhbHVlOiAnZmlyc3RTZWVuJyB9LFxuICAgIHsgbGFiZWw6ICdMYXN0IHVwZGF0ZWQnLCB2YWx1ZTogJ2xhc3RVcGRhdGVkJyB9LFxuICAgIHsgbGFiZWw6ICdIb3N0IElEJywgdmFsdWU6ICdob3N0SWQnIH0sXG4gICAgeyBsYWJlbDogJ0R5bmF0cmFjZSBMaW5rJywgdmFsdWU6ICdpbnRlcm5hbExpbmsnIH0sXG4gICAgeyBsYWJlbDogJ0V4dGVybmFsIExpbmsnLCB2YWx1ZTogJ2V4dGVybmFsTGluaycgfSxcbiAgICB7IGxhYmVsOiAnRW50aXR5IE5hbWUgKGRldGVjdGVkKScsIHZhbHVlOiAnZW50aXR5RGV0ZWN0ZWROYW1lJyB9LFxuICBdXG5cbiAgY29uc3QgcHJvYmxlbXMgPSBhd2FpdCBnZXRTZWN1cml0eVByb2JsZW1zKHBhcmFtcy5nZXQoJ3RlbmFudCcpLCBwYXJhbXMuZ2V0KCd0b2tlbicpKTtcblxuICBjb25zdCBjdXN0b21QYXJzZXIgPSBuZXcgUGFyc2VyKHtcbiAgICBmaWVsZHMsXG4gICAgZGVmYXVsdFZhbHVlOiAnLScsXG4gICAgZGVsaW1pdGVyOiAnOycsXG4gICAgaGVhZGVyOiB0cnVlLFxuICB9KTtcblxuICBjb25zdCBjc3YgPSBjdXN0b21QYXJzZXIucGFyc2UocHJvYmxlbXMpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoY3N2LCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L2NzdjsgY2hhcnNldD1VVEYtOCdcbiAgICB9XG4gIH0pO1xufTsiLCAiY29uc3QgZ2V0SG9zdElkID0gKHR5cGUsIGVudGl0eSkgPT4ge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdIT1NUJzpcbiAgICAgIHJldHVybiBlbnRpdHkuZW50aXR5SWQ7XG5cbiAgICBjYXNlICdLVUJFUk5FVEVTX05PREUnOlxuICAgICAgcmV0dXJuIGVudGl0eS5mcm9tUmVsYXRpb25zaGlwcy5pc05vZGVPZkhvc3RbMF0uaWQ7XG5cbiAgICBjYXNlICdQUk9DRVNTX0dST1VQX0lOU1RBTkNFJzpcbiAgICAgIHJldHVybiBlbnRpdHkuZnJvbVJlbGF0aW9uc2hpcHMuaXNQcm9jZXNzT2ZbMF0uaWQ7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICdVTlNVUFBPUlRFRCBFTlRJVFkgVFlQRSc7XG4gIH1cbn1cblxuY29uc3QgZXh0cmFjdEVudGl0eUluZm9ybWF0aW9uID0gKGVudGl0eSkgPT4ge1xuICBjb25zdCB0eXBlID0gZW50aXR5LmVudGl0eUlkLnNwbGl0KCctJylbMF1cblxuICByZXR1cm4ge1xuICAgIGVudGl0eURpc3BsYXlOYW1lOiBlbnRpdHkuZGlzcGxheU5hbWUsXG4gICAgZW50aXR5RGV0ZWN0ZWROYW1lOiBlbnRpdHkucHJvcGVydGllcy5kZXRlY3RlZE5hbWUsXG4gICAgaG9zdElkOiBnZXRIb3N0SWQodHlwZSwgZW50aXR5KSxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VjdXJpdHlQcm9ibGVtcyA9IGFzeW5jICh0ZW5hbnQ/OiBzdHJpbmcgfCBudWxsLCB0b2tlbj86IHN0cmluZyB8IG51bGwpID0+IHtcbiAgY29uc3QgU0VDVVJJVFlfUFJPQkxFTVNfQVBJID0gYCR7dGVuYW50IHx8IHByb2Nlc3MuZW52LkRUX1RFTkFOVH0vYXBpL3YyL3NlY3VyaXR5UHJvYmxlbXM/cGFnZVNpemU9NTAwYDtcbiAgY29uc3QgU0VDVVJJVFlfUFJPQkxFTVNfREVUQUlMU19BUEkgPSBgJHt0ZW5hbnQgfHwgcHJvY2Vzcy5lbnYuRFRfVEVOQU5UfS9hcGkvdjIvc2VjdXJpdHlQcm9ibGVtcy9gO1xuICBjb25zdCBGSUVMRFMgPSAnJTJCcmlza0Fzc2Vzc21lbnQlMkMlMkJtYW5hZ2VtZW50Wm9uZXMlMkMlMkJkZXNjcmlwdGlvbiUyQyUyQmV2ZW50cyUyQyUyQnZ1bG5lcmFibGVDb21wb25lbnRzJTJDJTJCYWZmZWN0ZWRFbnRpdGllcyUyQyUyQmV4cG9zZWRFbnRpdGllcyUyQyUyQnJlYWNoYWJsZURhdGFBc3NldHMlMkMlMkJyZWxhdGVkRW50aXRpZXMlMkMlMkJyZWxhdGVkQ29udGFpbmVySW1hZ2VzJ1xuICBjb25zdCBFTlRJVFlfREVUQUlMU19BUEkgPSBgJHt0ZW5hbnQgfHwgcHJvY2Vzcy5lbnYuRFRfVEVOQU5UfS9hcGkvdjIvZW50aXRpZXMvYDtcblxuICBjb25zdCBzZWN1cml0eVByb2JsZW1zTGlzdCA9IFtdO1xuICBsZXQgbmV4dFBhZ2VLZXkgPSAnJztcbiAgZG8ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKG5leHRQYWdlS2V5ID8gYCR7U0VDVVJJVFlfUFJPQkxFTVNfQVBJfSZuZXh0UGFnZUtleT0ke25leHRQYWdlS2V5fWAgOiBTRUNVUklUWV9QUk9CTEVNU19BUEksIHsgbWV0aG9kOiAnR0VUJywgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IGBBcGktVG9rZW4gJHt0b2tlbiB8fCBwcm9jZXNzLmVudi5EVF9UT0tFTn1gIH0gfSk7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBzZWN1cml0eVByb2JsZW1zTGlzdC5wdXNoKC4uLmJvZHkuc2VjdXJpdHlQcm9ibGVtcyk7XG5cbiAgICBuZXh0UGFnZUtleSA9IGJvZHkubmV4dFBhZ2VLZXk7XG4gIH0gd2hpbGUgKCEhbmV4dFBhZ2VLZXkpO1xuXG4gIGNvbnN0IGRldGFpbGVkU2VjdXJpdHlQcm9ibGVtc0xpc3QgPSAoYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKHNlY3VyaXR5UHJvYmxlbXNMaXN0Lm1hcChcbiAgICBhc3luYyAoeyBzZWN1cml0eVByb2JsZW1JZCB9OiB7IHNlY3VyaXR5UHJvYmxlbUlkOiBudW1iZXIgfSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goU0VDVVJJVFlfUFJPQkxFTVNfREVUQUlMU19BUEkgKyBzZWN1cml0eVByb2JsZW1JZCArIGA/ZmllbGRzPSR7RklFTERTfWAsIHsgbWV0aG9kOiAnR0VUJywgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IGBBcGktVG9rZW4gJHt0b2tlbiB8fCBwcm9jZXNzLmVudi5EVF9UT0tFTn1gIH0gfSk7XG4gICAgICBjb25zdCBwID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgICAgcmV0dXJuIHA7XG4gICAgfVxuICApKSkuZmlsdGVyKGUgPT4gZS5zdGF0dXMgPT09ICdmdWxmaWxsZWQnKS5tYXAoZSA9PiBlLnZhbHVlKVxuXG4gIGxldCBpZENvdW50ID0gMDtcbiAgY29uc3QgZXh0ZW5kZWRTZWN1cml0eVByb2JsZW1zTGlzdCA9IGRldGFpbGVkU2VjdXJpdHlQcm9ibGVtc0xpc3QucmVkdWNlKChsaXN0LCBwLCBpKSA9PiB7XG4gICAgY29uc3QgZmxhdHRlbmVkUHJvYmxlbXMgPSBwLnZ1bG5lcmFibGVDb21wb25lbnRzLnJlZHVjZSgoZW50aXR5TGlzdCwgY29tcG9uZW50LCBqKSA9PiB7XG4gICAgICBlbnRpdHlMaXN0LnB1c2goLi4uY29tcG9uZW50LmFmZmVjdGVkRW50aXRpZXMubWFwKGVudGl0eSA9PiAoe1xuICAgICAgICBpZDogKytpZENvdW50LFxuICAgICAgICBkaXNwbGF5SWQ6IHAuZGlzcGxheUlkLFxuICAgICAgICBzZWN1cml0eVByb2JsZW1JZDogcC5zZWN1cml0eVByb2JsZW1JZCxcbiAgICAgICAgZW50aXR5SWQ6IGVudGl0eSxcbiAgICAgICAgdGl0bGU6IHAudGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBwLmRlc2NyaXB0aW9uLFxuICAgICAgICB0eXBlOiBwLnZ1bG5lcmFiaWxpdHlUeXBlLFxuICAgICAgICB0ZWNobm9sb2d5OiBwLnRlY2hub2xvZ3ksXG4gICAgICAgIHBhY2thZ2U6IHAucGFja2FnZU5hbWUsXG4gICAgICAgIGNvbXBvbmVudDogY29tcG9uZW50LmRpc3BsYXlOYW1lLFxuICAgICAgICBzdGF0dXM6IHAuc3RhdHVzLFxuICAgICAgICByaXNrTGV2ZWw6IHAucmlza0Fzc2Vzc21lbnQucmlza0xldmVsLFxuICAgICAgICByaXNrU2NvcmU6IHAucmlza0Fzc2Vzc21lbnQucmlza1Njb3JlLFxuICAgICAgICBleHBvc2VkOiBwLnJpc2tBc3Nlc3NtZW50LmV4cG9zdXJlICE9PSBcIk5PVF9BVkFJTEFCTEVcIiA/ICd5ZXMnIDogJ25vJyxcbiAgICAgICAgZGF0YUFzc2V0czogcC5yaXNrQXNzZXNzbWVudC5kYXRhQXNzZXRzICE9PSBcIk5PVF9BVkFJTEFCTEVcIiA/ICd5ZXMnIDogJ25vJyxcbiAgICAgICAgcHVibGljRXhwbG9pdDogcC5yaXNrQXNzZXNzbWVudC5wdWJsaWNFeHBsb2l0ICE9PSBcIk5PVF9BVkFJTEFCTEVcIiA/ICd5ZXMnIDogJ25vJyxcbiAgICAgICAgbXV0ZWQ6IHAubXV0ZWQgPyAneWVzJyA6ICdubycsXG4gICAgICAgIGludGVybmFsTGluazogcC51cmwsXG4gICAgICAgIC8vIFRPRE8gY2hhbmdlIHRvIGFycmF5IHdoaWNoIGhvbGRzIGxpbmsgdGV4dCBhbmQgaHJlZlxuICAgICAgICBleHRlcm5hbExpbms6IHAuZXh0ZXJuYWxWdWxuZXJhYmlsaXR5SWQ/LnN0YXJ0c1dpdGgoJ1NOWUsnKSA/IGBodHRwczovL3NlY3VyaXR5LnNueWsuaW8vdnVsbi8ke3AuZXh0ZXJuYWxWdWxuZXJhYmlsaXR5SWR9YCA6ICctJyxcbiAgICAgICAgLy8gY3ZlSWRzOiBwLmN2ZUlkcyxcbiAgICAgICAgZmlyc3RTZWVuOiBuZXcgRGF0ZShwLmZpcnN0U2VlblRpbWVzdGFtcCkudG9VVENTdHJpbmcoKSxcbiAgICAgICAgbGFzdFVwZGF0ZWQ6IG5ldyBEYXRlKHAubGFzdFVwZGF0ZWRUaW1lc3RhbXApLnRvVVRDU3RyaW5nKCksXG4gICAgICB9KSkpXG5cbiAgICAgIHJldHVybiBlbnRpdHlMaXN0O1xuICAgIH0sIFtdKTtcblxuICAgIGxpc3QucHVzaCguLi5mbGF0dGVuZWRQcm9ibGVtcylcblxuICAgIHJldHVybiBsaXN0XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChleHRlbmRlZFNlY3VyaXR5UHJvYmxlbXNMaXN0Lm1hcChhc3luYyBwID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChFTlRJVFlfREVUQUlMU19BUEkgKyBwLmVudGl0eUlkLCB7IG1ldGhvZDogJ0dFVCcsIGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiBgQXBpLVRva2VuICR7dG9rZW4gfHwgcHJvY2Vzcy5lbnYuRFRfVE9LRU59YCB9IH0pXG4gICAgY29uc3QgZW50aXR5ID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5wLFxuICAgICAgLi4uZXh0cmFjdEVudGl0eUluZm9ybWF0aW9uKGVudGl0eSksXG4gICAgfTtcbiAgfSkpKS5maWx0ZXIoZSA9PiBlLnN0YXR1cyA9PT0gJ2Z1bGZpbGxlZCcpLm1hcChlID0+IGUudmFsdWUpXG5cbn0iLCAiaW1wb3J0IHsgTWV0YUZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gJ3JlbWl4JztcblxuaW1wb3J0IE5hdmJhciBmcm9tICd+L2NvbXBvbmVudHMvbmF2YmFyJztcbmltcG9ydCB7IGdldFNlY3VyaXR5UHJvYmxlbXMgfSBmcm9tICd+L2hlbHBlcnMvZHluYXRyYWNlJztcbmltcG9ydCBUYWJsZSBmcm9tICd+L2NvbXBvbmVudHMvdGFibGUvdGFibGUnO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogJ0FwcFNlYyBFeHBsb3JlcicgfTtcbn07XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIGdldFNlY3VyaXR5UHJvYmxlbXMoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIGNvbnN0IGNvbHVtbnMgPSBPYmplY3Qua2V5cyhkYXRhWzBdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2YmFyPjwvTmF2YmFyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiIHJvbGU9XCJuYXZpZ2F0aW9uXCIgYXJpYS1sYWJlbD1cIm1haW4gbmF2aWdhdGlvblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIiBocmVmPVwiaHR0cHM6Ly9idWxtYS5pb1wiPlxuICAgICAgICAgIHsvKiA8aW1nIHNyYz1cImh0dHBzOi8vYnVsbWEuaW8vaW1hZ2VzL2J1bG1hLWxvZ28ucG5nXCIgd2lkdGg9XCIxMTJcIiBoZWlnaHQ9XCIyOFwiIC8+ICovfWZvb1xuICAgICAgICA8L2E+XG5cbiAgICAgICAgPGFcbiAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItYnVyZ2VyXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwibWVudVwiXG4gICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICBkYXRhLXRhcmdldD1cIm5hdmJhckJhc2ljRXhhbXBsZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgaWQ9XCJuYXZiYXJCYXNpY0V4YW1wbGVcIiBjbGFzc05hbWU9XCJuYXZiYXItbWVudVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1zdGFydFwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+SG9tZTwvYT5cblxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+RG9jdW1lbnRhdGlvbjwvYT5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW0gaGFzLWRyb3Bkb3duIGlzLWhvdmVyYWJsZVwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWxpbmtcIj5Nb3JlPC9hPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1kcm9wZG93blwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPkFib3V0PC9hPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPkpvYnM8L2E+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+Q29udGFjdDwvYT5cbiAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm5hdmJhci1kaXZpZGVyXCIgLz5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5SZXBvcnQgYW4gaXNzdWU8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItZW5kXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5TaWduIHVwPC9zdHJvbmc+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpZ2h0XCI+TG9nIGluPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRhYmxlLCB1c2VTb3J0QnksIHVzZUdyb3VwQnksIHVzZUV4cGFuZGVkIH0gZnJvbSAncmVhY3QtdGFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJsZSh7IGNvbHVtbnM6IHJhd0NvbHVtbnMsIGRhdGE6IHJhd0RhdGEgfSkge1xuICBjb25zdCBjb2x1bW5zID0gdXNlTWVtbyhcbiAgICAoKSA9PiBbXG4gICAgICB7XG4gICAgICAgIC8vIEJ1aWxkIG91ciBleHBhbmRlciBjb2x1bW5cbiAgICAgICAgaWQ6ICdleHBhbmRlcicsIC8vIE1ha2Ugc3VyZSBpdCBoYXMgYW4gSURcbiAgICAgICAgSGVhZGVyOiAoeyBnZXRUb2dnbGVBbGxSb3dzRXhwYW5kZWRQcm9wcywgaXNBbGxSb3dzRXhwYW5kZWQgfSkgPT4gKFxuICAgICAgICAgIDxzcGFuIHsuLi5nZXRUb2dnbGVBbGxSb3dzRXhwYW5kZWRQcm9wcygpfT57aXNBbGxSb3dzRXhwYW5kZWQgPyAnXHVEODNEXHVEQzQ3JyA6ICdcdUQ4M0RcdURDNDknfTwvc3Bhbj5cbiAgICAgICAgKSxcbiAgICAgICAgQ2VsbDogKHsgcm93IH0pID0+XG4gICAgICAgICAgLy8gVXNlIHRoZSByb3cuY2FuRXhwYW5kIGFuZCByb3cuZ2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wcyBwcm9wIGdldHRlclxuICAgICAgICAgIC8vIHRvIGJ1aWxkIHRoZSB0b2dnbGUgZm9yIGV4cGFuZGluZyBhIHJvd1xuICAgICAgICAgIHJvdy5jYW5FeHBhbmQgPyAoXG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICB7Li4ucm93LmdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMoe1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAvLyBXZSBjYW4gZXZlbiB1c2UgdGhlIHJvdy5kZXB0aCBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgICAgLy8gYW5kIHBhZGRpbmdMZWZ0IHRvIGluZGljYXRlIHRoZSBkZXB0aFxuICAgICAgICAgICAgICAgICAgLy8gb2YgdGhlIHJvd1xuICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IGAke3Jvdy5kZXB0aCAqIDJ9cmVtYCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Jvdy5pc0V4cGFuZGVkID8gJ1x1RDgzRFx1REM0NycgOiAnXHVEODNEXHVEQzQ5J31cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApIDogbnVsbCxcbiAgICAgIH0sXG4gICAgICAuLi5yYXdDb2x1bW5zLm1hcChjID0+ICh7IEhlYWRlcjogYywgYWNjZXNzb3I6IGMgfSkpLFxuICAgICAgLy8geyBIZWFkZXI6ICdzdGF0dXMnLCBhY2Nlc3NvcjogJ3N0YXR1cycgfSxcbiAgICAgIC8vIHsgSGVhZGVyOiAnZGlzcGxheUlkJywgYWNjZXNzb3I6ICdkaXNwbGF5SWQnIH0sXG4gICAgICAvLyB7IEhlYWRlcjogJ3RlY2hub2xvZ3knLCBhY2Nlc3NvcjogJ3RlY2hub2xvZ3knIH0sXG4gICAgICAvLyB7IEhlYWRlcjogJ211dGVkJywgYWNjZXNzb3I6ICdtdXRlZCcgfSxcbiAgICAgIC8vIHsgSGVhZGVyOiAndGl0bGUnLCBhY2Nlc3NvcjogJ3RpdGxlJyB9LFxuICAgIF0sXG4gICAgW10sXG4gICk7XG5cbiAgY29uc3QgZGF0YSA9IHVzZU1lbW8oKCkgPT4gcmF3RGF0YSwgW10pO1xuXG4gIGNvbnN0IHtcbiAgICBnZXRUYWJsZVByb3BzLFxuICAgIGdldFRhYmxlQm9keVByb3BzLFxuICAgIGhlYWRlckdyb3VwcyxcbiAgICByb3dzLFxuICAgIHByZXBhcmVSb3csXG4gICAgc3RhdGU6IHsgZ3JvdXBCeSwgZXhwYW5kZWQsIGhpZGRlbkNvbHVtbnMgfSxcbiAgfSA9IHVzZVRhYmxlKFxuICAgIHtcbiAgICAgIGNvbHVtbnMsXG4gICAgICBkYXRhLFxuICAgIH0sXG4gICAgdXNlR3JvdXBCeSxcbiAgICB1c2VTb3J0QnksXG4gICAgdXNlRXhwYW5kZWQsXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWNvbnRhaW5lclwiPlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIGlzLWZ1bGx3aWR0aCBpcy1ob3ZlcmFibGVcIiB7Li4uZ2V0VGFibGVQcm9wcygpfT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIExvb3Agb3ZlciB0aGUgaGVhZGVyIHJvd3NcbiAgICAgICAgICAgIGhlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxuICAgICAgICAgICAgICAvLyBBcHBseSB0aGUgaGVhZGVyIHJvdyBwcm9wc1xuICAgICAgICAgICAgICA8dHIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgLy8gTG9vcCBvdmVyIHRoZSBoZWFkZXJzIGluIGVhY2ggcm93XG4gICAgICAgICAgICAgICAgICBoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxuICAgICAgICAgICAgICAgICAgICAvLyBBcHBseSB0aGUgaGVhZGVyIGNlbGwgcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgPHRoIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoY29sdW1uLmdldFNvcnRCeVRvZ2dsZVByb3BzKCkpfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmNhbkdyb3VwQnkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY29sdW1uIGNhbiBiZSBncm91cGVkLCBsZXQncyBhZGQgYSB0b2dnbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHsuLi5jb2x1bW4uZ2V0R3JvdXBCeVRvZ2dsZVByb3BzKCl9Pntjb2x1bW4uaXNHcm91cGVkID8gJ1x1RDgzRFx1REVEMSAnIDogJ1x1RDgzRFx1REM0QSAnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW5kZXIgdGhlIGhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLnJlbmRlcignSGVhZGVyJylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICB7LyogQXBwbHkgdGhlIHRhYmxlIGJvZHkgcHJvcHMgKi99XG4gICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgLy8gTG9vcCBvdmVyIHRoZSB0YWJsZSByb3dzXG4gICAgICAgICAgICByb3dzLm1hcChyb3cgPT4ge1xuICAgICAgICAgICAgICAvLyBQcmVwYXJlIHRoZSByb3cgZm9yIGRpc3BsYXlcbiAgICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIC8vIEFwcGx5IHRoZSByb3cgcHJvcHNcbiAgICAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9vcCBvdmVyIHRoZSByb3dzIGNlbGxzXG4gICAgICAgICAgICAgICAgICAgIHJvdy5jZWxscy5tYXAoY2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gQXBwbHkgdGhlIGNlbGwgcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbmRlciB0aGUgY2VsbCBjb250ZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucmVuZGVyKCdDZWxsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBDaGFuZ2VFdmVudEhhbmRsZXIsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IHVzZUxvY2FsU3RvcmFnZSB9IGZyb20gJ34vaGVscGVycy9ob29rcyc7XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgc3BsaXRUb2tlbiA9IHByb2Nlc3MuZW52LkRUX1RFTkFOVD8uc3BsaXQoJy4nKTtcblxuICBsZXQgdG9rZW4gPSAnJztcbiAgaWYgKHNwbGl0VG9rZW4/Lmxlbmd0aCA9PT0gMykge1xuICAgIHRva2VuID0gc3BsaXRUb2tlbi5zbGljZSgwLCAxKS5qb2luKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRlbmFudFVybDogcHJvY2Vzcy5lbnYuRFRfVEVOQU5UIHx8ICdodHRwczovL3h4eHh4eHh4LmxpdmUuZHluYXRyYWNlLmNvbScsXG4gICAgdG9rZW4sXG4gICAgY29uZmlndXJlZEZyb21CYWNrZW5kOiAhIXByb2Nlc3MuZW52LkRUX1RFTkFOVCAmJiAhIXByb2Nlc3MuZW52LkRUX1RPS0VOLFxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyB0ZW5hbnRVcmwsIGNvbmZpZ3VyZWRGcm9tQmFja2VuZCB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIGNvbnN0IFt0ZW5hbnQsIHNldFRlbmFudF0gPSB1c2VMb2NhbFN0b3JhZ2UoJ2R0X3RlbmFudCcsIHRlbmFudFVybCk7XG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlTG9jYWxTdG9yYWdlKCdkdF90b2tlbicsICcnKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ1N0YXRlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4oKVxuXG4gIGNvbnN0IHVwZGF0ZVRlbmFudDogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBzZXRUZW5hbnQoZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgY29uc3QgdXBkYXRlVG9rZW46IENoYW5nZUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PiA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgc2V0VG9rZW4oZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgY29uc3QgZ2VuZXJhdGVSZXBvcnQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFjb25maWd1cmVkRnJvbUJhY2tlbmQgJiYgKCF0ZW5hbnQgfHwgIXRva2VuKSkge1xuICAgICAgc2V0TWVzc2FnZSgnUGxlYXNlIGNvbmZpZ3VyZSB0ZW5hbnQgYW5kIHRva2VuIScpXG5cbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRNZXNzYWdlKHVuZGVmaW5lZClcbiAgICB9XG5cbiAgICBzZXRMb2FkaW5nU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9fZ2VuZXJhdGU/dGVuYW50PSR7dGVuYW50fSZ0b2tlbj0ke3Rva2VufWApXG4gICAgY29uc3QgZmlsZUJsb2IgPSBhd2FpdCByZXMuYmxvYigpXG5cbiAgICBjb25zdCBmaWxlVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlQmxvYilcblxuICAgIHNldEZpbGUoZmlsZVVybCk7XG4gICAgc2V0TG9hZGluZ1N0YXRlKGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpcy1mbGV4IGlzLWp1c3RpZnktY29udGVudC1jZW50ZXIgaXMtYWxpZ24taXRlbXMtY2VudGVyXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTVcIiBzdHlsZT17eyB3aWR0aDogJzgwMHB4JyB9fT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+QXBwU2VjIFJlcG9ydGVyPC9oMT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+R2VuZXJhdGUgc2VjdXJpdHkgcmVwb3J0cyBiYXNlZCBvbiBEeW5hdHJhY2UgQXBwbGljYXRpb24gU2VjdXJpdHk8L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICBEeW5hdHJhY2V7JyAnfVxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5keW5hdHJhY2UuY29tL3N1cHBvcnQvaGVscC9ob3ctdG8tdXNlLWR5bmF0cmFjZS9hcHBsaWNhdGlvbi1zZWN1cml0eVwiPlxuICAgICAgICAgICAgQXBwbGljYXRpb24gU2VjdXJpdHlcbiAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICBlbmFibGVzIHlvdSB0byBkZXRlY3QsIHZpc3VhbGl6ZSwgYW5hbHl6ZSwgbW9uaXRvciwgYW5kIHJlbWVkaWF0ZSBvcGVuLXNvdXJjZSBhbmQgdGhpcmQtcGFydHkgdnVsbmVyYWJpbGl0aWVzXG4gICAgICAgICAgaW4gcHJvZHVjdGlvbiBhbmQgcHJlLXByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIGF0IHJ1bnRpbWUuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiaXMtc2l6ZS02IGhhcy10ZXh0LXdlaWdodC1zZW1pYm9sZCBtdC00XCI+XG4gICAgICAgICAgVGhlIGdlbmVyYXRlZCBDU1YtZmlsZSB3aWxsIHVzZSA8c3BhbiBjbGFzc05hbWU9XCJoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPjs8L3NwYW4+IGFzIGRlbGltaXRlciBhbmQgcmVxdWlyZXMgdGhlIGZvbGxvd2luZyB0b2tlbiBzY29wZXM6XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzIGFyZS1zbWFsbCBtdC0xXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFnIGlzLWluZm8gaXMtbGlnaHRcIj5SZWFkIHNlY3VyaXR5IHByb2JsZW1zPC9hPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZyBpcy1pbmZvIGlzLWxpZ2h0XCI+UmVhZCBlbnRpdGllczwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dCBpcy1zbWFsbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJEeW5hdHJhY2UgVGVuYW50XCIgb25DaGFuZ2U9e3VwZGF0ZVRlbmFudH0gdmFsdWU9e3RlbmFudH0gZGlzYWJsZWQ9e2NvbmZpZ3VyZWRGcm9tQmFja2VuZH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXQgaXMtc21hbGxcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkR5bmF0cmFjZSBUb2tlblwiIG9uQ2hhbmdlPXt1cGRhdGVUb2tlbn0gdmFsdWU9e3Rva2VufSBkaXNhYmxlZD17Y29uZmlndXJlZEZyb21CYWNrZW5kfSAvPlxuICAgICAgICAgICAge2NvbmZpZ3VyZWRGcm9tQmFja2VuZCAmJiA8cCBjbGFzc05hbWU9XCJoZWxwIGlzLXN1Y2Nlc3NcIj5EeW5hdHJhY2UgdGVuYW50IGFuZCB0b2tlbiBhcmUgY29uZmlndXJlZCBvbiB0aGUgYmFja2VuZC48L3A+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICAgIHsvKiA8YSBjbGFzc05hbWU9XCJidXR0b24gaXMtZGFuZ2VyIGlzLWZ1bGx3aWR0aFwiIGhyZWY9XCIvX2dlbmVyYXRlXCIgZG93bmxvYWQ9XCJyZXBvcnQuY3N2XCI+XG4gICAgICAgICAgICAgIEdlbmVyYXRlIENTViBSZXBvcnRcbiAgICAgICAgICAgIDwvYT4gKi99XG4gICAgICAgICAgICB7ZmlsZSA/XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnYnV0dG9uJywgJ2lzLXN1Y2Nlc3MnLCAnaXMtZnVsbHdpZHRoJyl9IGhyZWY9e2ZpbGV9IGRvd25sb2FkPXtgYXBwc2VjLXJlcG9ydF8ke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCl9LmNzdmB9PlxuICAgICAgICAgICAgICAgIERvd25sb2FkIENTViBSZXBvcnRcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdidXR0b24nLCAnaXMtaW5mbycsICdpcy1mdWxsd2lkdGgnLCB7ICdpcy1sb2FkaW5nJzogaXNMb2FkaW5nIH0pfSBvbkNsaWNrPXtnZW5lcmF0ZVJlcG9ydH0+XG4gICAgICAgICAgICAgICAgICBHZW5lcmF0ZSBDU1YgUmVwb3J0XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIHttZXNzYWdlICYmIDxwIGNsYXNzTmFtZT1cImhlbHAgaXMtZGFuZ2VyXCI+e21lc3NhZ2V9PC9wPn1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVscFwiPlxuICAgICAgICAgICAgTmVlZCBoZWxwPyBSZWFjaCBvdXQgdG8gPGEgaHJlZj1cIm1haWx0bzptYXJ0aW4ubmlydGxAZHluYXRyYWNlLmNvbVwiPm1hcnRpbi5uaXJ0bEBkeW5hdHJhY2UuY29tPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBIb29rXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9jYWxTdG9yYWdlKGtleSwgaW5pdGlhbFZhbHVlKSB7XG4gIC8vIFN0YXRlIHRvIHN0b3JlIG91ciB2YWx1ZVxuICAvLyBQYXNzIGluaXRpYWwgc3RhdGUgZnVuY3Rpb24gdG8gdXNlU3RhdGUgc28gbG9naWMgaXMgb25seSBleGVjdXRlZCBvbmNlXG4gIGNvbnN0IFtzdG9yZWRWYWx1ZSwgc2V0U3RvcmVkVmFsdWVdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gaW5pdGlhbFZhbHVlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gR2V0IGZyb20gbG9jYWwgc3RvcmFnZSBieSBrZXlcbiAgICAgIGNvbnN0IGl0ZW0gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgIC8vIFBhcnNlIHN0b3JlZCBqc29uIG9yIGlmIG5vbmUgcmV0dXJuIGluaXRpYWxWYWx1ZVxuICAgICAgcmV0dXJuIGl0ZW0gPyBKU09OLnBhcnNlKGl0ZW0pIDogaW5pdGlhbFZhbHVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBJZiBlcnJvciBhbHNvIHJldHVybiBpbml0aWFsVmFsdWVcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHJldHVybiBpbml0aWFsVmFsdWU7XG4gICAgfVxuICB9KTtcbiAgLy8gUmV0dXJuIGEgd3JhcHBlZCB2ZXJzaW9uIG9mIHVzZVN0YXRlJ3Mgc2V0dGVyIGZ1bmN0aW9uIHRoYXQgLi4uXG4gIC8vIC4uLiBwZXJzaXN0cyB0aGUgbmV3IHZhbHVlIHRvIGxvY2FsU3RvcmFnZS5cbiAgY29uc3Qgc2V0VmFsdWUgPSAodmFsdWUpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gQWxsb3cgdmFsdWUgdG8gYmUgYSBmdW5jdGlvbiBzbyB3ZSBoYXZlIHNhbWUgQVBJIGFzIHVzZVN0YXRlXG4gICAgICBjb25zdCB2YWx1ZVRvU3RvcmUgPVxuICAgICAgICB2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gdmFsdWUoc3RvcmVkVmFsdWUpIDogdmFsdWU7XG4gICAgICAvLyBTYXZlIHN0YXRlXG4gICAgICBzZXRTdG9yZWRWYWx1ZSh2YWx1ZVRvU3RvcmUpO1xuICAgICAgLy8gU2F2ZSB0byBsb2NhbCBzdG9yYWdlXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZVRvU3RvcmUpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gQSBtb3JlIGFkdmFuY2VkIGltcGxlbWVudGF0aW9uIHdvdWxkIGhhbmRsZSB0aGUgZXJyb3IgY2FzZVxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIFtzdG9yZWRWYWx1ZSwgc2V0VmFsdWVd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
