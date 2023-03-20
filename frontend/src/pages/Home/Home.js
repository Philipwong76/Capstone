import React from "react";
import { useState } from "react";
import Soda3D from "../../components/Soda3D/Soda3D";
import "./Home.css";

const Home = (props) => {

    return ( 
        <div>
            <h1> FRESH COLA FOR ALL </h1>
            <div class="soda"><Soda3D/></div>
        </div>
     );
}
 
export default Home;