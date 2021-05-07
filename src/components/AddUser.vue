<template>
  <div id="addSpend">
    <v-form class="w-100 form_wrap">
      <div class="d-flex justify-between align-center mb-8 px-6 w-100">
        <h3 class="text-h4">Добавить расход</h3>
        <v-btn
          outlined
          class="rounded-0 create_form__btn text-h5"
          color="var(--text-color)"
          type="submit"
          @click="save"
          >Добавить
        </v-btn>
      </div>
      <div
        class="create_form d-flex flex-column justify-center align-center"
        @submit.prevent="saveProject"
      >
        <v-text-field
          label="Найти пользователя"
          class="create_form__input rounded-0 w-100 mb-6"
          color="var(--text-color)"
          dark
          outlined
          :rules="rules"
          required
          append-icon="mdi-magnify"
          v-model="search"
        ></v-text-field>
        <v-text-field
          label="Должность"
          class="create_form__input rounded-0 w-100 mb-6"
          color="var(--text-color)"
          dark
          outlined
          :rules="rules"
          required
          v-model="position"
        ></v-text-field>
        <div class="d-flex align-center w-100">
          <h3 class="text-h4 mx-3">$</h3>
          <v-text-field
            label="Сумма"
            class="create_form__input rounded-0 w-100"
            color="var(--text-color)"
            dark
            outlined
            v-model="summ"
            :rules="rules"
            required
          ></v-text-field>
          <h3 class="text-h4 mx-3">%</h3>
          <v-text-field
            label="Комиссия"
            class="create_form__input rounded-0 w-100"
            color="var(--text-color)"
            dark
            outlined
            v-model="comission"
            :rules="rules"
            required
          ></v-text-field>
        </div>
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
      position: "",
      user: "",
      summ: "",
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
  border-radius: 18px;
  padding: 50px 130px;
  &__btn {
    height: 56px !important;
    width: 140px;
    margin-left: auto;
  }
}
</style>
