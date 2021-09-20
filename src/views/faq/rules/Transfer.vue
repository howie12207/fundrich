<script setup>
import { ref } from "vue";

import IconChevron from "@/components/icon/IconChevron.vue";

const dataList = [
  { id: 1, title: "Q1. 轉換/轉申購定義及費用" },
  { id: 2, title: "Q2. 轉換/轉申購委託截止時間" },
  { id: 3, title: "Q3. 最低轉換/轉申購金額" },
  { id: 4, title: "Q4. 轉換/轉申購交易所需時間" },
  { id: 5, title: "Q5. 轉換/轉申購之轉出、轉入淨值日" },
];

const expandList = ref([]);
const expand = (num) => {
  const index = expandList.value.findIndex((item) => item === num);
  index < 0 ? expandList.value.push(num) : expandList.value.splice(index, 1);
};
</script>

<template>
  <section>
    <h2 class="font-black text-2xl my-4">3. 轉換/轉申購</h2>
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
          direction="bottom"
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
          <p>轉換/轉申購定義及費用請參閱下表：</p>
          <table class="hidden lg:table w-full my-4">
            <thead class="bg-gray-100">
              <tr>
                <th>交易類別</th>
                <th>基金類別</th>
                <th>限制</th>
                <th>費用</th>
                <th>備註</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2">
                  轉換<br />
                  <span class="inline-block text-sm p-1 bg-gray-200"
                    >同一家基金公司<br />中基金的轉換</span
                  >
                </td>
                <td>境內基金</td>
                <td>限同幣別</td>
                <td rowspan="2">
                  基富通不收取轉換作業費，<br />惟基金公司另有轉換費規定時，<br />依其規定辦理*。
                </td>
                <td>贖回後再申購，<br />惟款項不會回到您的帳戶。</td>
              </tr>
              <tr>
                <td>境外基金</td>
                <td>不限幣別</td>
                <td>無</td>
              </tr>
              <tr>
                <td rowspan="2">
                  轉申購<br />
                  <span class="inline-block text-sm p-1 bg-gray-200"
                    >不同家基金公司<br />間基金的轉換</span
                  >
                </td>
                <td>境內基金</td>
                <td>不提供</td>
                <td>不提供</td>
                <td>不提供</td>
              </tr>
              <tr>
                <td>境外基金</td>
                <td>台幣申購-不限幣別<br />外幣申購-限同幣別</td>
                <td>
                  基富通將收取申購手續費，<br />依當時之優惠費率計算；<br />此費用內含於贖回款項中，<br />將不另外收取。
                </td>
                <td>
                  贖回後再申購，<br />惟款項不會回到您的帳戶，<br />再申購之手續費將從贖回款項中扣除，<br />不另外收取。
                </td>
              </tr>
            </tbody>
          </table>
          <table class="lg:hidden w-full my-4">
            <tbody class="after:[content:''] after:block after:h-4">
              <tr>
                <th class="bg-gray-100">交易類別</th>
                <td colspan="2">
                  轉換<br /><span class="inline-block text-sm p-1 bg-gray-200"
                    >同一家基金公司<br />中基金的轉換</span
                  >
                </td>
              </tr>
              <tr>
                <th class="bg-gray-100">基金類別</th>
                <td>境內基金</td>
                <td>境外基金</td>
              </tr>
              <tr>
                <th class="bg-gray-100">幣別限制</th>
                <td>限同幣別</td>
                <td>不限幣別</td>
              </tr>
              <tr>
                <th class="bg-gray-100">費用</th>
                <td colspan="2">
                  基富通不收取轉換作業費，惟基金公司另有轉換費規定時，依其規定辦理*。
                </td>
              </tr>
              <tr>
                <th class="bg-gray-100">備註</th>
                <td>贖回後再申購，惟款項不會回到您的帳戶。</td>
                <td>無</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th class="bg-gray-100">交易類別</th>
                <td colspan="2">
                  轉申購<br /><span class="inline-block text-sm p-1 bg-gray-200"
                    >不同家基金公司<br />間基金的轉換</span
                  >
                </td>
              </tr>
              <tr>
                <th class="bg-gray-100">基金類別</th>
                <td>境內基金</td>
                <td>境外基金</td>
              </tr>
              <tr>
                <th class="bg-gray-100">幣別限制</th>
                <td>不提供</td>
                <td>台幣申購-不限幣別<br />外幣申購-限同幣別</td>
              </tr>
              <tr>
                <th class="bg-gray-100">費用</th>
                <td>不提供</td>
                <td>
                  基富通將收取申購手續費，依當時之優惠費率計算；此費用內含於贖回款項中，將不另外收取。
                </td>
              </tr>
              <tr>
                <th class="bg-gray-100">備註</th>
                <td>不提供</td>
                <td>
                  贖回後再申購，惟款項不會回到您的帳戶，再申購之手續費將從贖回款項中扣除，不另外收取。
                </td>
              </tr>
            </tbody>
          </table>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">*</span>
            <span
              >關於同系列基金的轉換，各基金公司收取之轉換費規定，請參酌<router-link
                class="text-brown-500"
                to="/"
                >此連結</router-link
              >。</span
            >
          </p>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">**</span>
            同一基金公司不同基金之轉換，如涉不同幣別，由於基金公司需與交易對手進行換匯，與即時匯率相比，將產生換匯價差費用(交易匯率以基金公司提供為準)，請投資人留意相關匯率風險與交易成本。
          </p>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">***</span>
            實際轉入金額，依各基金公開說明書之規定計算，並扣除內扣費用或再申購手續費用。
          </p>
        </template>
        <template v-else-if="faq.id === 2">
          <p>轉換/轉申購委託截止時間請參閱下表：</p>
          <table class="w-full my-4">
            <thead class="bg-gray-100">
              <tr>
                <th>基金類型</th>
                <th>轉換/轉申購委託<br />截止時間</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>境內基金<br />境外基金</td>
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
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">***</span>
            境內與境外基金之間「不得」互相轉換。
          </p>
        </template>
        <template v-else-if="faq.id === 3">
          <p>
            基金部分轉換/轉申購單位數，經換算後不得低於新台幣3,000元(或等值外幣)，剩餘單位數如低於新台幣3,000元(或等值外幣)，應全部轉換/轉申購。
          </p>
        </template>
        <template v-else-if="faq.id === 4">
          <p>轉換/轉申購交易所需時間請參閱下表：</p>
          <table class="hidden lg:table w-full my-4">
            <thead class="bg-gray-100">
              <tr>
                <th>交易類別</th>
                <th>基金類別</th>
                <th>交易所需時間</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2">
                  轉換<br />
                  <span class="inline-block text-sm p-1 bg-gray-200"
                    >同一家基金公司<br />中基金的轉換</span
                  >
                </td>
                <td>境內基金</td>
                <td>7~14個工作日</td>
              </tr>
              <tr>
                <td>境外基金</td>
                <td>2~6個工作日</td>
              </tr>
              <tr>
                <td rowspan="2">
                  轉申購<br />
                  <span class="inline-block text-sm p-1 bg-gray-200"
                    >不同家基金公司<br />間基金的轉換</span
                  >
                </td>
                <td>境內基金</td>
                <td>不提供</td>
              </tr>
              <tr>
                <td>境外基金</td>
                <td>5~12個工作日</td>
              </tr>
            </tbody>
          </table>
          <table class="lg:hidden w-full my-4">
            <tbody class="after:[content:''] after:block after:h-4">
              <tr>
                <th class="bg-gray-100">交易類別</th>
                <td colspan="2">
                  轉換<br /><span class="inline-block text-sm p-1 bg-gray-200"
                    >同一家基金公司<br />中基金的轉換</span
                  >
                </td>
              </tr>
              <tr>
                <th class="bg-gray-100">基金類別</th>
                <td>境內基金</td>
                <td>境外基金</td>
              </tr>
              <tr>
                <th class="bg-gray-100">交易所需時間</th>
                <td>7~14個工作日</td>
                <td>2~6個工作日</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th class="bg-gray-100">交易類別</th>
                <td colspan="2">
                  轉申購<br /><span class="inline-block text-sm p-1 bg-gray-200"
                    >不同家基金公司<br />間基金的轉換</span
                  >
                </td>
              </tr>
              <tr>
                <th class="bg-gray-100">基金類別</th>
                <td>境內基金</td>
                <td>境外基金</td>
              </tr>
              <tr>
                <th class="bg-gray-100">交易所需時間</th>
                <td>不提供</td>
                <td>5~12個工作日</td>
              </tr>
            </tbody>
          </table>

          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">*</span
            >轉入單位數匯入後一個工作日，基富通將 email
            寄發交易確認單給客戶，信件中將有詳細的基金轉換/轉申購明細。
          </p>
        </template>
        <template v-else-if="faq.id === 5">
          <p>一般交易規則請參閱下表：</p>
          <table class="hidden lg:table w-full my-4">
            <thead class="bg-gray-100">
              <tr>
                <th rowspan="2">境內/境外</th>
                <th rowspan="2">申購淨值日</th>
                <th rowspan="2">贖回淨值日</th>
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
                  colspan="2"
                >
                  轉換(同系列基金)
                </th>
                <th colspan="2">轉申購(不同系列基金)</th>
              </tr>
              <tr>
                <th
                  class="
                    relative
                    before:[content:'']
                    before:absolute
                    before:top-0
                    before:bottom-0
                    before:left-0
                    before:right-0
                    before:border-l
                    before:border-red-500
                    bg-red-50
                  "
                >
                  轉出淨值日
                </th>
                <th
                  class="
                    relative
                    before:[content:'']
                    before:absolute
                    before:top-0
                    before:bottom-0
                    before:left-0
                    before:right-0
                    before:border-r
                    before:border-red-500
                    bg-red-50
                  "
                >
                  轉入淨值日
                </th>
                <th>轉出淨值日</th>
                <th>轉入淨值日</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>境內</td>
                <td>T日</td>
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
                    before:border-l
                    before:border-red-500
                    bg-red-50
                  "
                >
                  T+1日
                </td>
                <td
                  class="
                    relative
                    before:[content:'']
                    before:absolute
                    before:top-0
                    before:bottom-0
                    before:left-0
                    before:right-0
                    before:border-r
                    before:border-red-500
                    bg-red-50
                  "
                >
                  基金公司<br />付款日當日
                </td>
                <td>無</td>
                <td>無</td>
              </tr>
              <tr>
                <td>境外</td>
                <td>T/T+1日</td>
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
                    before:border-l
                    before:border-b
                    before:border-red-500
                    bg-red-50
                  "
                >
                  T日
                </td>
                <td
                  class="
                    relative
                    before:[content:'']
                    before:absolute
                    before:top-0
                    before:bottom-0
                    before:left-0
                    before:right-0
                    before:border-r
                    before:border-b
                    before:border-red-500
                    bg-red-50
                  "
                >
                  T日
                </td>
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
                <th colspan="2" class="bg-gray-100">贖回淨值日</th>
                <td>T/T+1日</td>
              </tr>
              <tr>
                <th
                  rowspan="2"
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
                  轉換<br />(同系列基金)
                </th>
                <th
                  class="
                    relative
                    before:[content:'']
                    before:absolute
                    before:top-0
                    before:bottom-0
                    before:left-0
                    before:right-0
                    before:border-t
                    before:border-red-500
                    bg-red-50
                  "
                >
                  轉出淨值日
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
                    before:border-t
                    before:border-r
                    before:border-red-500
                    bg-red-50
                  "
                >
                  T+1日
                </td>
              </tr>
              <tr>
                <th
                  class="
                    relative
                    before:[content:'']
                    before:absolute
                    before:top-0
                    before:bottom-0
                    before:left-0
                    before:right-0
                    before:border-b
                    before:border-red-500
                    bg-red-50
                  "
                >
                  轉入淨值日
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
                    before:border-r
                    before:border-b
                    before:border-red-500
                    bg-red-50
                  "
                >
                  基金公司<br />付款日當日
                </td>
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
                <th colspan="2" class="bg-gray-100">贖回淨值日</th>
                <td>T/T+1日</td>
              </tr>
              <tr>
                <th
                  rowspan="2"
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
                  轉換<br />(同系列基金)
                </th>
                <th
                  class="
                    relative
                    before:[content:'']
                    before:absolute
                    before:top-0
                    before:bottom-0
                    before:left-0
                    before:right-0
                    before:border-t
                    before:border-red-500
                    bg-red-50
                  "
                >
                  轉出淨值日
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
                    before:border-t
                    before:border-r
                    before:border-red-500
                    bg-red-50
                  "
                >
                  T日
                </td>
              </tr>
              <tr>
                <th
                  class="
                    relative
                    before:[content:'']
                    before:absolute
                    before:top-0
                    before:bottom-0
                    before:left-0
                    before:right-0
                    before:border-b
                    before:border-red-500
                    bg-red-50
                  "
                >
                  轉入淨值日
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
                    before:border-b
                    before:border-r
                    before:border-red-500
                    bg-red-50
                  "
                >
                  T日
                </td>
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
            >如遇轉出/轉入基金當日無淨值報價，轉換淨值日須依基金公司規定為準。
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
