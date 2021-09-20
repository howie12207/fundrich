<script setup>
import { ref } from "vue";

import IconChevron from "@/components/icon/IconChevron.vue";

const dataList = [
  { id: 1, title: "Q1. 贖回委託截止時間" },
  { id: 2, title: "Q2. 最低贖回金額" },
  { id: 3, title: "Q3. 贖回款項入帳時間" },
  { id: 4, title: "Q4. 贖回淨值日" },
  { id: 5, title: "Q5. 贖回款項入帳費用" },
  { id: 6, title: "Q6. 每日電子交易限額" },
];

const expandList = ref([]);
const expand = (num) => {
  const index = expandList.value.findIndex((item) => item === num);
  index < 0 ? expandList.value.push(num) : expandList.value.splice(index, 1);
};
</script>

<template>
  <section>
    <h2 class="font-black text-2xl my-4">2. 贖回</h2>
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
          <p>一般交易規則請參閱下表：</p>
          <table class="w-full my-4">
            <thead class="bg-gray-100">
              <tr>
                <th>基金類型</th>
                <th>贖回委託截止時間</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>境外基金<br />境內基金</td>
                <td>每一營業日<br />下午 1:00 前</td>
              </tr>
            </tbody>
          </table>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">*</span>
            若逾時委託，則視為次一營業日之交易；委託取消時間為每營業日下午 1:00
            前。
          </p>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">**</span>
            非基金公司、基金註冊地或交易傳輸機構營業日之交易將自動順延，以其之次一營業日為交易日。
          </p>
        </template>
        <template v-else-if="faq.id === 2">
          <p>
            基金部分贖回單位數，經換算後不得低於新台幣3,000元(或等值外幣)，剩餘單位數如低於新台幣3,000元(或等值外幣)，應全部贖回。
          </p>
        </template>
        <template v-else-if="faq.id === 3">
          <p>贖回款項入帳時間請參閱下表：</p>
          <table class="w-full my-4">
            <thead>
              <tr>
                <th colspan="2">基金類型</th>
                <th>贖回款項入帳時間</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2">境內基金</td>
                <td>1.台股基金<br />2.貨幣型基金</td>
                <td>3~5個工作日</td>
              </tr>
              <tr>
                <td>海外基金</td>
                <td>7~10個工作日</td>
              </tr>
              <tr>
                <td colspan="2">境外基金</td>
                <td>3~7個工作日</td>
              </tr>
            </tbody>
          </table>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">*</span>
            實際工作天數依各基金公司規定，贖回款項屆時將匯入開戶時所約定之本人帳戶。<br />
            (以台幣申購之基金，贖回款項將以台幣匯入台幣帳戶；以外幣扣款之基金，贖回款項將以外幣匯入外幣帳戶)
          </p>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">**</span>
            實際贖回金額，依各基金公開說明書之規定計算，並扣除匯費。<br />
            實際贖回金額，依各基金公開說明書之規定計算，並扣除匯費。
            (若於本公司設定之贖回/配息款入帳銀行帳戶設定為集保公司款項收付銀行（華南、兆豐、台新、永豐、台北富邦、中國信託、國泰世華、第一、彰銀、郵局），則不會有「匯費」與「解款費」產生(郵局僅可配合台幣扣款)。若非上述九家銀行及郵局，則款項入帳時會產生匯費新台幣30元起（依照國內銀行匯款級距收取）。
          </p>
          <div class="text-sm p-4 my-4 bg-gray-100 rounded">
            <p class="my-2">計算方式請參閱以下：</p>
            <div class="pl-2">
              <p class="my-2">
                如有剩餘之畸零單位數，則依被捨去單位數大小順序分配，相同者採隨機方式處理。
              </p>
              <p class="my-2">前述分配作業之規定，於贖回款項分配之情形亦同。</p>
            </div>
          </div>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">***</span>
            原則上，贖回款項匯入後一個工作日，基富通將 email
            寄發交易確認單給客戶，信件中將有詳細的基金贖回明細。
          </p>
        </template>
        <template v-else-if="faq.id === 4">
          <p>一般交易規則請參閱下表：</p>
          <table class="hidden lg:table w-full my-4">
            <thead class="bg-gray-100">
              <tr>
                <th rowspan="2">境內/境外</th>
                <th rowspan="2">申購淨值日</th>
                <th
                  class="
                    relative
                    before:[content:'']
                    before:absolute
                    before:top-0
                    before:bottom-0
                    before:left-0
                    before:right-0
                    before:border
                    before:border-b-0
                    before:border-red-500
                    bg-red-50
                  "
                  rowspan="2"
                >
                  贖回淨值日
                </th>
                <th colspan="2">轉換(同系列基金)</th>
                <th colspan="2">轉申購(不同系列基金)</th>
              </tr>
              <tr>
                <th>轉出淨值日</th>
                <th>轉入淨值日</th>
                <th>轉出淨值日</th>
                <th>轉入淨值日</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>境內</td>
                <td>T日</td>
                <td
                  class="
                    relative
                    before:[content:'']
                    before:absolute
                    before:top-0
                    before:bottom-0
                    before:left-0
                    before:right-0
                    before:border-l
                    before:border-r
                    before:border-red-500
                    bg-red-50
                  "
                >
                  T/T+1日
                </td>
                <td>T+1日</td>
                <td>基金公司<br />付款日當日</td>
                <td>無</td>
                <td>無</td>
              </tr>
              <tr>
                <td>境外</td>
                <td>T/T+1日</td>
                <td
                  class="
                    relative
                    before:[content:'']
                    before:absolute
                    before:top-0
                    before:bottom-0
                    before:left-0
                    before:right-0
                    before:border
                    before:border-t-0
                    before:border-red-500
                    bg-red-50
                  "
                >
                  T/T+1日
                </td>
                <td>T日</td>
                <td>T日</td>
                <td>T日</td>
                <td>集保到款日<br />隔一工作日</td>
              </tr>
            </tbody>
          </table>
          <table class="lg:hidden w-full my-4">
            <tbody class="after:[content:''] after:block after:h-4">
              <tr>
                <th colspan="2" class="bg-gray-100">境內/境外</th>
                <td>境內</td>
              </tr>
              <tr>
                <th colspan="2" class="bg-gray-100">申購淨值日</th>
                <td>T日</td>
              </tr>
              <tr>
                <th
                  colspan="2"
                  class="
                    relative
                    before:[content:'']
                    before:absolute
                    before:top-0
                    before:bottom-0
                    before:left-0
                    before:right-0
                    before:border
                    before:border-r-0
                    before:border-red-500
                    bg-red-50
                  "
                >
                  贖回淨值日
                </th>
                <td
                  class="
                    relative
                    before:[content:'']
                    before:absolute
                    before:top-0
                    before:bottom-0
                    before:left-0
                    before:right-0
                    before:border
                    before:border-l-0
                    before:border-red-500
                    bg-red-50
                  "
                >
                  T/T+1日
                </td>
              </tr>
              <tr>
                <th rowspan="2" class="bg-gray-100">轉換<br />(同系列基金)</th>
                <th class="bg-gray-100">轉出淨值日</th>
                <td>T+1日</td>
              </tr>
              <tr>
                <th class="bg-gray-100">轉入淨值日</th>
                <td>基金公司<br />付款日當日</td>
              </tr>
              <tr>
                <th rowspan="2" class="bg-gray-100">
                  轉申購<br />(不同系列基金)
                </th>
                <th class="bg-gray-100">轉出淨值日</th>
                <td>無</td>
              </tr>
              <tr>
                <th class="bg-gray-100">轉入淨值日</th>
                <td>無</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th colspan="2" class="bg-gray-100">境內/境外</th>
                <td>境外</td>
              </tr>
              <tr>
                <th colspan="2" class="bg-gray-100">申購淨值日</th>
                <td>T/T+1日</td>
              </tr>
              <tr>
                <th
                  colspan="2"
                  class="
                    relative
                    before:[content:'']
                    before:absolute
                    before:top-0
                    before:bottom-0
                    before:left-0
                    before:right-0
                    before:border
                    before:border-r-0
                    before:border-red-500
                    bg-red-50
                  "
                >
                  贖回淨值日
                </th>
                <td
                  class="
                    relative
                    before:[content:'']
                    before:absolute
                    before:top-0
                    before:bottom-0
                    before:left-0
                    before:right-0
                    before:border
                    before:border-l-0
                    before:border-red-500
                    bg-red-50
                  "
                >
                  T/T+1日
                </td>
              </tr>
              <tr>
                <th rowspan="2" class="bg-gray-100">轉換<br />(同系列基金)</th>
                <th class="bg-gray-100">轉出淨值日</th>
                <td>T日</td>
              </tr>
              <tr>
                <th class="bg-gray-100">轉入淨值日</th>
                <td>T日</td>
              </tr>
              <tr>
                <th rowspan="2" class="bg-gray-100">
                  轉申購<br />(不同系列基金)
                </th>
                <th class="bg-gray-100">轉出淨值日</th>
                <td>T日</td>
              </tr>
              <tr>
                <th class="bg-gray-100">轉入淨值日</th>
                <td>集保到款日<br />隔一工作日</td>
              </tr>
            </tbody>
          </table>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">*</span>T日=交易生效日
          </p>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">**</span
            >以上表格僅供投資人參考，各系列基金申贖淨值計價日不盡相同，須依各基金公司所提供之公開說明書或投資人須知為準。
          </p>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">***</span
            >如遇基金當日無淨值報價，申購淨值日須依基金公司規定為準。
          </p>
        </template>
        <template v-else-if="faq.id === 5">
          <div class="text-sm p-4 bg-gray-100 rounded">
            <p class="my-2">贖回款項入帳費用請參閱以下：</p>
            <div class="pl-2">
              <p class="my-2">
                贖回/配息款項將匯入投資人於本公司留存之約定帳戶。
              </p>
              <p class="my-2">
                (以台幣申購之基金，贖回/配息款項將以台幣匯入台幣帳戶；以外幣扣款之基金，贖回/配息款項將以外幣匯入外幣帳戶)
              </p>
              <p class="my-2">
                若於本公司設定之贖回/配息款入帳銀行帳戶設定為集保公司款項收付銀行（華南、兆豐、台新、永豐、台北富邦、中國信託、國泰世華、第一、彰銀、郵局），則不會有「匯費」與「解款費」產生。若非上述九家銀行及郵局，則款項入帳時會產生匯費新台幣30元起（依照國內銀行匯款級距收取）。若應付贖回/配息金額不足以支付匯款費用時，依集保公司規定暫不予匯款。
              </p>
              <p class="my-2">※郵局帳戶僅可約定台幣帳戶扣款。</p>
            </div>
          </div>
        </template>
        <template v-else-if="faq.id === 6">
          <div class="text-sm p-4 bg-gray-100 rounded">
            依相關法令規定，每人每日透過電子交易進行基金贖回交易，不得超過新台幣3000萬元。轉換交易不受此限。
          </div>
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
