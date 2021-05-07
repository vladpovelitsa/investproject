<template>
  <div id="changeFund">
    <v-form>
      <div class="d-flex align-center mb-8 px-6">
        <h3 class="text-h4">Изменить резервный/расходный фонд</h3>
        <v-btn
          outlined
          class="rounded-0 create_form__btn text-h5"
          color="var(--text-color)"
          type="submit"
          @click="save"
          >Сохранить
        </v-btn>
      </div>
      <div
        class="create_form d-flex justify-center align-center"
        @submit.prevent="saveProject"
      >
        <h3 class="text-h2 mr-3">%</h3>
        <v-text-field
          placeholder="Процент"
          class="create_form__input rounded-0"
          color="var(--text-color)"
          dark
          outlined
          v-model="value"
          :rules="rules"
          required
        ></v-text-field>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "ChangeFund",

  data() {
    return {
      rules: [(v) => !!v || "Обязательное поле"],
      value: "10",
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
#changeFund {
  height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.create_form {
  width: 100%;
  max-width: 1020px;
  border: 1px solid var(--text-color);
  border-radius: 18px;
  padding: 50px 130px;
  &__btn {
    height: 56px !important;
    width: 140px;
    margin-left: 75px;
  }
}
</style>
