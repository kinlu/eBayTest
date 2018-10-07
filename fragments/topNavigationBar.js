
const I = actor();

module.exports = {
  
  cartIcon: '#gh-cart',

  goToCart(){
    I.click(this.cartIcon);
  }
}
