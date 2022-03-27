import './App.css';
// import CustomButton from './components/CustomButton';
import CustomGrid from './components/CustomGrid';

const list1 = [
  'Development & build',
  'Configuration',
  'Typechecking',
  'Eslint',
  'Testing',
  'CICD'
]

const list2 = [
  'State Management',
  'Data flow',
  'Middlewares',
  'Localization',
  'Helpers'
]

const list3 = [
  'Components',
  'Styling & Theming',
  'Responsivity',
  'Tracking',
  'Misc'
]

/** Main component */
const App = () => {
	const listItems = { list1, list2, list3 }
	return (
		<div className="App">
			{/* <CustomButton name= "Signup"/> */}
			<header className="App-header">
				<h1>Custom Grid</h1>
				{/* <CustomButton name= "Login"/> */}
				<CustomGrid listItems = {listItems} />
			</header>
		</div>
	);
}

export default App;
