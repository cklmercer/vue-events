# vue-events

A [Vue.js](http://vuejs.org) plugin that simplify events.

Works with both `Vue 1.0` & `Vue 2.0`.


## Installation
##### 1.) Install package via Yarn or NPM
```bash
$ yarn add vue-events
```
---
```bash
$ npm install vue-events
```
##### 2.) Install plugin within project.
```javascript
import Vue from 'vue'
import VueEvents from 'vue-events'
Vue.use(VueEvents)
```
---
```javascript
window.Vue = require('vue')
require('vue-events')
```

## Methods
Method              | Params            | Description                                                                | Docs
------------------- | ----------------- | -------------------------------------------------------------------------- | ---------------------------------------------
`vm.$events.$emit`  | `event, payload`  | Emit the event with the given payload.                                     | [vm.$emit](https://vuejs.org/v2/api/#vm-emit)
`vm.$events.emit`   | `event, payload`  | Emit the event with the given payload. _Alias for `vm.$events.$emit`_      | [vm.$emit](https://vuejs.org/v2/api/#vm-emit)
`vm.$events.fire`   | `event, payload`  | Emit the event with the given payload. _Alias for `vm.$events.$emit`_      | [vm.$emit](https://vuejs.org/v2/api/#vm-emit)
`vm.$events.$on`    | `event, callback` | Listen for the event with the given callback.                              | [vm.$on](https://vuejs.org/v2/api/#vm-on)
`vm.$events.on`     | `event, callback` | Listen for the event with the given callback. _Alias for `vm.$events.$on`_ | [vm.$on](https://vuejs.org/v2/api/#vm-on)
`vm.$events.listen` | `event, callback` | Listen for the event with the given callback. _Alias for `vm.$events.$on`_ | [vm.$on](https://vuejs.org/v2/api/#vm-on)
`vm.$events.$off`   | `event, callback` | Remove event listener(s) for the event                                     | [vm.$off](https://vuejs.org/v2/api/#vm-off)
`vm.$events.off`    | `event, callback` | Remove event listener(s) for the event. _Alias for `vm.$events.$off`_      | [vm.$off](https://vuejs.org/v2/api/#vm-off)
`vm.$events.remove` | `event, callback` | Remove event listener(s) for the event _Alias for `vm.$events.$off`_       | [vm.$off](https://vuejs.org/v2/api/#vm-off)





## Usage
#### The `$events` prototype object.
This plugin extends `Vue.prototype` to include a new `$events` object, which is a just a plain `vm`
that will serve as your global event bus. The `$events` `vm` has a couple aliases for the standard
event methods.


#### Firing an event
There are 3 methods that fire events.

_Note: `$events.fire` & `$events.emit` are aliases for `$events.$fire`_

```javascript
new Vue({

  data() {
    return {
      eventData: {
        foo: 'baz'
      }
    }
  },

  mounted() {
    this.$events.fire('testEvent', this.eventData);
    this.$events.emit('testEvent', this.eventData);
    this.$events.$emit('testEvent', this.eventData);
  }

})
```

#### Listening for an event
There are 3 methods that register event listeners.

_Note: `$events.listen` & `$events.on` are aliases for `$events.$on`._

```javascript
new Vue({
  mounted() {
    this.$events.listen('testEvent', eventData => console.log(eventData));
    this.$events.on('testEvent', eventData => console.log(eventData));
    this.$events.$on('testEvent', eventData => console.log(eventData));
  }
})
```

#### Removing an event listener

There are 3 methods that remove event listeners.


_Note: `$events.off` & `$events.remove` are aliases for `$events.$off`._

```javascript
new Vue({
  mounted() {
    this.$events.on('testEvent', eventData => console.log(eventData));
  },

  beforeDestroy() {
    this.$events.$off('testEvent')
    this.$events.off('testEvent')
    this.$events.remove('testEvent')
  }
})
```


## Demo
If you'd like to demo `vue-events` try [vue-mix](https://github.com/cklmercer/vue-mix)

## License

[MIT](http://opensource.org/licenses/MIT)
