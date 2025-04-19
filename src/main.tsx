import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';
import './styles/layouts.css';
import './styles/themes.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(<App />);
