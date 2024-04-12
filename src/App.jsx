import ParentBox from "./components/parentBox";
import "./App.css";
import Dashboard from "./components/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/userContext";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <main className="parent">
                <ParentBox />
              </main>
            }
          />
          <Route
            path="/dashboard"
            element={
              <main>
                <Dashboard />
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
