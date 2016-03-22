# ember-cli-spinner

#### [Visit project page and demo](http://ajainvivek.github.io/ember-cli-spinner/)

`ember-cli-spinner` displays css3 driven ajax spinner for your ambitious Ember.js app.

## Usage

1. Add `{{ember-cli-spinner id="uniq-123"}}` to one of your templates, usually in `application.hbs` or View or Components
2. Specify `id` attribute to uniquely identify spinner wrapper.
3. Inject the `spinner` service
4. Show, Hide & Set Animation Type for the spinner
5. For components or child view spinner loading ensure parent position is set to `relative`

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
{{ember-cli-spinner id="123" type="wave" height="40px" width="40px" bgColor="transparent" color="dark-red"}}
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

## API's

1. show(id, options) //provide unique id for spinner wrapper
2. hide(id) //provide unique id for spinner wrapper
3. setAnimation(id, type) //type from available types
4. setHeight(id, height) //height in px or em
5. setWidth(id, width) //width in px or em
6. setColor(id, color) //colors from available colors
7. setBgColor(id, color) //color can be hex or rgba value

Spinner color class available are:

- White -> (white) //default
- Black -> (black)
- Light Green -> (light-green)
- Green -> (green)
- Dark Green -> (dark-green)
- Magenta -> (magenta)
- Purple -> (purple)
- Dark Purple - (dark-purple)
- Darken - (darken)
- Light Blue - (light-blue)
- Blue - (blue)
- Dark Blue - (dark-blue)
- Yellow - (yellow)
- Orange - (orange)
- Dark Orange - (dark-orange)
- Red - (red)
- Dark Red - (dark-red)

## Installation

This module is an ember-cli addon, so installation is easy as cake.

```sh
npm install ember-cli-spinner --save-dev
```

## Browser Compatibility

IE9 +, Chrome 21+, Mozilla, Safari
