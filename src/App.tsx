/* eslint-disable no-unused-vars */
import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import { Layout, NotFound } from "./pages";
import SignUp from "./auth/Signup/Signup";
import Stepper from "./components/Stepper/Stepper";
import { Toaster } from "./components/ui/toaster";
import { getItemFromStorage, storeItem } from "./utils/locaStorage";
import TawkToScript from "./Tawkto/Tawkto.tsx";
import { PrivateRoute } from "./ProtectedRoute/ProtectedRoute.tsx";
import Loader from "./components/Loader/Loader.tsx";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail.tsx";
import ResetPassword from "./auth/ResetPassword/ResetPassword.tsx";
import ForgetPassword from "./auth/ForgotPassword/ForgotPassword.tsx";
import useInactivity from "./hooks/useInactivity.tsx";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About/About.tsx"));
const Flight = lazy(() => import("./pages/Flights/Flight.tsx"));
const SearchResults = lazy(
  () => import("./pages/SearchResults/SearchResults.tsx")
);
const AccountProfile = lazy(() => import("./pages/Account/Account.tsx"));

const LoadingFallback = () => (
  <section className="fixed w-[100vw] h-full bg-[#1B96D6] bg-opacity-30 top-0 left-0 z-[100] ">
    <Loader />
  </section>
);

const TIMEOUT = 3600 * 20000;

function App() {
  const [, setAccessToken] = useState<string | null>(null);
  const authenticated = useInactivity(TIMEOUT);
  console.log(authenticated);
  useEffect(() => {
    const user = getItemFromStorage("user");
    if (!user?._id) {
      <Navigate to="/" />;
    }
  });

  const TOKEN_ENDPOINT =
    "https://test.api.amadeus.com/v1/security/oauth2/token";

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const response = await fetch(TOKEN_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            grant_type: "client_credentials",
            client_id: "IhSF3mhLY2l9xGDN0duCyuMXSgz0IGXr",
            client_secret: "LDvU41Ybz9LIzEw4",
          }).toString(),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch access token");
        }

        const data = await response.json();
        setAccessToken(data.access_token);
        storeItem("auto_complete_token", data.access_token);
      } catch (error) {
        console.error("Error fetching access token:", error);
      }
    };

    // Initially fetch access token
    fetchAccessToken();

    // Set up interval to fetch new access token every 29 minutes
    const intervalId = setInterval(fetchAccessToken, 29 * 60 * 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/flights" element={<Flight />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/verify-email/:id" element={<VerifyEmail />} />
              <Route path="/reset-password/:id" element={<ResetPassword />} />
              <Route path="/forgot-password" element={<ForgetPassword />} />

              {/* Make sure to remove */}
              <Route path="/flight-offers" element={<SearchResults />} />
              {/* Make sure to remove */}

              <Route path="/flight-details" element={<Stepper />} />
              <Route
                path="/account-infomation"
                element={
                  <PrivateRoute>
                    <AccountProfile />
                  </PrivateRoute>
                }
              />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Toaster />
      <TawkToScript />
    </>
  );
}

export default App;
{
  /* <!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/664c8430981b6c564772dd20/1hude8ntv';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script--> */
}
