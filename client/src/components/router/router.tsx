import { Routes, Route } from "react-router-dom";
import MainLayout from "../../components/layouts/main_layout";
import NotFound from "../not_found/not_found";
import Home from "../../components/home/home";
import Confession from "../confession/confession";
import MisdemeanourList from "../misdemeanours/misdemeanour-list";
import MildPublicRudeness from "../misdemeanours/misdemeanour-type/mild_public_rudeness";
import SpeakingInALift from "../misdemeanours/misdemeanour-type/speaking_in_a_lift";
import NotEatingYourVegetables from "../misdemeanours/misdemeanour-type/not_eating_your_vegetables";
import SupportingManchesterUnited from "../misdemeanours/misdemeanour-type/supporting_manchester_united";


export const Router = () => {
    return (
    <Routes>
        <Route path = "/" element = {<MainLayout/>}>
            <Route index element = {<Home/>}/>
            <Route path = "misdemeanours" element = {<MisdemeanourList 
            url = "http://localhost:8080/api/misdemeanours/10"
            />}/>
                <Route path = "misdemeanours/mild_public_rudeness" 
                element = {<MildPublicRudeness />}/>
                <Route path = "misdemeanours/speaking_in_a_lift" 
                element = {<SpeakingInALift />}/>
                <Route path = "misdemeanours/not_eating_your_vegetables" 
                element = {<NotEatingYourVegetables />}/>
                <Route path = "misdemeanours/supporting_manchester_united" 
                element = {<SupportingManchesterUnited />}/>
            <Route path = "confession" 
            element = {<Confession/>}/>
            <Route path = "*" element = {<NotFound/>}/>
        </Route>
    </Routes>
    );
}