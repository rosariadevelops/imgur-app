import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
//import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Global.module.css';
import Gallery from '../components/gallery/Gallery';

const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Route
                    render={({ location }) => (
                        // <TransitionGroup>
                        // <CSSTransition key={location.key} timeout={300} classNames="fade">
                        <Switch location={location}>
                            <Route path="/" component={Gallery} />
                        </Switch>
                        // </CSSTransition>
                        // </TransitionGroup>
                    )}
                />
            </BrowserRouter>
        </React.Fragment>
    );
};

export default App;
