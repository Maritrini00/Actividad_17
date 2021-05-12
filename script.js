const app =Vue.createApp({
    data(){
        return{
            status: true,
            status2: false,
            imagen: "focoOff.png"
        }
    },
    methods:{
        cambiarStatus(){
            if(this.status2===true){
                this.imagen ="focoOff.png";
                this.status2=false;
            }else{
                this.imagen ="focoOn.png";
                this.status2=true;
            }
        }
    },
})

const vm= app.mount('#app')