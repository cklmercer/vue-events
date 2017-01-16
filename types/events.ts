/**
 * Vue-Events types.
 */

import Vue = require('vue')
import { ComponentOptions, PluginFunction } from "vue"

export declare class VueEvents {
  static install: PluginFunction<never>

  /**
   * Fire a event.
   *
   * @param {string} eventName Name of your registered event.
   * @param {any} [value] The data passed to the function.
   * @memberOf VueEvents
   */
  fire(eventName: string, value?: any): void

  /**
   * Fire a event.
   *
   * @param {string} eventName Name of your registered event.
   * @param {any} [value] The data passed to the function.
   * @memberOf VueEvents
   */
  emit(eventName: string, value?: any): void

  /**
   * Fire a event.
   *
   * @param {string} eventName Name of your registered event.
   * @param {any} [value] The data passed to the function.
   * @memberOf VueEvents
   */
  $emit(eventName: string, value?: any): void

  /**
   * Register a new event.
   *
   * @param {string} eventName Name for this new event.
   * @param {Function} callback Function that you want.
   * @memberOf VueEvents
   */
  listen(eventName: string, callback: Function): void

  /**
   * Register a new event.
   *
   * @param {string} eventName Name for this new event.
   * @param {Function} callback Function that you want.
   * @memberOf VueEvents
   */
  on(eventName: string, callback: Function): void

  /**
   * Register a new event.
   *
   * @param {string} eventName Name for this new event.
   * @param {Function} callback Function that you want.
   * @memberOf VueEvents
   */
  $on(eventName: string, callback: Function): void
}
