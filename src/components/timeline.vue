<template>
  <a-divider orientation="left" style="font-size:25px">Student Activity Timeline</a-divider>
  <a-divider orientation="left" style="font-size:15px; color:#808080">&nbsp&nbsp&nbsp Interaction, Lecture, learning</a-divider>
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
          min: Date.UTC(2024, 4, 25),
          max: Date.UTC(2024, 4, 27),
        },
        yAxis: {
            uniqueNames: true
        },

    navigator: {
        enabled: true,
        liveRedraw: true,
        series: {
            type: 'gantt',
            pointPlacement: 0.5,
            pointPadding: 0.25,
            accessibility: {
                enabled: false
            }
        },
        yAxis: {
            min: 0,
            max: 3,
            reversed: true,
            categories: []
        }
    },

    scrollbar: {
        enabled: true
    },

    rangeSelector: {
        enabled: true,
        selected: 0
    },

    accessibility: {
        point: {
            descriptionFormat: '{yCategory}. ' +
                '{#if completed}Task {(multiply completed.amount 100):.1f}% completed. {/if}' +
                'Start {x:%Y-%m-%d}, end {x2:%Y-%m-%d}.'
        },
        series: {
            descriptionFormat: '{name}'
        }
    },
        credits: {
              enabled: false// 隐藏右下角水印
        },
        
        series: [
          { lineColor: '#525E89',
            name: 'Interaction',
            data: [
              {
                name: 'Tina',
                start: Date.UTC(2024, 4, 25,10,0,0),
                end: Date.UTC(2024, 4, 25,12,0,0),              
              },
              {
                name: 'Tina',
                start: Date.UTC(2024, 4, 26,15,47,0),
                end: Date.UTC(2024, 4, 26,16,0),              
              },              
              {
                name: 'Bob',
                start: Date.UTC(2024, 4, 25,10,0,0),
                end: Date.UTC(2024, 4, 25,12,0,0),
              },
              {
                name: 'Cindy',
                start: Date.UTC(2024, 4, 25,10,0,0),
                end: Date.UTC(2024, 4, 25,12,0,0),

              },
              {
                name: 'Amy',
                start: Date.UTC(2024, 4, 25,10,0,0),
                end: Date.UTC(2024, 4, 25,12,0,0),
              },
              {
                name: 'Dontknow',
                start: Date.UTC(2024, 4, 25,10,0,0),
                end: Date.UTC(2024, 4, 25,12,0,0),
              },
              {
                name: 'who',
                start: Date.UTC(2024, 4, 25,10,0,0),
                end: Date.UTC(2024, 4, 25,12,0,0),
              },
              {
                name: 'Tina',
                start: Date.UTC(2024, 4, 26,11,0,0),
                end: Date.UTC(2024, 4, 26,11,20),              
              },              
              {
                name: 'Bob',
                start: Date.UTC(2024, 4, 26,10,0,0),
                end: Date.UTC(2024, 4, 26,14,0,0),
              },
              {
                name: 'Cindy',
                start: Date.UTC(2024, 4, 26,11,0,0),
                end: Date.UTC(2024, 4, 26,12,0,0),

              },
              {
                name: 'Amy',
                start: Date.UTC(2024, 4, 26,13,50,0),
                end: Date.UTC(2024, 4, 26,14,10,0),
              },
              {
                name: 'Dontknow',
                start: Date.UTC(2024, 4, 26,10,0,0),
                end: Date.UTC(2024, 4, 26,10,0,0),
              },
              {
                name: 'who',
                start: Date.UTC(2024, 4, 26,17,0,0),
                end: Date.UTC(2024, 4, 26,18,0,0),
              },
            ],
          },
        ],
      },
    };
  },
};
</script>
