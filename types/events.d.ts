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
    * @param {...any[]} args
    * @memberof VueEvents
    */
    $emit(event: string, ...args: any[]): void;
    
    /**
    * @borrows $emit as emit
    */
    emit(event: string, ...args: any[]): void;
    
    /**
    * @borrows emit as fire
    */
    fire(event: string, ...args: any[]): void;
    
    /**
    * Listen for the given event.
    *
    * @param {string} event
    * @param {(eventData: any) => void} callback
    * @memberof VueEvents
    */
    $on(event: string, callback: (eventData: any) => void): void;
    
    /**
    * @borrows $on as on
    */
    on(event: string, callback: (eventData: any) => void): void;
    
    /**
    * @borrows on as listen
    */
    listen(event: string, callback: (eventData: any) => void): void;

    /**
    * Listen for the given event once.
    *
    * @param {string} event
    * @param {(eventData: any) => void} callback
    * @memberof VueEvents
    */
    $once(event: string, callback: (eventData: any) => void): void;

    /**
    * @borrows $once as once
    */
    once(event: string, callback: (eventData: any) => void): void;

    /**
     * Remove one or more event listeners.
     *
     * @param {string} event
     * @param {(eventData: any) => void} [callback]
     * @memberof VueEvents
     */
    $off(event:string, callback?: (eventData: any) => void): void;

    /**
     * @borrows $off as off
     */
    off(event:string, callback?: (eventData: any) => void): void;

    /**
     * @borrows off as remove
     */
    remove(event:string, callback?: (eventData: any) => void): void;
}