import { Routes, Route } from "react-router-dom";
import Home from "../../components/home/home";
import Confession from "../confession/confession";
import Misdemeanours from "../misdemeanours/misdemeanours";
import MainLayout from "../../components/layouts/main_layout";
import NotFound from "../not_found/not_found";

export const Router = () => {
    return (
    <Routes>
        <Route path = "/" element = {<MainLayout/>}>
            <Route index element = {<Home/>}/>
            <Route path = "misdemeanours" element = {<Misdemeanours/>}/>
            <Route path = "confession" element = {<Confession/>}/>
            <Route path = "*" element = {<NotFound/>}/>
        </Route>
    </Routes>
    );
}