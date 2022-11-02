import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import { set as setUser, load as loadUser, reset as resetUser } from './redux/user/actions';
import {useUser} from "./redux/user/selector";

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const currentUser = useUser();

  const handleChange = method => e => method(e.target.value);

  const handleConnect = async () => {
    const userData = await axios.post('http://localhost:1337/api/auth/local', { identifier: username, password });
    await dispatch(setUser(userData.data));
  };

  const handleDisconnect = () => {
    // LOGOUT
    dispatch(resetUser());
  }

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome in beautiful world named <span style={{ backgroundImage: 'linear-gradient(to left, violet, green, yellow, orange, red)', '-webkit-background-clip': 'text', color: 'transparent' }}>Redux</span> ! 🥰
        </p>
        <p>
          {currentUser?.jwt ? (
            <>
              You are connected with {currentUser.user.email}
            </>
          ) : (
            <>
              Connect here !
            </>
          )}
        </p>
        {currentUser?.jwt ? (
          <>
            <button type="button" onClick={handleDisconnect} style={{ marginTop: 10 }}>Diconnect</button>
          </>
        ) : (
          <>
            <input type="text" value={username} onChange={handleChange(setUsername)} placeholder="Username" />
            <input type="password" value={password} onChange={handleChange(setPassword)} placeholder="Password" />
            <button type="button" onClick={handleConnect} style={{ marginTop: 10 }}>Connect to beautiful world</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
