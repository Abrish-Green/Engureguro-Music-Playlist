import ReactDOM from "react-dom/client";
import './index.css';
import Header from './Layout/Header/Index';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Index'
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/test" element={ <App />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

