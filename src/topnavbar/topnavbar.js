import "./topnavbar.scss";
import { button } from "../buttonComponent/button";
import img from "../images/100.jpeg"; 

export function topNavbar(params) {
    let div  = document.createElement("div");
    div.classList= "navbar";
    let image = document.createElement("img");
    image.src =img;
    image.alt = "Image loading.."
    div.appendChild(image);    
    let body = document.querySelector("body");
    body.appendChild(div);
    console.log("find me");
}