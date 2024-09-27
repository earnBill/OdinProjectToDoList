(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{U:()=>p,v:()=>s});const t=document.getElementsByTagName("body")[0],n=document.getElementsByTagName("aside")[0],o=(document.getElementsByTagName("main")[0],["General"]),c=document.createElement("div");function l(e){localStorage.setItem(e,JSON.stringify(e))}c.textContent=o[0],c.className="projects",n.appendChild(c),console.log(o),document.querySelector("main"),document.querySelector(".container");const a=document.querySelector(".tasks-container"),d=document.getElementsByTagName("body")[0];function r(){const e=document.createElement("div");e.className="overlay",console.log("create form");const t=document.createElement("div");t.className="form-container";const n=document.createElement("form");n.className="task-form";const c=document.createElement("label");c.textContent="Title";const a=document.createElement("input");a.className="title-input";const r=document.createElement("label");r.textContent="Description";const m=document.createElement("input");m.className="description-input";const u=document.createElement("label");u.textContent="Date";const v=document.createElement("input");v.type="date",v.className="date-input";const E=document.createElement("label");E.textContent="Priority";const g=document.createElement("div");g.className="priority-container";const y=document.createElement("label");y.textContent="Low";const h=document.createElement("input");h.type="radio",h.id="lowRadio",y.htmlFor="lowRadio",h.name="taskPriority",h.value="low",h.checked=!0;const C=document.createElement("label");C.textContent="Medium";const b=document.createElement("input");b.type="radio",b.id="mediumRadio",C.htmlFor="mediumRadio",b.name="taskPriority",b.value="medium";const x=document.createElement("label");x.textContent="Hight";const N=document.createElement("input");N.type="radio",N.id="hightRadio",x.htmlFor="hightRadio",N.name="taskPriority",N.value="hight";const k=document.createElement("label");k.textContent="Project";const f=document.createElement("select");f.className="project-combo-box";for(const e of o){const t=document.createElement("option");t.value=e,t.text=e,f.appendChild(t),console.log(e),console.log(e)}const S=document.createElement("button");S.classList="submit",S.type="submit",S.textContent="Add Todo";const j=document.createElement("button");j.textContent="Cancel",g.append(y,h,C,b,x,N),n.appendChild(c),n.appendChild(a),n.appendChild(r),n.appendChild(m),n.appendChild(u),n.appendChild(v),n.appendChild(E),n.appendChild(g),n.appendChild(k),n.appendChild(f),n.appendChild(S),n.appendChild(j),t.appendChild(n),d.appendChild(e),e.appendChild(t),S.addEventListener("click",(t=>{let o=n.querySelector("input[name=taskPriority]:checked");console.log(o.value),t.preventDefault(),console.log("add task"),s.push(p(a.value,m.value,v.value,o.value,f.value)),console.log(s),console.log(v.value),e.remove();let c=s.slice(-1);i(c),console.log(c.title),l(s)})),j.addEventListener("click",(()=>{console.log("cancelllll"),e.remove()}))}function i(e){for(let t=0;t<e.length;t++){const n=document.createElement("div");n.className="task-container";const o=document.createElement("div");o.className="title";const c=document.createElement("div");c.className="description";const d=document.createElement("div");d.className="date";const m=document.createElement("div");m.className="priority";const u=document.createElement("div");u.className="check-icon",u.style.backgroundImage="url('./pictures/cyrcle.svg')";const p=document.createElement("div");p.className="edit-icon",p.style.backgroundImage="url('./pictures/edit.svg')",p.dataset.index=e[t].description;const v=document.createElement("div");v.className="remove-icon",v.style.backgroundImage="url('pictures/thrash.svg')",v.dataset.index=e[t].description,v.addEventListener("click",(()=>{let e=s.findIndex((e=>e.description===v.dataset.index));console.log(e),s.splice(e,1),console.log(s),v.parentNode.remove(),l(s),a.innerHTML="",i(s)})),p.addEventListener("click",(()=>{let e=s.findIndex((e=>e.description===p.dataset.index));console.log(e),r();const t=document.querySelector(".title-input"),n=document.querySelector(".description-input"),o=document.querySelector(".date-input"),c=document.querySelector(".project-combo-box"),a=document.querySelector(".submit"),d=document.querySelector(".task-form"),i=document.createElement("button");i.className="update-btn",i.textContent="Update task",t.value=s[e].title,n.value=s[e].description,o.value=s[e].dueDate,c.value=s[e].project,a.remove(),d.appendChild(i),i.addEventListener("click",(()=>{s[e].title=t.value,s[e].description=n.value,s[e].dueDate=o.value,s[e].project=c.value,p.parentNode.remove(),l(s)}))})),o.textContent=e[t].title,c.textContent=e[t].description,d.textContent=e[t].dueDate,m.textContent=e[t].priority,console.log(e[t].priority),n.append(u,o,c,d,m,p,v),a.appendChild(n)}}let s=[];localStorage.length&&(s=[...function(e){return JSON.parse(localStorage.getItem(e))}(s)],i(s)),console.log(s);let m=document.querySelector(".add-task");document.querySelector(".add-project"),document.querySelector(".container");const u=document.querySelector(".add-project");function p(e,t,n,o,c){return{title:e,description:t,dueDate:n,priority:o,project:c}}m.addEventListener("click",(()=>{console.log(s),r()})),u.addEventListener("click",(()=>{!function(){const e=document.createElement("div");e.className="overlay";const c=document.createElement("div");c.className="projects";const l=document.createElement("div");l.className="form-project-container";const a=document.createElement("form"),d=document.createElement("h3");d.textContent="Add Project";const r=document.createElement("label");r.textContent="Title:";const m=document.createElement("input");m.type="text";const u=document.createElement("button");u.textContent="Add project",u.className="project-button",a.append(d,r,m,u),l.appendChild(a),e.appendChild(l),t.appendChild(e),document.querySelector(".project-button").addEventListener("click",(t=>{t.preventDefault();let l=m.value;console.log(l),c.textContent=l,n.appendChild(c),o.push(l),console.log(o),e.remove();const a=document.querySelectorAll(".projects");console.log(a),a.forEach((e=>{e.addEventListener("click",(()=>{document.querySelector(".tasks-container").innerHTML="",i(s.filter((t=>t.project===e.textContent)))}))}))}))}(),console.log("new Project")}))})();