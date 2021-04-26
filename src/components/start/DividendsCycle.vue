<template>
	<v-container id="start">
		<StartNav />

		<v-tabs
			v-model="tab"
			class="mt-15 mb-15 mx-auto"
			background-color="transparent"
			centered
			dark
		>
			<v-tab
				href="#deals"
				style="border-bottom: 1px solid #f3f4f4"
				class="px-15 text-h6 w-100"
			>
				Сделки
			</v-tab>
			<v-tab
				href="#balance"
				class="px-15 text-h6 w-100"
				style="border-bottom: 1px solid #f3f4f4"
			>
				Баланс
			</v-tab>
		</v-tabs>
		<v-tabs-items v-model="tab" dark>
			<v-tab-item id="deals">
				<h5 class="text-h6 text-center mb-4">
					Добавление сделок в Цикле для Инструмента
					<span class="font-weight-bold text-decoration-underline"
						>NeiroGeniusBot</span
					>
					с
					<span class="font-weight-bold text-decoration-underline"
						>01/01/20 12:00</span
					>
				</h5>
				<div class="deals_content mx-auto d-flex justify-space-between flex-wrap">
					<div class="px-3 py-3 transactions_wrap mb-2 w-100 text-body-1">
						<p>1,5640152 USDT</p>
						<p>-0,5357415 USDT</p>
						<p>2,520352 USDT</p>
						<p>0,1569216 USDT</p>
						<p>0,002568 USDT</p>
						<p>0,324704 USDT</p>
						<p>-3,33052492 USDT</p>
						<p>-0,391398 USDT</p>
						<p>5,8073343 USDT</p>
						<p>7,2259569 USDT</p>
						<p>8,3256822 USDT</p>
						<p>-0,6679272 USDT</p>
						<p>-0,41638556 USDT</p>
						<p>0,1211598 USDT</p>
					</div>

					<v-checkbox
						class="text-h6"
						v-model="filesAllowed"
						label="Работает с файлом"
					></v-checkbox>
					<v-checkbox
						class="text-h6"
						v-model="auth"
						label="Автоматизирован"
					></v-checkbox>

					<v-file-input
						v-model="files"
						color="#f3f4f4"
						label="Файл"
						multiple
						placeholder="Выборите файлы"
						prepend-icon=""
						:show-size="1000"
						class="w-100 text-center mb-4 text-body-1 centered-input"
						centered
					>
					</v-file-input>

					<v-menu
						ref="menu"
						v-model="menu"
						:close-on-content-click="false"
						:return-value.sync="date"
						transition="scale-transition"
						offset-y
						min-width="auto"
						class="text-body-1"
					>
						<template v-slot:activator="{ on, attrs }">
							<v-text-field
								v-model="date"
								label="Дата и время последней сделки"
								prepend-icon=""
								readonly
								v-bind="attrs"
								v-on="on"
								class="centered-input"
							></v-text-field>
						</template>
						<v-date-picker v-model="date" no-title scrollable>
							<v-spacer></v-spacer>
							<v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
							<v-btn text color="primary" @click="$refs.menu.save(date)"> OK </v-btn>
						</v-date-picker>
					</v-menu>
					<v-btn
						x-large
						light
						class="rounded-0 text-center font-weight-bold ml-4 text-body-1"
						>Обновить</v-btn
					>
				</div>
			</v-tab-item>
			<v-tab-item id="balance"> balance </v-tab-item>
		</v-tabs-items>
	</v-container>
</template>

<script>
	import StartNav from './StartNav';
	export default {
		name: 'DividendsCycle',
		components: {
			StartNav,
		},
		data() {
			return {
				tab: 'deals',
				filesAllowed: false,
				auth: false,
			};
		},
		created() {},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	table {
		width: 100%;
		border-collapse: collapse;
		td {
			border: 1px solid #8c8f92;
			padding: 5px 10px;
			vertical-align: top;
			&.tool {
				text-decoration: underline;
			}
		}
		thead {
			td {
				padding: 10px;
				font-weight: 700;
				text-transform: uppercase;
			}
		}
	}

	.theme--dark.v-tabs-items {
		background: transparent !important;
	}

	.transactions_wrap {
		border: 1px solid #e8e9e9;
	}
	.deals_content {
		max-width: 642px;
	}
	.v-btn:not(.v-btn--round).v-size--x-large {
		height: 56px;
		min-width: 220px;
	}
	.v-tabs {
		max-width: 642px;
	}
</style>
