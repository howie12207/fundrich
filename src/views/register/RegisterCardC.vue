<script setup>
import IconChevron from "@/components/icon/IconChevron.vue";
</script>

<template>
  <div>
    <router-link
      to="/register"
      class="
        flex
        w-36
        items-center
        text-lg text-white
        bg-darkBlue-800
        p-4
        mb-4
        mx-auto
        rounded
        group
      "
    >
      前往開戶
      <IconChevron
        bgColor="#fff"
        :size="20"
        class="text-brown-500 ml-4 group-hover:animate-pulse"
        direction="right"
      />
    </router-link>
    <ul class="list-disc px-8">
      <li class="text-red-500 font-black mb-4">開戶約需7-10個工作天</li>
      <li class="mb-4">
        若您欲約定之扣款帳戶為<span class="font-black underline">數位帳戶</span
        >，提醒您可與該銀行確認該數位帳戶是否得辦理作為約定扣款帳戶，及受理約定之方式是否有所限制。
      </li>

      <li class="text-red-500 font-black mb-4">
        線上填寫資料，需列印相關文件寄回基富通
      </li>
      <li class="text-red-500 font-black mb-4">免費至便利商店寄件</li>
      <li class="mb-4">請預先準備身分證及第二證件之正反面拍照圖檔</li>
      <li class="mb-4">
        若您的扣款授權帳號為「郵局」、「華南銀行」或「國泰世華銀行」，可至其各分行據點送件
      </li>
      <li class="mb-4">
        若您的扣款授權帳號為「花蓮二信」、「台中二信」、「新竹一信」、「彰化六信」、「高雄三信」、「鹿港信合社」、「台南三信」或「台北五信」，可至其各分社據點送件。
      </li>
      <li class="mb-4">支援台外幣扣款帳戶</li>
      <li class="mb-4">
        提醒您，若逾六個月仍未完成開戶程序，則需請您重新填寫個人資料
      </li>
      <li class="mb-4">
        <router-link class="text-brown-500 underline" to="/register"
          >一般寄件開戶教學</router-link
        >
      </li>
    </ul>
  </div>
</template>
