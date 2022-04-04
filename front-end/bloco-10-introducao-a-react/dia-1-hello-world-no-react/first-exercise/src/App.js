import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const compromissos = ['Estudar', 'Comer', 'Banhar', 'Dormir'];
  return <>{compromissos.map((e) => Task(e))}</>;
}

export default App;