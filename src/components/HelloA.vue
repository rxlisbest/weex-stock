<template>
  <text class="message">{{ index }}</text>
</template>

<script>
export default {
  name: 'hello-a',
  components: { },
  props: [
    'index'
  ],
  data: () => ({
  }),
  created () {
    console.error(123)
    if (this.index === 'hello-world') {
      console.error(123)
    }
  },
  methods: {
  }
}
</script>
