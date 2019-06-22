const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");

module.exports = withCss(
  withSass({
    target: "serverless",
    env: {
      API: {
        googleSheet: ""
      },
      sheetID: "",
      brandName: ""
    }
  })
);
