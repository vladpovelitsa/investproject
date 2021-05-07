<template>
  <div id="addSpend">
    <v-form class="w-100 form_wrap">
      <div class="d-flex justify-between align-center mb-8 px-6 w-100">
        <h3 class="text-h4">% разработчику от наших дивидендов</h3>

        <v-btn
          outlined
          class="rounded-0 create_form__btn text-h5"
          color="var(--text-color)"
          type="submit"
          @click="save"
          >Добавить
        </v-btn>
      </div>
      <div class="create_form" @submit.prevent="saveProject">
        <v-select
          class="create_form__input rounded-0"
          :items="items"
          label="Выбрать решение"
          v-model="admin"
          required
          outlined
          dark
        ></v-select>
        <v-text-field
          label="Комиссия"
          class="create_form__input rounded-0"
          color="var(--text-color)"
          dark
          outlined
          :rules="rules"
          required
          prepend-icon="mdi-percent"
          v-model="name"
        ></v-text-field>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "AddSpend",

  data() {
    return {
      rules: [(v) => !!v || "Обязательное поле"],
      name: "",
      comission: "",
      abbr: "",
      admin: "",
      icon: null,
      items: ["Решение 1", "Решение 2", "Решение 3"],
      useApi: true,
      showPayment: false,
    };
  },
  methods: {
    saveProject() {
      alert("Сохранено");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#addSpend {
  height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.form_wrap {
  width: 100%;
  max-width: 1020px;
}
.create_form {
  width: 100%;
  border: 1px solid var(--text-color);
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  border-radius: 18px;
  padding: 50px 130px;
  &__btn {
    height: 56px !important;
    width: 140px;
    margin-left: auto;
  }
}
</style>
