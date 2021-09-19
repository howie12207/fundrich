<script setup>
const listData = [
  {
    content:
      "基富通及其資料提供者、合作結盟廠商與相關電信業者網路系統因硬體設備之故障、失靈或人為操作上之疏失導致傳輸無法使用、遲延、或造成任何資料內容（包括文字、數字、圖片、聲音、影像）遺失中斷、暫時、缺漏、更新延誤或儲存上之錯誤，基富通均不負任何責任。",
  },
  {
    content:
      "基富通網站上所提供之投資建議及參考資料內容，不得作為任何交易行為之依據，使用者依建議或資料內容進行任何投資行為所產生之風險及盈虧，均需完全自行負擔，基富通不對使用者之投資決策負任何責任",
  },
  {
    content:
      "基富通網站內所有著作及資料，包括文字、圖片、聲音、影像、軟體等，其著作權、專利權、商標專用權、營業秘密、及其他智慧財產權、所有權或其他權利均受中華民國著作權法與國際智慧財產權相關條文保護，屬於基富通及其權利人所有，未經基富通或其權利人合法授權，不得擅自重製、修改、編輯、轉載、或以其他任何形式、基於任何目的使用，否則基富通將追究使用者所有法律相關責任。",
  },
  {
    content:
      "以上資訊僅供參考，使用者應依相關主管機關所公布之資訊使用規定使用，並自負投資盈虧之責。",
  },
];
</script>

<template>
  <div class="p-2 lg:w-lg lg:mx-auto">
    <h2 class="text-center text-xl font-black mb-4">免責及版權聲明</h2>
    <ul class="list pl-8 pr-4">
      <li v-for="list of listData" :key="list.content">
        <p class="my-2">{{ list.content }}</p>
        <p class="my-2">{{ list.remark }}</p>
        <ul v-if="list.sub" class="list-decimal pl-4">
          <li v-for="(subList, i) of list.sub" :key="i">
            <p class="my-2">{{ subList.content }}</p>
            <p class="my-2">{{ subList.remark }}</p>
            <ul v-if="subList.sub" class="list-disc pl-4">
              <li v-for="(grand, ind) of subList.sub" :key="ind" class="my-2">
                {{ grand.content }}
              </li>
            </ul>
          </li>
        </ul>
        <p class="my-2">{{ list.endRemark }}</p>
      </li>
    </ul>
    <p class="my-8">從事目的事業主管機關允許從事之業務。</p>
    <p class="my-2">晨星提供的資料</p>
    <p class="my-2">
      （1）為晨星及（或）其內容供應商的獨有資產；（2）未經許可不得複製或轉載；及（3）晨星未就資料的完整性、準確性及即時性作出任何保證。晨星及其內容供應商對於因使用相關資料而作出的交易決定均不承擔任何責任。過往績效紀錄不能保證未來投資結果。
    </p>
    <p class="mt-8 mb-2">晨星星等評級說明</p>
    <p class="my-2">
      晨星星等評級旨在衡量基金過往的績效表現，其考量因素包括：基金的報酬、風險及費用因素，並且只與同組別的基金作比較。晨星星等評級不能作為投資決定的唯一參考。基金需有3年以上的績效數據始能獲得晨星星等評級，評級基礎為考量報酬波動程度的晨星風險調整後報酬率（MRAR），這項指標強調下檔風險的影響，並且獎勵績效穩定的基金。相同組別中表現最好的前
      10% 基金獲得 5 顆星評級；之後 22.5% 為 4 顆星；之後 35% 為 3 顆星；之後
      22.5% 為 2 顆星；最後 10% 為 1 顆星。晨星星等評級分為 3 年期、5 年期、10
      年期及綜合星等評級，綜合星等評級為 3 年期、5 年期及 10
      年期星等評級的加權平均。
    </p>
  </div>
</template>

<style scoped>
.list {
  list-style-type: cjk-decimal;
}
</style>
