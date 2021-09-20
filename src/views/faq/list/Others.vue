<script setup>
const dataList = [
  {
    id: 1,
    label: "Q1.請問基富通的地址？",
    content: ["本公司地址為台北市復興北路365號8樓。"],
  },
];
</script>

<template>
  <section class="p-4">
    <div
      class="mb-4 pb-2 border-b border-dashed last:border-b-0"
      v-for="list of dataList"
      :key="list.id"
    >
      <p class="text-brown-500 mb-2">{{ list.label }}</p>
      <div class="pl-4">
        <template v-if="list.content">
          <p v-for="(item, index) of list.content" :key="index" class="mb-2">
            {{ item }}
          </p>
        </template>
      </div>
    </div>
  </section>
</template>
