<!-- src/components/Modal.vue -->
<template>
  <div v-if="isOpen" class="modal-overlay" @click="close">
    <div class="modal-container" @click.stop>
      <button class="close-button" @click="close">×</button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'Modal',
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const isOpen = ref(props.modelValue);

    const close = () => {
      emit('update:modelValue', false);
    };

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        close();
      }
    };

    onMounted(() => {
      document.addEventListener('keydown', handleEsc);
    });

    onUnmounted(() => {
      document.removeEventListener('keydown', handleEsc);
    });

    return {
      isOpen,
      close
    };
  },
  watch: {
    modelValue(newVal) {
      this.isOpen = newVal;
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  background: white;
  padding: 20px;
  border-radius: 5px;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
}
</style>
