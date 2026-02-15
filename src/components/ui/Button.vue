<template>
  <button :class="buttonClasses" :disabled="props.disabled" @click="emit('click', $event)">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';



type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

const props = defineProps<{
  variant?: string;
  size?: ButtonSize;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

// const sizeClasses: Record<ButtonSize, string> = {
//   sm: 'px-4 py-4 text-sm',
//   md: 'px-5 py-6 text-base',
//   lg: 'px-5 py-8 text-lg',
//   xl: 'px-6 py-4 text-sm',
// };


const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-6 py-4 text-sm', 
  md: 'px-7 py-5 text-base', 
  lg: 'px-8 py-6 text-base',      
  xl: 'px-9 py-7 text-lg',        
};

const buttonClasses = computed(() => ['btn', props.variant ?? '', sizeClasses[props.size ?? 'sm'], 'rounded-full']);
</script>

<style scoped></style>
