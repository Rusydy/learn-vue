export default {
  template: `
    <section v-show="inprogressAssignments.length">
      <h2 class="font-bold mb-2">In Progress</h2>
      <ul>
        <li v-for="assignment in inprogressAssignments" :key="assignment.id">
          <label>
            {{ assignment.name }}
            <input type="checkbox" v-model="assignment.completed">
          </label>
        </li>
      </ul>
    </section>

    <section v-show="completedAssignments.length" class="mt-8">
      <h2 class="font-bold">Completed</h2>
      <ul>
        <li v-for="assignment in completedAssignments" :key="assignment.id">
          <label>
            {{ assignment.name }}
            <input type="checkbox" v-model="assignment.completed">
          </label>
        </li>
      </ul>
    </section>
  `,
  data() {
    return {
      assignments: [
        { name: 'Finish Project', completed: false, id: 1 },
        { name: 'Read chapter 4', completed: false, id: 2 },
        { name: 'Turn in homework', completed: false, id: 3 }
      ]
    };
  },
  computed: {
    inprogressAssignments() {
      return this.assignments.filter(assignment => !assignment.completed);
    },
    completedAssignments() {
      return this.assignments.filter(assignment => assignment.completed);
    }
  }
}