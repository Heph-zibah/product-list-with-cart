<script setup>
import {ref} from 'vue';
import { useCartStore } from '../stores/cartStore';
import OrderConfirmedComponent from './OrderConfirmedComponent.vue';
const cartStore = useCartStore();

const confirmOrder = ref(false);
const toggleConfirmOrder = () => {
    confirmOrder.value = !confirmOrder.value;
}

const removeFromCart = (itemId) => {
    cartStore.removeItem(itemId);
};
</script>


<template>
    <div class="col-span-2 bg-white h-fit p-5 rounded-[10px]">
        <h1 class="font-bold text-2xl text-Red">Your cart ({{cartStore.totalItems}})</h1>
        <div class="mx-auto my-5 text-center" v-if="!cartStore.hasCartItems">
            <img src="../assets/images/illustration-empty-cart.svg" alt="" class="mx-auto">
            <p class="text-sm text-Rose500">Your added items will appear here</p>
        </div>

        <div v-else class="space-y-6 my-5">
            <div v-for="item in cartStore.cart" :key="item.id" class="space-y-4">
                <div  class="flex items-center justify-between  ">
                    <div>
                        <p>{{item.name}}</p>
                        <p class="text-sm text-Rose500 mt-1"><span class="text-Red mr-2 font-semibold">{{item.quantity}}x </span>${{(item.price * item.quantity).toFixed(2)}}</p>
                    </div>
                    <div class="rounded-full border border-Rose300 p-1 cursor-pointer" @click="removeFromCart(item.id)">
                        <img src="../assets/images/icon-remove-item.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-between font-semibold">
                <p class="capitalize ">order total</p>
                <p>${{ cartStore.totalPrice.toFixed(2) }}</p>
            </div>

            <div class="flex gap-3 text-center justify-center items-center bg-Rose100 p-2 rounded-lg ">
                <img src="../assets/images/icon-carbon-neutral.svg" alt="">
                <p class="text-sm">This is a <span class="font-semibold">carbon neutral</span> delivery</p>
            </div>
            <div @click="toggleConfirmOrder" class="flex justify-center items-center w-full bg-Red text-white rounded-full text-center py-3">
                <button >Confirm Order</button>
            </div>
        </div>
        <order-confirmed-component v-if="confirmOrder" :cartItems="cartStore.cart"/>
    </div>
</template>