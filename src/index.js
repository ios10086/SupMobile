import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import routes from './router';

const ANIMATION_MAP = {
    PUSH: 'forward',
    POP: 'back'
};

function RouteWithSubRoutes(route) {
    return (
      <Route exact path={route.path} component={route.component}/>
    );
  }

const Routes = withRouter(({ location, history }) => (
    <TransitionGroup
        className={'router-wrapper'}
        childFactory={child => React.cloneElement(
            child,
            { classNames: ANIMATION_MAP[history.action] }
        )}
    >
        <CSSTransition
            timeout={500}
            key={location.pathname}
        >
            <Switch location={location}>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={`route_${i + 1}`} {...route} />
                ))}
                <Redirect to="/" />
            </Switch>
        </CSSTransition>
    </TransitionGroup>
));

ReactDOM.render(
    <BrowserRouter basename='/Warn'>
        <Routes />
    </BrowserRouter>,
    document.getElementById('root')
);