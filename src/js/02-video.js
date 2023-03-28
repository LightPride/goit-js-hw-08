import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));


function onPlay(event) {
  localStorage.setItem(CURRENT_TIME, event.seconds)
}
setCurrentTime();
function setCurrentTime() {
  
  player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
};