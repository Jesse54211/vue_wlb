<template>
  <div class="home">
   <HelloWorld></HelloWorld>
   <Head></Head>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Head from '@/components/Head.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Head
  }
}
</script>
