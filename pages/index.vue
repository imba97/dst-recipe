<template>
  <div size-screen fccc>
    <template v-if="recipeStore.current">
      <div bg="#f9f9f9" max-w-xl w-full flex-1 of-y-auto>
        <RecipeDetail />
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
    </template>
    <template v-else>
      <div max-w-xl w-full fcc flex-1 bg="#f9f9f9">
        <div text="8 gray-300" font-thin>
          没有数据
        </div>
      </div>
    </template>

    <div h-24 w-full fcc px-4 b="none t solid gray-200">
      <input
        ref="search-input"
        v-model="searchValue"
        type="text" placeholder="请输入关键字" b="~ solid gray"
        h-12 max-w-xl w-full shrink-0 rounded-full text-center outline-none
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FoodBase } from '~/composables/food/foodBaseClass'

import Fuse from 'fuse.js'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import { foods } from '~/foods'

import 'swiper/css'
import 'swiper/css/pagination'

const searchValue = ref('')
const searchInput = useTemplateRef('search-input')

const recipeStore = useRecipe()

const recipeList = ref<FoodBase[]>([])

const fuse = new Fuse(foods, {
  keys: ['name', 'pinyin.name', 'pinyin.initials'],
  threshold: 0.1
})

watch(searchValue, () => {
  search(searchValue.value)
})

onMounted(() => {
  searchInput.value!.focus()
})

function activeIndexChange(swiper: { activeIndex: number }) {
  recipeStore.current = recipeList.value[swiper.activeIndex]
}

function search(value: string) {
  recipeList.value.splice(0, recipeList.value.length, ...fuse.search(value).map(item => item.item))

  if (recipeList.value.length > 0) {
    recipeStore.current = recipeList.value[0]
  }
  else {
    recipeStore.current = null
  }
}
</script>
