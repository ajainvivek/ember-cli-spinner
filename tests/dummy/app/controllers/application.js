import Ember from 'ember';

export default Ember.Controller.extend({
  spinner : Ember.inject.service(),
  timer : 3000,
  types: [{
    id : "circles",
    label : "Cirlces"
  },{
    id : "pulse",
    label : "Pulse"
  },{
    id : "fading-circle",
    label : "Fading Circles"
  },{
    id : "wave",
    label : "Wave"
  },{
    id : "double-bounce",
    label : "Double Bounce"
  },{
    id : "rotating-plane",
    label : "Rotating Plane"
  },{
    id : "folding-cube",
    label : "Folding Cube"
  },{
    id : "wandering-cubes",
    label : "Wandering Cubes"
  },{
    id : "chasing-dots",
    label : "Chasing Dots"
  },{
    id : "three-bounce",
    label : "Three Bounce"
  },
  {
    id : "three-bounce-horizontal",
    label : "Three Bounce Horizontal"
  },{
    id : "cube-grid",
    label : "Cube Grid"
  }],
  actions : {
    showSpinner() {
      let spinner = this.get("spinner");
      let timer = this.get("timer");
      let type = $(".wrapper-select").val();
      spinner.setAnimation("app", type);
      spinner.show("app", {
        timeout : timer
      });
    }
  }
});
