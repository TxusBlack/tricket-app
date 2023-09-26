import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Dashboard from './layouts/Dashboard'
import ScannerPage from './pages/Scanner'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<>A</>}>
      <Route index path="/" element={<Dashboard />} />
      <Route path="/scanner" element={<Dashboard />}> {/* Scanner Pages */}
        <Route path="/" element={<ScannerPage />} />
      </Route>
    </Route>
  )
)

function App({routes}) {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
