class Smoke {
  constructor(context, color) {
    this.context = context;
    this.color = color;
    this.particles = [];
    this.running = false;
  }

  start() {
    this.running = true;
    this.animate();
  }

  stop() {
    this.running = false;
  }

  animate() {
    if (!this.running) return;
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    this.update();
    this.draw();
    requestAnimationFrame(this.animate.bind(this));
  }

  update() {
    this.particles.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.alpha -= 0.005; // Decrease slower to make the clouds last longer
    });
    this.particles = this.particles.filter(p => p.alpha > 0);
  }

  draw() {
    this.particles.forEach(particle => {
      this.context.fillStyle = `rgba(${this.color.join(',')},${particle.alpha})`;
      this.context.beginPath();
      this.context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.context.fill();
    });
  }

  addSmoke(x, y, size) {
    for (let i = 0; i < 50; i++) { // Increase number of particles for bigger clouds
      this.particles.push({
        x,
        y,
        size: size + Math.random() * 3, // Increase size range for larger particles
        vx: (Math.random() - 0.5) * 4, // Increase velocity range for more spread
        vy: (Math.random() - 0.5) * 4,
        alpha: 1
      });
    }
  }

  step(interval) {
    setInterval(() => {
      this.addSmoke(Math.random() * this.context.canvas.width, Math.random() * this.context.canvas.height, 5); // Increase base size
    }, interval);
  }
}

export { Smoke };
