import { refs } from './refs';

refs.switchBtn.addEventListener('click', onSwitchButton);

export function onSwitchButton() {
  refs.switchBtn.classList.toggle('switch-on');
  if (refs.switchBtn.classList.contains('switch-on')) {
    refs.body.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  } else {
    refs.body.style.backgroundColor = '#ffffff';
  }
}
// cssText = 'display: none';
