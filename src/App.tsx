import './App.css';
import ProductsDashboard from './dashboards/ProductsDashboard/ProductsDashboard';
import Login from './dashboards/Login/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<ProductsDashboard />} />
    </Routes>
  );
}

export default App;
