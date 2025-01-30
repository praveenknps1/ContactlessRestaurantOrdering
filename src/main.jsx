// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store, persistor } from './toolkit/store.js';
import { PersistGate } from 'redux-persist/integration/react';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Root element not found. Ensure your HTML has a <div id="root"></div>.');
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <PersistGate 
          loading={<div>Loading...</div>} 
          persistor={persistor} // Adds a fallback UI for better user experience
        >
          <App />
        </PersistGate>
      </Provider>
    </StrictMode>
  );
}
