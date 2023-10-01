import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Dashboard from './layouts/Dashboard'
import ScannerPage from './pages/Scanner'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index path="/" element={<Dashboard />} />
      <Route path="/scanner" element={<ScannerPage />} />
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
