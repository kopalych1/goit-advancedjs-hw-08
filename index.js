import{a as h,S as b,i as u}from"./assets/vendor-DirGshhi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const L="40909869-b3da28e56daa62163d671a2ba";let i=1,c;async function y(e){c===encodeURIComponent(e)?i++:(c=encodeURIComponent(e),i=1);var s="https://pixabay.com/api/?key="+L+`&q=${c}&image_type=photo&orientation=horizontal&safesearch=true&page=${i}&per_page=15`;try{return(await h.get(s)).data.hits}catch{return[]}}const p=document.querySelector("ul.gallery"),m=document.querySelector("div.loader"),f=document.querySelector("#load-more-button"),w=new b(".gallery a",{captionsData:"alt",captionDelay:250});function $(e){var s=e.webformatURL,n=e.largeImageURL,l=e.tags,t=e.likes,r=e.views,a=e.comments,v=e.downloads;return`
    <li class="gallery-item">
      <a href="${n}">
        <img src="${s}" alt="${l}" loading="lazy" />
      </a>
      <div class="gallery-stats">
        <div class="gallery-stats-item">
          <span class="gallery-stats-label">Likes</span>
          <span class="gallery-stats-value">${t}</span>
        </div>
        <div class="gallery-stats-item">
          <span class="gallery-stats-label">Views</span>
          <span class="gallery-stats-value">${r}</span>
        </div>
        <div class="gallery-stats-item">
          <span class="gallery-stats-label">Comments</span>
          <span class="gallery-stats-value">${a}</span>
        </div>
        <div class="gallery-stats-item">
          <span class="gallery-stats-label">Downloads</span>
          <span class="gallery-stats-value">${v}</span>
        </div>
      </div>
    </li>
  `}function q(){p.innerHTML=""}function I(){m.style.display="block"}function S(){m.style.display="none"}function M(){f.style.display="block"}function U(){f.style.display="none"}function g(e){const s=e.map($).join("");p.insertAdjacentHTML("beforeend",s),w.refresh()}function R(){u.error({title:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}function A(){u.error({title:"Search string must not be empty",position:"topCenter"})}function C(){u.error({title:"We're sorry, but you've reached the end of search results.",position:"topCenter"})}const d=document.querySelector("form.form"),O=document.querySelector("#load-more-button");var o;d.addEventListener("submit",async e=>{if(e.preventDefault(),o=e.target.elements["search-text"].value.trim(),o==""){A();return}console.debug("User query: "+o),I(),q();const s=await y(o);if(S(),!s.length){R();return}g(s),M(),d.reset()});O.addEventListener("click",async e=>{const s=await y(o);g(s),s.length||(C(),U())});
//# sourceMappingURL=index.js.map
