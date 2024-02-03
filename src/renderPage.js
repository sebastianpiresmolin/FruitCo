import { join } from 'path';

function renderPage(response, page) {
  response.sendFile(join(process.cwd(), `${page}.html`));
}

export default renderPage;
