
const I = actor();

module.exports = {

  chooseColor(color){
    I.selectOption('Color', color)
  },

  chooseModel(model){
    I.selectOption('Model', model)
  },

  addProductToCart(){
    I.click('Add to cart');
  }

}
