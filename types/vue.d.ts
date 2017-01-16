/**
 * Augment the typings of Vue.js
 */

import Vue = require("vue");
import VueEvents from './index'

declare module "vue/types/vue" {
  interface Vue {
    $events: VueEvents
  }
}

