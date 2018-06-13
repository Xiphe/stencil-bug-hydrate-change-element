exports.config = {
  globalStyle: "src/global/app.css",
  suppressTypeScriptErrors: true
};

exports.devServer = {
  root: "www",
  watchGlob: "**/**"
};
