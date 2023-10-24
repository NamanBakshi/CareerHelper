import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Register";
import AllJobs from "./components/AllJobs"
import Login from "./components/Login";
import EditJob from "./components/EditJob"
// import Error from "./components/Error";
 import Hero from "./components/Hero";
import { UserContextProvider } from "./Context/userContext";
// import ScrollToTop from "./components/ScrollToTop";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import CreateJob from "./components/CreateJob";
import UserProfile from "./components/UserProfile";
import JobDetails from "./components/JobDetails";


const appRouter=createBrowserRouter([  //array of object 
    {path:"/",
    element:<App />,
    
    children:[
      { path: "/", element: <Hero /> },
       { path: "/jobs", element: <AllJobs /> },
       { path: "/addjobs", element: <CreateJob /> },
       { path: "/register", element: <Register /> },
       { path: "/login", element: <Login /> }, 
       { path: "/profile", element: <UserProfile /> },
       { path: "/job/:id", element: <JobDetails /> },
       { path: "/edit/:id", element: <EditJob /> },

    ]
}
])
function App() {
  return (
    <UserContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </UserContextProvider>
  )
}

const Root = () => {
  return <RouterProvider router={appRouter} />;
}

export default Root
