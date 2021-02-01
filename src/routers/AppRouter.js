import React from 'react';
import  { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home/Home';
import AdminLogIn from '../pages/AdminLogIn/AdminLogIn';
import AdminSignUp from '../pages/AdminSignUp/AdminSignUp';
import AdminDashboard from '../pages/AdminDashboard/AdminDashboard';
import AdminMyCocktails from '../pages/AdminMyCocktails/AdminMyCocktails';
import AdminEditIngredients from '../pages/AdminEditIngredients/AdminEditIngredients';
import UserBrowseCocktails from '../pages/UserBrowseCocktails/UserBrowseCoktails';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Help from '../pages/Help/Help';



const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/browse" component={UserBrowseCocktails}/>
      <Route path="/login" component={AdminLogIn}/>
      <Route path="/signup" component={AdminSignUp}/>
      <PrivateRoute path="/dashboard" component={AdminDashboard}/>
      <PrivateRoute path="/myCocktails" component={AdminMyCocktails}/>
      <PrivateRoute path="/editIngredients/" component={AdminEditIngredients}/>
      <Route path="/help" component={Help}/>
      <Route component={NotFoundPage}/>
    </Switch>
  )
}

export default AppRouter
