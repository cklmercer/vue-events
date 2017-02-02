function plugin(Vue) {

    if (plugin.installed) return

    const events = new Vue({
        methods: {
            fire(name, data = null) {
                this.emit(name, data)
            },

            emit(name, data = null) {
                this.$emit(name, data)
            },

            listen(name, cb) {
                this.on(name, cb)
            },

            on(name, cb) {
                this.$on(name, cb)
            },

            off(name, cb) {
              this.$off(name, cb)
            },

            remove(name, cb) {
              this.off(name, cb)
            }
        }
    })

    Object.defineProperty(Vue.prototype, '$events', {
        get() {
            return events
        }
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
}

export default plugin
