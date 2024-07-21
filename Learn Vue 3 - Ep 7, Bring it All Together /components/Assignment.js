export default {
  template: `
    <li>
      <label>
        <input type="checkbox" v-model="assignment.completed">
        {{ assignment.name }}
      </label>
    </li>
  `,

  props: {
    assignment: Object
  }
}