import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App';
import { darkTheme } from './theme';

// 👇️ IMPORTANT: div ID has to match with index.html
const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
    <ThemeProvider theme={darkTheme}>
    <App />
    </ThemeProvider>
);