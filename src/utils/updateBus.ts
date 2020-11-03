import Vue from'vue';

export enum StoreUpdateEvents {
    StoreUpdateEvent = 'store_update' 
}

export const storeUpdateBus = new Vue();