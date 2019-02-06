<template>
  <text class="message">{{ index }}</text>
</template>

<script>
import Nat from 'natjs'
export default {
  name: 'hello-a',
  components: { },
  props: [
    'index'
  ],
  data: () => ({
  }),
  created () {
    Nat.call('415-736-0000')
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
