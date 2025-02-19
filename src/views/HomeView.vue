<script setup>
import OrdersComponent from '../components/OrdersComponent.vue'
import OrderSummaryComponent from '../components/OrderSummaryComponent.vue'
</script>


<template>
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 max-w-[1200px] xl:mx-w-[1300px] mx-auto py-20">
        <orders-component/>
        <order-summary-component/>
        
    </div>
</template>