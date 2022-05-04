export default {
  github: 'https://github.com/easy-node-one/companion',
  docsRepositoryBase: 'https://github.com/easy-node-one/companion/blob/master',
  titleSuffix: ' – Nextra',
  darkMode: 'true',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Easy Node</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Validator Operator Companion Guide
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Easy Node Harmony ONE Validator Operator Companion Guide" />
      <meta name="og:description" content="Easy Node: Harmony Validator Operator Companion Guide" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://easynode.one/static/img/ez_node_sq_lg.jpg" />
      <meta name="twitter:site:domain" content="companion.easynode.one" />
      <meta name="twitter:url" content="https://companion.easynode.one" />
      <meta name="og:title" content="Easy Node: Harmony Validator Operator Companion Guide" />
      <meta name="og:image" content="https://easynode.one/static/img/ez_node_sq_lg.jpg" />
      <meta name="apple-mobile-web-app-title" content="EasyNode" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Update me on GitHub',
  footerText: <>Easy Node {new Date().getFullYear()} © Companion Guide.</>,
}
