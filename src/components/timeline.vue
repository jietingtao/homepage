<template>
  <a-divider orientation="left" style="font-size:25px">Student Activity Timeline</a-divider>
  <a-divider orientation="left" style="font-size:15px; color:#808080">&nbsp&nbsp&nbsp Interaction, Lecture, Reading</a-divider>
  <div>
    <highcharts
      :constructorType="'ganttChart'"
      class="hc"
      :options="chartOptions"
      ref="chart"
    ></highcharts>
  </div>

<!--下面是统计的analysis-------------------------------------------------->
  <div style="background: #ececec; padding: 30px">
    <a-col :span="10">&nbsp;</a-col>
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card style="padding" title="Average Study Time">
          <a-statistic
            :value="11.28"
            :precision="2"
            suffix="%"
            :value-style="{ color: '#3f8600' }"
            style="margin-right: 50px"
          >
            <template #prefix>
              <arrow-up-outlined />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Average Interaction Time">
          <a-statistic
            :value="9.3"
            :precision="2"
            suffix="%"
            class="demo-class"
            :value-style="{ color: '#cf1322' }"
          >
            <template #prefix #icon>
              <arrow-down-outlined />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
      <a-col :span="8" >
        <a-card title="Interaction Rate" >
          <a-progress :percent="15" size="100"/>
          <template> </template>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      chartOptions: {
        title: {
          text: ' ',
        },
        xAxis: {
          min: Date.UTC(2014, 10, 17),
          max: Date.UTC(2014, 10, 30),
        },

        series: [
          {
            name: 'Project 1',
            data: [
              {
                name: 'tao jieting',
                start: Date.UTC(2014, 10, 18),
                end: Date.UTC(2014, 10, 25),
                completed: 0.25,
              },
              {
                name: 'xiaoming',
                start: Date.UTC(2014, 10, 27),
                end: Date.UTC(2014, 10, 29),
              },
              {
                name: 'xiaohong',
                start: Date.UTC(2014, 10, 20),
                end: Date.UTC(2014, 10, 25),
                completed: {
                  amount: 0.12,
                  fill: '#fa0',
                },
              },
              {
                name: 'xiaolv',
                start: Date.UTC(2014, 10, 23),
                end: Date.UTC(2014, 10, 26),
              },
              {
                name: 'xiaolv',
                start: Date.UTC(2014, 10, 23),
                end: Date.UTC(2014, 10, 26),
              },
              {
                name: 'xiaolv',
                start: Date.UTC(2014, 10, 23),
                end: Date.UTC(2014, 10, 26),
              },
              {
                name: 'xiaolv',
                start: Date.UTC(2014, 10, 23),
                end: Date.UTC(2014, 10, 26),
              },
              {
                name: 'xiaolv',
                start: Date.UTC(2014, 10, 23),
                end: Date.UTC(2014, 10, 26),
              },
              {
                name: 'xiaolv',
                start: Date.UTC(2014, 10, 23),
                end: Date.UTC(2014, 10, 26),
              },
              {
                name: 'xiaolv',
                start: Date.UTC(2014, 10, 23),
                end: Date.UTC(2014, 10, 26),
              },
              {
                name: 'xiaolv',
                start: Date.UTC(2014, 10, 23),
                end: Date.UTC(2014, 10, 26),
              }
            ],
          },
        ],
      },
    };
  },
};
</script>
