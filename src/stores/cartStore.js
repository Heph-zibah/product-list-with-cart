import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: {},
  }),
  getters: {
    totalItems: (state) =>
      Object.values(state.cart).reduce((sum, item) => sum + item.quantity, 0),
    hasCartItems: (state) => Object.keys(state.cart).length > 0,
    totalPrice: (state) =>
      Object.values(state.cart).reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
      ),
  },
  actions: {
    addItem(item) {
      if (this.cart[item.id]) {
        this.cart[item.id].quantity++;
      } else {
        this.cart[item.id] = { ...item, quantity: 1 };
      }
    },
    incrementQuantity(itemId) {
      if (this.cart[itemId]) {
        this.cart[itemId].quantity++;
      }
    },
    decrementQuantity(itemId) {
      if (this.cart[itemId] && this.cart[itemId].quantity > 1) {
        this.cart[itemId].quantity--;
      } else {
        delete this.cart[itemId];
      }
    },
  },
});
