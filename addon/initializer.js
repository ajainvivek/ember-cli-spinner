
export function initialize() {
  let application = arguments[1] || arguments[0];
  application.inject('route', 'spinner', 'service:spinner');
  application.inject('controller', 'spinner', 'service:spinner');
}

export default {
  name: 'inject-spinner-service',
  initialize: initialize
};
