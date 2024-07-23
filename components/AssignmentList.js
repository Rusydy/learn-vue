import Assignment from "./Assignment.js"
import AssignmentTag from "./AssignmentTag.js"

export default {
  components: { Assignment, AssignmentTag },
  template: `
    <section v-show="assignments.length" class="w-60">
      <div class="flex justify-between items-start">
        <h2 class="font-bold mb-2">
          {{ title }}
          <span> ({{ assignments.length }}) </span>
        </h2>

        <button 
          v-show="canToggle"
          @click="$emit('toggle')"
        >&times;</button>
      </div>

      <assignment-tag 
        :initial-tags="assignments.map(a => a.tag)" 
        v-model:currentTag="currentTag"
      />

      <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
        <assignment 
          v-for="assignment in filteredAssignments"
          :key="assignment.id" 
          :assignment="assignment"
        />
      </ul>

      <slot></slot>
    </section>
  `,
  props: {
    assignments: Array,
    title: String,
    canToggle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentTag: 'all'
    }
  },
  computed: {
    filteredAssignments() {
      if (this.currentTag === 'all') {
        return this.assignments;
      }
      return this.assignments.filter(assignment => assignment.tag === this.currentTag);
    }
  }
}