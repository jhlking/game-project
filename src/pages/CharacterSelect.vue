<script setup lang="ts">
import { ref, computed } from 'vue'

interface Character {
  id: string
  name: string
  profession: string
  avatar: string
}

const characters: Character[] = [
  { id: '1', name: 'zhansiyu', profession: '剑士', avatar: '⚔️' },
  { id: '2', name: '博丽灵梦', profession: '法师', avatar: '🔮' },
  { id: '3', name: 'zhangxinyue', profession: '射手', avatar: '🏹' },
  { id: '4', name: 'RX-78F00', profession: '机甲', avatar: '🤖' },
  { id: '5', name: 'xingyuhua', profession: '法师', avatar: '✨' }
]

const selectedCharacter = ref<string | null>(null)

const selectedCount = computed(() => selectedCharacter.value ? 1 : 0)

const handleSelectCharacter = (charId: string) => {
  selectedCharacter.value = charId
}

const handleConfirm = () => {
  if (selectedCharacter.value) {
    const char = characters.find(c => c.id === selectedCharacter.value)
    console.log(`已选择角色: ${char?.name}`)
  }
}
</script>

<template>
  <div class="relative w-full h-full overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-300 to-gray-400">
      <div class="absolute inset-0 opacity-40" 
           style="background-image: url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pixel%20art%20snowy%20winter%20forest%20background%20with%20pine%20trees%208bit%20retro%20game%20style&image_size=landscape_16_9'); background-size: cover; background-position: center;">
      </div>
      <div class="absolute inset-0 bg-white/20"></div>
    </div>

    <div class="absolute top-4 left-4 flex items-center gap-4">
      <div class="bg-gray-900/80 border-2 border-yellow-500 rounded px-3 py-1 text-xs">
        <span class="text-yellow-400">↑</span> 升级
      </div>
      <div class="bg-gray-900/80 border-2 border-yellow-500 rounded px-3 py-1 text-xs">
        100
      </div>
    </div>

    <div class="absolute top-4 right-4">
      <div class="bg-gray-900/80 border-2 border-yellow-500 rounded px-3 py-1 text-xs">
        波次: <span class="text-yellow-400">0/20</span>
      </div>
    </div>

    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div class="bg-gray-900/90 border-4 border-yellow-500 rounded-xl p-6 w-[500px] max-w-[90vw]">
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center gap-2">
            <span class="text-red-500 text-xl">⚡</span>
            <h2 class="pixel-title text-lg">选择出战角色</h2>
          </div>
          <div class="text-xs text-gray-400">
            已选: <span class="text-yellow-400">{{ selectedCount }}/1</span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-6">
          <div v-for="char in characters" :key="char.id"
               :class="[
                 'bg-gray-800/80 border-2 rounded-lg p-4 cursor-pointer transition-all',
                 selectedCharacter === char.id 
                   ? 'border-yellow-500 ring-2 ring-yellow-400' 
                   : 'border-gray-600 hover:border-gray-400'
               ]"
               @click="handleSelectCharacter(char.id)">
            <div class="flex flex-col items-center gap-2">
              <span class="text-4xl">{{ char.avatar }}</span>
              <span class="text-yellow-300 text-xs">{{ char.name }}</span>
              <span class="text-gray-400 text-xs">职业: {{ char.profession }}</span>
              <button :class="[
                'px-4 py-1 text-xs rounded transition-all',
                selectedCharacter === char.id 
                  ? 'bg-yellow-600 text-black' 
                  : 'bg-green-700 text-white hover:bg-green-600'
              ]">
                {{ selectedCharacter === char.id ? '已选择' : '选择' }}
              </button>
            </div>
          </div>
        </div>

        <button :class="[
          'w-full py-3 rounded-lg text-sm font-bold transition-all',
          selectedCharacter 
            ? 'bg-gradient-to-b from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500 cursor-pointer' 
            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
        ]"
                :disabled="!selectedCharacter"
                @click="handleConfirm">
          确认出战
        </button>
      </div>
    </div>

    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2">
      <div class="bg-gray-900/80 border-2 border-green-500 rounded-full h-3 w-[200px] overflow-hidden">
        <div class="bg-gradient-to-r from-green-500 to-green-400 h-full" style="width: 100%"></div>
      </div>
      <p class="text-center text-xs text-gray-400 mt-1">1000/1000</p>
    </div>
  </div>
</template>