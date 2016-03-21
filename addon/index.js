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
  setAnimation : function (id, type) {
    let spinners = this.get("spinners");
    spinners[id].setAnimation(type);
  }
});

export default Spinner;
