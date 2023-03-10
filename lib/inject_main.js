/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

const CHANGES_KEY = 'stf_changes';
const EXTENSIONID_KEY = 'stf_extension_id';
let __INITIAL_STATE_COPY__ = {};
Object.defineProperty(window, '__INITIAL_STATE__', {
    get: () => __INITIAL_STATE_COPY__,
    set: (newVal) => {
        const extensionId = localStorage.getItem(EXTENSIONID_KEY);
        chrome.runtime.sendMessage(extensionId, { type: 'initialState', value: newVal });
        const changesString = localStorage.getItem(CHANGES_KEY);
        console.log('>>> changesString', changesString);
        let changes = {};
        if (changesString) {
            try {
                changes = JSON.parse(changesString);
            }
            catch (e) {
                console.error('Corrupted changes state, cleaning...');
                localStorage.removeItem(CHANGES_KEY);
            }
        }
        __INITIAL_STATE_COPY__ = newVal;
        __INITIAL_STATE_COPY__.featureSwitch.user.config = {
            ...__INITIAL_STATE_COPY__.featureSwitch.user.config,
            ...changes
        };
    },
    configurable: true,
});

/******/ })()
;