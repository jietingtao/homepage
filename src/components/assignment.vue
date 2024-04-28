<template>
  <a-table :columns="columns" :data-source="data" @change="onChange"></a-table>
  <div style="background: #ececec; padding: 30px"> 
    <a-col :span="10">&nbsp;</a-col>
    <a-row :gutter="16">
      <a-col :span="6"/>
      <a-col :span="6">
        <a-card style="padding" title="Submission Rate" :headStyle="{'text-align': 'center' }" :bodyStyle="{'text-align': 'center' }">
          <a-progress
            type="circle"
            :stroke-color="{
              '0%': '#108ee9',
              '100%': '#87d068',
            }"
            :percent="90"
          />
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card title="Average Grade" :headStyle="{'text-align': 'center' }" :bodyStyle="{'text-align': 'center' }">
          <a-progress
            type="circle"
            :stroke-color="{
              '0%': '#108ee9',
              '100%': '#87d068',
            }"
            :percent="88">
            <template #format="percent">
              <span>{{ percent }}</span>
            </template>
          </a-progress>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script setup>
const columns = [

  {
    title: 'Student_ID',
    dataIndex: 'Student_ID',
    sorter: (a, b) => a.Student_ID - b.Student_ID,
  },
  {
    title: 'Name',
    dataIndex: 'Name',
  },
  {
    title: 'Class',
    dataIndex: 'Class',
    sorter: (a, b) => a.Class - b.Class,
  },
  {
    title: 'Assignment',
    dataIndex: 'Assignment',
    filters: [
      {
        text: 'reading',
        value: 'reading',
      },
      {
        text: 'writting',
        value: 'writting',
      },
    ],
    onFilter: (value, record) => record.Assignment.startsWith(value),
    filterMode: 'tree',
    filterSearch: true,
    
  },
  {
    title: 'Grade',
    dataIndex: 'Grade',
    sorter: (a, b) => a.Grade - b.Grade,
  },
  {
    title: 'Release_Time',
    dataIndex: 'Release_Time',
  },  
  {
    title: 'LMC',
    dataIndex: 'LMC',
    filters: [
      {
        text: 'Canvas',
        value: 'Canvas',
      },
      {
        text: 'Microsoft Team',
        value: 'Microsoft Team',
      },
      {
        text: 'Google Classroom',
        value: 'Google Classroom',
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.LMC.startsWith(value),
    
  }
];
const data = [
  {
    key: '1',
    Student_ID: 3036189577,
    Name: 'TAO Jieting',
    Assignment: 'reading',
    Class: '1901',
    Grade: '100',
    Release_Time: '2024-02-03',
    LMC: 'Canvas',
  },  
  {
    key: '1',
    Student_ID: 3036189578,
    Name: 'Amy',
    Assignment: 'writing',
    Class: '1901',
    Grade: '88',
    Release_Time: '2024-02-04',
    LMC: 'Google Classroom',
  },  
  {
    key: '1',
    Student_ID: '3036189579',
    Name: 'Bob',
    Assignment: 'writing',
    Class: '1901',
    Grade: '10',
    Release_Time: '2024-02-04',
    LMC: 'Canvas',
  },  
  {
    key: '1',
    Student_ID: '3036189580',
    Name: 'Cindy',
    Assignment: 'reading',
    Class: '1901',
    Grade: '100',
    Release_Time: '2024-02-03',
    LMC: 'Google Classroom',
  },  
  {
    key: '1',
    Student_ID: '3036189581',
    Name: 'David',
    Assignment: 'writing',
    Class: '1901',
    Grade: '79',
    Release_Time: '2024-02-04',
    LMC: 'Canvas',
  },  
  {
    key: '1',
    Student_ID: '3036189582',
    Name: 'Ema',
    Assignment: 'writing',
    Class: '1901',
    Grade: '100',
    Release_Time: '2024-02-04',
    LMC: 'Canvas',
  },  
  {
    key: '1',
    Student_ID: '3036189583',
    Name: 'Phebe',
    Assignment: 'reading',
    Class: '1901',
    Grade: '100',
    Release_Time: '2024-02-03',
    LMC: 'Microsoft Team',
  },  
  {
    key: '1',
    Student_ID: '3036189584',
    Name: 'Jesus',
    Assignment: 'reading',
    Class: '1901',
    Grade: '100',
    Release_Time: '2024-02-03',
    LMC: 'Canvas',
  },  
  {
    key: '1',
    Student_ID: '3036189585',
    Name: 'Ridiculous',
    Assignment: 'writing',
    Class: '1901',
    Grade: '100',
    Release_Time: '2024-02-04',
    LMC: 'Microsoft Team',
  },  
  {
    key: '1',
    Student_ID: '3036189586',
    Name: 'Sleepy',
    Assignment: 'reading',
    Class: '1902',
    Grade: '90',
    Release_Time: '2024-02-03',
    LMC: 'Canvas',
  },  
  {
    key: '1',
    Student_ID: '3036189587',
    Name: 'Rachel',
    Assignment: 'reading',
    Class: '1902',
    Grade: '90',
    Release_Time: '2024-02-03',
    LMC: 'Canvas',
  },  
  {
    key: '1',
    Student_ID: '3036189588',
    Name: 'Tina',
    Assignment: 'reading',
    Class: '1902',
    Grade: '90',
    Release_Time: '2024-02-03',
    LMC: 'Canvas',
  },  
  {
    key: '1',
    Student_ID: '3036189589',
    Name: 'Yeong',
    Assignment: 'reading',
    Class: '1902',
    Grade: '90',
    Release_Time: '2024-02-03',
    LMC: 'Canvas',
  },  
  {
    key: '1',
    Student_ID: '3036189590',
    Name: 'LEE',
    Assignment: 'reading',
    Class: '1902',
    Grade: '90',
    Release_Time: '2024-02-03',
    LMC: 'Canvas',
  }
];
function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}
</script>
<script>
export {};
</script>