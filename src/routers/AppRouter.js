import React from 'react';
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import AdminLogIn from '../pages/AdminLogIn/AdminLogIn';
import AdminSignUp from '../pages/AdminSignUp/AdminSignUp';
import AdminDashboard from '../pages/AdminDashboard/AdminDashboard';
import AdminAddCocktail from '../pages/AdminAddCocktail/AdminAddCocktail';
import AdminEditCocktails from '../pages/AdminEditCocktails/AdminEditCocktails';
import AdminEditIngredients from '../pages/AdminEditIngredients/AdminEditIngredients';
import UserBrowseCocktails from '../pages/UserBrowseCocktails/UserBrowseCoktails';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Help from '../pages/Help/Help';



const AppRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={AdminLogIn}/>
        <Route path="/signup" component={AdminSignUp}/>
        <Route path="/dashboard" component={AdminDashboard}/>
        <Route path="/addCocktail" component={AdminAddCocktail}/>
        <Route path="/edit/:id" component={AdminEditCocktails}/>
        <Route path="/editIngredients" component={AdminEditIngredients}/>
        <Route path="/browse" component={UserBrowseCocktails}/>
        <Route path="/help" component={Help}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </>
  )
}

export default AppRouter
