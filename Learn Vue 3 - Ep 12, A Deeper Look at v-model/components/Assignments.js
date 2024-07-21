import AssignmentList from "./AssignmentList.js"
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: { AssignmentList, AssignmentCreate },
  template: `
    <section class="space-y-6">
      <assignment-list :assignments="inProgress" title="In Progress"></assignment-list>
      <assignment-list :assignments="completed" title="Completed"></assignment-list>

      <assignment-create @add="add"></assignment-create>
    </section>
  `,
  data() {
    return {
      assignments: [
        { name: 'Finish Project', completed: false, id: 1, tag: 'science' },
        { name: 'Read chapter 4', completed: false, id: 2, tag: 'math' },
        { name: 'Turn in homework', completed: false, id: 3, tag: 'reading' }
      ],

      newAssignment: ''
    };
  },
  computed: {
    inProgress() {
      return this.assignments.filter(assignment => !assignment.completed);
    },
    completed() {
      return this.assignments.filter(assignment => assignment.completed);
    }
  },

  methods: {
    add(assignmentName) {
      this.assignments.push({
        name: assignmentName,
        completed: false,
        id: this.assignments.length + 1
      });
    }
  }
}