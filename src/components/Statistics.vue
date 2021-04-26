<template>
	<div id="login">
		<v-container>
			<v-row>
				<v-col cols="12">
					<v-tabs
						dark
						centered
						background-color="transparent"
						color="var(--text-color)"
						class="mx-auto mb-10"
						show-arrows
						:footer-props="{
							itemsPerPageText: 'Строк на страницу',
						}"
					>
						<v-tabs-slider hidden></v-tabs-slider>
						<v-tab v-for="tab in tabs" :key="tab" class="text-h5 px-12">
							{{ tab }}
						</v-tab>
						<v-tab class="text-h5">
							<router-link :to="{ name: 'new-project' }"> + </router-link>
						</v-tab>
					</v-tabs>
				</v-col>
			</v-row>
			<v-row>
				<v-col md="12" lg="6" xl="3" class="mb-10">
					<v-data-table
						:headers="headers1"
						:items="items1"
						dark
						disable-pagination
						:hide-default-footer="true"
					></v-data-table>
				</v-col>
				<v-col md="12" lg="6" xl="3">
					<v-data-table
						:headers="headers2"
						:items="items1"
						dark
						disable-pagination
						:hide-default-footer="true"
					></v-data-table>
				</v-col>
				<v-col md="12" lg="6" xl="3"
					><v-data-table
						:headers="headers3"
						:items="items1"
						dark
						disable-pagination
						:hide-default-footer="true"
					></v-data-table
				></v-col>
				<v-col md="12" lg="6" xl="3">
					<v-data-table
						:headers="headers4"
						:items="items1"
						dark
						disable-pagination
						:hide-default-footer="true"
					></v-data-table>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	export default {
		name: 'Statistics',

		data() {
			return {
				tabs: ['Инвестпроект 1', 'Инвестпроект 2', 'Инвестпроект 3'],
				headers1: [
					{ text: 'Пользователи', value: 'name', sortable: false },
					{ text: '', value: 'val', sortable: false },
				],
				headers2: [
					{ text: 'Пользователи', value: 'name', sortable: false },
					{ text: '', value: 'val', sortable: false },
				],
				headers3: [
					{ text: 'Баланс на кошельках', value: 'name', sortable: false },
					{ text: '$5000', value: 'val', sortable: false },
				],
				headers4: [
					{ text: 'Баланс на решениях', value: 'name', sortable: false },
					{ text: '$5000', value: 'val', sortable: false },
				],

				items1: [
					{ name: 'Строка', val: 0 },
					{ name: 'Строка', val: 0 },
					{ name: 'Строка', val: 0 },
					{ name: 'Строка', val: 0 },
					{ name: 'Строка', val: 0 },
					{ name: 'Строка', val: 0 },
					{ name: 'Строка', val: 0 },
					{ name: 'Строка', val: 0 },
					{ name: 'Строка', val: 0 },
					{ name: 'Строка', val: 0 },
					{ name: 'Строка', val: 0 },
				],
			};
		},
		created() {},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.v-tab {
		text-decoration: underline;
		text-transform: none;
		&.v-tab--active {
			text-decoration: none;
			font-weight: 700;
		}
	}
</style>
