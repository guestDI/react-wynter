import './App.css';
import ProductsDashboard from './dashboards/ProductsDashboard/ProductsDashboard';
import Login from './dashboards/Login';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import SignUp from './dashboards/SignUp';
import { useAuthContext } from './context/AuthContext';

function ProtectedRoute({ children }: { children: JSX.Element }) {
  let {isUserLoggedIn} = useAuthContext();
  let location = useLocation();

  if (!isUserLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <ProductsDashboard />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;
