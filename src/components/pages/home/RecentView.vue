<script setup>
// Todo: 瀏覽資料暫時寫死
import recentViewList from "/src/assets/recentView.json";

import { decimalRoundHandler } from "/src/utils/format.js";

const tableItem = [
  { label: "名稱", key: "name" },
  { label: "晨星評等", key: "starRatingFromEst" },
  { label: "三個月", key: "rr3M" },
  { label: "六個月", key: "rr6M" },
  { label: "一年", key: "rr1Y" },
  { label: "兩年", key: "rr2Y" },
  { label: "三年", key: "rr3Y" },
  { label: "成立至今", key: "rrFromEst" },
];
</script>

<template>
  <section>
    <h2 class="font-bold text-2xl pl-3 my-4 border-l-4 border-brown-500">
      近期瀏覽
    </h2>
    <div class="p-4 rounded-md md:bg-white">
      <div class="hidden p-2 bg-gray-200 rounded-l rounded-r md:flex">
        <span
          :class="[
            'w-1/10',
            { 'text-right': index !== 0 },
            { 'flex-grow': index === 0 },
          ]"
          v-for="(head, index) of tableItem"
          :key="head.key"
          >{{ head.label }}</span
        >
      </div>
      <div
        class="
          rounded
          p-4
          mb-4
          bg-white
          md:p-2 md:border-b md:last:border-b-0 md:mb-0 md:flex
        "
        v-for="list of recentViewList"
        :key="list.fundId"
      >
        <p
          v-for="(item, index) of tableItem"
          :key="item"
          :class="[
            'flex justify-between py-2 md:w-1/10',
            { 'flex-grow': index === 0 },
          ]"
        >
          <span :class="['text-sm md:hidden', { hidden: index === 0 }]">{{
            item.label
          }}</span>
          <span
            :class="[
              'md:flex-grow',
              { 'text-right': index !== 0 },
              { 'text-red-500': index > 1 && list[item.key] >= 0 },
              { 'text-green-500': index > 1 && list[item.key] < 0 },
            ]"
          >
            <template v-if="index === 0">
              <router-link
                class="hover:underline hover:text-brown-500"
                to="/"
                >{{ list[item.key] }}</router-link
              >
            </template>
            <template v-else>
              {{
                index > 1
                  ? decimalRoundHandler(list[item.key]) + "%"
                  : list[item.key]
              }}
            </template></span
          >
        </p>
      </div>
    </div>
  </section>
</template>
