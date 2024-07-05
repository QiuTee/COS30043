<template>
  <div class="container">
    <h2>Units</h2>
    <div class="row">
      <div class="table-reponsive">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Description</th>
              <th scope="col">Credit Point</th>
              <th scope="col">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="unit in units" :key="unit.code">
              <td>{{ unit.code }}</td>
              <td>{{ unit.desc }}</td>
              <td>{{ unit.cp }}</td>
              <td>{{ unit.type }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import Units from "../assets/units.json";
export default {
  name: "TheUnits",
  data: function () {
    return { units: Units };
  },
};
</script>
