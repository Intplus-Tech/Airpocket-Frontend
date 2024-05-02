import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { About, Flight, Layout, NotFound } from "./pages";
import SearchResults from "./pages/SearchResults/SearchResults";
import SignUp from "./auth/Signup/Signup";
import Stepper from "./components/Stepper/Stepper";
import AccountProfile from "./pages/Account/Account";

const Home = lazy(() => import("./pages/Home"));

const LoadingFallback = () => (
  <div className="w-full h-[100vh] flex items-center justify-center">
    Loading...
  </div>
);

function App() {
  return (
    <>
      <BrowserRouter>
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
