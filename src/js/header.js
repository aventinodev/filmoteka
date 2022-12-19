import { refs } from './refs';

export function onTogglePage(e) {
  onLibraryPageActive();
}

function onLibraryPageActive() {
  if (refs.pageHome.classList.contains('current')) {
    refs.pageHome.classList.toggle('current');
    refs.header.classList.remove('header--home');
    refs.pageLibrary.classList.add('current');
    refs.header.classList.add('header--library');
    onCreateLibraryPage();
  }
  if (onHomePageActive) {
    return;
  }
}
export function startAddCurentClass() {
  refs.pageHome.classList.add('current');
}

function onCreateLibraryPage() {
  refs.form.classList.add('visually-hidden');
  refs.btnLibrary.classList.remove('visually-hidden');
}

export function onHomePageActive() {
  startAddCurentClass();
  refs.pageLibrary.classList.remove('current');
}
