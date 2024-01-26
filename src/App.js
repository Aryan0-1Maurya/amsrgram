import React, { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import SearchContextProvider from "./context/SearchContext";
import Navigation from "./components/navigation/Navigation";
const Home = lazy(() => import("./routes/Home"));
const Profile = lazy(() => import("./routes/Profile"));
const Search = lazy(() => import("./routes/Search"));
const Post = lazy(() => import("./routes/Post"));
const Signin = lazy(() => import("./routes/Signin"));
const Signup = lazy(() => import("./routes/Signup"));
const UserProfile = lazy(() => import("./routes/UserProfile"));
import Error from "./components/Error";
/*  Loading Animation Component  */
// import AnimationOnLoad from "./components/AnimationOnLoad";

function App() {
  const location = useLocation();

  /*  Loading Animation's State  */
  // const [loading, setLoading] = useState(true);
  // const [touched, setTouched] = useState(false);
  // const [time, setTime] = useState(0);

  /*  Loading Animation's Function  */
  // useEffect(() => {
  //   let interval = null;

  //   if (touched) {
  //     interval = setInterval(() => {
  //       setTime((prevTime) => prevTime + 100);
  //       if (time >= 2000) {
  //         setLoading(false);
  //       }
  //     }, 100);
  //   } else {
  //     setTime(0);
  //     setLoading(true);
  //     clearInterval(interval);
  //   }

  //   return () => clearInterval(interval);
  // }, [touched, time]);

  return (
    <>
      <SearchContextProvider>
        <Navigation />

        <AnimatePresence initial={true}>
          {/* All Routes */}
          <Routes location={location} key={location.pathName}>
            <Route path="/*" element={<Error/>} />
            {/* Home */}
            <Route
              path="/"
              element={
                <Suspense>
                  <Home />
                </Suspense>
              }
            />
            {/* Profile */}
            <Route
              path="/profile"
              element={
                <Suspense>
                  <Profile />
                </Suspense>
              }
            />
            {/* User Profile */}
            <Route
              path="/profile/:id"
              element={
                <Suspense>
                  <UserProfile />
                </Suspense>
              }
            />
            {/* Search */}
            <Route
              path="/search"
              element={
                <Suspense>
                  <Search />
                </Suspense>
              }
            />
            {/* Post */}
            <Route
              path="/post"
              element={
                <Suspense>
                  <Post />
                </Suspense>
              }
            />
            {/* Sign In */}
            <Route
              path="/signin"
              element={
                <Suspense>
                  <Signin />
                </Suspense>
              }
            />
            {/* Sign Up */}
            <Route
              path="/signup"
              element={
                <Suspense>
                  <Signup />
                </Suspense>
              }
            />
            
          </Routes>
        </AnimatePresence>
      </SearchContextProvider>
    </>
  );
}

export default App;
