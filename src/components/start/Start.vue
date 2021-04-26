<template>
	<v-container id="start">
		<StartNav />

		<h3 class="text-center font-weight-bold text-h5 mt-15 mb-6">
			Какому решению делаем обновление Цикла?
		</h3>
		<table>
			<thead>
				<tr>
					<td>ТИП РЕШЕНИЯ</td>
					<td>РЫНОК</td>
					<td>ПЛОЩАДКА</td>
					<td>ИНСТРУМЕНТ</td>
					<td>СТАТИСТИКА</td>
					<td>ПОСЛЕДНИЙ ЦИКЛ</td>
					<td>УПРАВЛЯЮЩИЙ</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td rowspan="10">Алготрейдинг</td>
					<td rowspan="6">Крипторынок</td>
					<td rowspan="4">Binance</td>
					<td rowspan="2" class="tool">SkyGeniusBot</td>
					<td>OLD: 100 юзеров с балансом $100 000</td>
					<td rowspan="2">01/01/20 12:00</td>
					<td rowspan="2">Serg</td>
				</tr>
				<tr>
					<td>NEW: +50 юзеров и +$5500 депозит</td>
				</tr>
				<tr>
					<td rowspan="2" class="tool">NeiroGeniusBot</td>
					<td>OLD: 100 юзеров с балансом $100 000</td>
					<td rowspan="2">01/01/20 12:00</td>
					<td rowspan="2">Eng</td>
				</tr>
				<tr>
					<td>NEW: +50 юзеров и +$5500 депозит</td>
				</tr>
				<tr>
					<td rowspan="2">Betmex</td>
					<td rowspan="2" class="tool">Cryptobot</td>
					<td>OLD: 100 юзеров с балансом $100 000</td>
					<td rowspan="2">01/01/20 12:00</td>
					<td rowspan="2">Serg</td>
				</tr>
				<tr>
					<td>NEW: +50 юзеров и +$5500 депозит</td>
				</tr>
				<tr>
					<td rowspan="2">Фьючерсный рынок</td>
					<td rowspan="2">Binance</td>
					<td rowspan="2" class="tool">Futuresbot</td>
					<td>OLD: 100 юзеров с балансом $100 000</td>
					<td rowspan="2">01/01/20 12:00</td>
					<td rowspan="2">Serg</td>
				</tr>
				<tr>
					<td>NEW: +50 юзеров и +$5500 депозит</td>
				</tr>
				<tr>
					<td rowspan="2">Букмекерский рынок</td>
					<td rowspan="2">Betfair</td>
					<td rowspan="2" class="tool">Newbot 001</td>
					<td>OLD: 100 юзеров с балансом $100 000</td>
					<td rowspan="2">01/01/20 12:00</td>
					<td rowspan="2">Serg</td>
				</tr>
				<tr>
					<td>NEW: +50 юзеров и +$5500 депозит</td>
				</tr>
				<tr>
					<td rowspan="2">Майнинг</td>
					<td rowspan="2">-</td>
					<td rowspan="2">Service 1</td>
					<td rowspan="2" class="tool">Newbot 001</td>
					<td>OLD: 100 юзеров с балансом $100 000</td>
					<td rowspan="2">01/01/20 12:00</td>
					<td rowspan="2">Serg</td>
				</tr>
				<tr>
					<td>NEW: +50 юзеров и +$5500 депозит</td>
				</tr>
				<tr>
					<td rowspan="2">Трейдеры</td>
					<td rowspan="2">Акции</td>
					<td rowspan="2">РТС</td>
					<td rowspan="2" class="tool">Trader 001</td>
					<td>OLD: 100 юзеров с балансом $100 000</td>
					<td rowspan="2">01/01/20 12:00</td>
					<td rowspan="2">Serg</td>
				</tr>
				<tr>
					<td>NEW: +50 юзеров и +$5500 депозит</td>
				</tr>
			</tbody>
		</table>
	</v-container>
</template>

<script>
	import StartNav from './StartNav';
	export default {
		name: 'Start',
		components: {
			StartNav,
		},
		data() {
			return {};
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
</style>
