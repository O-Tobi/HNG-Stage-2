import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from "./components/pages/Page1";
import Layout from "./components/Layouts/Layout";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Page1 />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
