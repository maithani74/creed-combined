import { Routes, Route } from "react-router-dom";

// pages
import Login from "./pages/AuthPages/Login";
import Register from "./pages/AuthPages/Register";
import OpenRoute from "./components/common/OpenRoute";
import VerifyEmail from "./pages/VerifyEmail";
import AdminDashboard from "./pages/AdminPages/AdminDashboard";
import AdminProducts from "./pages/AdminPages/AdminProducts";
import Orders from "./pages/AdminPages/Orders";
import Categories from "./pages/AdminPages/Categories";
import Users from "./pages/AdminPages/Users";
import Career from "./pages/Career/Career";
import AboutUs from "./pages/AboutUS/AboutUs";
import Home from "./pages/Home";
import BulkOrderPage from "./pages/BulkOrderPage";
import Footer from "./pages/Footer";
import ProductDetail from "./pages/ProductDetail";
import ProductsPage from "./pages/ProductsPage.jsx";
import PrimaryWrapper from "./components/common/PrimaryWrapper.jsx";
import ScrollToTop from "./components/common/ScrollComponent.jsx";
import AdminRoute from "./components/common/AdminRoute.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import { useEffect, useState } from "react";
import Loading from "./components/common/Loading.jsx";
import Header from "./pages/Header.jsx";
import SplashScreen from "./Components/common/SplashScreen.jsx";
import Error from "./pages/Error.jsx";

function App() {
  const [loading, setLoading] = useState(true); // State to control splash screen visibility

  useEffect(() => {
    // Set a timeout to hide splash screen after 2 seconds
    setTimeout(() => {
      setLoading(false);
    }, 2500); // Time in milliseconds
  }, []);

  return (
    <>
      {loading ? (
        <SplashScreen /> // Show splash screen while loading is true
      ) : (
        <>
          <ScrollToTop />
          <Routes>
            <Route
              path={"/register"}
              element={
                <OpenRoute>
                  <Register />
                </OpenRoute>
              }
            />
            <Route
              path={"/"}
              element={
                <>
                  <Home />
                </>
              }
            />
            <Route
              path={"/allProducts"}
              element={
                <>
                  <AllProducts />
                  <Footer />
                </>
              }
            />
            <Route
              path={"/login"}
              element={
                <OpenRoute>
                  <Login />
                </OpenRoute>
              }
            />
            <Route
              path={"/bulk-orders"}
              element={
                <>
                  <Header />
                  <BulkOrderPage />
                  <Footer />
                </>
              }
            />
            <Route
              path={"/verify-email"}
              element={
                <>
                  <VerifyEmail />
                  <Footer />
                </>
              }
            />
            <Route
              path={"/admin/dashboard"}
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              }
            />
            <Route
              path={"/admin/products"}
              element={
                <AdminRoute>
                  <AdminProducts />
                </AdminRoute>
              }
            />
            <Route
              path={"/admin/users"}
              element={
                <AdminRoute>
                  <Users />
                </AdminRoute>
              }
            />
            <Route
              path={"/admin/categories"}
              element={
                <AdminRoute>
                  <Categories />
                </AdminRoute>
              }
            />
            <Route path={"/admin/orders"} element={<Orders />} />
            <Route
              path="/aboutus"
              element={
                <>
                  <Header />
                  <AboutUs />
                  <Footer />
                </>
              }
            />
            <Route
              path="/career"
              element={
                <>
                  <Header />
                  <Career />
                  <Footer />
                </>
              }
            />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/career" element={<Career />} />
            <Route
              path="/product/:id"
              element={
                <>
                  <PrimaryWrapper>
                    <ProductDetail />
                  </PrimaryWrapper>
                  <Footer></Footer>
                </>
              }
            />
            <Route
              path="/category/:id"
              element={
                <>
                  <Header />
                  <PrimaryWrapper>
                    <CategoryPage />
                  </PrimaryWrapper>
                  <Footer></Footer>
                </>
              }
            />
            <Route
              path="/products"
              element={
                <>
                  <PrimaryWrapper>
                    <ProductsPage />
                  </PrimaryWrapper>
                  <Footer />
                </>
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
