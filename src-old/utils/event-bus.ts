'use strict';

const eventEmitter = require('nanoevents');

// const uniqid = require('uniqid');
//
// import _findIndex from 'lodash/findIndex';
//
// interface IHandler {
//     id: string,
//     func: { (data?: any): void }
// }
//
// class EventBus {
//     private events: { [key: string]: any } = {};
//
//     public on(eventName: string, func: any) {
//         if (!this.events[eventName]) {
//             this.events[eventName] = [];
//         }
//
//         const handlerID = uniqid();
//         console.log('eventName: ', eventName);
//         console.log('handlerID: ', handlerID);
//
//         this.events[eventName].push({
//             id: handlerID,
//
//             func
//         });
//
//         const that = this;
//
//         // return cancel subscription function
//         return (function () {
//             console.log('Cancellation,  eventName:', eventName);
//             that.removeHandler(eventName, handlerID);
//         }).bind(this);
//     }
//
//     public removeHandler(eventName: string, id: string) {
//         const eventHandlers = this.events[eventName];
//
//         if (eventHandlers && eventHandlers.length) {
//             const indexToDelete = _findIndex(eventHandlers, (handler: any) => {
//                 return handler.id === id;
//             });
//
//             eventHandlers.splice(indexToDelete);
//         }
//     }
//
//     public emit(eventName: string, data?: any): void {
//         const eventHandlers = this.events[eventName];
//
//         if (eventHandlers) {
//             let handler: IHandler;
//
//             for (handler of eventHandlers) {
//                 handler.func(data);
//             }
//         }
//     }
// }

const eventBus = new eventEmitter();

export {eventBus};