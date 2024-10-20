import React, { useState } from "react";
import Snowfall from 'react-snowfall';


export default function Main(){
    const [menu, setMenu] = useState("normal");
    const handleClickVG = () => {
        setMenu("VG")
    };
    const handleClickNormal = () => {
        setMenu("normal")
    };
    const handleClickSP = () => {
        setMenu("SP")
    }
    return (
        <div className="container_content">
            <div className="container">
            <Snowfall/>
                <button className="button" onClick={handleClickNormal}>Menu Normal</button>
                <button className="button" onClick={handleClickVG}>Menu VG</button>
                <button className="button" onClick={handleClickSP}>Menu Sans Porc</button>
            </div>  
            <div className="content">
                
            <Snowfall/>
                <div className="table-container">
                <table className="styled-table">
                <thead>
                <tr>
                    <th>Petit déjeuner samedi</th>
                    <th>Déjeuner samedi</th>
                    <th>Diner samedi</th>
                    <th>Petit déjeuner dimanche</th>
                    <th>Déjeuner dimanche</th>
                </tr>
                </thead>
                <tbody>
                    { menu === "normal" ?
                        <tr>
                            <td>lait + céréales</td>
                            <td>sandwich jambon fromage</td>
                            <td>tartiflette</td>
                            <td>lait + céréales</td>
                            <td>sandwich thon oeuf</td>
                        </tr> : <div></div>
                    }       
                    { menu === "VG" ?
                        <tr>
                            <td>lait + céréales</td>
                            <td>salade tomate mozzarella</td>
                            <td>lentilles + légumes</td>
                            <td>lait + céréales</td>
                            <td>sandwich pesto</td>
                        </tr> : <div></div>
                    }   
                    { menu === "SP" ?
                        <tr>
                            <td>lait + céréales</td>
                            <td>sandwich thon mayo</td>
                            <td>croziflette</td>
                            <td>lait + céréales</td>
                            <td>RepasMidi</td>
                        </tr> : <div></div>
                    }           
                </tbody>
            </table>
        </div>   
            </div>
        </div>
    )
}