import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import CreateBanner from './Components/Dashbord/CreateBanner/CreateBanner';
import Movie from './Components/Dashbord/Movie/Movie';
import Question from './Components/Dashbord/Question/Question';
import TvSeriesUpload from './Components/Dashbord/TvSeriesUpload/TvSeriesUpload';
import AllMovie from './Components/AllMovie/AllMovie';
import AllTvSeris from './Components/AllTvSeris/AllTvSeris';
import TvSerisInformation from './Components/TvSeris/TvSerisInformation/TvSerisInformation';
import AllMovieInformation from './Components/AllMovie/AllMovieInformation/AllMovieInformation';
import Dashbord from './Components/Dashbord/Dashbord';
import DeleteMovie from './Components/Dashbord/DeleteMovie/DeleteMovie';
import DeleteSeris from './Components/Dashbord/DeleteSeris/DeleteSeris';
import DeleteQuestion from './Components/Dashbord/DeleteQuestion/DeleteQuestion';
import DeleteBanner from './Components/Dashbord/DeleteBanner/DeleteBanner';
import Login from './Components/WebsiteCover/Login';
import AuthProvider from './Components/hooks/Context/AuthProvider';
import RequiredRoute from './Components/Authintication/RequiredRoute/RequiredRoute';
import Ragristation from './Components/WebsiteCover/Ragristation/Ragristation';
import MakeAdmin from './Components/Dashbord/MakeAdmin/MakeAdmin';
import Admin from './Components/Admin/Admin';
import NotFound from './Components/NotFound/NotFound';
import WebUser from './Components/Dashbord/WebUser/WebUser';







function App() {
  return (
    <div className="App">
        <AuthProvider>
            <BrowserRouter>
                    <Routes>
                      
                        <Route path='/' element={<RequiredRoute><Home/></RequiredRoute>}></Route>
                        <Route path='/allmovie/' element={<RequiredRoute><AllMovie/></RequiredRoute>}></Route>
                        <Route path='/allmovie/:information' element={<RequiredRoute><AllMovieInformation/></RequiredRoute>}></Route>
                        <Route path='/alltvseres' element={<RequiredRoute><AllTvSeris/></RequiredRoute>}></Route>
                        <Route path='/alltvseres/:information' element={<RequiredRoute><TvSerisInformation/></RequiredRoute>}></Route>
                        <Route path='/login' element={<Login></Login>}></Route>
                        <Route path='/ragristation' element={<Ragristation></Ragristation>}></Route>
                        

                        <Route path='/dashbord' element={<Admin><Dashbord /></Admin>}>
                        <Route path='/dashbord/createBanner' element={<CreateBanner></CreateBanner>}></Route>
                        <Route path='/dashbord/movie' element={<Movie></Movie>}></Route>
                        <Route path='/dashbord/question' element={<Question></Question>}></Route>
                        <Route path='/dashbord/tvserisupload' element={<TvSeriesUpload></TvSeriesUpload>}></Route>
                        <Route path='/dashbord/deleteMovie' element={<DeleteMovie></DeleteMovie>}></Route>
                        <Route path='/dashbord/deleteTvSeris' element={<DeleteSeris></DeleteSeris>}></Route>
                        <Route path='/dashbord/deletequestion' element={<DeleteQuestion></DeleteQuestion>}></Route>
                        <Route path='/dashbord/deleteBanner' element={<DeleteBanner></DeleteBanner>}></Route>
                        <Route path='/dashbord/makeadmin' element={<MakeAdmin></MakeAdmin>}></Route>
                        <Route path='/dashbord/webuser' element={<WebUser></WebUser>}></Route>
                        </Route>

                        <Route  path="/*" element={<NotFound></NotFound>} /> 
                    </Routes>
                </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
