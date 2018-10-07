const I = actor();

module.exports = {

  searchField: "#gh-ac",
  searchButton: "#gh-btn",

  searchProduct(product) {
    I.fillField(this.searchField, product);
    I.click(this.searchButton);
  }

}
