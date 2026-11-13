'use strict';
const fs = require('node:fs');
const assert = require('node:assert/strict');
const path = require('node:path');
const root = __dirname;
for (const name of ['index.html','style.css','script.js']) {
  assert.ok(fs.existsSync(path.join(root,name)), `Отсутствует ${name}`);
}
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const css=fs.readFileSync(path.join(root,'style.css'),'utf8');
const js=fs.readFileSync(path.join(root,'script.js'),'utf8');
for (const id of ['about','skills','projects','contact','theme-toggle']) {
  assert.match(html, new RegExp(`id="${id}"`), `Отсутствует элемент ${id}`);
}
assert.match(html, /style\.css/);
assert.match(html, /script\.js/);
assert.match(css, /@media/);
assert.match(js, /addEventListener\('click'/);
console.log('PASS: файлы, разделы, ресурсы, адаптивность и интерактивность');
