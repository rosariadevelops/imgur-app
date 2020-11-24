import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './Global.module.css';
import Gallery from '../components/gallery/Gallery';

const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Route
                    render={({ location }) => (
                        <Switch location={location}>
                            <Route path="/" component={Gallery} />
                        </Switch>
                    )}
                />
            </BrowserRouter>
        </React.Fragment>
    );
};

export default App;
