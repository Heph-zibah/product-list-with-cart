<script setup>


const props = defineProps({
    cartItems: {
        type:Object,
        required: true
    }
});
const startNewOrder = () => {
    window.location.reload(); 
};
</script>

<template>
    <v-style>body {overflow: hidden}</v-style>
    <section class="bg-black opacity-95 fixed inset-0 flex justify-center items-center z-[1000px] overflow-hidden w-full h-full hide-scrollbar">
        <div class="bg-white p-5 rounded-[10px] max-w-[400px] mx-auto w-full">
            <div>
                <img src="../assets/images/icon-order-confirmed.svg" alt="">
                <h2 class="font-bold text-2xl py-2">Order Confirmed</h2>
                <p>We hope you enjoy your food!</p>
            </div>
            <div class="bg-Rose100 p-2 rounded-md mt-5">
                 <ul class="mt-4 space-y-3 ">
                    <li v-for="(item, id) in props.cartItems" :key="id" class="flex justify-between border-b border-b-Rose900 pb-1">
                    <span>{{ item.name }} ({{ item.quantity }})</span>
                    <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
                    </li>
                </ul>

                <div class="mt-4 font-semibold flex items-center justify-between">
                    <p>Total Price</p>
                    <p>${{ Object.values(props.cartItems).reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2) }}</p>
                </div>
            </div>
            <div  @click="startNewOrder" class="flex justify-center items-center w-full bg-Red text-white rounded-full text-center py-3 mt-5">
                <button >Start New Order</button>
            </div>
        </div>
        
    </section>
</template>


