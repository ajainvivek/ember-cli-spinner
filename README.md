# ember-cli-spinner

#### [Visit project page and demo](http://ajainvivek.github.io/ember-cli-spinner/)

`ember-cli-spinner` displays css3 driven ajax spinner for your ambitious Ember.js app.

## Usage

1. Add `{{ember-cli-spinner id="uniq-123"}}` to one of your templates, usually in `application.hbs` or View or Components
2. Specify `id` attribute uniquely identify spinner wrapper.
2. Inject the `spinner` service
3. Show, Hide & Animation Type for the spinner

### Examples

```js
import {
  Component,
  inject
} from 'ember';
export default Component.extend({
  spinner: inject.service('spinner'),
  actions: {
    showSpinnerWithTimeout() {
      this.get('spinner').show('id', { //Provide the unique id
        timeout: 3000
      });
    },
    showSpinner() {
      this.get('spinner').show('id');
    },
    hideSpinner() {
      this.get('spinner').hide('id');
    }
  }
});
```

```handlebars
{{ember-cli-spinner id="123" type="wave"}}
```

...and you can change animation programmatically:

```js
spinner.setAnimation('123', 'pulse');
```

Animation types available:

- Pulse -> (pulse)
- Circles -> (circles)
- Fading Circles -> (fading-circle)
- Wave -> (wave)
- Double Bounce -> (double-bounce)
- Rotating Plane -> (rotating-plane)
- Folding Cube -> (folding-cube)
- Wandering Cubes - (wandering-cubes)
- Chasing Dots - (chasing-dots)
- Three Bounce - (three-bounce)
- Cube Grid - (cube-grid)


## Installation

This module is an ember-cli addon, so installation is easy as cake.

```sh
npm install ember-cli-spinner --save-dev
```

## Browser Compatibility

IE9 +, Chrome 21+, Mozilla, Safari
