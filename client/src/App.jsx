import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MosquitoNet from "./pages/MosquitoNet";
import CeilingCloth from "./pages/CeilingCloth";
import ToughenedGlass from "./pages/ToughenedGlass";
import Upvc from "./pages/Upvc";
import Acp from "./pages/Acp";
import Pvc from "./pages/Pvc";
import FalseCeiling from "./pages/FalseCeiling";
import ShoeRack from "./pages/ShoeRack";
import Aluminum from "./pages/Aluminum";
import Contact from "./pages/Contact";
import ScrollToTopAndHash from "./components/ScrollToTopAndHash";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

// Admin
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import AdminEnquiries from "./pages/AdminEnquiries";

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  return token ? children : <AdminLogin />;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTopAndHash />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mosquito-nets" element={<MosquitoNet />} />
        <Route path="/ceiling-cloth" element={<CeilingCloth />} />
        <Route path="/shoe-rack" element={<ShoeRack />} />
        <Route path="/toughened-glass" element={<ToughenedGlass />} />
        <Route path="/upvc" element={<Upvc />} />
        <Route path="/acp" element={<Acp />} />
        <Route path="/pvc" element={<Pvc />} />
        <Route path="/false-ceiling" element={<FalseCeiling />} />
        <Route path="/aluminum" element={<Aluminum />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/create"
          element={
            <AdminRoute>
              <CreateBlog />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/edit/:id"
          element={
            <AdminRoute>
              <EditBlog />
            </AdminRoute>
          }
        />
        <Route
  path="/admin/enquiries"
  element={
    <AdminRoute>
      <AdminEnquiries />
    </AdminRoute>
  }
/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;