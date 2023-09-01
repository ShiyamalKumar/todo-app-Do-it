import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import AllTask from './components/AllTask';
import TaskPage from './components/TaskPage';
import './styles.css';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h1>Do It</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">All Tasks</Link>
              </li>
              <li>
                <Link to="/incomplete">Incomplete</Link>
              </li>
              <li>
                <Link to="/completed">Completed</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<AllTask />} />
            <Route path="/incomplete" element={<TaskPage filter="incomplete" />} />
            <Route path="/completed" element={<TaskPage filter="completed" />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
