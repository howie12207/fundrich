<script setup>
import { ref } from "vue";

import IconChevron from "@/components/icon/IconChevron.vue";

const dataList = [
  { id: 1, title: "Q1. 申購手續費計算方式" },
  { id: 2, title: "Q2. 轉換/轉申購費用計算方式" },
  { id: 3, title: "Q3. 贖回/配息款項入帳費用" },
  { id: 4, title: "Q4. 短線交易費用" },
  { id: 5, title: "Q5. 基金管理費/基金保管費" },
  { id: 6, title: "Q6. 信託管理費" },
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
          <p class="mb-2">
            基富通之境內/外基金常態性申購手續費折扣為：股票(含平衡)型1.99折、債券型2.99折。
          </p>
          <p class="mb-2">
            (1) 境外基金：(股票型)：3%*0.199=0.6%、(債券型)：1.5%*0.299=0.45%。
          </p>
          <p class="mb-2">
            (2) 境內基金：每檔基金之牌告費率不盡相同，依牌告費率來折扣計算。
          </p>
          <p class="mb-2">手續費用的計算方式：</p>
          <p class="mb-2">
            「申購交易金額 x (牌告費率 x
            基富通申購手續費折扣)」，而優惠手續費率(牌告費率 x
            基富通申購手續費折扣)將四捨五入到小數點後兩位，以境外股票型基金為例：申購手續費=申購金額
            x (3% x 0.199)=申購金額 x 0.6%。
          </p>
          <p class="mb-2">
            手續費進位規定：除「台幣」與「日圓」進位至整數位外，其他幣別均計算至小數點後兩位。
          </p>
          <p class="mb-2">基富通「無」最低申購手續費規定。</p>
        </template>
        <template v-else-if="faq.id === 2">
          <p>轉換/轉申購委託截止時間請參閱下表：</p>
          <table class="hidden lg:table w-full my-4">
            <thead class="bg-gray-100">
              <tr>
                <th>交易類別</th>
                <th>基金類別</th>
                <th>幣別限制</th>
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
                <td>-</td>
              </tr>
              <tr>
                <td rowspan="2">
                  轉申購<br />
                  <span class="inline-block text-sm p-1 bg-gray-200"
                    >不同家基金公司<br />間基金的轉換</span
                  >
                </td>
                <td>境內基金</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>境外基金</td>
                <td>限同幣別</td>
                <td>
                  基富通將收取申購手續費，<br />依當時之優惠費率計算；<br />此費用內含於贖回款項中，<br />將不另外收取。
                </td>
                <td>
                  贖回後再申購，<br />惟款項不會回到您的帳戶，<br />再申購之手續費將從贖回款項<br />中扣除，不另外收取。
                </td>
              </tr>
            </tbody>
          </table>
          <table class="lg:hidden w-full my-4">
            <tbody class="after:[content:''] after:block after:h-4">
              <tr>
                <th class="bg-gray-100">交易類別</th>
                <td colspan="2">
                  轉換<br />
                  <span class="inline-block text-sm p-1 bg-gray-200"
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
                <td>-</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th class="bg-gray-100">交易類別</th>
                <td colspan="2">
                  轉申購<br />
                  <span class="inline-block text-sm p-1 bg-gray-200"
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
                <td>-</td>
                <td>限同幣別</td>
              </tr>
              <tr>
                <th class="bg-gray-100">費用</th>
                <td>-</td>
                <td>
                  基富通將收取申購手續費，依當時之優惠費率計算；此費用內含於贖回款項中，將不另外收取。
                </td>
              </tr>
              <tr>
                <th class="bg-gray-100">備註</th>
                <td>-</td>
                <td>
                  贖回後再申購，惟款項不會回到您的帳戶，再申購之手續費將從贖回款項中扣除，不另外收取。
                </td>
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
          <p class="mb-2">贖回/配息款項將匯入投資人於本公司留存之約定帳戶。</p>
          <p class="mb-2">
            (以台幣申購之基金，贖回/配息款項將以台幣匯入台幣帳戶；以外幣扣款之基金，贖回/配息款項將以外幣匯入外幣帳戶)
          </p>
          <p class="mb-2">
            若於本公司設定之贖回/配息款入帳銀行帳戶設定為集保公司款項收付銀行（華南、兆豐、台新、永豐、台北富邦、中國信託、國泰世華、第一、彰銀、郵局），則不會有「匯費」與「解款費」產生。若非上述九家銀行及郵局，則款項入帳時會產生匯費新台幣30元起（依照國內銀行匯款級距收取）。若應付贖回/配息金額不足以支付匯款費用時，依集保公司規定暫不予匯款。
          </p>
          <p class="mb-2">※郵局帳戶僅可約定台幣帳戶扣款。</p>
        </template>
        <template v-else-if="faq.id === 4">
          <p class="mb-2">
            關於短線交易相關規定，依各基金公司最新公開說明書及投資人須知規定辦理。投資人可參酌境內/外基金資訊公開平台，以下連結：
          </p>
          <div class="flex flex-col pl-2 mb-2">
            <router-link class="text-brown-500 self-start" to="/"
              >境內基金</router-link
            >
            <router-link class="text-brown-500 self-start" to="/"
              >境外基金</router-link
            >
          </div>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">*</span
            >實際短線交易費用，依各基金公開說明書及投資人須知規定計算。
          </p>
        </template>
        <template v-else-if="faq.id === 5">
          <p class="mb-2">
            「基金管理費」、「基金保管費」為投資人持有基金時需負擔的相關作業費，在不同的銷售平台(銀行、投信、基金公司等銷售機構)中，同一檔基金之同一級別的「基金保管費」及「基金管理費」均同，兩項費用已反應於每日之基金淨值上，並不會額外向投資人收取。
          </p>
          <p class="mb-2">
            「基金保管費」及「基金管理費」之費率依各基金公開說明書及投資人須知規定。
          </p>
        </template>
        <template v-else-if="faq.id === 6">
          <p class="mb-2">
            銀行係根據信託法之「特定金錢信託」關係與投資人簽訂指定用途信託契約，每年將額外收取信託管理費。
          </p>
          <p class="mb-2">
            基富通係透由集保結算所進行交易款項之結算處理且不經手交易金流，對投資人而言多了一層保障。
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
