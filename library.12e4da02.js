function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire09c9;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire09c9=r),r.register("kyEFX",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("fQE3M",(function(e,t){var n=r("epB3k"),o=r("fHPRY"),i=r("31u3U");o=r("fHPRY");const s={openModalFilm:document.querySelector(".card-set"),closeModalFilm:document.querySelector(".film-card__button-close"),body:document.querySelector("body"),backdropModalFilm:document.querySelector(".backdrop"),modalFilm:document.querySelector(".film-card__box")},a=document.querySelector(".spinner--modal"),c=e=>{const{poster_path:t,title:n,id:o,vote_average:r,vote_count:i,popularity:a,original_title:c,genres:l,overview:d}=e,u=`<div class="film-card__image-block">\n      <img\n        class="film-card__image"\n        src="https://image.tmdb.org/t/p/original${t}"\n        alt="film"\n      />\n    </div>\n    <div class="film-card__description">\n      <h1 class="film-card__description-title">${n}</h1>\n      <ul class="film-card__description-set">\n        <li class="description-set">\n          <p class="description-set__text">Vote / Votes</p>\n          <p class="description-set__value">\n            <span class="description-set__rating">${r}</span>\n            <span class="description-set__separator">/</span>\n            <span class="description-set__vote">${i}</span>\n          </p>\n        </li>\n        <li class="description-set">\n          <p class="description-set__text">Popularity</p>\n          <p class="description-set__value">${a}</p>\n        </li>\n        <li class="description-set">\n          <p class="description-set__text">Original Title</p>\n          <p class="description-set__value">${c}</p>\n        </li>\n        <li class="description-set">\n          <p class="description-set__text">Genre</p>\n          <p class="description-set__value">${l.map((e=>e.name)).join(", ")}</p>\n        </li>\n      </ul>\n      <div class="film-card__description-about">\n        <h2 class="description-about__title">About</h2>\n        <p class="description-about__text">${d}</p>\n      </div>\n      <div class="film-card__description-button">\n        <button class="description-button description-button__watched" data-id="${o}">\n          add to Watched\n        </button>\n        <button class="description-button description-button__queue" data-id="${o}">\n          add to queue\n        </button>\n      </div>\n    </div>\n  </div>`;s.modalFilm.insertAdjacentHTML("beforeend",u)},l=e=>{"Escape"===e.code&&(console.log(e.code),s.backdropModalFilm.classList.add("visually-hidden"),s.body.style.overflow="visible",s.body.removeEventListener("keydown",l))},d=e=>{e.target.closest(".film-card")||(s.backdropModalFilm.classList.add("visually-hidden"),s.body.style.overflow="visible")};s.openModalFilm.addEventListener("click",(async e=>{if(a.classList.add("spinner"),!e.target.closest(".card-set__item"))return;s.modalFilm.innerHTML="",s.backdropModalFilm.classList.remove("visually-hidden"),s.body.style.overflow="hidden";const t=e.target.closest(".card-set__item").dataset.id;let r=null;const u=!!localStorage.getItem("watched")&&JSON.parse(localStorage.getItem("watched")).find((({id:e})=>e===Number(t))),p=!!localStorage.getItem("queue")&&JSON.parse(localStorage.getItem("queue")).find((({id:e})=>e===Number(t)));u||p||(r=await(0,n.getMovieById)(t)),u&&(r=u),p&&(r=p),c(r),(0,i.addToLocalStorage)(r);const m=document.querySelector(".description-button__watched"),g=document.querySelector(".description-button__queue");(0,o.changeWatchedButtonCondition)(t,m),(0,o.changeQueueButtonCondition)(t,g),a.classList.remove("spinner"),s.body.addEventListener("keydown",l),s.backdropModalFilm.addEventListener("click",d)})),s.closeModalFilm.addEventListener("click",(()=>{s.backdropModalFilm.classList.add("visually-hidden"),s.body.style.overflow="visible"}))})),r.register("epB3k",(function(t,n){e(t.exports,"getPopularMovies",(function(){return r})),e(t.exports,"getSearchQuery",(function(){return i})),e(t.exports,"getMovieById",(function(){return s})),e(t.exports,"getGenreList",(function(){return a}));const o="fadee9dfff8cb6b1bff36771479589d6";function r(e=1){return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${o}&page=${e}`).then((e=>e.json())).then((e=>{var t;if(null!==(t=e.success)&&void 0!==t&&!t)throw new Error(e.status_message);return e}))}function i(e,t=1){return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${o}&query=${e}&language=eng&page=${t}&include_adult=false`).then((e=>e.json())).then((e=>{var t;if(null!==(t=e.success)&&void 0!==t&&!t)throw new Error(e.status_message);return e}))}function s(e){return fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=${o}&language=eng`).then((e=>e.json())).then((e=>{var t;if(null!==(t=e.success)&&void 0!==t&&!t)throw new Error(e.status_message);return e}))}function a(){return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${o}&language=eng`).then((e=>e.json())).then((e=>{var t;if(null!==(t=e.success)&&void 0!==t&&!t)throw new Error(e.status_message);return e}))}})),r.register("fHPRY",(function(t,n){e(t.exports,"changeWatchedButtonCondition",(function(){return o})),e(t.exports,"changeQueueButtonCondition",(function(){return r}));const o=(e,t)=>{const n=localStorage.getItem("watched"),o=JSON.parse(n);o&&o.find((({id:t})=>t===Number(e)))&&(t.textContent="remove from watched")},r=(e,t)=>{const n=localStorage.getItem("queue"),o=JSON.parse(n);o&&o.find((({id:t})=>t===Number(e)))&&(t.textContent="remove from queue")}})),r.register("31u3U",(function(t,n){function o(e){const t=document.querySelector(".description-button__watched"),n=document.querySelector(".description-button__queue"),o=!!localStorage.getItem("watched")&&JSON.parse(localStorage.getItem("watched")).find((({id:t})=>t===e.id)),r=!!localStorage.getItem("queue")&&JSON.parse(localStorage.getItem("queue")).find((({id:t})=>t===e.id));function i(n){if("remove from queue"!==n.target.textContent){if(localStorage.getItem("watched")){const t=JSON.parse(localStorage.getItem("watched"));localStorage.setItem("watched",JSON.stringify([...t,e]))}else localStorage.setItem("watched",JSON.stringify([e]));t.textContent="remove from watched",t.removeEventListener("click",i),t.addEventListener("click",a)}}function s(t){if("remove from queue"!==t.target.textContent){if(localStorage.getItem("queue")){const t=JSON.parse(localStorage.getItem("queue"));localStorage.setItem("queue",JSON.stringify([...t,e]))}else localStorage.setItem("queue",JSON.stringify([e]));n.textContent="remove from queue",n.removeEventListener("click",s),n.addEventListener("click",c)}}function a(n){if("add to watched"===n.target.textContent)return;const o=JSON.parse(localStorage.getItem("watched")).filter((({id:t})=>t!==e.id));localStorage.setItem("watched",JSON.stringify(o)),t.textContent="add to watched",t.removeEventListener("click",a),t.addEventListener("click",i)}function c(t){if("add to queue"===t.target.textContent)return;const o=JSON.parse(localStorage.getItem("queue")).filter((({id:t})=>t!==e.id));localStorage.setItem("queue",JSON.stringify(o)),n.textContent="add to queue",n.removeEventListener("click",c),n.addEventListener("click",s)}o?t.addEventListener("click",a):t.addEventListener("click",i),r?n.addEventListener("click",c):n.addEventListener("click",s)}e(t.exports,"addToLocalStorage",(function(){return o}))})),r.register("cddKH",(function(e,t){const n={openModalHeart:document.querySelector(".heart"),openModalBtn:document.querySelector("[data-modal-opens]"),modal:document.querySelector("[data-modals]"),body:document.querySelector("body")};function o(){n.modal.classList.remove("is-hiddens"),document.body.classList.add("modal-open"),n.body.addEventListener("keyup",(function e(t){"Escape"===t.code&&(n.modal.classList.add("is-hiddens"),document.body.classList.remove("modal-open"),n.body.removeEventListener("keyup",e))})),n.modal.addEventListener("click",(function e(t){t.target.closest(".modals")||(n.modal.classList.add("is-hiddens"),document.body.classList.remove("modal-open"),n.modal.removeEventListener("click",e))}))}n.openModalBtn.addEventListener("click",o),n.openModalHeart.addEventListener("click",o)})),r.register("93eWd",(function(t,n){e(t.exports,"renderPopularMovies",(function(){return c})),e(t.exports,"getGenresMarkup",(function(){return l}));var o=r("epB3k"),i=r("bQRTi");const s=document.querySelector(".card-set"),a=document.getElementById("spinner");async function c(e){let t=null;a.classList.add("spinner"),localStorage.getItem("genres")?t=JSON.parse(localStorage.getItem("genres")):(t=await async function(){try{const{genres:e}=await(0,o.getGenreList)();return e}catch(e){alert(e)}}(),localStorage.setItem("genres",JSON.stringify(t)));const{movies:n,totalPages:r}=await async function(e){try{const{results:t,total_pages:n}=await(0,o.getPopularMovies)(e);return{movies:t,totalPages:n}}catch(e){alert(e)}}(e),c=n.map((e=>function(e,t){const{genre_ids:n,original_title:o,id:r,release_date:s,title:a,poster_path:c}=e,d=l(function(e,t){return e.map((e=>t.find((t=>t.id===e)).name))}(n,t)),u=s?new Date(s).getFullYear().toString():"Unknown";return`\n        <li class="card-set__item" data-id="${r}">\n            <div class="card-set__box-img">\n            <img\n                loading="lazy"\n                src="${c?`https://image.tmdb.org/t/p/original${c}`:`${i}`}"\n                alt="${o}"\n                class="card-set__img"\n                \n            />\n            </div>\n            <h3 class="card-set__title">${a}</h3>\n            <div class="card-set__description">\n            <ul class="card-set__genre">\n                ${d}\n            </ul>\n            <span class="card-set__genre-movie">&nbsp| ${u}</span>\n            </div>\n        </li>`}(e,t))).join("");return s.innerHTML="",s.insertAdjacentHTML("afterbegin",c),a.classList.remove("spinner"),r}function l(e){let t="";switch(e.length){case 0:t='<li class="card-set__genre-movie">Genre\'s list is empty</li>';break;case 1:t=`<li class="card-set__genre-movie">${e[0]}</li>`;break;case 2:t=`<li class="card-set__genre-movie">${e[0]},&nbsp</li>\n                      <li class="card-set__genre-movie">${e[1]}</li>`;break;case 3:t=`<li class="card-set__genre-movie">${e[0]},&nbsp</li>\n                      <li class="card-set__genre-movie">${e[1]},&nbsp</li>\n                      <li class="card-set__genre-movie">${e[2]}</li>`;break;default:t=`<li class="card-set__genre-movie">${e[0]},&nbsp</li>\n                      <li class="card-set__genre-movie">${e[1]},&nbsp</li>\n                      <li class="card-set__genre-movie">Other</li>`}return t}})),r.register("bQRTi",(function(e,t){e.exports=new URL(r("kyEFX").resolve("bJHJB"),import.meta.url).toString()})),r("kyEFX").register(JSON.parse('{"eM9ss":"library.12e4da02.js","bJHJB":"movie.a3f3b783.jpg"}'));
//# sourceMappingURL=library.12e4da02.js.map