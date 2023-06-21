// Requerir Puppeteer
import { launch } from 'puppeteer';

// Crear una función asíncrona para tomar screenshots
async function takeScreenshots(urls) {
  // Crear una instancia de navegador
  const browser = await launch();

  // Crear un array vacío para guardar los buffers de las imágenes
  const buffers = [];

  // Recorrer el array de urls
  for (let url of urls) {
    // Crear una nueva página
    const page = await browser.newPage();

    // Abrir la url en la página
    await page.goto(url, { waitUntil: 'networkidle0' });

    // Tomar una captura de pantalla de la página y guardarla en un buffer
    const buffer = await page.screenshot();

    // Añadir el buffer al array de buffers
    buffers.push(buffer);

    // Cerrar la página
    await page.close();
  }

  // Cerrar el navegador
  await browser.close();

  // Devolver el array de buffers
  return buffers;
}

// Crear un array de urls que quieras tomar screenshots
const urls = [
  'https://www.google.com',
  'https://www.wikipedia.org',
  'https://www.youtube.com'
];

// Llamar a la función takeScreenshots con el array de urls y obtener los buffers
takeScreenshots(urls).then(buffers => {
  // Hacer lo que quieras con los buffers, por ejemplo guardarlos en archivos o usarlos en tu web como thumbnails
  console.log(buffers);
}).catch(error => {
  // Manejar posibles errores
  console.error(error);
});


