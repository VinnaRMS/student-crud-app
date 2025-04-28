import './App.css';
import MyFooter from './components/MyFooter';
import MyHeader from './components/MyHeader';
import { Outlet } from 'react-router-dom';

function App() {
  const heading = "STUDENT MANAGEMENT";
  const jsxelement = <h2 className="text-center bg-primary text-white py-3 m-0">🏫 {heading}</h2>;

  return (
    <>
      {/* Header Section */}
      <div className="w-100 shadow">
        {jsxelement}
        <MyHeader />
      </div>

      {/* Scrollable Content */}
      <div className="main-content container my-4">
        <Outlet />
      </div>

      {/* Footer Section */}
      <MyFooter />
    </>
  );
}

export default App;
