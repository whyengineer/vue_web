
<script>
import { Bar,Line,mixins,Scatter} from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.chartData,this.options)
  },
  data(){
    return{
      
    }
  }
}
</script>