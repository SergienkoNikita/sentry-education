<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="error">Ошибка на эбаут</button>
  </div>
</template>

<script>
export default {
  methods: {
    error() {
      throw new Error('Ошибка на эбаут');
    },
  },
};
</script>
