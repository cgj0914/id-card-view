<template>
  <div class="id">
    <div class=" id_card">
      <div class="id_card_content" >
        <div class="id_card_info left">
          <div class="id_card_info_item">
            <span class="fieldName">姓名</span> <span class="fieldValue">
              {{ person.name?person.name:'--' }}</span>
          </div>
          <div class="id_card_info_item ovfl-ellipsis">
            <div class="left ovfl-ellipsis"><span class="fieldName">性别</span> <span class="fieldValue">
                {{ gender }}</span>
            </div>
            <div class="left nation"><span class="left fieldName">民族</span>
              <span class="left fieldValue ovfl-ellipsis nation_ovfl" :title="person.nation?person.nation:'--'">
                  {{person.nation?person.nation:'--'}}
                </span>
            </div>
          </div>
          <div class="id_card_info_item ovfl-ellipsis">
            <span class="fieldName">出生</span>
            <span class="fieldValue">{{birthday.year}}</span>
            <span class="fieldName">年</span>
            <span class="fieldValue">{{birthday.month}}</span>
            <span class="fieldName">月</span>
            <span class="fieldValue">{{birthday.day}}</span>
            <span class="fieldName">日</span>
          </div>
          <div class="id_card_info_item address"><span class="left fieldName">住址</span>
            <span class="left fieldValue address_ovfl"
                  :title="person.address?person.address:'--'">
                {{ person.address?person.address:'--' }}
              </span>
          </div>
        </div>
        <convenience-image class="right round-img img_photo" style="" :srcNor="person.photo" :srcErr="defaultImg" alignment="top"></convenience-image>
        <div class="left id_number"><span class="fieldName">公民身份证号</span>
          <span class="fieldValue">{{ person.id?person.id:'--' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'id-card-view',
  props:{
    person:Object
  },
  data() {
    return {
      defaultImg: require('../assets/photo_default.png')
    }
  },
  computed:{
    gender:function () {
      if(this.person&&this.person.id){
        return this.person?this.person.id.substr(16,1)%2===0?'女':'男':'--';
      }else{
        return '--'
      }
    },
    birthday:function () {
      let birthdayObj={
        year:'--',
        month:'--',
        day:'--'
      };
      if(this.person&&this.person.id){
        let date= new Date(this.person.id.substr(6,4)+'/'+this.person.id.substr(10,2)+'/'+this.person.id.substr(12,2)+' 00:00:00');
        birthdayObj.year = date.getFullYear();
        birthdayObj.month = date.getMonth()+1;
        birthdayObj.day = date.getDate();
      }
      return birthdayObj;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.id{
  width: 15vw;
  min-width: 220px;
  color:#4A4A4A;
}
.id_card{
  width: 100%;
  border-radius: 5px;
  position: relative;
}
.default_box{
  height:9vw;
}
.id_card_content{
  background: #e9f6ff;
  border-radius: 10px;
  padding: .8vw .5vw;
  overflow:hidden;
  font-size: 12px;
}
.id_card_content .id_card_info{
    width: 79%;
}
.id_card_content span.fieldName{
    color: #1EB4EF;
    margin:0 3px;
}
.id_card_content .id_card_info_item{
    min-height: 22px;
}
.id_card_content .id_card_info_item div:nth-child(1){
    width: 35%;
}
.id_card_content .id_card_info_item div:nth-child(2){
    width: 60%;
    height: 20px;
    line-height: 20px;
}
.id_card_content .address{
    max-height: 2.2vw;
    overflow: hidden;
    padding-bottom:4px; 
}
.id_card_content .img_photo{
    width: 21%;
    position: absolute;
    right: .3vw;
}
.id_card_content .id_number{
    width: 100%;
}
.id_card_content .idcard_default{
    display: block;
    width: 100%;
    height: 100%;
    line-height: 100%;
    text-align: center;
}
.nation_ovfl{
  margin-left: 3%;
  width: 55%;
}
.address_ovfl{
  width: 80%;
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.left{
  float: left;
}
.right{
  float: right;
}
</style>
