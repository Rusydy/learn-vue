import AssignmentList from "./AssignmentList.js"

export default {
  components: { AssignmentList },
  template: `
    <section class="space-y-6">
      <assignment-list :assignments="inprogressAssignments" title="In Progress"></assignment-list>
      <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list>

      <form @submit.prevent="addAssignment">
        <div class="border border-gray-600 text-black">
          <input type="text" placeholder="Add a new assignment" class="text-black p-2" v-model="newAssignment">
          <button type="submit" class="bg-white p-2 border-l">Add</button>
        </div>
      </form>
    </section>
  `,
  data() {
    return {
      assignments: [
        { name: 'Finish Project', completed: false, id: 1 },
        { name: 'Read chapter 4', completed: false, id: 2 },
        { name: 'Turn in homework', completed: false, id: 3 }
      ],

      newAssignment: ''
    };
  },
  computed: {
    inprogressAssignments() {
      return this.assignments.filter(assignment => !assignment.completed);
    },
    completedAssignments() {
      return this.assignments.filter(assignment => assignment.completed);
    }
  },
  methods: {
    addAssignment() {
      this.assignments.push({
        name: this.newAssignment,
        completed: false,
        id: this.assignments.length + 1
      });

      this.newAssignment = '';
    }
  }
}