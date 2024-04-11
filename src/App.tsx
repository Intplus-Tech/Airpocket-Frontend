import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { About, Flight, Home, Layout, NotFound } from "./pages";
import SearchResults from "./pages/SearchResults/SearchResults";
import SignUp from "./auth/Signup/Signup";
import Stepper from "./components/Stepper/Stepper";
import AccountProfile from "./pages/Account/Account";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="flights" element={<Flight />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="about-us" element={<About />} />

            {/* Make sure to remove */}
            <Route path="search-results" element={<SearchResults />} />
            {/* Make sure to remove */}

            <Route path="stepper" element={<Stepper />} />
            <Route path="account-infomation" element={<AccountProfile />} />
            {/* Make sure to remove */}
            {/* <Route
              path="passenger-detail"
              element={<PassengerDetails passengers={5} />}
            /> */}
            {/* Make sure to remove */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
