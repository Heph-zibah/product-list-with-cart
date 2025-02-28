<script setup>

import ItemComponent from './ItemComponent.vue';
const props = defineProps(['items']);
console.log(props.items);

</script>

<template>
    <div  class="col-span-3 mx-5 md:mx-10 lg::mx-0">  
        <h1 class="font-bold text-4xl">Desserts</h1>
       <item-component :items="props.items"/>
    </div>
</template>