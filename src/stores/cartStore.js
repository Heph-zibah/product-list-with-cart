import { defineStore } from "pinia";


export const useCartStore = defineStore({
    state: () => ({
        items: []
    }),
    getters: {
        hasCartItems() {
            items.length > 0;
        },
        totalItems() {
            return this.items.length;
        }
    },
    actions: {
        addItem(item) {
            this.items.push(item);
        },
        removeItem(index) {
            this.items.splice(index, 1);
        }
    }

})