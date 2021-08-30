const hubEvent = {
  data(){
    return{
      demo:''
    }
  },
  methods:{
    emitEvent(){
      console.log(this);
      this.$root.eventHub.$emit('RESET_PARAMS', '事件params');//触发事件 $eventBus
    },
  }
};

// 页面loading遮罩方法
const pageLoading = {
  data() {
    return {
      fullLoading: null
    };
  },
  methods: {
    showFullLoading(loadingText = "Loading") {
      if (this.fullLoading) {
        return;
      }
      this.fullLoading = this.$loading({
        lock: true,
        text: "",
        spinner: "el-icon-loading",
        background: "rgba(236, 243, 255, 0.45)",
        customClass: "my-loading-36"
      });
    },
    closeFullLoading() {
      if (this.fullLoading) {
        this.fullLoading.close();
        this.fullLoading = null;
      }
    }
  }
};

const cDemo = {
  data(){

  },
  methods:{

  }
}

export {
  hubEvent,
};
