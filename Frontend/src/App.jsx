import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContextProvider } from "./context/AppContext"; // Add this import
import { AuthContextProvider } from "./context/AuthContext";
import { SocketProvider } from "./context/SocketContext";
import ProtectedRoute from "./context/ProtectedRoute";
import Home from "./pages/home/Home";
import HowItWorks from "./pages/home/components/HowItWorks";
import NotFound from "./pages/NotFound";
import CookiePopup from "./components/CookiePopup";
import LoadingScreen from "./pages/loading/LoadingScreen";
import ClientCreateAcc from "./pages/auth/Registration/ClientCreateAcc";
import ClientLogin from "./pages/auth/ClientLogin/ClientLogin";
import ClientDashboard from "./pages/Client/ClientDashboard";
import VerifyEmail from "./pages/auth/ClientLogin/Verify-email";
import PasswordRest from "./pages/auth/ClientLogin/Password-Rest";
import EmailForResetPass from "./pages/auth/ClientLogin/EmailForResetPass";
import Newpassword from "./pages/auth/ClientLogin/Newpassword";
import LawyerCreateAcc from "./pages/auth/Registration/LawyerCreateAcc";
import LawyerVerifyEmail from "./pages/auth/LawyerLogin/Lawyer-verify-email";
import LawyerLogin from "./pages/auth/LawyerLogin/LawyerLogin";
import LawyerEmailForResetPass from "./pages/auth/LawyerLogin/LawyerEmailForResetPass";
import LawyerNewpassword from "./pages/auth/LawyerLogin/LawyerNewpassword";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("App: Mounting...");
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      console.log("App: Unmounting...");
      clearTimeout(timer);
    };
  }, []);

  return (
    <AppContextProvider> {/* Wrap everything with AppContextProvider */}
      <AuthContextProvider>
        <SocketProvider>
          <Router>
            {isLoading ? (
              <LoadingScreen />
            ) : (
              <>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/how-it-works" element={<HowItWorks />} />
                  <Route path="/create-account" element={<ClientCreateAcc />} />
                  <Route path="/login" element={<ClientLogin />} />
                  <Route path="/verify-email" element={<VerifyEmail />} />
                  <Route path="/password-rest" element={<PasswordRest />} />
                  <Route
                    path="/email-for-password-reset"
                    element={<EmailForResetPass />}
                  />
                  <Route path="/create-new-password" element={<Newpassword />} />
                  <Route path="/lawyer-create-account" element={<LawyerCreateAcc />} />
                  <Route path="/lawyer-verify-email" element={<LawyerVerifyEmail />} />
                  <Route path="/lawyer-login" element={<LawyerLogin />} />
                  <Route
                    path="/lawyer-email-for-password-reset"
                    element={<LawyerEmailForResetPass />}
                  />
                  <Route
                    path="/lawyer-create-new-password"
                    element={<LawyerNewpassword />}
                  />
                  <Route
                    path="/client-dashboard"
                    element={
                      <ProtectedRoute>
                        <ClientDashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <ToastContainer
                  position="top-right"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
                <CookiePopup />
              </>
            )}
          </Router>
        </SocketProvider>
      </AuthContextProvider>
    </AppContextProvider>
  );
};

export default App;