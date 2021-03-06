exports.config = {
  output: "./output",
  helpers: {
    WebDriverIO: {
      host: process.profile || "localhost",
      url: "https://www.ebay.com.au",
      browser: "chrome",
    },
  },
  include: {
    homePage: "./pages/home.js",
    searchResultPage: "./pages/searchResult.js",
    productPage: "./pages/product.js",
    cartPage: "./pages/cart.js",
    addToCartModal: "./fragments/addToCartModal.js",
    searchBar: "./fragments/searchBar.js",
    topNavigationBar: "./fragments/topNavigationBar"
  },
  mocha: {
    reporterOptions: {
      reportDir: "output"
    }
  },
  bootstrap: false,
  teardown: null,
  hooks: [],
  gherkin: {},
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  multiple: {
    parallel: {
      browsers: ["chrome", "firefox"]
    }
  },
  tests: "./tests/*_test.js",
  timeout: 10000,
  name: "eBayTest"
}
