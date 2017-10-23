/**
* Vue-Events types.
*/

import Vue, { ComponentOptions, PluginFunction } from 'vue';

export declare class VueEvents {
    static install: PluginFunction<never>;
    
    /**
    * Emit the given event.
    * 
    * @param {string|object} event
    * @param {...*} args
    * @memberof VueEvents
    */
    $emit(event: string, ...args): void;
    
    /**
    * @borrows $emit as emit
    */
    emit(event: string, ...args): void;
    
    /**
    * @borrows emit as fire
    */
    fire(event: string, ...args): void;
    
    /**
    * Listen for the given event.
    *
    * @param {string} event
    * @param {() => void} callback
    * @memberof VueEvents
    */
    $on(event: string, callback: () => void): void;
    
    /**
    * @borrows $on as on
    */
    on(event: string, callback: () => void): void;
    
    /**
    * @borrows on as listen
    */
    listen(event: string, callback: () => void): void;

    /**
    * Listen for the given event once.
    *
    * @param {string} event
    * @param {() => void} callback
    */
    $once(event: string, callback: () => void): void;

    /**
    * @borrows $once as once
    */
    once(event: string, callback: () => void): void;

    /**
     * Remove one or more event listeners.
     *
     * @param {string} event
     * @param {() => void} callback
     */
    $off(event:string, callback: () => void): void;

    /**
     * @borrows $off as off
     */
    off(event:string, callback: () => void): void;

    /**
     * @borrows off as remove
     */
    remove(event:string, callback: () => void): void;
}