
const I = actor();

module.exports = {

  landOnEBay() {
    I.amOnPage('https://www.ebay.com.au');
    I.see('eBay');
  }
}
