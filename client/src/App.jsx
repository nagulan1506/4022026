import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ForgetPassword from './components/ForgetPassword';
import ResetPassword from './components/ResetPassword';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
        <Route path="/" element={<Navigate replace to="/register" />} />
      </Routes>
    </Router>
  );
}

export default App;
