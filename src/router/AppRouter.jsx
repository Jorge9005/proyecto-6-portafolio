import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';

function AppRouter() {
    return (
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/' element={<Navigate to={"home"}/>}></Route>
        </Routes>
    );
}

export default AppRouter;