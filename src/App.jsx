import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Employeelistpage from './pages/Employeelistpage';
import { Suspense, lazy } from "react";
import { Loader, Stack } from "@mantine/core";
const Employeelistpage = lazy(() => import('./pages/Employeelistpage'))
function App() {

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <Stack justify="center" align="center" style={{height:"100vh"}}>
            <Loader color="blue"/>
          </Stack>
        }
      >
        <Routes>
          <Route path="/" element={<Employeelistpage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
