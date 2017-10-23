/**
 * Augment the typings of Vue.js
 */

import Vue from 'vue';
import VueEvents from './index';

declare module 'vue/types/vue' {
  interface Vue {
    $events: VueEvents
  }
}