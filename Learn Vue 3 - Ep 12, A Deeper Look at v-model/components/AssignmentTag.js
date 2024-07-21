export default {
  template: `
    <div class="flex gap-2">
      <span 
        @click="$emit('update:model-value', tag)"
        v-for="tag in tags" 
        :key="tag"
        class="text-xs px-2 py-1 border rounded"
        :class="{
          'bg-blue-500 text-white': tag === modelValue,
          'hover:bg-blue-500 hover:text-white': tag !== modelValue
        }"
      >
        {{ tag }}
      </span>
    </div>
  `,

  props: {
    initialTags: Array,
    modelValue: String
  },

  computed: {
    tags () {
      return ['all', ...new Set(this.initialTags)]
    },
  }

}