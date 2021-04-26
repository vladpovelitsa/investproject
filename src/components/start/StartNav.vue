<template>
	<ul id="startNav" class="d-flex justify-center">
		<li>
			<router-link
				class="text-decoration-none link px-6 py-2 mx-3"
				:to="{ name: 'start' }"
			>
				1. Завершение <br />
				Цикла
			</router-link>
		</li>
		<li>
			<router-link
				class="text-decoration-none link px-6 py-2 mx-3"
				:to="{ name: 'dividends-cycle' }"
			>
				2. Расчет <br />
				Дивидендов Цикла
			</router-link>
		</li>
		<li>
			<router-link
				class="text-decoration-none link px-6 py-2 mx-3"
				:to="{ name: 'dividends-user' }"
			>
				3. Расчет <br />
				Дивидендов Юзеров
			</router-link>
		</li>
		<li>
			<router-link
				class="text-decoration-none link px-6 py-2 mx-3"
				:to="{ name: 'new-cycle' }"
			>
				4. Старт Нового <br />
				Цикла</router-link
			>
		</li>
		<li>
			<router-link
				class="text-decoration-none link px-6 py-2 mx-3"
				:to="{ name: 'approve' }"
			>
				5. Утверждение</router-link
			>
		</li>
		<li>
			<router-link
				class="text-decoration-none link px-4 py-2 mx-3 d-flex align-center justify-center"
				:to="{ name: 'done' }"
			>
				<v-icon
					size="60px"
					:color="this.$route.path == '/done' ? '#555d6a' : '#8a8d8f'"
					class="font-weigth-bold"
					>mdi-check</v-icon
				></router-link
			>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'Start',

		data() {
			return {};
		},
		created() {},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	#startNav {
		list-style: none;
	}
	li {
		&:last-of-type {
			.link:before {
				display: none;
			}
		}
	}
	.link {
		color: #8a8d8f !important;
		border: 5px solid currentColor;
		font-size: 1.3rem;
		font-weight: 700;
		display: block;
		height: 100%;
		position: relative;
		z-index: 5;
		&:before {
			content: '';
			display: block;
			height: 5px;
			background: #8a8d8f;
			position: absolute;
			top: 50%;
			left: calc(100% + 5px);
			transform: translate(0, -50%);
			width: 24px;
			z-index: -1;
		}

		&.router-link-exact-active {
			color: #555d6a !important;
			background: #f3f4f4;
			border-color: #f3f4f4;
		}
	}
</style>
