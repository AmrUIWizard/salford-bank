import { Route, Routes } from "react-router";
import { Navbar, Home, Customers, OneCustomer } from "./index";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="customers" element={<Customers />} />
          <Route path="/customer/:name" element={<OneCustomer />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
