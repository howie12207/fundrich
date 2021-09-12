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
    <div class="p-4 rounded-md bg-white">
      <table class="w-full">
        <thead>
          <tr>
            <th
              class="
                font-normal
                py-2
                bg-gray-200
                first:rounded-l
                last:rounded-r
              "
              v-for="head of tableItem"
              :key="head.key"
            >
              {{ head.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="list of recentViewList" :key="list.fundId">
            <td
              v-for="(item, index) of tableItem"
              :key="item"
              class="text-center py-2"
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
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
