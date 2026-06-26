import{RouterProvider, createBrowserRouter} from "react-router-dom";
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import HotelDetailPage from '../pages/HotelDetailPage';
import BookingPage from '../pages/BookingPage';
import MyBookingPage from '../pages/MyBookingPage';

const router = createBrowserRouter([
    {path:'/',element:<LoginPage/>},
    {path:'/home',element:<HomePage/>},
    {path:'/search', element:<SearchPage/>},
    {path:'/hoteldetails',element:<HotelDetailPage/>},
    {path:'/booking',element:<BookingPage/>},
    {path:'my-booking', element:<MyBookingPage/>}

])


function AppRoutes(){
    return <RouterProvider router={router}/>
}

export default AppRoutes;
