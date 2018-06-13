exports.config = {
  globalStyle: "src/global/app.css",
  suppressTypeScriptErrors: true,
  outputTargets: [
    {
      type: "www",
      baseUrl: "/stencil-bug-hydrate-change-element/",
      serviceWorker: false,
      dir: "docs"
    }
  ]
};

exports.devServer = {
  root: "www",
  watchGlob: "**/**"
};
