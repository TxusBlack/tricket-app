import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Dashboard from './components/templates/Dashboard'
import ScannerPage from './pages/Scanner'
import AtomsPage from './pages/components/atoms';
import MoleculesPage from './pages/components/molecules';
import OrganismPage from './pages/components/organism';
import EventsPage from './pages/Events';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index path="/" element={<Dashboard />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/scanner" element={<ScannerPage />} />
      <Route path="/components/atoms" element={<AtomsPage />} />
      <Route path='/components/molecules' element={<MoleculesPage/>} />
      <Route path="/components/organism" element={<OrganismPage/>} />
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
