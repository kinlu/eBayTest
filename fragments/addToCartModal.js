
const I = actor();

module.exports = {
  modal: "body #vi_oly_atcRedesignId_overlay-atc-container",

  closeModal(){
    within(this.modal, function() {
      I.waitForElement(".clzBtn", 30)
      I.click(".clzBtn")
    })
  },

}
