<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const hoveredMode = ref<string | null>(null)

const modes = [
  {
    id: 'ranked',
    name: '段位模式',
    icon: '⚔️',
    description: '段位模式：通过战斗提升你的段位等级，从入门到大师，挑战更高的荣誉！'
  },
  {
    id: 'endless',
    name: '无尽模式',
    icon: '∞',
    description: '无尽模式：没有终点的战斗，看看你能坚持多少波，挑战你的极限！'
  }
]

const handleBack = () => {
  router.push('/')
}

const handleSelectMode = (modeId: string) => {
  router.push('/character-select')
}
</script>

<template>
  <div class="relative w-full h-full overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-300 to-green-400">
      <div class="absolute inset-0 opacity-30" 
           style="background-image: url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pixel%20art%20tropical%20forest%20background%20with%20trees%20and%20ancient%20ruins%208bit%20retro%20game%20style&image_size=landscape_16_9'); background-size: cover; background-position: center;">
      </div>
    </div>

    <button @click="handleBack" 
            class="pixel-btn absolute top-6 left-6 px-4 py-2 text-xs flex items-center gap-2">
      ← 返回
    </button>

    <div class="absolute top-24 left-1/2 transform -translate-x-1/2">
      <h2 class="pixel-title text-2xl md:text-3xl lg:text-4xl text-center">
        选择模式
      </h2>
    </div>

    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-8">
      <button v-for="mode in modes" :key="mode.id"
              @click="handleSelectMode(mode.id)"
              @mouseenter="hoveredMode = mode.id"
              @mouseleave="hoveredMode = null"
              class="pixel-btn px-8 py-6 text-sm min-w-[220px] flex flex-col items-center gap-2 transition-all">
        <span class="text-2xl">{{ mode.icon }}</span>
        <span>{{ mode.name }}</span>
      </button>
    </div>

    <div class="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-[600px] max-w-[90vw]">
      <div class="bg-gray-900/80 border-4 border-yellow-500 rounded-lg p-6">
        <p v-if="hoveredMode" 
           class="text-yellow-300 text-xs leading-relaxed text-center">
          {{ modes.find(m => m.id === hoveredMode)?.description }}
        </p>
        <p v-else 
           class="text-gray-400 text-xs leading-relaxed text-center">
          选择一个模式开始战斗！将鼠标移到按钮上查看详细介绍。
        </p>
      </div>
    </div>
  </div>
</template>