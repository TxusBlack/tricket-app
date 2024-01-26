import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Dashboard from './components/templates/Dashboard'
import ScannerPage from './pages/Scanner'
import AtomsPage from './pages/atoms';
import MoleculesPage from './pages/molecules';
import OrganismPage from './pages/organism';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index path="/" element={<Dashboard />} />
      <Route path="/scanner" element={<ScannerPage />} />
      <Route path="/atoms" element={<AtomsPage />} />
      <Route path='/molecules' element={<MoleculesPage/>} />
      <Route path="/organism" element={<OrganismPage/>} />
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
