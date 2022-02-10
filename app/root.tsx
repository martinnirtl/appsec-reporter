import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import type { LinksFunction } from "remix";

export const links: LinksFunction = () => {
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

export const meta: MetaFunction = () => {
  return { title: "AppSec Reporter" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
