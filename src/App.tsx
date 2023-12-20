import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./pages/layout-page/layout-page";
import AddNewPost from "./pages/posts/components/add-new-post";
import Dashboard from "./pages/dashboard-page/components/dashboard";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/posts/add" Component={AddNewPost}/>
          {/* Add more routes for additional pages */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
