<template>
  <div size-screen fccc font-thin>
    <div w-full flex-1 bg-gray-100>
      <div h-full of="x-hidden y-auto">
        <Swiper
          :modules="[Pagination]"
          :pagination="{
            clickable: true
          }"
          h-full
        >
          <SwiperSlide>
            1
          </SwiperSlide>
          <SwiperSlide>
            2
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

    <div h-24 w-full fcc px-4 b="none t solid gray-200">
      <input
        type="text"
        placeholder="请输入关键字"
        b="~ solid gray"
        h-12 max-w-xl w-full rounded-full text-center outline-none
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'
</script>
