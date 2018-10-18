const I = actor();

module.exports = {

  searchField: "body #gh-ac",
  searchButton: "body #gh-btn",

  searchProduct(product) {
    I.fillField(this.searchField, product);
    I.click(this.searchButton);
  }

}
