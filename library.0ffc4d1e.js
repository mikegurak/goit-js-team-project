const e={openModalFilm:document.querySelector(".card-set"),closeModalFilm:document.querySelector(".film-card__button-close"),body:document.querySelector("body"),backdropModalFilm:document.querySelector(".backdrop"),modalFilm:document.querySelector(".film-card__box")},t=t=>{const{poster_path:s,title:i,vote_average:n,vote_count:o,popularity:a,original_title:l,genres:c,overview:d}=t,r=`<div class="film-card__image-block">\n      <img\n        class="film-card__image"\n        src="https://image.tmdb.org/t/p/original${s}"\n        alt="film"\n      />\n    </div>\n    <div class="film-card__description">\n      <h1 class="film-card__description-title">${i}</h1>\n      <ul class="film-card__description-set">\n        <li class="description-set">\n          <p class="description-set__text">Vote / Votes</p>\n          <p class="description-set__value">\n            <span class="description-set__rating">${n}</span>\n            <span class="description-set__separator">/</span>\n            <span class="description-set__vote">${o}</span>\n          </p>\n        </li>\n        <li class="description-set">\n          <p class="description-set__text">Popularity</p>\n          <p class="description-set__value">${a}</p>\n        </li>\n        <li class="description-set">\n          <p class="description-set__text">Original Title</p>\n          <p class="description-set__value">${l}</p>\n        </li>\n        <li class="description-set">\n          <p class="description-set__text">Genre</p>\n          <p class="description-set__value">${c.map((e=>e.name)).join(", ")}</p>\n        </li>\n      </ul>\n      <div class="film-card__description-about">\n        <h2 class="description-about__title">About</h2>\n        <p class="description-about__text">${d}</p>\n      </div>\n      <div class="film-card__description-button">\n        <button class="description-button description-button__watched">\n          add to Watched\n        </button>\n        <button class="description-button description-button__queue">\n          add to queue\n        </button>\n      </div>\n    </div>\n  </div>`;e.modalFilm.insertAdjacentHTML("beforeend",r)};e.openModalFilm.addEventListener("click",(async s=>{if(!s.target.closest(".card-set__item"))return;e.modalFilm.innerHTML="",e.backdropModalFilm.classList.remove("visually-hidden"),e.body.style.overflow="hidden";const i=s.target.closest(".card-set__item").dataset.id,n=await(o=i,fetch(`https://api.themoviedb.org/3/movie/${o}?api_key=fadee9dfff8cb6b1bff36771479589d6&language=uk`).then((e=>e.json())).then((e=>{var t;if(null!==(t=e.success)&&void 0!==t&&!t)throw new Error(e.status_message);return e})));var o;t(n)})),e.closeModalFilm.addEventListener("click",(()=>{e.backdropModalFilm.classList.add("visually-hidden"),e.body.style.overflow="visible"})),console.log({});
//# sourceMappingURL=library.0ffc4d1e.js.map
