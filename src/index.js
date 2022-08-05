import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './ui/css/reset.module.scss';
import './ui/css/mainStyles.module.scss';
import './ui/css/elements.module.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
