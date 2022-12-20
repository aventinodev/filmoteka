import { refs } from './refs';

export function onToggleTheme(e) {
  refs.darkBtn.classList.toggle('js-hidden');
  refs.lightBtn.classList.toggle('js-hidden');
  const isDark = refs.lightBtn.classList.contains('js-hidden');
  if (isDark) {
    getDarkTheme();
  } else {
    getLightTheme();
  }
}
function getDarkTheme() {
  refs.body.classList.add('dark');
  refs.subtitle.classList.add('dark');
  refs.cards.firstChild.add('dark');
}
function getLightTheme() {
  refs.body.classList.remove('dark');
  refs.subtitle.classList.remove('dark');
  refs.cards.firstChild.remove('dark');
}

// -------------------------------------------------------------------------
// document.querySelector('.themetoggle').addEventListener('click', event => {
//   event.preventDefault();
//   if (localStorage.getItem('theme') === 'dark') {
//     localStorage.removeItem('theme');
//   } else {
//     localStorage.setItem('theme', 'dark');
//   }
//   addDarkClassToHTML();
// });

// function addDarkClassToHTML() {
//   try {
//     if (localStorage.getItem('theme') === 'dark') {
//       document.querySelector('body').classList.add('dark');
//       document.querySelector('.themetoggle span').textContent = 'dark_mode';
//     } else {
//       document.querySelector('html').classList.remove('dark');
//       document.querySelector('.themetoggle span').textContent = 'wb_sunny';
//     }
//   } catch (err) {}
// }
