# vue-events

A [Vue.js](http://vuejs.org) plugin that provides a global event bus and a couple helper methods.

Works with both `Vue 1.0` & `Vue 2.0`.

## Installation

##### 1.) Install package via NPM
**Vue 1.x**

```
npm install vue-events
```
```
npm install vue-events@vue-1.x
```

**Vue 2.x**
```
npm install vue-events@vue-2.x
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

## Demo
If you'd like to demo `vue-events` try [vue-stack-2.0](https://github.com/cklmercer/vue-stack-2.0)

## License

[MIT](http://opensource.org/licenses/MIT)
