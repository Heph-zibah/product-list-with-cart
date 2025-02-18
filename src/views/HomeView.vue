<script setup>
import OrdersComponent from '../components/OrdersComponent.vue'
import OrderSummaryComponent from '../components/OrderSummaryComponent.vue'
</script>


<template>
    <div class="grid grid-cols-2 gap-4">
        <orders-component/>
        <order-summary-component/>
        
    </div>
</template>