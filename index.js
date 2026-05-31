import{a as L,S as w,i as u}from"./assets/vendor-DirGshhi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();const q="40909869-b3da28e56daa62163d671a2ba";async function m(r,e){var s="https://pixabay.com/api/?key="+q+`&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true&page=${e}&per_page=15`;try{return(await L.get(s)).data.hits}catch{return[]}}const f=document.querySelector("ul.gallery"),g=document.querySelector("div.loader"),h=document.querySelector("#load-more-button"),S=new w(".gallery a",{captionsData:"alt",captionDelay:250});function $(r){var e=r.webformatURL,s=r.largeImageURL,o=r.tags,t=r.likes,a=r.views,n=r.comments,b=r.downloads;return`
    <li class="gallery-item">
      <a href="${s}">
        <img src="${e}" alt="${o}" loading="lazy" />
      </a>
      <div class="gallery-stats">
        <div class="gallery-stats-item">
          <span class="gallery-stats-label">Likes</span>
          <span class="gallery-stats-value">${t}</span>
        </div>
        <div class="gallery-stats-item">
          <span class="gallery-stats-label">Views</span>
          <span class="gallery-stats-value">${a}</span>
        </div>
        <div class="gallery-stats-item">
          <span class="gallery-stats-label">Comments</span>
          <span class="gallery-stats-value">${n}</span>
        </div>
        <div class="gallery-stats-item">
          <span class="gallery-stats-label">Downloads</span>
          <span class="gallery-stats-value">${b}</span>
        </div>
      </div>
    </li>
  `}function I(){f.innerHTML=""}function M(){g.style.display="block"}function U(){g.style.display="none"}function A(){h.style.display="block"}function i(){h.style.display="none"}function v(r){const e=r.map($).join("");f.insertAdjacentHTML("beforeend",e),S.refresh()}function d(){u.error({title:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}function O(){u.error({title:"Search string must not be empty",position:"topCenter"})}function y(){u.error({title:"We're sorry, but you've reached the end of search results.",position:"topCenter"})}const p=document.querySelector("form.form"),P=document.querySelector("#load-more-button");var l;let c=1;p.addEventListener("submit",async r=>{if(r.preventDefault(),l=r.target.elements["search-text"].value.trim(),l==""){O();return}c=1,console.debug("User query: "+l),M(),i(),I();try{const e=await m(l,c);if(!e.length){d();return}v(e),e.length==15&&A()}catch(e){console.error(e),d()}finally{U(),p.reset()}});P.addEventListener("click",async r=>{try{const e=await m(l,++c);if(!e.length){y(),i();return}v(e)}catch(e){console.error(e),y(),i()}});
//# sourceMappingURL=index.js.map
