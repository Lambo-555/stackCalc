function randNum(min, max) {
  return Math.floor(Math.random()*(max - min) + min);
}

class SoundFX {
  lib = ['sounds/keyboard1.mp3', 'sounds/keyboard2.mp3', 'sounds/keyboard3.mp3'];
  play = () => {
    let audio = new Audio(this.lib[randNum(0, this.lib.length)]);
    audio.volume = 0.5;
    audio.play().then(audio = null);
  };
}

export default new SoundFX();