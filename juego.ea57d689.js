var e={};e=import.meta.resolve("g2RJn");var t={};t=import.meta.resolve("clBo9");var a={};a=import.meta.resolve("i9Dg0");var n={};n=import.meta.resolve("6SToW");let o={data:{currentGame:{userMove:"",computerMove:""},history:JSON.parse(localStorage.getItem("jugadas")||'{"user": 0, "computer": 0}')},listeners:[],getState(){return this.data},setState(e){for(let t of(this.data=e,localStorage.setItem("jugadas",JSON.stringify(e.history)),this.listeners))t()},subscribe(e){this.listeners.push(e)},setMove(e){let t=this.getState(),a=this.getComputerMove();t.currentGame.userMove=e,t.currentGame.computerMove=a;let n=this.whoWins(e,a);"ganaste"===n?t.history.user++:"perdiste"===n&&t.history.computer++,this.setState(t)},getComputerMove:()=>["piedra","papel","tijera"][Math.floor(3*Math.random())],whoWins:(e,t)=>e===t?"empataste":"piedra"===e&&"tijera"===t||"papel"===e&&"piedra"===t||"tijera"===e&&"papel"===t?"ganaste":"perdiste"},s="/juego-de-piedra-papel-o-tijeras",r=[{path:/\/welcome/,component:function(e){let t=document.createElement("div");return t.innerHTML=`
      <div class = "welcome__container">
        <h1 class ="welcome__title">
          <span class="title-word">Piedra</span>
          <span class="title-word colored">Papel</span>
          <span class="title-word">Tijera</span>
        </h1>
        <div class ="welcome__container-btn">
            <my-button class="blue" destino="inicio">Comenzar</my-button>
            <my-button destino="rules">Reglas</my-button>
        </div>
      </div>
    `,t.querySelectorAll("my-button").forEach(t=>{t.addEventListener("navigate",t=>{let a=t.detail.to;e.goTo(`/${a}`)})}),t}},{path:/\/rules/,component:function(t){let a=document.createElement("div"),n=new URL(e).href;a.className="rules-page",a.innerHTML=`
        <h1 class="rules-page-title">Reglas</h1>
           <img src="${n}" class="rules-page-img" alt="reglas">
            <p class="rules-page-paragran"> Las reglas son simples</p>
           <ol class="rules-page-orderlist">
                <li>El <b> Papel</b> le gana a la <b>Roca</b></li>
                <li>La <b>Roca</b> le gana a las <b>Tijeras</b></li>
                <li>Las <b>Tijeras</b> le gana al <b>Papel</b></li>
           </ol>
           
        <my-button destino="welcome">Menu</my-button>
    `;let o=a.querySelector("my-button");return o&&o.addEventListener("navigate",e=>{let a=e.detail.to;console.log(a),t.goTo(`/${a}`)}),a}},{path:/\/inicio/,component:function(e){let o=document.createElement("div"),s=new URL(t).href,r=new URL(a).href,i=new URL(n).href;o.className="inicio__container",o.innerHTML=`
         <p class ="inicio__paragraph">Presion\xe1 para jugar y elige la piedra, papel o tijera</p>
            <my-button class="blue"  destino="play">Jugar!</my-button>
         <div class="hands-container">
            <img src="${s}" class="inicio-hand-img" alt="Piedra">
            <img src="${r}" class="inicio-hand-img" alt="Papel">
            <img src="${i}" class="inicio-hand-img" alt="Tijera">
         </div>
    `;let l=o.querySelector("my-button");return l&&l.addEventListener("navigate",t=>{let a=t.detail.to;e.goTo(`/${a}`)}),o}},{path:/\/play/,component:function(e){let s=document.createElement("div"),r=new URL(t).href,i=new URL(a).href,l=new URL(n).href;s.className="play-page",s.innerHTML=`
        <div class="play-page__content">
            <!-- El contador se mostrar\xe1 aqu\xed cuando el usuario elija una mano -->
        </div>
            <p class ="hands-title"> Elige una opci\xf3n</p>
        <div class="hands-container">

             <!--contenedor de piedra-->
            <div class = "container-hand-paper">
            <img src="${r}" class="hand-img" data-move="piedra" alt="Piedra">
            <span class ="play-text">Piedra</span>
            </div>

             <!--contenedor de papel-->
            <div class = "container-hand-paper">
            <img src="${i}" class="hand-img" data-move="papel" alt="Papel">
            <span class ="play-text">Papel</span>
            </div>
            
            <!--contenedor de tijera-->
            <div class = "container-hand-paper">
            <img src="${l}" class="hand-img" data-move="tijera" alt="Tijera">
            <span class ="play-text">Tijera</span>
            </div>
        </div>
    `;let c=s.querySelector(".hands-title"),d=s.querySelector(".play-page__content"),p=s.querySelector(".hands-container");return s.querySelectorAll(".hand-img").forEach(t=>{t.addEventListener("click",t=>{let a=t.target.dataset.move;console.log("El usuario eligió:",a),p&&c&&(p.style.display="none",c.style.display="none");let n=document.createElement("my-contador");d?.appendChild(n),n.addEventListener("countdown-finished",()=>{console.log("¡El tiempo ha terminado! Es hora de mostrar los resultados."),o.setMove(a),e.goTo("/result")})})}),s}},{path:/\/result/,component:function(e){let t=o.getState().currentGame.userMove,a=o.getState().currentGame.computerMove,n=o.getState().history.user,s=o.getState().history.computer,r=o.whoWins(t,a),i=document.createElement("div"),l="color:white;";"ganaste"===r?l=`
        color:green;
        text-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
        `:"perdiste"===r&&(l=`
        color:red;
        text-shadow: 0 0 10px rgba(0, 255, 0, 0.4);
        `),i.className="result-page",i.innerHTML=`
        <style>
            .result-page-title{
                ${l}
            }
        </style>
        <div class="result-page-container">
            <h1 class ="result-page-title">${r}</h1>

            <p class="result-page-paragran">
                <span> ${t}</span> VS 
                <span> ${a}</span>
            </p>
            <section class="result-page-section"> 
                <span> Jugador: ${n}  </span>
                <span> Computadora: ${s} </span>
            </section>
           
            <my-button id="play" class="blue" destino="play">Volver a Jugar!</my-button>
            <my-button id="menu" destino="welcome" >Menu</my-button>
        
        </div>
    `;let c=i.querySelector("#play"),d=i.querySelector("#menu");return c&&c.addEventListener("navigate",t=>{let a=t.detail.to;console.log(a),e.goTo(`/${a}`)}),d&&d.addEventListener("navigate",t=>{let a=t.detail.to;console.log(a),e.goTo(`/${a}`)}),i}}];class i extends HTMLElement{static get observedAttributes(){return["destino","class"]}constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){let e=this.getAttribute("class");this.render(e)}render(e){let t=" background: white; border: solid 3px #000; color:#000;",a=`
                 background: #fff ;
                 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            `;"blue"===e&&(t=`
                    background:#006CFC;
                    border-style:none;
                    color:#fff;
                    transition: background 0.3s ease;
                `,a=`
                background: #0681ff ;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            `),this.shadow.innerHTML=`
                <style>
                    button{
                        ${t}
                        border-radius:10px;
                        width:322px;
                        height:87px;
                        font-family:'Roboto',san serif;
                        font-size:30px;
                        font-weight:400;
                        margin-top:50px;
                        cursor:pointer;
                    }
                    button:hover{
                        ${a}
                    } 
                </style>
                <button><slot></slot></button>
            `;let n=this.shadow.querySelector("button");n&&n.addEventListener("click",this.handleClick.bind(this))}handleClick(){let e=this.getAttribute("destino");if(e){let t=new CustomEvent("navigate",{detail:{to:e}});this.dispatchEvent(t)}}}customElements.define("my-button",i);class l extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.startCountdown()}startCountdown(){let e=this.shadow.querySelector(".contador-text"),t=3;if(e){e.textContent=t.toString();let a=setInterval(()=>{t--,e.textContent=t.toString(),t<=0&&(clearInterval(a),this.dispatchEvent(new CustomEvent("countdown-finished")))},1e3)}}render(){this.shadow.innerHTML=`
                <style>
                    .contador-text {
                        font-size: 100px;
                        font-family: var(--font);
                        diplay:flex;
                        align-items:center;
                        justify-content:center;
                        color:#fff;
                       padding-top:250px;
                    }
                </style>
                <div class="contador-text"></div>
            `}}customElements.define("my-contador",l);let c=document.querySelector(".root");c&&function(e){function t(e){history.pushState({},"",s+e),a(s+e)}function a(a){let n=a.startsWith(s)?a.slice(s.length):a;for(let a of r)if(a.path.test(n)){let n=a.component({goTo:t});e.firstChild&&e.firstChild.remove(),e.appendChild(n);return}}location.pathname===s||location.pathname===s+"/"?t("/welcome"):a(location.pathname),window.addEventListener("popstate",()=>a(location.pathname))}(c);
//# sourceMappingURL=juego.ea57d689.js.map
