import "./App.scss";
import {Route, Routes } from 'react-router-dom';
import Layout from "./pages/layout-page/layout-page";
import AddNewPost from "./pages/posts/components/add-new-post";
import Dashboard from "./pages/dashboard-page/components/dashboard";
import Posts from "./pages/posts/components/posts";
import Drafts from "./pages/posts/components/drafts";
import Scheduled from "./pages/posts/components/scheduled";


function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/" element={<Dashboard/>} />
          <Route path="/posts/add" Component={AddNewPost}/>
          <Route path="/posts" Component={Posts}/>
          <Route path="/posts/drafts" Component={Drafts}/>
          <Route path="/posts/scheduled" Component={Scheduled}/>
          {/* Add more routes for additional pages */}
        </Routes>
      </Layout>
  );
}

export default App;
