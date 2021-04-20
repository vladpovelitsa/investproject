<template>
	<header class="header" id="header">
		<v-container>
			<v-row align="center">
				<nav>
					<ul class="d-flex nav justify-space-between">
						<li>
							<router-link class="text-decoration-none" :to="{ name: 'statistics' }">
								Статистика
							</router-link>
						</li>
						<li>
							<router-link class="text-decoration-none" :to="{ name: 'login' }">
								Начать движуху
							</router-link>
						</li>
						<li>
							<router-link class="text-decoration-none" :to="{ name: 'home' }">
								Настройки
							</router-link>
						</li>
						<li>
							<router-link class="text-decoration-none" :to="{ name: 'home' }">
								Профиль
							</router-link>
						</li>
					</ul>
				</nav>
				<v-form class="d-flex header_commission ml-auto align-items-center">
					<v-text-field
						label=""
						class="text-h6 p-4 header_commission__input text-center rounded-0"
						color="var(--text-color)"
						dark
						outlined
						:filled="commission ? false : true"
						v-model="commission"
						:rules="rules"
						@focus="disabled = false"
					></v-text-field>
					<v-btn
						color="white"
						class="header_commission__btn rounded-0"
						v-if="!disabled"
						@click="saveCommission"
					>
						<v-icon large> mdi-check </v-icon>
					</v-btn>
				</v-form>

				<v-text-field
					label="Найти пользователя"
					placeholder="Введите имя"
					class="header_search ml-4 p-4"
					color="var(--text-color)"
					dark
					append-icon="mdi-magnify"
					v-model="search"
				>
					<template>
						<input type="text" />
					</template>
				</v-text-field>
			</v-row>
		</v-container>
	</header>
</template>

<script>
	export default {
		name: 'Header',
		data() {
			return {
				search: '',
				commission: '20',
				disabled: true,
				rules: [(v) => /^[0-9]*$/gi.test(v) || 'Только цифры'],
			};
		},
		methods: {
			saveCommission() {
				alert('сохранено');
				this.disabled = !this.disabled;
			},
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.header {
		border-bottom: 1px solid var(--text-color);
		position: fixed;
		z-index: 100;
		top: 0;
		left: 0;
		width: 100%;
		padding: 0 15px;
		background-color: var(--main-color);
		&_search {
			max-width: 390px;
			height: 55px;
			input {
				font-size: 3rem !important;
			}
		}
		&_commission {
			height: 50px;
			&__btn {
				width: 50px;
				height: 55px !important;
			}
			&__input {
				height: 100% !important;
				max-width: 80px;
				text-align: center !important;
				font-size: 3rem;
			}
		}
	}

	.nav {
		list-style: none;
		a {
			padding: 40px 44px 24px;
			display: block;
			margin-right: 44px;
			border-bottom: 4px solid transparent;
			font-size: 1.6rem;
			font-weight: 600;
			&.router-link-exact-active {
				border-bottom: 4px solid currentColor;
			}
			&:hover {
				opacity: 0.75;
			}
		}
	}
	@media screen and (max-width: 1900px) {
		.nav {
			a {
				font-size: 1.1rem;
				margin-right: 20px;
				padding: 40px 10px 24px;
			}
		}
		.header {
			&_search {
				max-width: 200px;
			}
			&_commission {
				height: 35px;
				&__input {
					max-width: 80px;
				}
				&__btn {
					min-width: 40px !important;
					height: 40px !important;
					padding: 2px !important;
				}
			}
		}
	}
	@media screen and (max-width: 1400px) {
		.nav {
			a {
				margin-right: 10px;
				padding: 20px 10px 14px;
			}
		}
	}
</style>
