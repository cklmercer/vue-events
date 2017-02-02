import events from './event-bus'

function plugin(Vue) {

    if (plugin.installed) return

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
