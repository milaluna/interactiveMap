class Circle {
  constructor(x, y, r, sound) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.sound = sound;
    this.shade = 105;
  }

  isInside(x, y) {
    let d = dist(this.x, this.y, x, y);
    if (d < this.r) {
      // this.shade = 0
      return true;
    }
    return false;
  }

  playSound() {
    if (this.sound.isPlaying() === false) {
      this.sound.setVolume(1);
      this.sound.play();
    } else {
      this.sound.stop();
    }
  }

  show() {
    push();
    if (this.sound.isPlaying()) {
      this.shade = 245;
    } else if (this.isInside(mouseX, mouseY)) {
      this.shade = 230;
    } else {
      this.shade = 180;
    }

    fill(105, this.shade-20, this.shade);
    ellipse(this.x, this.y, this.r);

    pop();
  }
}
