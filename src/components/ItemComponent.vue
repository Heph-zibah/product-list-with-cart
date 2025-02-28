<script setup>
import { useCartStore } from "../stores/cartStore";

const props = defineProps(["items"]);
const cartStore = useCartStore();

const toggleOption = (item) => {
  cartStore.addItem(item);
};
</script>

<template>
  <div class="col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 lg:gap-x-4 gap-y-10 mt-10">
    <div v-for="item in props.items" :key="item.id" class="cursor-pointer space-y-1 relative">
      <div class="relative">
        <img :src="item.image.desktop" alt="" class="rounded-[20px]">

        <div 
          @click="toggleOption(item)" 
          class="text-xs bg-white rounded-full px-3 py-2 flex items-center gap-2 absolute -bottom-5 left-0 right-0 w-fit shadow-md drop-shadow-sm mx-auto cursor-pointer border border-Red">
          <img src="../assets/images/icon-add-to-cart.svg" alt="">
          <p class="text-Rose500">Add to cart</p>
        </div>

      
        <div v-if="cartStore.cart[item.id]" 
          class="text-xs bg-Red text-white rounded-full px-3 py-2 flex items-center justify-between gap-6 absolute -bottom-5 left-0 right-0 w-fit shadow-md drop-shadow-sm mx-auto cursor-pointer border border-Red">
          
          <div @click="cartStore.decrementQuantity(item.id)" class="border border-white rounded-full px-1 py-2 cursor-pointer">
            <img src="../assets/images/icon-decrement-quantity.svg" alt="">
          </div>

          <p>{{ cartStore.cart[item.id]?.quantity || 1 }}</p>

          <div @click="cartStore.incrementQuantity(item.id)" class="border border-white rounded-full p-1 cursor-pointer">
            <img src="../assets/images/icon-increment-quantity.svg" alt="">
          </div>

        </div>
      </div>

      <div class="space-y-1 pt-10">
        <p class="text-sm text-Rose500">{{ item.category }}</p>
        <h1 class="font-semibold line-clamp-1 text-Rose900">{{ item.name }}</h1>
        <p class="text-xs text-Red font-semibold">${{ item.price }}</p>
      </div>
    </div>
  </div>
</template>
