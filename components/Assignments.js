import AssignmentList from "./AssignmentList.js"
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: { AssignmentList, AssignmentCreate },
  template: `
    <section class="flex gap-8">
      <assignment-list :assignments="inProgress" title="In Progress">
        <assignment-create @add="add"/>
      </assignment-list>

      <div v-show="showCompleted">
        <assignment-list 
          :assignments="completed" 
          title="Completed"
          can-toggle
          @toggle="showCompleted = !showCompleted"
        />
      </div>
    </section>
  `,
  data() {
    return {
      assignments: [],
      showCompleted: true
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

  created() {
    fetch('http://localhost:3001/assignments')
      .then(response => response.json())
      .then(assignments => this.assignments = assignments);
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