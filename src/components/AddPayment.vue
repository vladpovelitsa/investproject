<template>
  <div id="addSpend">
    <v-form class="w-100 form_wrap">
      <div class="d-flex justify-between align-center mb-8 px-6 w-100">
        <h3 class="text-h4">Добавление Платежной системы</h3>
        <v-checkbox
          v-model="showPayment"
          dark
          color="white"
          label="Отображать"
          class="ml-4"
        ></v-checkbox>
        <v-checkbox
          v-model="useApi"
          dark
          color="white"
          label="Автоматизация по API"
          class="mx-auto"
        ></v-checkbox>
        <v-btn
          outlined
          class="rounded-0 create_form__btn text-h5"
          color="var(--text-color)"
          type="submit"
          @click="save"
          >Сохранить
        </v-btn>
      </div>
      <div class="create_form" @submit.prevent="saveProject">
        <v-text-field
          label="Название способа оплаты / вывода"
          class="create_form__input rounded-0"
          color="var(--text-color)"
          dark
          outlined
          :rules="rules"
          required
          append-icon="mdi-magnify"
          v-model="name"
        ></v-text-field>
        <v-text-field
          label="Комиссия"
          class="create_form__input rounded-0"
          color="var(--text-color)"
          dark
          outlined
          :rules="rules"
          required
          v-model="comission"
        ></v-text-field>
        <v-text-field
          label="Сокращение"
          class="create_form__input rounded-0"
          color="var(--text-color)"
          dark
          outlined
          :rules="rules"
          required
          v-model="abbr"
        ></v-text-field>
        <v-file-input
          accept="image/*"
          label="Иконка"
          outlined
          required
          v-model="icon"
          class="create_form__input rounded-0"
          dark
          prepend-icon=""
          append-icon="mdi-folder-image"
        ></v-file-input>
        <v-select
          class="create_form__input rounded-0"
          :items="items"
          label="Управляющий"
          v-model="admin"
          required
          outlined
          dark
        ></v-select>
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
      items: ["Юзер 1", "Юзер 2", "Юзер 3"],
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
  grid-template-columns: 1fr 1fr;
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
