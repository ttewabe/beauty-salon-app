import React from 'react';
import AuthenticatedApp from './AuthenticatedApp';
import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/*" element={<AuthenticatedApp />} />
            </Routes>
        </div>
    );
};

export default App;
