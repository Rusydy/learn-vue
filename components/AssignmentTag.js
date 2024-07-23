export default {
  template: `
    <div class="flex gap-2">
      <span 
        @click="$emit('update:current-tag', tag)"
        v-for="tag in tags" 
        :key="tag"
        class="text-xs px-2 py-1 border rounded"
        :class="{
          'bg-blue-500 text-white': tag === currentTag,
          'hover:bg-blue-500 hover:text-white': tag !== currentTag
        }"
      >
        {{ tag }}
      </span>
    </div>
  `,

  props: {
    initialTags: Array,
    currentTag: String
  },

  computed: {
    tags () {
      return ['all', ...new Set(this.initialTags)]
    },
  }

}