<script>

export default {
  name:"Tab",
  data(){
    return{

    }
  },
  mounted(){
    // 向panes添加内容
    console.log(this);
    this.$parent.panes.push(this);
  },
  computed:{
    active(){
      return this.$parent.value == this.index;
    }
  },
  props:{
    label:{
      type:String,
      default:"tab"
    },
    index:{
      type:[String,Number],
      required:true
    }
  },
  methods:{
    handlerClick(event){
      this.$parent.onChanges(this.index)
    }
  },
  render(){

    let tab = this.$slots.label || this.label;

    let classNames = {
      tab:true,
      active:this.active
    }

    return(
      <li class={classNames} onClick={this.handlerClick}>
        {tab}
      </li>
    )
  }
}

</script>

<style lang="css" scoped>

.tab{
  list-style:none;
  line-height:0.8rem;
  margin-right:0.6rem;
  position:relative;
  bottom:-0.04rem;
  cursor:pointer;
  color:#999;
}

.tab.active{
  color:#333;
}

.tab.last-child{
  margin-right:0;
}

</style>
