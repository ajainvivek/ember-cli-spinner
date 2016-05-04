import Ember from 'ember';

let Spinner = Ember.Service.extend({
  spinners : {},
  add : function (spinner) {
    let spinners = this.get("spinners");
    spinners[spinner.id] = spinner;
  },
  remove : function (id) {
    let spinners = this.get("spinners");
    spinners[id].destroy();
    spinners[id] = undefined;
  },
  show : function (id, options) {
    let spinners = this.get("spinners");
    spinners[id].show(options);
  },
  hide : function (id) {
    let spinners = this.get("spinners");
    spinners[id].hide();
  },
  setAnimation : function (id, type) {
    let spinners = this.get("spinners");
    spinners[id].setAnimation(type);
  },
  setBgColor : function (id, color) {
    let spinners = this.get("spinners");
    spinners[id].setBgColor(color);
  },
  setHeight : function (id, height) {
    let spinners = this.get("spinners");
    spinners[id].setHeight(height);
  },
  setWidth : function (id, width) {
    let spinners = this.get("spinners");
    spinners[id].setHeight(width);
  }
});

export default Spinner;
