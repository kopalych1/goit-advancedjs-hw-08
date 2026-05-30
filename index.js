import{a as v,S as h,i as c}from"./assets/vendor-DirGshhi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const b="40909869-b3da28e56daa62163d671a2ba";async function d(t,s){var r="https://pixabay.com/api/?key="+b+`&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&page=${s}&per_page=15`;try{return(await v.get(r)).data.hits}catch{return[]}}const y=document.querySelector("ul.gallery"),p=document.querySelector("div.loader"),m=document.querySelector("#load-more-button"),L=new h(".gallery a",{captionsData:"alt",captionDelay:250});function w(t){var s=t.webformatURL,r=t.largeImageURL,o=t.tags,e=t.likes,a=t.views,n=t.comments,g=t.downloads;return`
    <li class="gallery-item">
      <a href="${r}">
        <img src="${s}" alt="${o}" loading="lazy" />
      </a>
      <div class="gallery-stats">
        <div class="gallery-stats-item">
          <span class="gallery-stats-label">Likes</span>
          <span class="gallery-stats-value">${e}</span>
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
          <span class="gallery-stats-value">${g}</span>
        </div>
      </div>
    </li>
  `}function q(){y.innerHTML=""}function S(){p.style.display="block"}function $(){p.style.display="none"}function I(){m.style.display="block"}function M(){m.style.display="none"}function f(t){const s=t.map(w).join("");y.insertAdjacentHTML("beforeend",s),L.refresh()}function U(){c.error({title:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}function A(){c.error({title:"Search string must not be empty",position:"topCenter"})}function O(){c.error({title:"We're sorry, but you've reached the end of search results.",position:"topCenter"})}const u=document.querySelector("form.form"),P=document.querySelector("#load-more-button");var l;let i=1;u.addEventListener("submit",async t=>{if(t.preventDefault(),l=t.target.elements["search-text"].value.trim(),l==""){A();return}i=1,console.debug("User query: "+l),S(),q();const s=await d(l,i);if($(),!s.length){U();return}f(s),s.length==15&&I(),u.reset()});P.addEventListener("click",async t=>{const s=await d(l,++i);f(s),s.length||(O(),M())});
//# sourceMappingURL=index.js.map
