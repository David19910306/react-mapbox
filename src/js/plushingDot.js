class Pulsing {
  constructor(size, map) {
    this.width = size
    this.height = size
    this.data = new Uint8Array(size * size * 4)
    this.map = map
  }

  onAdd() {
    const canvas = document.createElement('canvas');
    canvas.width = this.width
    canvas.height = this.height
    this.context = canvas.getContext('2d')
  }

  render() {
    const duration = 1000;
    const t = (performance.now() % duration) / duration;

    const radius = this.width / 2 * 0.3;
    const outerRadius = this.height / 2 * 0.7 * t + radius;
    const context = this.context;

    // draw outer circle
    context.clearRect(0, 0, this.width, this.height);
    context.beginPath();
    context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
    context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')';
    context.fill();

    // draw inner circle
    context.beginPath();
    context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
    context.fillStyle = 'rgba(0, 122, 204, 1)';
    context.strokeStyle = 'white';
    context.lineWidth = 2 + 4 * (1 - t);
    context.fill();
    context.stroke();

    // update this image's data with data from the canvas
    this.data = context.getImageData(0, 0, this.width, this.height).data;

    // keep the map repainting
    this.map.triggerRepaint();

    // return `true` to let the map know that the image was updated
    return true;
  }
}

export default Pulsing