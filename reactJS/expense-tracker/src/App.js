import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
	return (
		<GlobalProvider>
			<Header />
			<main className='container'>
				<div className='container--left'>
					<Balance />
					<IncomeExpenses />
					<TransactionList />
				</div>
				<div className='container--right'>
					<AddTransaction />
				</div>
			</main>
		</GlobalProvider>
	);
}

export default App;
