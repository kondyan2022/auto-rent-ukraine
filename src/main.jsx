import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { Suspense } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <Suspense fallback={<div>loading...</div>}>
      <BrowserRouter basename="/auto-rent-ukraine/">
        <App />
      </BrowserRouter>
    </Suspense>
  </Provider>,
  // {/* </React.StrictMode> */}
);
