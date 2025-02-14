import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from "./components/pages/Page1";
import Layout from "./components/Layouts/Layout";
import Page2 from "./components/pages/Page2";
import Page3 from "./components/pages/Page3";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Page1 />} />
            <Route path="step-2" element={<Page2 />}/>
            <Route path="step-3" element={<Page3 />}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
