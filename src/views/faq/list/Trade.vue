<script setup>
const dataList = [
  {
    id: 1,
    label: "Q1.請問每日基金交易時間？",
    content: [
      "單筆申購或轉換申請截止時間為每營業日下午13:00止，贖回收件截止時間為每營業日下午13:00止；若逾時交易，則視為次一營業日交易。定期定額申購/異動，須於前一個營業日15:30前下單完成，如於期限前完成，則屬當日之交易指示；若逾時交易，則視為次一營業日之交易指示。",
    ],
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
