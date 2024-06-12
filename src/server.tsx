import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import App from './App';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(compression());
app.use(morgan('dev'));

app.use(express.static(path.resolve(process.cwd(), 'build')));

app.get('*', (req, res) => {
  const indexFile = path.resolve(process.cwd(), 'build/public/index.html');

  fs.readFile(indexFile, 'utf8', (err, template) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    const sheet = new ServerStyleSheet();
    const { pipe } = renderToPipeableStream(
      <StyleSheetManager sheet={sheet.instance}>
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      </StyleSheetManager>,
      {
        onShellReady() {
          const styles = sheet.getStyleTags();
          res.statusCode = 200;
          res.setHeader('Content-type', 'text/html');
          res.write(
            template
              .replace('</head>', `${styles}</head>`)
              .replace('<div id="root"></div>', `<div id="root">`)
              .replace('</body></html>', ''),
          );
          pipe(res);
        },
        onAllReady() {
          res.write('</div></body></html>');
          res.end();
        },
        onError(error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        },
      },
    );
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
