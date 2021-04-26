<template>
	<v-container id="start">
		<StartNav />

		<h5 class="text-h5 mt-15 mb-4 font-weight-bold">
			A. Сверка подсчета Дивидендов Инструмента прошедшего Цикла перед отправкой
			Юзерам
		</h5>
		<v-data-table
			:headers="headers1"
			:items="items1"
			dark
			disable-pagination
			:hide-default-footer="true"
			class="mb-15"
		>
			<template v-slot:item.name="{ item }">
				<div class="py-4">
					{{ item.name }}
				</div>
			</template>
			<template v-slot:item.summ="{ item }">
				<div class="py-4">
					{{ item.summ }}
				</div>
			</template>
			<template v-slot:item.users="{ item }">
				<div class="py-4">
					{{ item.users }}
				</div>
			</template>
		</v-data-table>

		<h5 class="text-h5 mt-15 mb-4 font-weight-bold">
			B. Сверка источников от куда были запросы на вывод Дивидендов или Депозитов
		</h5>
		<v-data-table
			:headers="headers2"
			:items="items2"
			dark
			disable-pagination
			:hide-default-footer="true"
			class="mb-15"
		>
			<template v-slot:item.type="{ item }">
				<div class="py-4">
					{{ item.type }}
				</div>
			</template>
			<template v-slot:item.summ="{ item }">
				<div class="py-4">
					{{ item.summ }}
				</div>
			</template>

			<template v-slot:header.summ="{ header }">
				<div style="white-space: nowrap">
					{{ header.text }}
				</div>
			</template>
		</v-data-table>

		<h5 class="text-h5 mt-15 mb-4 font-weight-bold">
			C. Отправка денег с Инструмента на Спецкошелек
		</h5>
		<v-data-table
			:headers="headers3"
			:items="items3"
			dark
			disable-pagination
			:hide-default-footer="true"
			class="mb-15"
		>
			<template v-slot:item.code="{ item }">
				<div class="d-flex justify-center flex-column align-center py-4">
					{{ item.code }}
					<v-btn class="mt-2 rounded-0 px-15 font-weight-bold" light x-large>
						copy
					</v-btn>
				</div>
			</template>
			<template v-slot:item.summ="{ item }">
				<div class="text-center py-4">
					{{ item.summ }} <br />
					От управляющих: <br />
					{{ item.manager }}
				</div>
			</template>
			<template v-slot:header.code="{ header }">
				<div class="text-center py-4">
					{{ header.text }}
				</div>
			</template>
			<template v-slot:header.summ="{ header }">
				<div class="text-center py-4">
					{{ header.text }}
				</div>
			</template>
		</v-data-table>

		<h5 class="text-h5 mt-15 mb-15 font-weight-bold">
			B. Таблица актуального баланса на Платежных системах и сумм для сбора Пула с
			них на Инструмент
		</h5>

		<v-form class="text-h6 dividents_form">
			<div class="d-flex align-center mb-10">
				<v-checkbox
					dark
					class="text-h6 mt-0 mr-4"
					v-model="agreed"
					label="Подтверждаю отправку денег на спецкошелек с комиссией "
					:full-width="false"
				></v-checkbox>
				<v-text-field
					class="mr-4 d-inline-block"
					v-model="summ"
					outlined
					centered
					dark
				>
				</v-text-field>
				USD
			</div>
			<div class="d-flex align-center mb-10">
				<v-btn class="px-15 py-8 font-weight-bold mr-8 text-h6" light>
					Запустить рассылку денег
				</v-btn>
				<p class="text-h6">
					Рассылка продолжится в фоновом режиме и произойдет переход на следующий
					раздел
				</p>
			</div>
		</v-form>
	</v-container>
</template>

<script>
	import StartNav from './StartNav';
	export default {
		name: 'DividendsUser',
		components: {
			StartNav,
		},
		data() {
			return {
				headers1: [
					{ text: 'НАИМЕНОВАНИЕ ДАННЫХ', value: 'name', sortable: false },
					{ text: 'ПОДСЧЕТЫ', value: 'count', sortable: false },
					{ text: 'ЮЗЕРЫ', value: 'users', sortable: false },
				],
				headers2: [
					{ text: 'ТИПЫ ЗАПРОСОВ', value: 'type', sortable: false },
					{ text: 'СУММА ЗАПРОСОВ', value: 'summ', sortable: false },
				],
				headers3: [
					{ text: 'СПЕЦКОШЕЛЕК ИНСТРУМЕНТА', value: 'code', sortable: false },
					{ text: 'ОБЩАЯ СУММА', value: 'summ', sortable: false },
				],
				headers4: [
					{ text: 'ПЛАТЕЖНАЯ СИСТЕМА', value: 'payment', sortable: false },
					{ text: 'СУММА ПЕРЕВОДА', value: 'summ', sortable: false },
					{ text: 'С КОМИССИЕЙ', value: 'commission', sortable: false },
					{ text: 'НАЛИЧИЕ В ИНСТРУМЕНТЕ', value: 'availability', sortable: false },
					{ text: 'УПРАВЛЯЮЩИЙ', value: 'manager', sortable: false },
				],

				items1: [
					{
						name:
							'Общая сумма Юзеров Цикла Инструмента ДО (сумма, что была в работе на Депозите)',
						count: 100,
						users: 100,
					},
					{
						name:
							'Общая сумма по результатам расчетов в “a” или “b” (сумма, что должна им зачислиться)',
						count: 100,
						users: 100,
					},
					{
						name:
							'Общая сумма Партнерам (сумма, что вычитается для Партнеров, если какие-то Юзеры зарегистрированы по реферальной ссылке)',
						count: 100,
						users: 100,
					},
					{
						name:
							'Комиссия сервису (сумма, что вычитается из Дивидендов с учетом, что у каждого может быть % разный от 10 до 20)',
						count: 100,
						users: 100,
					},
					{
						name:
							'Комиссия сервису (сумма, что вычитается из Дивидендов с учетом, что у каждого может быть % разный от 10 до 20)',
						count: 100,
						users: 100,
					},
					{
						name: 'Сколько от комиссии сервису сам сервис переведет рефералам',
						count: 100,
						users: 100,
					},
				],
				items2: [
					{
						type: 'С Инвестиционного баланса (запрос на вывод Депозита Инструмента)',
						summ: 100,
					},
					{
						type:
							'С Доходного баланса (что насчиталось в предыдущих вкладках Цикла Инструмента)',
						summ: 100,
					},
					{
						type:
							'С Партнерского баланса (что насчиталось в предыдущих вкладках Цикла Инструмента)',
						summ: 100,
					},
					{
						type:
							'ТЕКУЩИЙ ОСТАТОК НА ИНСТРУМЕНТЕ (сумма Депозитов Юзеров без учета новых заявок для нового Цикла, то есть Юзеры что делали Депозиты на Инструмент во время Цикла не учитываются)',
						summ: 100,
					},
					{ type: 'ИТОГО НА ОТПРАВКУ НА СПЕЦКОШЕЛЕК', summ: 1000 },
				],
				items3: [
					{
						code: 'ouiEO32832908(*@(*R98329889@(*89P8F93298F2398(*@#98',
						summ: 100,
						manager: 'Serg',
					},
				],
				items4: [
					{
						payment: 'ADVcash',
						summ: 250,
						commission: 251,
						availability: 100,
						manager: 'Serg',
					},
					{
						payment: 'Perfect Money',
						summ: 250,
						commission: 251,
						availability: 100,
						manager: 'Eng',
					},
					{
						payment: 'Payeer',
						summ: 250,
						commission: 251,
						availability: 100,
						manager: 'Eng',
					},
					{
						payment: 'Bitcoin',
						summ: 250,
						commission: 251,
						availability: 100,
						manager: 'Eng',
					},
					{
						payment: 'ИТОГО',
						summ: 1000,
						commission: 1004,
						availability: 2000,
						manager: '',
					},
				],

				agreed: false,
				summ: 0,
			};
		},
		created() {},
	};
</script>

<style scoped lang="scss"></style>
