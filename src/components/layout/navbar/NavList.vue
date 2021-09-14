<script setup>
import menu from "/src/assets/navList.json";

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*.svg");
  return modules[path].default;
};
</script>

<template>
  <nav class="mr-4 h-full">
    <ul class="flex">
      <li
        class="
          relative
          px-4
          pt-3.5
          pb-2.5
          border-b-4
          group
          border-transparent
          hover:border-brown-400 hover:bg-brown-100
        "
        v-for="item of menu"
        :key="item.label"
      >
        <div class="flex">
          <span class="peer text-lg group-hover:text-brown-500">{{
            item.label
          }}</span>
          <img
            class="group-hover:rotate-180 transition-all"
            :src="imgSrc('chevron.svg')"
            alt="chevron"
          />
        </div>
        <div
          class="
            absolute
            left-0
            hidden
            min-w-full
            w-max
            top-full
            translate-y-1
            border-t
            bg-brown-100
            p-4
            rounded-b-md
            shadow-xl
            group-hover:flex
            gap-x-16
          "
        >
          <div class="w-full" v-for="sub of item.sub" :key="sub.label">
            <h5 class="font-bold w-full pb-2 border-b border-brown-500">
              {{ sub.label }}
            </h5>
            <ul>
              <li
                class="my-2 cursor-pointer hover:text-brown-500 hover:underline"
                v-for="child of sub.sub"
                :key="child.label"
              >
                {{ child.label }}
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>
