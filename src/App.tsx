import "./App.scss";
import {Route, Routes } from 'react-router-dom';
import Layout from "./pages/layout-page/layout-page";
import AddNewPost from "./pages/posts/components/add-new-post";
import Dashboard from "./pages/dashboard-page/components/dashboard";


function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/" element={<Dashboard/>} />
          <Route path="/posts/add" Component={AddNewPost}/>
          {/* Add more routes for additional pages */}
        </Routes>
      </Layout>
  );
}

export default App;
