
const I = actor();

module.exports = {
  
  cartIcon: 'body #gh-cart',

  goToCart(){
    I.click(this.cartIcon);
  }
}
