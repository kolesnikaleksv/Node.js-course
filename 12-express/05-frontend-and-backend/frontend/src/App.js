import { useEffect, useState } from 'react';

import './App.css';

const App = () => {
  const [state, setState] = useState();

  useEffect(() => {
    fetch('http://127.0.0.1:5000')
      .then((res) => res.json())
      .then((data) => setState(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(state);

  return (
    <div className="App">
      <div>
        {!state
          ? 'I have no data from server'
          : `I have data from server: age - ${state.age}, and name - ${state.name}`}
      </div>
    </div>
  );
};

export default App;
