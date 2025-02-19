<script setup>
import { items } from '../lib/items';
</script>

<template>
    <div class="col-span-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 lg:gap-x-4  gap-y-10 mt-10 ">
        <div v-for="item in items" :key="item.id" class="cursor-pointer space-y-1">
            <img :src="item.image.desktop" alt="" class="rounded-[20px]">
            <div class="space-y-1 pt-5">
                <p class="text-sm text-Rose500">{{ item.category}}</p>
                <h1 class="font-semibold line-clamp-1 text-Rose900">{{ item.name }}</h1>
                <p class="text-xs text-Red font-semibold">${{ item.price }}</p>
            </div>

        </div>
    </div>
</template>