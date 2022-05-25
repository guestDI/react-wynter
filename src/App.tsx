import './App.css';
import ProductsDashboard from './dashboards/ProductsDashboard/ProductsDashboard';
import Login from './dashboards/Login';
import { Route, Routes } from 'react-router-dom';
import SignUp from './dashboards/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/dashboard" element={<ProductsDashboard />} />
    </Routes>
  );
}

export default App;
