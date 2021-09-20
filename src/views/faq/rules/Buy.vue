<script setup>
import { ref } from "vue";

import IconChevron from "@/components/icon/IconChevron.vue";

const dataList = [
  { id: 1, title: "Q1. 單筆申購委託截止時間及申購款最後存入時間" },
  { id: 2, title: "Q2. 定期定額委託截止時間及申購款最後存入時間" },
  { id: 3, title: "Q3. 定期定額申購之指定扣款日" },
  { id: 4, title: "Q4. 單位數入帳時間" },
  { id: 5, title: "Q5. 基金單位數/配息贖回款項分配作業方式" },
  { id: 6, title: "Q6. 單筆/定期定額最低申購金額" },
  { id: 7, title: "Q7. 每日電子交易限額" },
  { id: 8, title: "Q8. 單筆/定期定額申購淨值日" },
];

const expandList = ref([]);
const expand = (num) => {
  const index = expandList.value.findIndex((item) => item === num);
  index < 0 ? expandList.value.push(num) : expandList.value.splice(index, 1);
};
</script>

<template>
  <section>
    <h2 class="font-black text-2xl my-4">1. 申購</h2>
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
          <p>單筆申購委託截止時間及申購款最後存入時間請參閱下表：</p>
          <table class="hidden lg:table w-full my-4">
            <thead class="bg-gray-100">
              <tr>
                <th>基金類型</th>
                <th>交易方式</th>
                <th>申購委託截止時間</th>
                <th>申購款最後存入時間</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>境外基金<br />境內基金<br />(境內貨幣型基金除外)</td>
                <td>線上扣款</td>
                <td>每一營業日<br />下午 1:00 前</td>
                <td>申購當日<br />下午 2:00 前</td>
              </tr>
              <tr>
                <td>境內貨幣型基金</td>
                <td>書面傳真/匯款</td>
                <td>申購當日<br />上午 9:30 前</td>
                <td>申購當日<br />上午 9:30 前</td>
              </tr>
            </tbody>
          </table>
          <table class="lg:hidden w-full my-4">
            <tbody class="after:[content:''] after:block after:h-4">
              <tr>
                <th class="bg-gray-100">基金類型</th>
                <td>境外基金<br />境內基金<br />(境內貨幣型基金除外)</td>
              </tr>
              <tr>
                <th class="bg-gray-100">交易方式</th>
                <td>線上扣款</td>
              </tr>
              <tr>
                <th class="bg-gray-100">申購委託截止時間</th>
                <td>每一營業日<br />下午 1:00 前</td>
              </tr>
              <tr>
                <th class="bg-gray-100">申購款最後存入時間</th>
                <td>申購當日<br />下午 2:00 前</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th class="bg-gray-100">基金類型</th>
                <td>境內貨幣型基金</td>
              </tr>
              <tr>
                <th class="bg-gray-100">交易方式</th>
                <td>書面傳真/匯款</td>
              </tr>
              <tr>
                <th class="bg-gray-100">申購委託截止時間</th>
                <td>申購當日<br />上午 9:30 前</td>
              </tr>
              <tr>
                <th class="bg-gray-100">申購款最後存入時間</th>
                <td>申購當日<br />上午 9:30 前</td>
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
            投資人同一日有多筆申購，但銀行帳戶餘額不足時，申購順序以銀行作業為準。
          </p>
          <div class="text-sm p-4 my-4 bg-gray-100 rounded">
            <p class="my-2">境內貨幣型基金申購注意事項：</p>
            <p class="my-2">
              須於申購當日上午
              <span class="text-red-500">09:30</span> 前匯款完畢，並傳真以下 3
              份文件至基富通(傳真號碼：02-8712-1786)：
            </p>
            <div class="pl-8">
              <p class="my-2">
                填寫完畢之「申購傳真交易指示書」。(請來電索取檔案，客服專線：02-8712-1322)
              </p>
              <p class="my-2">註有姓名及身分證字號之「匯款水單」。</p>
              <p class="my-2">簽蓋基富通留存印鑑樣式之「通路報酬」文件。</p>
            </div>
            <p class="my-2">
              * 傳真完畢後，請務必來電告知 (客服專線：02-8712-1322)。
            </p>
          </div>
        </template>
        <template v-else-if="faq.id === 2">
          <p>定期定額申購截止時間及申購款最後存入時間請參閱下表：</p>
          <table class="hidden lg:table w-full my-4">
            <thead class="bg-gray-100">
              <tr>
                <th>基金類型</th>
                <th>申購委託截止時間</th>
                <th>申購款最後存入時間</th>
                <th>銀行代扣款時間</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>境外基金<br />境內基金<br />(境內貨幣型基金除外)</td>
                <td>指定扣款日<br />前一營業日<br />下午 3:30 前</td>
                <td>指定扣款日<br />前一營業日<br />下午 3:30 前</td>
                <td>
                  指定扣款日<br />凌晨 00:00 ~ 下午 3:00<br />(各家銀行之作業時間可能不同)
                </td>
              </tr>
            </tbody>
          </table>
          <table class="lg:hidden w-full my-4">
            <tbody>
              <tr>
                <th class="bg-gray-100">基金類型</th>
                <td>境外基金<br />境內基金<br />(境內貨幣型基金除外)</td>
              </tr>
              <tr>
                <th class="bg-gray-100">申購委託截止時間</th>
                <td>指定扣款日<br />前一營業日<br />下午 3:30 前</td>
              </tr>
              <tr>
                <th class="bg-gray-100">申購委託截止時間</th>
                <td>指定扣款日<br />前一營業日<br />下午 3:30 前</td>
              </tr>
              <tr>
                <th class="bg-gray-100">銀行代扣款時間</th>
                <td>
                  指定扣款日<br />凌晨 00:00 ~ 下午 3:00<br />(各家銀行之作業時間可能不同)
                </td>
              </tr>
            </tbody>
          </table>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">*</span>
            若指定扣款日非台灣之營業日時，則順延至次一營業日辦理扣款作業。
          </p>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">**</span>
            定期定額約定同一扣款日連續扣款失敗次數達3次(含)者，將自動終止該筆約定。同時原約定享有的手續費優惠費率亦不再適用。
          </p>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">***</span>
            若您申請定期定額扣款6、16、26三個扣款日，視為三筆約定，每筆約定分別獨立，失敗扣款次數及手續費優惠亦分開計算。
          </p>
        </template>
        <template v-else-if="faq.id === 3">
          <p class="mb-4">
            定期定額申購可約定每月1~28共28個扣款日扣款（日日扣）。
          </p>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">*</span
            >若指定扣款日非台灣之營業日時，則順延至次一營業日辦理扣款作業。
          </p>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">**</span>
            定期定額約定同一扣款日連續扣款失敗次數達3次(含)者，將自動終止該筆約定。同時原約定享有的手續費優惠費率亦不再適用。
          </p>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">***</span>
            若您申請定期定額扣款6、16、26三個扣款日，視為三筆約定，每筆約定分別獨立，失敗扣款次數及手續費優惠亦分開計算。
          </p>
        </template>
        <template v-else-if="faq.id === 4">
          <p class="mb-2">一般已扣款之基金單位數約3~6個工作日會入帳。</p>
          <p class="mb-2">
            富蘭克林、法巴系列基金相較於一般狀況，將需要比較長的時間(實際入帳天數依各家基金公司之規定為準)，入帳後始可於「投資總覽」中查詢(未入帳「歷史交易查詢」之狀態將顯示交易處理中)。
          </p>
          <p class="mb-2">
            單位數匯入當日，基富通將 email
            寄發交易確認單給客戶，信件中將有詳細的基金申購明細。
          </p>
        </template>
        <template v-else-if="faq.id === 5">
          <p class="mb-2">
            基金單位數之分配，係由基金公司依基金公開說明書之基金淨值及單位數計算方式分配後，再由集保公司依基金公司分配之單位數，按各投資人申購金額佔彙集申購金額總額之比例及公開說明書之位數計算分配予各投資人。
          </p>
          <p class="mb-2">
            如有剩餘之畸零單位數，則依被捨去單位數大小順序分配，相同者採隨機方式處理。
          </p>
          <p class="mb-2">前述分配作業之規定，於贖回款項分配之情形亦同。</p>
        </template>
        <template v-else-if="faq.id === 6">
          <p>最低申購金額請參閱下表：</p>
          <table class="hidden lg:table w-full my-4">
            <thead class="bg-gray-100">
              <tr>
                <th>幣別</th>
                <th>臺幣<br />(TWD)</th>
                <th>美金<br />(USD)</th>
                <th>歐元<br />(EUR)</th>
                <th>英鎊<br />(GBP)</th>
                <th>瑞士法郎<br />(CHF)</th>
                <th>澳幣<br />(AUD)</th>
                <th>紐元<br />(NZD)</th>
                <th>加拿大幣<br />(CAD)</th>
                <th>新加坡幣<br />(SGD)</th>
                <th>瑞典幣<br />(SEK)</th>
                <th>人民幣<br />(CNY)</th>
                <th>港幣<br />(HKD)</th>
                <th>南非幣<br />(ZAR)</th>
                <th>日圓<br />(JPY)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>最低申購金額</td>
                <td>3,000</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>200</td>
                <td>200</td>
                <td>200</td>
                <td>200</td>
                <td>1,000</td>
                <td>1,000</td>
                <td>1,000</td>
                <td>1,500</td>
                <td>10,000</td>
              </tr>
              <tr>
                <td>級距</td>
                <td>1,000</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>1,000</td>
              </tr>
            </tbody>
          </table>
          <table class="lg:hidden w-full my-4">
            <thead>
              <tr>
                <th class="bg-gray-100">幣別</th>
                <th class="bg-gray-100">最低申購金額</th>
                <th class="bg-gray-100">級距</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th class="bg-gray-100">臺幣<br />(TWD)</th>
                <td>3,000</td>
                <td>1,000</td>
              </tr>
              <tr>
                <th class="bg-gray-100">美金<br />(USD)</th>
                <td>100</td>
                <td>10</td>
              </tr>
              <tr>
                <th class="bg-gray-100">歐元<br />(EUR)</th>
                <td>100</td>
                <td>10</td>
              </tr>
              <tr>
                <th class="bg-gray-100">英鎊<br />(GBP)</th>
                <td>100</td>
                <td>10</td>
              </tr>
              <tr>
                <th class="bg-gray-100">瑞士法郎<br />(CHF)</th>
                <td>100</td>
                <td>10</td>
              </tr>
              <tr>
                <th class="bg-gray-100">澳幣<br />(AUD)</th>
                <td>200</td>
                <td>10</td>
              </tr>
              <tr>
                <th class="bg-gray-100">紐元<br />(NZD)</th>
                <td>200</td>
                <td>10</td>
              </tr>
              <tr>
                <th class="bg-gray-100">加拿大幣<br />(CAD)</th>
                <td>200</td>
                <td>10</td>
              </tr>
              <tr>
                <th class="bg-gray-100">新加坡幣<br />(SGD)</th>
                <td>200</td>
                <td>10</td>
              </tr>
              <tr>
                <th class="bg-gray-100">瑞典幣<br />(SEK)</th>
                <td>1,000</td>
                <td>100</td>
              </tr>
              <tr>
                <th class="bg-gray-100">人民幣<br />(CNY)</th>
                <td>1,000</td>
                <td>100</td>
              </tr>
              <tr>
                <th class="bg-gray-100">港幣<br />(HKD)</th>
                <td>1,000</td>
                <td>100</td>
              </tr>
              <tr>
                <th class="bg-gray-100">南非幣<br />(ZAR)</th>
                <td>1,500</td>
                <td>100</td>
              </tr>
              <tr>
                <th class="bg-gray-100">日幣<br />(JPY)</th>
                <td>10,000</td>
                <td>1,000</td>
              </tr>
            </tbody>
          </table>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">*</span>
            <span
              >特殊規定請參酌<router-link class="text-brown-500" to="/"
                >此連結</router-link
              >，詳細資訊以基金公司公告為準。</span
            >
          </p>
        </template>
        <template v-else-if="faq.id === 7">
          <p>電子交易限額(每營業日)請參閱下表：</p>
          <table class="w-full my-4">
            <thead class="bg-gray-100">
              <tr>
                <th>銀行</th>
                <th>開戶方式</th>
                <th>單筆交易上限</th>
                <th>單日交易上限</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2">集保簽約銀行*</td>
                <td>紙本</td>
                <td>30,000,000</td>
                <td>30,000,000</td>
              </tr>
              <tr>
                <td>晶片金融卡/網銀</td>
                <td>5,000,000</td>
                <td>30,000,000</td>
              </tr>
              <tr>
                <td>全國性繳費(稅)網銀行**</td>
                <td>紙本/網銀/晶片金融卡</td>
                <td>5,000,000</td>
                <td>30,000,000</td>
              </tr>
            </tbody>
          </table>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">*</span
            >集保簽約銀行：華南、兆豐、台新、永豐、台北富邦、中國信託、國泰世華、第一、彰銀、郵局(郵局僅能約定台幣扣款)。
          </p>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">**</span
            >全國性繳費(稅)網銀行：請參酌此連結。實際資訊以財金資訊股份有限公司之最新公告為準。
          </p>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">***</span
            >限額之計算包含「申購價金」及「手續費」。
          </p>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">****</span
            >各扣款銀行或有不同限額限制，扣款人申購前應自行與該扣款銀行確認有關全國性繳費(稅)業務之額度限制，並依照該額度限制來申購基金，以避免額度限制造成扣款失敗。
          </p>
          <p class="flex text-sm">
            <span class="w-10 flex-shrink-0">*****</span>轉換交易不受此限。
          </p>
        </template>
        <template v-else-if="faq.id === 8">
          <p>電子交易限額(每營業日)請參閱下表：</p>
          <table class="hidden lg:table w-full my-4">
            <thead class="bg-gray-100">
              <tr>
                <th rowspan="2">境內/境外</th>
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
                  申購淨值日
                </th>
                <th rowspan="2">贖回淨值日</th>
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
                  T日
                </td>
                <td>T/T+1日</td>
                <td>T+1日</td>
                <td>基金公司 付款日當日</td>
                <td>無</td>
                <td>無</td>
              </tr>
              <tr>
                <td>境外</td>
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
                <td>T/T+1日</td>
                <td>T日</td>
                <td>T日</td>
                <td>T日</td>
                <td>集保到款日 隔一工作日</td>
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
                  申購淨值日
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
                  T日
                </td>
              </tr>
              <tr>
                <th colspan="2" class="bg-gray-100">贖回淨值日</th>
                <td>T/T+1日</td>
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
                  申購淨值日
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
                <th colspan="2" class="bg-gray-100">贖回淨值日</th>
                <td>T/T+1日</td>
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
