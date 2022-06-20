import React from 'react';
import OrderCard from "./components/OrderCard";
import './App.css';
import Attribution from './components/Attribution';

function App() {
  return (
    <div className="App">
      <main>
        <OrderCard />
      </main>
      <footer>
        <Attribution />
      </footer>
    </div>
  );
}

export default App;
