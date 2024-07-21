import Assignment from "./Assignment.js"

export default {
  components: { Assignment },
  template: `
    <section v-show="assignments.length">
      <h2 
        class="font-bold mb-2"
      >
        {{ title }}

        <span> ({{ assignments.length }}) </span>
      </h2>

      <div class="flex space-x-2 mb-4">
        <span 
          v-for="tag in tags" 
          :key="tag"
          class="text-xs px-2 py-1 border rounded"
        >
          {{ tag }}
        </span>
      </div>

      <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
        <assignment 
          v-for="assignment in assignments" 
          :key="assignment.id" 
          :assignment="assignment"
        >
        </assignment>
      </ul>
    </section>
  `,
  props: {
    assignments: Array,
    title: String
  },

  computed: {
    tags () {
      return ['science', 'math', 'reading']
    }
  }
}