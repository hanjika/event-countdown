function e(e){const t=new Date;return new Date(e).getTime()-t.getTime()}const t=[{name:"week",value:6048e5},{name:"day",value:864e5},{name:"hour",value:36e5},{name:"minute",value:6e4}];let n,o=JSON.parse(localStorage.getItem("allStoredEvents"));function l(e){document.querySelector(".list-of-events").removeChild(e),function(e){const t=e.id;for(let e=0;e<o.length;e++)o[e].Event===t&&(o.splice(e,1),localStorage.setItem("allStoredEvents",JSON.stringify(o)))}(e)}function r(e){const t=document.createElement("li");return t.setAttribute("id",e),document.querySelector(".list-of-events").appendChild(t),t}function a(e){const t=document.createElement("button");t.innerText="×",e.appendChild(t),t.addEventListener("click",(()=>{l(e)}))}function c(e,o,l){!function(e,o){const l=[];for(let n=0;n<t.length;n++)for(;e>=t[n].value;)l.push(t[n].name),e-=t[n].value;!function(e,t){const o=e.length;for(let l=0;l<e.length;l++)o>1&&o===l+1?t.innerText+=" and":o>1&&l>0&&(t.innerText+=","),t.innerText+=" "+e[l]+" "+n[l].name,e[l]>1&&(t.innerText+="s")}(function(e){let o=0,l=0,r=0,a=0,c=0,s=0;const i=[];for(const t of e)"week"===t?o++:"day"===t?l++:"hour"===t?r++:"minute"===t&&a++;return i.push(o,l,r,a,c,s),function(e){n=[];for(const e of t)n.push(e);for(let t=0;t<e.length;t++)for(;0===e[t];)e.splice(t,1),n.splice(t,1);return e}(i)}(l),o)}(e,o),o.innerText+=" until "+l}function s(e,t){const n=document.getElementById(t);n.innerText="",c(e,n,t),a(n)}function i(e,t){e<=0&&l(t)}let u=JSON.parse(localStorage.getItem("allStoredEvents"));window.onload=()=>{if(null!==u)for(const t of u){const n=r(t.Event),o=e(t.Date);i(o,n),c(o,n,t.Event),a(n)}else u=[]},window.submitForm=function(t){const n=t.eventdate.value,o=t.eventname.value,l=e(n);l<=0?alert("Event has already occurred so cannot be added to countdown list."):function(e){let t=JSON.parse(localStorage.getItem("allStoredEvents"));for(storedEvent of t)if(storedEvent.Event===e)return!0;return!1}(o)?alert("This event name has already been taken. Please choose a unique event name."):(u.push({Event:o,Date:n}),localStorage.setItem("allStoredEvents",JSON.stringify(u)),function(e,t){const n=r(t);c(e,n,t),a(n)}(l,o))},setInterval((function(){const t=JSON.parse(localStorage.getItem("allStoredEvents"));if(null!==t)for(let n=0;n<t.length;n++){let o=e(t[n].Date);if(o<=0){l(document.getElementById(t[n].Event))}else s(o,t[n].Event)}}),1e3);
//# sourceMappingURL=index.2800d18b.js.map
