class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getDistance(v) {
    const distanceX = this.x - v.x;
    const distanceY = this.y - v.y;
    return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  }
}

class Agent {
  constructor(x, y) {
    this.pos = new Vector(x, y);
    this.radius = random(1, 3);
    this.velX = random(-2, 2);
    this.velY = random(-2, 2);
  }

  update() {
    this.pos.x += this.velX;
    this.pos.y += this.velY;
  }

  draw(context, color) {
    context.save();
    context.translate(this.pos.x, this.pos.y);

    context.fillStyle = color;
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2);
    context.fill();
    context.restore();
  }

  bounce(w, h) {
    if (this.pos.x >= /* size.w */w || this.pos.x <= 0) {
      this.velX *= -1;
    }
    if (this.pos.y >= /* size.h */ h || this.pos.y <= 0) {
      this.velY *= -1;
    }
  }

  runFromItem(item, w, h) {
    if (this.pos.getDistance(item) <= item.radius) {
      if (item.x < this.pos.x && this.pos.x + item.radius < /* size.w */ w) {
        this.pos.x += item.radius;
      }
      if (item.x > this.pos.x && this.pos.x - item.radius > 0) {
        this.pos.x -= item.radius;
      }
      if (
        item.y < this.pos.y &&
        this.pos.y + item.radius < /* window.innerHeight */ h
      ) {
        this.pos.y += item.radius;
      }
      if (item.y > this.pos.y && this.pos.y - item.radius > 0) {
        this.pos.y -= item.radius;
      }
    }
  }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export { Vector, Agent, random };
