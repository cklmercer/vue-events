# vue-events

A [Vue.js](http://vuejs.org) plugin that provides a global event bus and a couple helper methods.

Works with both `Vue 1.0` & `Vue 2.0`.

## Installation

##### 1.) Install package via Yarn or NPM

```
yarn add vue-events
```

or

```
npm install vue-events
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
This plugin extends `Vue.prototype` to include a new `$events` object, which is a just a plain `vm`
that will serve as your global event bus. The `$events` `vm` has a couple aliases for the standard
event methods.

#### Firing an event
There are 3 methods that fire events. They're functionally identical and only differ in name.
```
new Vue({

    data() {
        return {
            eventData: {
                foo: 'baz'
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

_Note: `$events.fire` and `$events.emit` are aliases for `$events.$emit`._

#### Listening for an event
There are 3 methods that register event listeners. They're functionally identical and only differ in name.
```
new Vue({

    mounted() {
        // Option #1
        this.$events.listen('testEvent', eventData => console.log(eventData));

        // Option #2
        this.$events.on('testEvent', eventData => console.log(eventData));

        // Option #3
        this.$events.$on('testEvent', eventData => console.log(eventData));
    }

})
```
_Note: `$events.listen` and `$events.on` are aliases for `$events.$on`._

#### Removing an event listener
There are 3 methods that remove event listeners. They're functionally identical and only differ in name.
```
new Vue({

    mounted() {
        this.$events.on('testEvent', eventData => console.log(eventData));
    },

    beforeDestory() {
      // Option #1
      this.$events.$off('testEvent')

      // Option #2
      this.$events.off('testEvent')

      // Option #3
      this.$events.remove('testEvent')
    }

})
```
_Note: `$events.off` and `$events.remove` are aliases for `$events.$off`._


## Demo
If you'd like to demo `vue-events` try [vue-mix](https://github.com/cklmercer/vue-mix)

## License

[MIT](http://opensource.org/licenses/MIT)
