class Circle {
  constructor(x, y, r, sound) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.sound = sound;
    this.shade = 255;
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
      this.shade = 0;
    } else if (this.isInside(mouseX, mouseY)) {
      this.shade = 200;
    } else {
      this.shade = 255;
    }

    fill(this.shade, 255, 255);
    ellipse(this.x, this.y, this.r);

    pop();
  }
}
