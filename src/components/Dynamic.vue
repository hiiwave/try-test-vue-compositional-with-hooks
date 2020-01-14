<script>
import { createComponent } from '@vue/composition-api'
import { useWindowSize } from '@u3u/vue-hooks'

export default createComponent({
  setup() {
    const { width, height, widthPixel, heightPixel } = useWindowSize()
    return { width, height, widthPixel, heightPixel }
  },

  render() {
    const { width, height } = this
    return (
      <div id="app">
        dynamic window size: {width}, {height}
      </div>
    )
  },
})
</script>
