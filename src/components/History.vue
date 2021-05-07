<template>
  <div id="history">
    <v-data-table :headers="headers" :items="items" dark> </v-data-table>
  </div>
</template>

<script>
export default {
  name: "History",

  data() {
    return {
      headers: [
        { text: "Дата вывода", value: "date", sortable: false },
        { text: "На какие нужды", value: "needs", sortable: false },
        { text: "Сумма", value: "summ", sortable: false },
        { text: "Комиссия", value: "comission", sortable: false },
        { text: "Итого", value: "total", sortable: false },
      ],
      items: [
        {
          date: "2020.01.01 в 21:00",
          needs: "Аренда офиса",
          summ: "$1000",
          comission: "$100",
          total: "$1100",
        },
        {
          date: "2020.01.01 в 21:00",
          needs: "Аренда офиса",
          summ: "$1000",
          comission: "$100",
          total: "$1100",
        },
        {
          date: "2020.01.01 в 21:00",
          needs: "Аренда офиса",
          summ: "$1000",
          comission: "$100",
          total: "$1100",
        },
        {
          date: "2020.01.01 в 21:00",
          needs: "Аренда офиса",
          summ: "$1000",
          comission: "$100",
          total: "$1100",
        },
        {
          date: "2020.01.01 в 21:00",
          needs: "Аренда офиса",
          summ: "$1000",
          comission: "$100",
          total: "$1100",
        },
        {
          date: "2020.01.01 в 21:00",
          needs: "Аренда офиса",
          summ: "$1000",
          comission: "$100",
          total: "$1100",
        },
        {
          date: "2020.01.01 в 21:00",
          needs: "Аренда офиса",
          summ: "$1000",
          comission: "$100",
          total: "$1100",
        },
        {
          date: "2020.01.01 в 21:00",
          needs: "Аренда офиса",
          summ: "$1000",
          comission: "$100",
          total: "$1100",
        },
        {
          date: "2020.01.01 в 21:00",
          needs: "Аренда офиса",
          summ: "$1000",
          comission: "$100",
          total: "$1100",
        },
        {
          date: "2020.01.01 в 21:00",
          needs: "Аренда офиса",
          summ: "$1000",
          comission: "$100",
          total: "$1100",
        },
        {
          date: "2020.01.01 в 21:00",
          needs: "Аренда офиса",
          summ: "$1000",
          comission: "$100",
          total: "$1100",
        },
        {
          date: "2020.01.01 в 21:00",
          needs: "Аренда офиса",
          summ: "$1000",
          comission: "$100",
          total: "$1100",
        },
        {
          date: "2020.01.01 в 21:00",
          needs: "Аренда офиса",
          summ: "$1000",
          comission: "$100",
          total: "$1100",
        },
        {
          date: "2020.01.01 в 21:00",
          needs: "Аренда офиса",
          summ: "$1000",
          comission: "$100",
          total: "$1100",
        },
        {
          date: "2020.01.01 в 21:00",
          needs: "Аренда офиса",
          summ: "$1000",
          comission: "$100",
          total: "$1100",
        },
        {
          date: "2020.01.01 в 21:00",
          needs: "Аренда офиса",
          summ: "$1000",
          comission: "$100",
          total: "$1100",
        },
        {
          date: "2020.01.01 в 21:00",
          needs: "Аренда офиса",
          summ: "$1000",
          comission: "$100",
          total: "$1100",
        },
      ],
    };
  },
  created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
