import { writeFileSync } from 'fs';

const dev = process.env.NODE_ENV === 'development';

const manifest = {
  "short_name": "monologueminds_blog",
  "link": "",
  "name": "monologueminds_blog",
  "start_url": dev ? "/" : "/blog/",
  "icons": [
    {
      "src": "favicon.png",
      "type": "image/png",
      "sizes": "512x512",
      "purpose": "maskable"
    },
    {
      "src": "favicon.ico",
      "type": "image/png",
      "sizes": "144x144",
      "purpose": "any"
    }
  ],
  "background_color": "#3367D6",
  "display": "standalone",
  "scope": "/",
  "theme_color": "#3367D6",
  "shortcuts": [],
  "description": "Blogs be blogging"
};

// console.log(process.cwd());

writeFileSync('./build/manifest.json', JSON.stringify(manifest));
