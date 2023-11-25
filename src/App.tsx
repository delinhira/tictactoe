import './styles.css';
import { Provider } from 'react-redux';
import store from './store/store';
import TicTacToe from './components/TicTacToe';

export default function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<TicTacToe />
			</div>
		</Provider>
	);
}
