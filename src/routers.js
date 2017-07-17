var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
console.log(Router);
var routes = (
    <Route name='app' path='/' handler={require('./modules/Landing')} >
        <Route name='login' handler={require('./modules/Enrollment')} />
        <Route name='register' handler={require('./modules/Register')} />
        
    </Route>
);

module.exports = routes;