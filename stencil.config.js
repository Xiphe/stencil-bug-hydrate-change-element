exports.config = {
  globalStyle: "src/global/app.css",
  suppressTypeScriptErrors: true,
  outputTargets: [
    {
      type: "www",
      baseUrl: process.env.GH_PAGES
        ? "/stencil-bug-hydrate-change-element/"
        : "/",
      serviceWorker: false,
      dir: "docs"
    }
  ]
};

exports.devServer = {
  root: "docs",
  watchGlob: "**/**"
};
