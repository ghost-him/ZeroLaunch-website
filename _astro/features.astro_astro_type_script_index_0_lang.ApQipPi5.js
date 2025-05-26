const v=[];function y(){w(),C(),M(),x(),L()}function L(){const e=document.getElementById("feature-gif"),a=document.getElementById("gif-loading-spinner"),l=document.querySelectorAll(".feature-option"),c=[{id:"1",gif:"/chinese_support.gif"},{id:"2",gif:"/pinyin_matching.gif"},{id:"3",gif:"/prefix_matching.gif"},{id:"4",gif:"/fuzzy_matching.gif"}],s=i=>{const t=c.find(r=>r.id===i);if(t&&e&&a){a.classList.remove("hidden"),e.classList.remove("loaded");const r=new Image;r.src=t.gif,r.onload=()=>{e.src=t.gif,setTimeout(()=>{a.classList.add("hidden"),e.classList.add("loaded")},100)},r.onerror=()=>{console.error(`Failed to load GIF: ${t.gif}`),a.classList.add("hidden"),e.classList.remove("loaded")}}l.forEach(r=>{r.classList.remove("active")});const o=document.querySelector(`[data-feature-id="${i}"]`);o&&o.classList.add("active")};l.forEach(i=>{const t=i.getAttribute("data-feature-id");if(t){const o=()=>{s(t)};i.addEventListener("click",o),v.push(()=>i.removeEventListener("click",o))}}),c.length>0&&s(c[0].id),v.push(()=>{})}function x(){document.querySelectorAll(".feature-card.perspective").forEach(a=>{const l=a.querySelector(".preserve-3d");if(l){const c=()=>{window.matchMedia("(hover: none)").matches&&l.classList.toggle("rotate-y-180")};l.addEventListener("click",c),v.push(()=>{l&&l.removeEventListener("click",c)})}})}function w(){const e=document.querySelector(".parallax-demo");if(e){const a=e.querySelectorAll(".parallax-layer"),l=t=>{const o=e.getBoundingClientRect(),r=t.clientX-o.left,m=t.clientY-o.top,p=r/o.width-.5,g=m/o.height-.5;a.forEach((n,d)=>{const h=d*10,u=p*h,f=g*h;n.style.transform=`translate3d(${u}px, ${f}px, 0)`})},c=t=>{if(t.touches.length>0){const o=e.getBoundingClientRect(),r=t.touches[0],m=r.clientX-o.left,p=r.clientY-o.top,g=m/o.width-.5,n=p/o.height-.5;a.forEach((d,h)=>{const u=h*10,f=g*u,E=n*u;d.style.transform=`translate3d(${f}px, ${E}px, 0)`})}},s=()=>{a.forEach(t=>{t.style.transform="translate3d(0, 0, 0)"})},i=()=>{a.forEach(t=>{t.style.transform="translate3d(0, 0, 0)"})};e.addEventListener("mousemove",l),e.addEventListener("touchmove",c),e.addEventListener("mouseleave",s),e.addEventListener("touchend",i),v.push(()=>{e&&(e.removeEventListener("mousemove",l),e.removeEventListener("touchmove",c),e.removeEventListener("mouseleave",s),e.removeEventListener("touchend",i))})}}function C(){const e=document.querySelector(".particles-container"),a=document.querySelector(".particles");if(e&&a){(()=>{a.innerHTML="";const i=e.getBoundingClientRect(),t=window.innerWidth<768?15:30;for(let o=0;o<t;o++){const r=document.createElement("div");r.classList.add("particle");const m=Math.random()*6+2,p=Math.random()*i.width,g=Math.random()*i.height,n=Math.random()*2+1,d=Math.random()*.5;r.style.cssText=`
            position: absolute;
            width: ${m}px;
            height: ${m}px;
            background-color: var(--tw-color-primary-400, #a78bfa);
            border-radius: 50%;
            left: ${p}px;
            top: ${g}px;
            opacity: 0;
            animation: float ${n}s ease-in-out ${d}s infinite alternate;
          `,a.appendChild(r)}})();const c=()=>{e.classList.add("active"),setTimeout(()=>{e.classList.remove("active")},1e3)};e.addEventListener("touchstart",c);const s=document.createElement("style");s.textContent=`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0;
          }
        }
        
        .particles-container.active .particles {
          opacity: 1;
        }
      `,document.head.appendChild(s),v.push(()=>{s&&document.head.contains(s)&&document.head.removeChild(s),e&&e.removeEventListener("touchstart",c)})}}function M(){const e=document.getElementById("demo-canvas"),a=document.getElementById("demo-button");if(e&&a){let l=function(){if(s){if(c){c.clearRect(0,0,e.width,e.height);for(let n=0;n<i.length;n++)i[n].update(),i[n].draw(),(i[n].life<=0||i[n].size<=.2)&&(i.splice(n,1),n--)}t=requestAnimationFrame(l)}};const c=e.getContext("2d");let s=!1,i=[],t=null;const o=()=>{const n=e.parentElement;n&&(e.width=n.offsetWidth,e.height=n.offsetHeight)};o(),window.addEventListener("resize",o);class r{x;y;size;color;speedX;speedY;life;constructor(d,h,u){this.x=d,this.y=h,this.size=Math.random()*5+2,this.color=u||`hsl(${Math.random()*60+240}, 70%, 60%)`,this.speedX=Math.random()*3-1.5,this.speedY=Math.random()*3-1.5,this.life=100}update(){this.x+=this.speedX,this.y+=this.speedY,this.life-=1,this.size>.2&&(this.size-=.1)}draw(){c&&(c.fillStyle=this.color,c.beginPath(),c.arc(this.x,this.y,this.size,0,Math.PI*2),c.fill())}}const m=()=>{s=!s,e.style.opacity=s?"1":"0.5",e.style.pointerEvents=s?"auto":"none",a.textContent=s?"Deactivate Demo":"Activate Demo",s?l():t&&(cancelAnimationFrame(t),t=null)},p=n=>{if(!s)return;const d=e.getBoundingClientRect(),h=n.clientX-d.left,u=n.clientY-d.top;for(let f=0;f<3;f++)i.push(new r(h,u))},g=n=>{if(!s)return;const d=e.getBoundingClientRect(),h=n.clientX-d.left,u=n.clientY-d.top;for(let f=0;f<20;f++)i.push(new r(h,u,`hsl(${Math.random()*60+40}, 100%, 60%)`))};a.addEventListener("click",m),e.addEventListener("mousemove",p),e.addEventListener("click",g),v.push(()=>{t&&cancelAnimationFrame(t),window.removeEventListener("resize",o),a&&a.removeEventListener("click",m),e&&(e.removeEventListener("mousemove",p),e.removeEventListener("click",g)),i=[]})}}document.addEventListener("DOMContentLoaded",y);document.addEventListener("astro:page-load",y);document.addEventListener("astro:before-swap",()=>{v.forEach(e=>e()),v.length=0});window.addEventListener("unload",()=>{v.forEach(e=>e())});
