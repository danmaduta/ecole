const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/auth/google", { target: "http://localhost:5000" }));
  app.use(proxy("/auth/facebook", { target: "http://localhost:5000" }));
  app.use(proxy("/api/blogs/*", { target: "http://localhost:5000" }));
  app.use(proxy("/api/blogs/edit/*", { target: "http://localhost:5000" }));
  app.use(proxy("/api/blogs/delete/*", { target: "http://localhost:5000" }));
  app.use(proxy("/api/surveys/*", { target: "http://localhost:5000" }));
  app.use(proxy("/api/stripe/*", { target: "http://localhost:5000" }));
  app.use(proxy("/api/*", { target: "http://localhost:5000" }));
};
