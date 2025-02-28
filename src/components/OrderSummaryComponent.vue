<script setup>
import {ref} from 'vue';
const props = defineProps(['hasCartItems']);
</script>


<template>
    <div class="col-span-2 bg-white h-fit p-5 rounded-[10px]">
        <h1 class="font-bold text-2xl text-Red">Your cart (0)</h1>
        <div class="mx-auto my-5 text-center" v-if="!props.hasCartItems">
            <img src="../assets/images/illustration-empty-cart.svg" alt="" class="mx-auto">
            <p class="text-sm text-Rose500">Your added items will appear here</p>
        </div>
        
    </div>
</template>