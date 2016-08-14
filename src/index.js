function plugin(Vue) {

    if (plugin.installed) {
        return;
    }

    const events = new Vue({
        methods: {
            fire(name, data = null) {
                this.emit(name, data)
            },

            emit(name, data = null) {
                this.$emit(name, data);
            },

            listen(name, cb) {
                this.on(name, cb)
            },

            on(name, cb) {
                this.$on(name, cb);
            }
        }
    });

    Object.defineProperty(Vue.prototype, '$events', {
        get() {
            return events;
        }
    });

    Vue.mixin({

        beforeCreate() {
            if (typeof this.$options.events != 'object') return;

            this.$on('hook:beforeMount', () => {
                for (var key in this.$options.events) {
                    events.on(key, this.$options.events[key].bind(this));
                }
            });
        }

    });
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

export default plugin;
