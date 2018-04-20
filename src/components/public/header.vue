<template>
  <div class="my_header">
      {{my_title}}
  </div>
</template>
<script>
export default {
  computed: {
    my_title() {
      return this.$store.state.title;
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
    .my_header{
        text-align: center;
        height: 44px;
        line-height: 44px;
        border-bottom: 1px solid #eee;
    }
</style>


