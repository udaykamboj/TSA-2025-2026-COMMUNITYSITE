const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.md')) {
      results.push(file);
    }
  });
  return results;
}
const files = walk('d:/TSA-2025-2026-COMMUNITYSITE/lib/content');
let changed = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  // Match a full :::custom-card block containing ::button
  const regex = /:::custom-card\{([^}]*)\}\n([\s\S]*?)\n::button\{href="([^"]+)"\}\n([^\n]+)\n:::/g;
  if(regex.test(content)) {
    content = content.replace(regex, (match, attrs, contentStr, href, btnText) => {
      // Append buttonText and buttonLink to custom-card attributes
      return `:::custom-card{${attrs} buttonText="${btnText.trim()}" buttonLink="${href.trim()}"}\n${contentStr}\n:::`;
    });
    fs.writeFileSync(f, content, 'utf8');
    changed++;
  }
});
console.log('Fixed markdown card buttons in files:', changed);
