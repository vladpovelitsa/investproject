<template>
  <div id="settings">
    <v-container fluid>
      <v-row class="">
        <v-spacer></v-spacer>
        <v-col class="col-4">
          <div class="d-flex justify-space-between w-100 mb-2">
            <h2>Бухгалтерия</h2>
            <router-link to="/"> Добавить </router-link>
          </div>
          <v-data-table
            :headers="headers1"
            :items="items1"
            dark
            disable-pagination
            :hide-default-footer="true"
            class="mb-10"
            hide-default-header
          >
          </v-data-table>

          <div class="d-flex justify-space-between w-100 mb-2">
            <h2>Операторы</h2>
            <router-link to="/"> Добавить </router-link>
          </div>
          <v-data-table
            :headers="headers2"
            :items="items2"
            dark
            disable-pagination
            :hide-default-footer="true"
            class="mb-10"
            hide-default-header
          >
          </v-data-table>

          <div class="d-flex justify-space-between w-100 mb-2">
            <h2>Администраторы</h2>
            <router-link to="/"> Добавить </router-link>
          </div>
          <v-data-table
            :headers="headers3"
            :items="items3"
            dark
            disable-pagination
            :hide-default-footer="true"
            class="mb-10"
            hide-default-header
          >
          </v-data-table>

          <div class="d-flex justify-space-between w-100 mb-2">
            <h2>% от наших дивидендов разработчикам ботов</h2>
            <router-link to="/"> Добавить </router-link>
          </div>
          <v-data-table
            :headers="headers4"
            :items="items4"
            dark
            disable-pagination
            :hide-default-footer="true"
            class="mb-10"
            hide-default-header
          >
          </v-data-table>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="col-6">
          <div class="d-flex justify-space-between w-100 mb-2">
            <h2>Платежные системы</h2>
            <router-link to="/"> Добавить </router-link>
          </div>
          <v-data-table
            :headers="headers5"
            :items="items5"
            dark
            disable-pagination
            :hide-default-footer="true"
            class="mb-10"
            hide-default-header
          >
          </v-data-table>

          <div class="d-flex justify-space-between w-100 mb-2">
            <h2>Инструменты</h2>
            <router-link to="/"> Добавить </router-link>
          </div>
          <v-data-table
            :headers="headers6"
            :items="items6"
            dark
            disable-pagination
            :hide-default-footer="true"
            class="mb-10"
            hide-default-header
          >
          </v-data-table>

          <div class="d-flex justify-space-between align-center w-100">
            <v-tabs background-color="transparent" dark>
              <v-tab>
                <h2>Категории</h2>
              </v-tab>
              <v-tab>
                <h2>Рынки</h2>
              </v-tab>
              <v-tab>
                <h2>Платформы</h2>
              </v-tab>
              <v-tab>
                <h2>Формат</h2>
              </v-tab>
            </v-tabs>
            <router-link to="/"> Добавить </router-link>
          </div>
          <v-data-table
            :headers="headers7"
            :items="items7"
            dark
            disable-pagination
            :hide-default-footer="true"
            class="mb-10"
            hide-default-header
          >
          </v-data-table>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      headers1: [
        { text: "Название", value: "name", sortable: false },
        { text: "Сумма", value: "summ", sortable: false },
      ],
      items1: [
        {
          name: "Резервный/расходный фонд (10%)",
          summ: "$1 000 000",
        },
        {
          name: "Расходы на нужды (история)",
          summ: "$100 000",
        },
      ],

      headers2: [
        { text: "Имя", value: "name", sortable: false },
        { text: "Сумма", value: "summ", sortable: false },
        { text: "Отдел", value: "department", sortable: false },
      ],
      items2: [
        {
          name: "Слава",
          summ: "$1000 + 1%",
          department: "Администратор",
        },
        {
          name: "Виктор Петров",
          summ: "$1000",
          department: "Техподдержка",
        },
      ],

      headers3: [
        { text: "Имя", value: "name", sortable: false },
        { text: "Сумма", value: "summ", sortable: false },
        { text: "Отдел", value: "department", sortable: false },
      ],
      items3: [
        {
          name: "Андрей",
          summ: "33%",
          department: "Инвестор",
        },
        {
          name: "Сергей",
          summ: "33%",
          department: "Разработчик ботов",
        },
        {
          name: "Виталий",
          summ: "33%",
          department: "Организатор",
        },
      ],

      headers4: [
        { text: "Имя", value: "name", sortable: false },
        { text: "Сумма", value: "summ", sortable: false },
        { text: "Отдел", value: "department", sortable: false },
      ],
      items4: [
        {
          name: "Алекс",
          summ: "25%",
          department: "Раддар бот",
        },
        {
          name: "Эпик",
          summ: "25%",
          department: "Криптобот",
        },
      ],

      headers5: [
        { text: "Имя", value: "name", sortable: false },
        { text: "Тип", value: "type", sortable: false },
      ],
      items5: [
        {
          name: "Яндекс.Деньги",
          type: "пополнение",
        },
        {
          name: "QIWI",
          type: "пополнение",
        },
        {
          name: "Банковская карта",
          type: "пополнение",
        },
        {
          name: "Payeer",
          type: "пополнение, вывод",
        },
        {
          name: "PerfectMoney",
          type: "пополнение, вывод",
        },
        {
          name: "AdvCash",
          type: "пополнение, вывод",
        },
      ],

      headers6: [
        { text: "Имя", value: "name", sortable: false },
        { text: "Статус", value: "state", sortable: false },
      ],
      items6: [
        {
          name: "Binance",
          state: "2 в работе",
        },
        {
          name: "Forex брокер 1",
          state: "1 в работе, 1 на тестах",
        },
        {
          name: "Forex брокер 2",
          state: "1 на тестах, 2 рассматривается",
        },
        {
          name: "Инвестпроект недвижимость в Германии",
          state: "1 в работе",
        },
        {
          name: "Букмекерская биржа",
          state: "1 удален",
        },
        {
          name: "Mining 2.0",
          state: "3 в работе, 2 на тестах, 1 рассматривается, 2 удалено",
        },
      ],

      headers7: [
        { text: "Имя", value: "name", sortable: false },
        { text: "Инфо", value: "info", sortable: false },
      ],
      items7: [
        {
          name: "Алготрейдинг",
          info: "Кредитование",
        },
        {
          name: "Интернет-трейдинг",
          info: "P2P",
        },
        {
          name: "Инвестпроекты",
          info: "Гос. программы",
        },
        {
          name: "Недвижимость",
          info: "Майнинг 2.0",
        },
        {
          name: "IPO",
          info: "",
        },
      ],
    };
  },
  created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
