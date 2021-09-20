<script setup>
import { ref } from "vue";

import IconChevron from "@/components/icon/IconChevron.vue";

const dataList = [
  { id: 1, title: "Q1. 定期定額契約變更委託截止時間" },
  { id: 2, title: "Q2. 定期定額契約變更項目" },
];

const expandList = ref([]);
const expand = (num) => {
  const index = expandList.value.findIndex((item) => item === num);
  index < 0 ? expandList.value.push(num) : expandList.value.splice(index, 1);
};
</script>

<template>
  <section>
    <h2 class="font-black text-2xl my-4">4. 費用</h2>
    <div
      v-for="faq of dataList"
      :key="faq.id"
      :class="[
        'my-2 border-b rounded overflow-hidden group',
        expandList.includes(faq.id) && 'border border-brown-500',
      ]"
    >
      <div
        :class="[
          'flex justify-between items-center lg:text-lg px-2 py-4 cursor-pointer transition-all group-hover:text-brown-500',
          expandList.includes(faq.id) &&
            'bg-brown-500 text-white group-hover:text-white',
        ]"
        @click="expand(faq.id)"
      >
        <p>{{ faq.title }}</p>
        <IconChevron
          direction="top"
          :class="[
            'transition-all',
            expandList.includes(faq.id) && 'rotate-180',
          ]"
        />
      </div>
      <div
        v-show="expandList.includes(faq.id)"
        class="text-sm lg:text-base p-4 lg:p-8"
      >
        <template v-if="faq.id === 1">
          <p>定期定額變更委託時間請參閱下表：</p>
          <table class="w-full my-4">
            <thead>
              <tr>
                <th class="bg-gray-100">基金類型</th>
                <th class="bg-gray-100">變更委託截止時間</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>境內基金<br />境外基金</td>
                <td>指定扣款日前一營業日<br />下午 3:30 前</td>
              </tr>
            </tbody>
          </table>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">*</span
            >若逾時委託，則視為次一營業日之交易；委託取消時間為每營業日下午 3:30
            前。
          </p>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">**</span>
            非基金公司、基金註冊地或交易傳輸機構營業日之交易將自動順延，以其之次一營業日為交易日。
          </p>
        </template>
        <template v-else-if="faq.id === 2">
          <p>轉換/定期定額契約變更項目請參閱下表：</p>
          <table class="hidden lg:table w-full my-4">
            <thead class="bg-gray-100">
              <tr>
                <th>變更項目</th>
                <th>扣款日期</th>
                <th>扣款金額</th>
                <th>終止扣款</th>
                <th>暫停扣款</th>
                <th>恢復扣款</th>
                <th>變更標的</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>得否變更</td>
                <td>○</td>
                <td>○</td>
                <td>○</td>
                <td>○</td>
                <td>○</td>
                <td>X</td>
              </tr>
            </tbody>
          </table>
          <table class="lg:hidden w-full my-4">
            <tbody>
              <tr>
                <th class="bg-gray-100">變更項目</th>
                <td>得否變更</td>
              </tr>
              <tr>
                <th class="bg-gray-100">扣款日期</th>
                <td>○</td>
              </tr>
              <tr>
                <th class="bg-gray-100">扣款金額</th>
                <td>○</td>
              </tr>
              <tr>
                <th class="bg-gray-100">終止扣款</th>
                <td>○</td>
              </tr>
              <tr>
                <th class="bg-gray-100">暫停扣款</th>
                <td>○</td>
              </tr>
              <tr>
                <th class="bg-gray-100">恢復扣款</th>
                <td>○</td>
              </tr>
              <tr>
                <th class="bg-gray-100">變更標的</th>
                <td>X</td>
              </tr>
            </tbody>
          </table>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">*</span
            >若逾時委託，則視為次一營業日之交易；委託取消時間為每營業日下午 1:00
            前。
          </p>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">**</span
            >非基金公司、基金註冊地或交易傳輸機構營業日之交易將自動順延，以其之次一營業日為交易日。
          </p>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">***</span
            >境內與境外基金之間「不得」互相轉換。
          </p>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
table td,
table th {
  @apply text-center border p-2;
}
</style>
