<script setup>
const menu = [
  {
    label: "最新活動",
    sub: [
      {
        label: "最新活動",
        sub: [
          { label: "單筆手續費0元酷碰免費送", path: "" },
          { label: "好享退期滿續扣加碼優惠", path: "" },
          { label: "得獎基金享全年優惠", path: "" },
          { label: "股票型定期定額終身1折", path: "" },
          { label: "好息債，全年享０手續費！", path: "" },
          { label: "新友舊客 享好禮！", path: "" },
          { label: "生日禮，贈單筆手續費0元酷碰", path: "" },
          { label: "LINE@好友募集中", path: "" },
        ],
      },
    ],
  },
  {
    label: "選購基金",
    sub: [],
  },
  {
    label: "投資開講",
    sub: [],
  },
  {
    label: "公告訊息",
    sub: [],
  },
  {
    label: "常見問題",
    sub: [],
  },
  {
    label: "個人帳戶",
    sub: [],
  },
  {
    label: "馬上開戶",
    sub: [],
  },
];

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*.svg");
  return modules[path].default;
};
</script>

<template>
  <nav class="mr-4">
    <ul class="flex">
      <li
        class="text-lg px-4 py-3.5 cursor-pointer flex group"
        v-for="item of menu"
        :key="item.label"
      >
        <span class="peer">{{ item.label }}</span>
        <img
          class="group-hover:rotate-180 transition-all"
          :src="imgSrc('chevron.svg')"
          alt="chevron"
        />
      </li>
    </ul>
  </nav>
</template>
