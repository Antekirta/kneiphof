'use strict';

const eventEmitter = require('nanoevents');

const eventBus = new eventEmitter();

export {eventBus};