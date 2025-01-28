import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as ReactDOM from "react-dom/client";
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/ROutes';
import AuthProvider from './providers/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
  <AuthProvider>
    <HelmetProvider>
  <RouterProvider router={router} />
  </HelmetProvider>
  </AuthProvider>
  </QueryClientProvider>
  </React.StrictMode>
);
