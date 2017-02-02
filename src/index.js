function plugin(Vue) {

  // Exit if the plugin has already been installed.
  if (plugin.installed) return

  // Create a `vm` to serve as our global event bus.
  const events = new Vue({
    methods: {
      /**
       * Emit the given event.
       *
       * @param {string|object} event
       * @param {...*} args
       */
      emit(event, ...args) {
        this.$emit(event, ...args)
      },

      /**
       * Emit the given event.
       *
       * @param {string|object} event
       * @param {...*} args
       */
      fire(event, ...args) {
        this.emit(event, ...args)
      },

      /**
       * Listen for the given event.
       *
       * @param {string} event
       * @param {function} callback
       */
      on(event, callback) {
        this.$on(event, callback)
      },

      /**
       * Listen for the given event.
       *
       * @param {string} event
       * @param {function} callback
       */
      listen(event, callback) {
        this.on(event, callback)
      },

      /**
       * Listen for the given event once.
       *
       * @param {string} event
       * @param {function} callback
       */
      once(event, callback) {
        this.$once(event, callback)
      },

      /**
       * Remove one or more event listeners.
       *
       * @param {string} event
       * @param {function} callback
       */
      off(event, callback) {
        this.$off(event, callback)
      },

      /**
       * Remove one or more event listeners.
       *
       * @param {string} event
       * @param {function} callback
       */
      remove(event, callback) {
        this.off(event, callback)
      }
    }
  })

  // Extend `Vue.prototype` to include our global event bus.
  Object.defineProperty(Vue.prototype, '$events', {
    get() {
      return events
    }
  })

  // Determine if we're dealing with a Vue 2.0 installation.
  if (typeof Vue.prototype._mount === 'function') {
    // Register a mixin that adds an `events` option to Vue 2.0 components.
    Vue.mixin({
      // Hook into the Vue 2.0 `beforeCreate` life-cycle event.
      beforeCreate() {
        // Exit if there's no `events` option.
        if (typeof this.$options.events !== 'object') return
        // Listen for the `hook:beforeMount` Vue 2.0 life-cycle event.
        this.$on('hook:beforeMount', () => {
          // Loop through each event.
          for (var key in this.$options.events) {
            // Register a listener for the event.
            events.$on(key, this.$options.events[key].bind(this))
          }
        })
      }
    })
  }
}

// Check for `window.Vue`
if (typeof window !== 'undefined' && window.Vue) {
  // Install plugin automatically.
  window.Vue.use(plugin)
}

export default plugin
