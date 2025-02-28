<script setup>
import {ref} from 'vue';
import { useCartStore } from '../stores/cartStore';

const cartStore = useCartStore();
</script>


<template>
    <div class="col-span-2 bg-white h-fit p-5 rounded-[10px]">
        <h1 class="font-bold text-2xl text-Red">Your cart (0)</h1>
        <div class="mx-auto my-5 text-center" v-if="!cartStore.hasCartItems">
            <img src="../assets/images/illustration-empty-cart.svg" alt="" class="mx-auto">
            <p class="text-sm text-Rose500">Your added items will appear here</p>
        </div>

        <div v-else>
            <div v-for="item in cartStore.cart" :key="item.id" class="space-y-4">
                <div  class="flex items-center justify-between  ">
                    <div>
                        <p>{{item.name}}</p>
                        <p class="text-sm text-Rose500">${{(item.price * item.quantity).toFixed(2)}}</p>
                    </div>
                    <div class="rounded-full border border-Rose300 p-1">
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
                <p>This is a <span class="font-semibold">carbon neutral</span> delivery</p>
            </div>
            <button>Confirm order</button>
        </div>
        
    </div>
</template>