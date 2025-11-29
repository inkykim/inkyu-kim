// Canvas animation component for mouse tracking effect

interface SineCurve {
  phase: number;
  offset: number;
  frequency: number;
  amplitude: number;
}

class SineCurveClass implements SineCurve {
  phase: number;
  offset: number;
  frequency: number;
  amplitude: number;

  constructor(config: Partial<SineCurve> = {}) {
    this.phase = config.phase || 0;
    this.offset = config.offset || 0;
    this.frequency = config.frequency || 0.001;
    this.amplitude = config.amplitude || 1;
  }

  update(): number {
    this.phase += this.frequency;
    return this.offset + Math.sin(this.phase) * this.amplitude;
  }

  value(): number {
    return this.offset + Math.sin(this.phase) * this.amplitude;
  }
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

class NodeClass implements Node {
  x: number = 0;
  y: number = 0;
  vx: number = 0;
  vy: number = 0;
}

interface LineConfig {
  spring: number;
}

class Line {
  spring: number;
  friction: number;
  nodes: Node[];

  constructor(config: LineConfig) {
    this.spring = config.spring + 0.1 * Math.random() - 0.05;
    this.friction = E.friction + 0.01 * Math.random() - 0.005;
    this.nodes = [];
    
    for (let i = 0; i < E.size; i++) {
      const node = new NodeClass();
      node.x = pos.x;
      node.y = pos.y;
      this.nodes.push(node);
    }
  }

  update(): void {
    let spring = this.spring;
    let node = this.nodes[0];
    
    node.vx += (pos.x - node.x) * spring;
    node.vy += (pos.y - node.y) * spring;
    
    for (let i = 0; i < this.nodes.length; i++) {
      node = this.nodes[i];
      if (i > 0) {
        const prevNode = this.nodes[i - 1];
        node.vx += (prevNode.x - node.x) * spring;
        node.vy += (prevNode.y - node.y) * spring;
        node.vx += prevNode.vx * E.dampening;
        node.vy += prevNode.vy * E.dampening;
      }
      
      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      spring *= E.tension;
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    if (this.nodes.length < 3) return;
    
    let x = this.nodes[0].x;
    let y = this.nodes[0].y;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    
    for (let i = 1; i < this.nodes.length - 2; i++) {
      const node1 = this.nodes[i];
      const node2 = this.nodes[i + 1];
      x = 0.5 * (node1.x + node2.x);
      y = 0.5 * (node1.y + node2.y);
      ctx.quadraticCurveTo(node1.x, node1.y, x, y);
    }
    
    const secondLast = this.nodes[this.nodes.length - 2];
    const last = this.nodes[this.nodes.length - 1];
    ctx.quadraticCurveTo(secondLast.x, secondLast.y, last.x, last.y);
    ctx.stroke();
    ctx.closePath();
  }
}

// Global variables
let ctx: CanvasRenderingContext2D & { running?: boolean; frame?: number };
let sineCurve: SineCurveClass;
let pos = { x: 0, y: 0 };
let lines: Line[] = [];

const E = {
  debug: true,
  friction: 0.5,
  trails: 80,
  size: 50,
  dampening: 0.025,
  tension: 0.99,
};

function initializeLines(): void {
  lines = [];
  for (let i = 0; i < E.trails; i++) {
    lines.push(new Line({ spring: 0.45 + (i / E.trails) * 0.025 }));
  }
}

function updateMousePosition(e: MouseEvent | TouchEvent): void {
  if ('touches' in e && e.touches) {
    pos.x = e.touches[0].pageX;
    pos.y = e.touches[0].pageY;
  } else {
    const mouseEvent = e as MouseEvent;
    pos.x = mouseEvent.clientX;
    pos.y = mouseEvent.clientY;
  }
  e.preventDefault();
}

function handleTouchMove(e: TouchEvent): void {
  if (e.touches.length === 1) {
    pos.x = e.touches[0].pageX;
    pos.y = e.touches[0].pageY;
  }
}

function onMousemove(e: MouseEvent | TouchEvent): void {
  document.removeEventListener('mousemove', onMousemove as EventListener);
  document.removeEventListener('touchstart', onMousemove as EventListener);
  
  document.addEventListener('mousemove', updateMousePosition);
  document.addEventListener('touchmove', updateMousePosition);
  document.addEventListener('touchstart', handleTouchMove);
  
  updateMousePosition(e);
  initializeLines();
  render();
}

function render(): void {
  if (!ctx.running) return;
  
  ctx.globalCompositeOperation = 'source-over';
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.globalCompositeOperation = 'lighter';
  
  // Go backwards on color wheel: red (0/360) -> pink/magenta (300) -> blue (240)
  const hue = Math.round(sineCurve.update());
  const normalizedHue = (hue % 240); // 0 to 240 range
  // Map 0->120 to 360->300 (red to magenta), 120->240 to 300->240 (magenta to blue)
  const mappedHue = normalizedHue <= 120 
    ? 360 - (normalizedHue / 120) * 60  // 360 down to 300
    : 300 - ((normalizedHue - 120) / 120) * 60; // 300 down to 240
  ctx.strokeStyle = "hsla(" + Math.round(mappedHue) + ",100%,50%,0.025)";
  ctx.lineWidth = 10;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    line.update();
    line.draw(ctx);
  }
  
  ctx.frame = (ctx.frame || 0) + 1;
  window.requestAnimationFrame(render);
}

function resizeCanvas(): void {
  if (!ctx?.canvas) return;
  ctx.canvas.width = window.innerWidth - 20;
  ctx.canvas.height = window.innerHeight;
}

export const renderCanvas = function (): void {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  if (!canvas) return;
  
  const context = canvas.getContext('2d');
  if (!context) return;
  
  ctx = context as CanvasRenderingContext2D & { running?: boolean; frame?: number };
  ctx.running = true;
  ctx.frame = 1;
  
  sineCurve = new SineCurveClass({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  });
  
  document.addEventListener('mousemove', onMousemove as EventListener);
  document.addEventListener('touchstart', onMousemove as EventListener);
  document.body.addEventListener('orientationchange', resizeCanvas);
  window.addEventListener('resize', resizeCanvas);
  
  window.addEventListener('focus', () => {
    if (!ctx.running) {
      ctx.running = true;
      render();
    }
  });
  
  window.addEventListener('blur', () => {
    ctx.running = true;
  });
  
  resizeCanvas();
};