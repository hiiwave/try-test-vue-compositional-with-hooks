<template>
  <div>
    <h1>Greeting: {{ greeting }}</h1>
  </div>
</template>

<script>
import { createComponent } from '@vue/composition-api'
import { useState } from '@u3u/vue-hooks'

export default createComponent({
  setup() {
    return { ...useState(['greeting']) }
  },
})
</script>
