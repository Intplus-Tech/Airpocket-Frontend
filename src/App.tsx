import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";

import "./App.css";
import { About, Flight, Layout, NotFound } from "./pages";
import SearchResults from "./pages/SearchResults/SearchResults";
import SignUp from "./auth/Signup/Signup";
import Stepper from "./components/Stepper/Stepper";
import AccountProfile from "./pages/Account/Account";
import { Toaster } from "./components/ui/toaster";
import { getItemFromStorage } from "./utils/locaStorage";

const Home = lazy(() => import("./pages/Home"));

const LoadingFallback = () => (
  <div className="w-full h-[100vh] flex items-center justify-center">
    Loading...
  </div>
);

function App() {
  useEffect(() => {
    const user = getItemFromStorage("user");
    if (!user?.id) {
      redirect("/");
      console.log("redirect");
    }
  });
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="flights" element={<Flight />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="about-us" element={<About />} />

              {/* Make sure to remove */}
              <Route path="/flight-offers" element={<SearchResults />} />
              {/* Make sure to remove */}

              <Route path="/stepper" element={<Stepper />} />
              <Route path="/account-infomation" element={<AccountProfile />} />
              {/* Make sure to remove */}
              {/* <Route
              path="passenger-detail"
              element={<PassengerDetails passengers={5} />}
            /> */}
              {/* Make sure to remove */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
