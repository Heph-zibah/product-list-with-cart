<script setup>
import {ref} from 'vue';
import OrdersComponent from '../components/OrdersComponent.vue'
import OrderSummaryComponent from '../components/OrderSummaryComponent.vue'
import { items } from '../lib/items';

</script>


<template>
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 max-w-[1200px] xl:mx-w-[1440px] mx-auto py-20">
        <orders-component :items="items"/>
        <order-summary-component :items="items"/>
        
    </div>
</template>