import './App.css';
import Right from './components/right.js';
import Top from './components/top.js';
import Content from './components/main.js';

function App() {
  return (
    <div className="App">
      <Top />
      <Right />
      <Content />
    </div>
  );
}

export default App;
