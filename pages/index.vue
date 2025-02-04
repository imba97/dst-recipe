<template>
  <div size-screen fccc>
    <div bg="#f9f9f9" max-w-xl w-full flex-1 of-y-auto>
      <template v-if="recipeStore.current">
        <RecipeDetail />
      </template>
    </div>

    <div w-full>
      <div mx-a max-w-xl w-full of="x-hidden y-auto" b="none t solid gray-200">
        <Swiper
          :modules="[Pagination]" :pagination="{
            clickable: true
          }" bg="#f9f9f9" h-full @active-index-change="activeIndexChange"
        >
          <SwiperSlide v-for="(recipe, index) in recipeList" :key="index">
            <RecipeItem :food="recipe" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

    <div h-24 w-full fcc px-4 b="none t solid gray-200">
      <input
        type="text" placeholder="请输入关键字" b="~ solid gray"
        h-12 max-w-xl w-full shrink-0 rounded-full text-center outline-none
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Pagination } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/vue'
import BaconEggs from '~/foods/baconEggs'

import ButterMuffin from '~/foods/butterMuffin'
import 'swiper/css'
import 'swiper/css/pagination'

const recipeStore = useRecipe()

const recipeList: FoodBaseConstructor[] = [
  BaconEggs,
  ButterMuffin
]

onMounted(() => {
  recipeStore.current = recipeList[0]
})

function activeIndexChange(swiper: { activeIndex: number }) {
  recipeStore.current = recipeList[swiper.activeIndex]
}
</script>
