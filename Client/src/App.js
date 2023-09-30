
import './App.css';
import Loading from './components/Loading';
import Navbar from './components/Navbar/Navbar';
import Notification from './components/Notification';
import Login from './components/user/Login';

function App() {
  return (
    <>
      <Loading/>
      <Notification/>
      <Login />
      <Navbar />
    </>
  );
}

export default App;
