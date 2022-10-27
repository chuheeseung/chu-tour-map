import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="home" element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
