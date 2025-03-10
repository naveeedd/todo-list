import "./App.css";
import TodoList from "./components/Todo-list";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SimpleBlogPage from "./components/SimpleBlogPage";
import Home from "./components/Naveed";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<TodoList />} />
            <Route path="/blog" element={<SimpleBlogPage />} />
            <Route
              path="/card"
              element={
                <ProfileCard
                  name="Naveed Raza"
                  image="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"
                  email="naveedraza2003@gmail.com"
                  phone="1234567890"
                />
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
