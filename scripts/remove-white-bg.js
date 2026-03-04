/**
 * Hace transparente solo el fondo blanco del CONTORNO exterior.
 * Mantiene el blanco del interior (ej. líneas del gajo de cítrico).
 * Uso: node scripts/remove-white-bg.js
 */
const path = require("path");
const Jimp = require("jimp");

function isWhite(r, g, b, threshold = 250) {
  return r >= threshold && g >= threshold && b >= threshold;
}

async function main() {
  const inputPath = path.join(__dirname, "..", "public", "flavicon.png");
  const outputPath = inputPath;

  const image = await Jimp.Jimp.read(inputPath);
  const w = image.bitmap.width;
  const h = image.bitmap.height;

  const threshold = 250;

  // Máscara: true = blanco exterior (conectado al borde), hay que hacerlo transparente
  const exterior = Array(w * h).fill(false);
  const visited = Array(w * h).fill(false);

  function idx(x, y) {
    return y * w + x;
  }

  function getPixel(x, y) {
    if (x < 0 || x >= w || y < 0 || y >= h) return null;
    const color = image.getPixelColor(x, y);
    return Jimp.intToRGBA(color);
  }

  // Flood-fill desde todos los píxeles del borde que sean blancos
  const queue = [];
  for (let x = 0; x < w; x++) {
    for (let y of [0, h - 1]) {
      const c = getPixel(x, y);
      if (c && isWhite(c.r, c.g, c.b, threshold)) {
        queue.push([x, y]);
        visited[idx(x, y)] = true;
      }
    }
  }
  for (let y = 0; y < h; y++) {
    for (let x of [0, w - 1]) {
      const c = getPixel(x, y);
      if (c && isWhite(c.r, c.g, c.b, threshold)) {
        if (!visited[idx(x, y)]) {
          queue.push([x, y]);
          visited[idx(x, y)] = true;
        }
      }
    }
  }

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    exterior[idx(x, y)] = true;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= w || ny < 0 || ny >= h) continue;
      const id = idx(nx, ny);
      if (visited[id]) continue;
      const c = getPixel(nx, ny);
      if (c && isWhite(c.r, c.g, c.b, threshold)) {
        visited[id] = true;
        queue.push([nx, ny]);
      }
    }
  }

  // Solo los píxeles marcados como exterior -> transparente
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (exterior[idx(x, y)]) {
        const color = image.getPixelColor(x, y);
        const { r, g, b } = Jimp.intToRGBA(color);
        image.setPixelColor(Jimp.rgbaToInt(r, g, b, 0), x, y);
      }
    }
  }

  await new Promise((resolve, reject) => {
    image.write(outputPath, (err) => (err ? reject(err) : resolve()));
  });
  console.log("Listo: solo fondo exterior blanco hecho transparente en", outputPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
