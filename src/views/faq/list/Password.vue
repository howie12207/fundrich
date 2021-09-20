<script setup>
const dataList = [
  {
    id: 1,
    label: "Q1.沒有收到交易密碼通知函，怎麼辦？",
    content: [
      "請確認信件是否有落入垃圾信件夾，點選【這不是垃圾信】選項。",
      "請聯絡客服(02)8712-1322，確認開戶時約定的EMAIL是否有誤。",
      "請聯絡客服02-8712-1322，補發「〔開戶進度〕變更密碼及開戶完成通知」。",
    ],
  },
  {
    id: 2,
    label: "Q2.如何啟用帳號？",
    content: [
      "收到變更密碼及開戶完成通知後，需請您先利用該郵件中的短連結(請點選此處變更密碼)進行第一次的登入，並進行密碼變更，上述二步驟均完成後始得開始交易。",
    ],
  },
  {
    id: 3,
    label: "Q3.忘記密碼怎麼辦？",
    content: [
      "首次啟用之客戶請先確認您的電子信箱是否有收到「〔開戶進度〕變更密碼及開戶完成通知」，利用其中的短連結富通官網進行第一次的登入，並進行密碼變更。",
      "若您已變更臨時密碼，當您的密碼遺失或忘記密碼時，請您直接進基富通官網「登入」，點選「忘記密碼？」，依步驟完成操作程序，即可更新密碼。",
    ],
  },
  { id: 4, label: "Q4.密碼錯誤幾次會被鎖住？" },
  {
    id: 5,
    label: "Q5.請問密碼變更的規則？",
    content: [
      "新密碼的長度須為8至12碼，密碼至少須包含英文字母大小寫各一個字母(英數及特殊字元可混合使用)，亦不得為3個相同或連續的英文或數字，不得與身分證字號相同。您輸入後可以留意欄位旁的紅字提醒，或網頁最下方的變更密碼注意事項說明。",
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
        <template v-else-if="list.id === 4">
          <p class="mb-2">密碼錯誤五次會被鎖住。</p>
          <p class="mb-2">
            若您「已」進行過初次的密碼異動，請您使用「<router-link
              to="/forgetPassword"
              class="text-brown-500 underline"
              >忘記密碼？</router-link
            >」補發。
          </p>
          <p class="mb-2">
            若您「尚未」進行過初次密碼異動，請您聯絡客服(02)8712-1322。
          </p>
        </template>
      </div>
    </div>
  </section>
</template>
