async function e(e){try{const t=await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=31449444226ba6345698313fe055564a&page=${e}`);return await t.json()}catch(e){throw new Error(response.status)}}const t={gallery:document.querySelector(".gallery"),genresList:document.querySelector(".genres__list"),switchBtn:document.querySelector(".switch-btn"),switchBtnToggle:document.querySelector(".switch-btn::after"),body:document.querySelector("body"),card:document.querySelector(".gallery__card")};(async function(){try{const e=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=31449444226ba6345698313fe055564a&language=en-US");return(await e.json()).genres}catch(e){throw new Error(response.status)}})().then((e=>{localStorage.setItem("genresData",JSON.stringify(e))}));const n=localStorage.getItem("genresData"),s=JSON.parse(n);function a({id:e,title:t,poster_path:n,release_date:a,genre_ids:r}){const i=r.map((e=>{const t=s.find((t=>t.id===e));return e=t.name}));return`<li class="gallery__card id="${e}">\n            <div class="gallery_img-wrap">\n              <img\n                class="gallery__img"\n                src="https://image.tmdb.org/t/p/w300/${n}"\n                alt="${t}"\n                loading="lazy"\n                width="395"\n                height="569"\n                              />\n            </div>\n            <div class="gallery__info-wrap">\n            <h2 class="gallery__title">${t}</h2>\n            <div class="gallery__info">\n              <ul class="genres__list">\n                <li class="genres__item">${i.length>3?i.slice(0,3).splice(2,1,"others").join(", "):i.join(", ")}</li>\n                \n              </ul>\n              <p class="gallery__year">${a.split("-")[0]}</p>\n            </div>\n            </div>\n          </li>`}function r(e){const n=e.map(a).join("");return t.gallery.innerHTML=n}function i(){t.switchBtn.classList.toggle("switch-on"),t.switchBtn.classList.contains("switch-on")?t.body.style.backgroundColor="rgba(0, 0, 0, 0.7)":t.body.style.backgroundColor="#ffffff"}t.switchBtn.addEventListener("click",i);i(),async function(){try{const t=await e(1);r(t.results)}catch(e){console.log(e)}}();
//# sourceMappingURL=index.f529e5ed.js.map
