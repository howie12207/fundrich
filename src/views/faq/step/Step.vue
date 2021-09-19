<script setup>
const dataList = [
  {
    id: 1,
    title: "選購基金",
    content: [
      { id: 1, label: "基富通擁有市場上最齊全的商品" },
      { id: 2, label: "可滿足任何投資需求的您" },
      {
        id: 3,
        label: "利用基富通強大的智能理財功能，選出最適合自己的商品吧!!",
      },
      { id: 4, label: "點我體驗最新的智能理財功能", path: "/" },
    ],
  },
  {
    id: 2,
    title: "加入購物車",
    content: [
      { id: 1, label: "最便利的申購體驗，好商品不再過目即忘" },
      {
        id: 2,
        label: "仔細閱讀商品的公開說明書，還有超便利的停損停利售後服務喔!",
      },
    ],
  },
  {
    id: 3,
    title: "登入帳戶",
    content: [
      { id: 1, label: "帳戶整合管理，投組檢視好輕鬆" },
      { id: 2, label: "還沒有基富通的帳戶？點我快去申請!", path: "/register" },
    ],
  },
  {
    id: 4,
    title: "下單",
    content: [
      { id: 1, label: "授權扣款交易，免匯款，省時又省匯費" },
      {
        id: 2,
        label: "每個月將會提供詳細月對帳單。點我去看電子對帳單!",
        path: "/",
      },
    ],
  },
];
</script>

<template>
  <div class="md:w-md md:mx-auto p-4">
    <h1 class="text-shadow text-white font-black text-3xl text-center my-4">
      交易流程
    </h1>
    <div class="flex my-4 items-start" v-for="card of dataList" :key="card.id">
      <div
        class="px-4 py-2 mr-4 text-2xl text-white bg-darkBlue-800 rounded-full"
      >
        {{ card.id }}
      </div>
      <div>
        <p class="font-black text-xl text-darkBlue-800 mb-2">
          {{ card.title }}
        </p>
        <p
          v-for="content of card.content"
          :key="content.id"
          class="text-sm text-brown-500"
        >
          <component
            :class="['block my-1', content.path && 'underline']"
            :is="content.path ? 'router-link' : 'span'"
            :to="content.path"
            >{{ content.label }}</component
          >
        </p>
      </div>
    </div>
  </div>
</template>
