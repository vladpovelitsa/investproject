<template>
	<div id="CreateProject">
		<v-form
			class="create_form d-flex justify-center"
			@submit.prevent="saveProject"
		>
			<v-text-field
				label="Добавить проект"
				placeholder="Название"
				class="create_form__input rounded-0"
				color="var(--text-color)"
				dark
				outlined
				v-model="name"
				:rules="rules"
				required
			></v-text-field>
			<v-btn
				outlined
				class="rounded-0 create_form__btn"
				color="var(--text-color)"
				type="submit"
				@click="save"
				>Добавить
			</v-btn>
		</v-form>
	</div>
</template>

<script>
	export default {
		name: 'CreateProject',

		data() {
			return {
				rules: [(v) => !!v || 'Обязательное поле'],
				name: '',
			};
		},
		methods: {
			saveProject() {
				alert('Сохранено');
			},
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	#CreateProject {
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
		padding: 85px;
		&__btn {
			height: 56px !important;
			width: 180px;
			margin-left: 75px;
		}
	}
</style>
