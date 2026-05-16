<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleStartGame = () => {
  router.push('/mode-select')
}

const handleCharacterGuide = () => {
  console.log('角色图鉴')
}

const handleGameSettings = () => {
  console.log('游戏设置')
}

const handleExitGame = () => {
  console.log('退出游戏')
}
</script>

<template>
  <div class="relative w-full h-full overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-300 to-green-400">
      <div class="absolute inset-0 opacity-30" 
           style="background-image: url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pixel%20art%20tropical%20forest%20background%20with%20trees%20and%20ancient%20ruins%208bit%20retro%20game%20style&image_size=landscape_16_9'); background-size: cover; background-position: center;">
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-green-600/50 to-transparent"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div v-for="i in 20" :key="i" 
           class="absolute w-2 h-2 rounded-full animate-pulse-glow"
           :style="{
             left: `${Math.random() * 100}%`,
             top: `${Math.random() * 100}%`,
             backgroundColor: ['#ff6b6b', '#4ecdc4', '#ffe66d', '#a29bfe'][Math.floor(Math.random() * 4)],
             animationDelay: `${Math.random() * 2}s`,
             animationDuration: `${2 + Math.random() * 2}s`
           }">
      </div>
    </div>

    <div class="absolute top-16 left-1/2 transform -translate-x-1/2">
      <h1 class="pixel-title text-3xl md:text-4xl lg:text-5xl text-center leading-relaxed animate-float">
        真的没想好<br/>起什么名字！
      </h1>
    </div>

    <div class="absolute top-8 right-8">
      <div class="pixel-btn px-4 py-2 text-xs flex items-center gap-2">
        <span class="text-yellow-400">★</span>
        <span>当前段位: 入门</span>
      </div>
    </div>

    <div class="absolute left-12 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
      <button @click="handleStartGame" 
              class="pixel-btn px-8 py-4 text-sm min-w-[200px] text-center">
        开始游戏
      </button>
      <button @click="handleCharacterGuide" 
              class="pixel-btn px-8 py-4 text-sm min-w-[200px] text-center">
        角色图鉴
      </button>
      <button @click="handleGameSettings" 
              class="pixel-btn px-8 py-4 text-sm min-w-[200px] text-center">
        游戏设置
      </button>
      <button @click="handleExitGame" 
              class="pixel-btn px-8 py-4 text-sm min-w-[200px] text-center">
        退出游戏
      </button>
    </div>
  </div>
</template>