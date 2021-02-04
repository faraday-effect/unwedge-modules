<template>
  <div>
    <h1>Timely Message</h1>
    <p>At the tone the time was {{ now }}.</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { DateTime } from "luxon";

export default Vue.extend({
  name: "NowIsTheTime",
  computed: {
    now() {
      return DateTime.local();
    }
  }
});
</script>
