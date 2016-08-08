# vue-events

A [Vue.js](http://vuejs.org) plugin that provides a global event bus and a couple helper methods.

_Works with `Vue 2.0`_

## Installation

##### 1.) Install package via NPM

```
$ npm install vue-events
```

##### 2.) Install plugin within project.
```
import Vue from 'vue';
import VueEvents from 'vue-events';

Vue.use(VueEvents)
```

or

```
window.Vue = require('vue');
require('vue-events');
```

## Usage

#### The `$events` prototype object.
This plugin extends `Vue.prototype` to include a new `$events` object. The `$events` object is a simple Vue model which
includes couple aliases for the `vm.$emit` & `vm.$on` methods.

#### Firing an event
There are 3 ways to fire an event using this plugin. They're each functionally equivalent.
```
new Vue({
    el: '#app',
    data() {
        return {
            eventData: {
                // The data to pass along with the event
            }
        }
    },
    mounted() {
        // Option #1
        this.$events.fire('testEvent', this.eventData);
        
        // Option #2
        this.$events.emit('testEvent', this.eventData);
        
        // Option #3
        this.$events.$emit('testEvent', this.eventData);
    }
})
```

_Note: `$event.fire` and `$events.emit` are aliases for `$events.$emit`._

#### Listening for an event
There are 3 ways to register an event listener using this plugin. They're each functionally equivalent.
```
new Vue({
    el: '#app',
    mounted() {
        // Option #1
        this.$events.listen('testEvent', eventData => console.log(eventData));
        
        // Option #1
        this.$events.on('testEvent', eventData => console.log(eventData));
        
        // Option #3
        this.$events.$on('testEvent', eventData => console.log(eventData));
    }
})
```

_Note: `$event.listen` and `$events.on` are aliases for `$events.$on`._

## License

[MIT](http://opensource.org/licenses/MIT)
