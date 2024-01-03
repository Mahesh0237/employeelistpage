import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@mantine/notifications/styles.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <ModalsProvider>
        <Notifications position="top-right" zIndex={1000} />
        <App />
      </ModalsProvider>
    </MantineProvider>
  </React.StrictMode>,
)
