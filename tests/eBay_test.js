const homePage = require("../pages/home");
const searchBar = require("../fragments/searchBar");
const searchResultPage = require("../pages/searchResult");
const productPage = require('../pages/product');
const addToCartModal = require("../fragments/addToCartModal");
const cartPage = require("../pages/cart")
const topNavigationBar = require("../fragments/topNavigationBar")

const data = {
  product1: {
    product: "office table",
    productName: "New Office Computer Laptop Wooden Desk Study Table Workstation Home Furniture",
    color: "Black",
    model: null
  },

  product2: {
    product: "office chair",
    productName: "Prime Executiv Office Computer Mesh Chair Swivel Height Adjustable Gas Lift",
    color: null,
    model: 'Model A'
  }
}

Feature('eBay test');

Scenario('Add 2 products to shopping cart',  (homePage, searchBar, searchResultPage, productPage, addToCartModal, cartPage, topNavigationBar) => {
  homePage.landOnEBay();  
  searchBar.searchProduct(data.product1.product);
  searchResultPage.chooseProductName(data.product1.productName);
  productPage.chooseColor(data.product1.color);
  productPage.addProductToCart();
  addToCartModal.closeModal();
  
  searchBar.searchProduct(data.product2.product);
  searchResultPage.chooseProductName(data.product2.productName);
  productPage.chooseModel(data.product2.model);
  productPage.addProductToCart();
  addToCartModal.closeModal();

  topNavigationBar.goToCart();
  cartPage.checkItemInCart(data.product1.productName);
  cartPage.checkItemInCart(data.product2.productName);
})