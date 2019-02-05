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
  mounted () {
    console.error(666)
  },
  methods: {
  },
  destroyed () {
    console.error(2)
  }
}
</script>
