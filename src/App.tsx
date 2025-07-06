import React from 'react';
import { AppRouter } from './AppRouter';
import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/*" element={<AppRouter />} />
            </Routes>
        </div>
    );
};

export default App;
