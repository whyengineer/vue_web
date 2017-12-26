
<script>
import { Bar,Line,mixins} from 'vue-chartjs'

export default {
  extends: Line,
  mixins:mixins,
  props: ['data', 'options'],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.data,this.options)
  },
  data(){
    return{
      
    }
  }
}
</script>