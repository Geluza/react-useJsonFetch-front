import './App.css';
import Example from './components/Example';

function App() {
  return (
    <div>
    <Example endpoint='data' />
    <Example endpoint='error' />
    <Example endpoint='loading' />
    </div>
  );
}

export default App;