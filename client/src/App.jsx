import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ForgetPassword from './components/ForgetPassword';
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
        <Route path="/" element={<Navigate replace to="/forgot-password" />} />
      </Routes>
    </Router>
  );
}

export default App;
