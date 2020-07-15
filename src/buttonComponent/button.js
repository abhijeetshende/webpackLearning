import "./button.scss";
export class button{
    showDiv=true;
    render(){
        let btn = document.createElement("button");
        btn.innerText="Hello world";
        btn.onclick = function(){
            let p = document.createElement("p")
            p.innerHTML= "are you following this ??";
            document.querySelector("body").appendChild(p);
        }
        document.querySelector("body").appendChild(btn);
    }
    rudresh(){
        let btn = document.createElement("button");
        btn.innerText="Hello rudresh";
        btn.onclick = function(){
            let p = document.createElement("p")
            p.innerHTML= "are you following this  ??";
            document.querySelector("body").appendChild(p);
            console.log("Find me on inspect ");
        }
        document.querySelector("body").appendChild(btn);
        
    }
}
