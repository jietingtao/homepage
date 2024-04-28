<template>
  <!--这里是图片走马灯---------------------------------------------------------------------------->
  <a-carousel autoplay :autoplaySpeed=2000 style="background-color: #fff; padding: 0px">
    <div><img src="../assets/autoplay0.jpg" style="height:440px"/></div>
    <div><img src="../assets/autoplay2.png" style="height:450px"/></div>
    <div><img src="../assets/autoplay1.jpg" style="height:420px"/></div>
    <div><img src="../assets/autoplay3.jpg" style="height:670px"/></div>
  </a-carousel>
<!--后面是course---------------------------------------------------------------------------->
  <a-col :span="10">&nbsp;</a-col>
  <a-divider orientation="left" style="font-size:25px">Your Course</a-divider>
  <div style="background-color: #ffffff; padding: 10px 100px 50px">
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card hoverable size="small">
            <template #cover>
            <img alt="example" src="../assets/climate change.jpg" />
            </template>
            <a-card-meta title="Sustainability and Climate Change">
            <template #description>From Microsoft Team</template>
            </a-card-meta>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card hoverable size="small">
            <template #cover>
            <img alt="example" src="../assets/programming.jpg" />
            </template>
            <a-card-meta title="Capstone Project (Programming)">
            <template #description>From Google Classroom</template>
            </a-card-meta>
        </a-card>
      </a-col>

    </a-row>
  </div>
  <div>
    <calendar style="padding: 40px"></calendar>
  </div>
<!--后面是calendar---------------------------------------------------------------------------->
   <a-divider orientation="left" style="font-size:25px">Your Arrangement</a-divider>
  <a-calendar v-model:value="value" style="padding:0px 50px">
    
    <template #dateCellRender="{ current }">
      <ul class="events">
        <li v-for="item in getListData(current)" :key="item.content">
          <a-badge :status="item.type" :text="item.content" />
        </li>
      </ul>
    </template>
    <template #monthCellRender="{ current }">
      <div v-if="getMonthData(current)" class="notes-month">
        <section>{{ getMonthData(current) }}</section>
        <span>Backlog number</span>
      </div>
    </template>
  </a-calendar>
</template>
<script setup>
import { ref } from 'vue';
const value = ref();
const getListData = value => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: 'warning',
          content: 'Sustainability and Climate Change',
        },
        {
          type: 'success',
          content: 'Capstone Project (Programming)',
        },
      ];
      break;
    case 10:
      listData = [
        {
          type: 'warning',
          content: 'Sustainability and Climate Change',
        },
        {
          type: 'success',
          content: 'Capstone Project (Programming)',
        },
        
      ];
      break;
    default:
  }
  return listData || [];
};
const getMonthData = value => {
  if (value.month() === 8) {
    return 1394;
  }
};
</script>
<style scoped>
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}
.notes-month {
  text-align: center;
  font-size: 28px;
}
.notes-month section {
  font-size: 28px;
}
</style>

<style scoped>
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: 300px;
  line-height: 300px;
  background: #364d79;
  overflow: hidden;
}

</style>

