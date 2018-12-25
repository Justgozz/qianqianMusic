<script>

import TabContainer from "./tab-container"

export default {
  name:"Tabs",
  data(){
    return{
      panes:[]
    }
  },
  props:{
    value:{
      type:[String,Number],
      required:true
    }
  },
  components:{
    TabContainer
  },
  methods:{
    onChanges(index){
      this.$emit("getIndex",index);
    }
  },
  render(){
    return(
      <div class="tabs">
        <ul class="tabs-header">
          { this.$slots.default }
        </ul>
        <TabContainer panes={this.panes}/>
      </div>
    )
  }
}


</script>

<style lang="css" scoped>

.tabs-header{
  display:flex;
  list-style:none;
  margin:0;
  border-bottom:2px solid #ededed;
  background-color: #fff;
  margin-bottom: 10px;
}
.tabs-header{
  font-size: 0.32rem;
}

</style>
