import React from 'react';
import ReactDOM from 'react-dom/client';
import { AdaptivityProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { GroupsProvider } from 'src/context/GroupsContext';
import 'src/styles/index.scss';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GroupsProvider>
      <AdaptivityProvider>
        <App />
      </AdaptivityProvider>
    </GroupsProvider>
  </React.StrictMode>
);
