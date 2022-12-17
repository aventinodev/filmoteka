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
// $(function(){
//   $('.switch-btn').click(function (e, changeState) {
//     if (changeState === undefined) {
//       $(this).toggleClass('switch-on');
//     }
//     if ($(this).hasClass('switch-on')) {
//       $(this).trigger('on.switch');
//     } else {
//       $(this).trigger('off.switch');
//     }
//   });

//   $('.switch-btn').on('on.switch', function(){
//     console.log('Кнопка переключена в состояние on');
//   });

//   $('.switch-btn').on('off.switch', function(){
//     console.log('Кнопка переключена в состояние off');
//   });

//   $('.switch-btn').each(function(){
//     $(this).triggerHandler('click', false);
//   });

// });
