import { Route, Routes, Navigate } from 'react-router-dom';
import {Proyecto1, Proyecto2, Proyecto3, Proyecto4, Proyecto5} from '../pages/Home';

function AppRouter() {
    return (
        <Routes>
            <Route path='/proyecto1' component={Proyecto1}></Route>
            <Route path='/proyecto2' component={Proyecto2}></Route>
            <Route path='/proyecto3' component={Proyecto3}></Route>
            <Route path='/proyecto4' component={Proyecto4}></Route>
            <Route path='/proyecto5' component={Proyecto5}></Route>
            <Route path='/' element={<Navigate to={"proyecto1"}/>}></Route>
        </Routes>
    );
}

export default AppRouter;