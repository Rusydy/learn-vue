import AssignmentList from "./AssignmentList.js"

export default {
  components: { AssignmentList },
  template: `
    <section class="space-y-6">
      <assignment-list :assignments="inprogressAssignments" title="In Progress"></assignment-list>
      <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list>
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