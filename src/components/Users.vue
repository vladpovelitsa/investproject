<template>
  <div id="users">
    <v-data-table :headers="headers" :items="items" dark> </v-data-table>
  </div>
</template>

<script>
export default {
  name: "Users",

  data() {
    return {
      headers: [
        { text: "Логин", value: "login", sortable: false },
        { text: "Имя", value: "name", sortable: false },
        { text: "Дата регистрации", value: "regdate", sortable: false },
        { text: "Баланс", value: "balance", sortable: false },
      ],
      items: [
        {
          login: "woo****@gmail.com",
          name: "Анджелина Джоли",
          regdate: "2020.01.01 в 21:00",
          balance: "$100 + –",
        },
        {
          login: "woo****@gmail.com",
          name: "Анджелина Джоли",
          regdate: "2020.01.01 в 21:00",
          balance: "$100 + –",
        },
        {
          login: "woo****@gmail.com",
          name: "Анджелина Джоли",
          regdate: "2020.01.01 в 21:00",
          balance: "$100 + –",
        },
        {
          login: "woo****@gmail.com",
          name: "Анджелина Джоли",
          regdate: "2020.01.01 в 21:00",
          balance: "$100 + –",
        },
        {
          login: "woo****@gmail.com",
          name: "Анджелина Джоли",
          regdate: "2020.01.01 в 21:00",
          balance: "$100 + –",
        },
        {
          login: "woo****@gmail.com",
          name: "Анджелина Джоли",
          regdate: "2020.01.01 в 21:00",
          balance: "$100 + –",
        },
        {
          login: "woo****@gmail.com",
          name: "Анджелина Джоли",
          regdate: "2020.01.01 в 21:00",
          balance: "$100 + –",
        },
        {
          login: "woo****@gmail.com",
          name: "Анджелина Джоли",
          regdate: "2020.01.01 в 21:00",
          balance: "$100 + –",
        },
        {
          login: "woo****@gmail.com",
          name: "Анджелина Джоли",
          regdate: "2020.01.01 в 21:00",
          balance: "$100 + –",
        },
        {
          login: "woo****@gmail.com",
          name: "Анджелина Джоли",
          regdate: "2020.01.01 в 21:00",
          balance: "$100 + –",
        },
        {
          login: "woo****@gmail.com",
          name: "Анджелина Джоли",
          regdate: "2020.01.01 в 21:00",
          balance: "$100 + –",
        },
        {
          login: "woo****@gmail.com",
          name: "Анджелина Джоли",
          regdate: "2020.01.01 в 21:00",
          balance: "$100 + –",
        },
        {
          login: "woo****@gmail.com",
          name: "Анджелина Джоли",
          regdate: "2020.01.01 в 21:00",
          balance: "$100 + –",
        },
        {
          login: "woo****@gmail.com",
          name: "Анджелина Джоли",
          regdate: "2020.01.01 в 21:00",
          balance: "$100 + –",
        },
        {
          login: "woo****@gmail.com",
          name: "Анджелина Джоли",
          regdate: "2020.01.01 в 21:00",
          balance: "$100 + –",
        },
      ],
    };
  },
  created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
