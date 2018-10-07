
const I = actor();

module.exports = {

  checkItemInCart(productName){
    I.waitForText('Go to checkout', 30);
    I.see(productName);
  },
  
}
