const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src/dashboard/dashboardPages');

const walkSync = (dir, filelist = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      filelist = walkSync(filepath, filelist);
    } else if (filepath.endsWith('.jsx')) {
      filelist.push(filepath);
    }
  }
  return filelist;
};

const files = walkSync(targetDir);

files.forEach(filepath => {
  let content = fs.readFileSync(filepath, 'utf8');
  let originalContent = content;

  // Find the topic: axios.get("http://localhost:3000/<topic>")
  const match = content.match(/axios\s*\.\s*get\(['"`]http:\/\/localhost:3000\/([^'"`]+)['"`]\)/);
  if (!match) return;
  const topic = match[1];

  // Remove import axios
  content = content.replace(/import\s+axios\s+from\s+['"]axios['"];?\n?/, '');
  
  // Add import useContent
  if (!content.includes('useContent')) {
    content = content.replace(/(import\s+.*?;\n)/, `$1import useContent from "@/hooks/useContent";\n`);
  }

  // Find const [varName, setVarName] = useState(...); up to useEffect
  // We capture the varName
  const blockRegex = /const\s+\[([a-zA-Z0-9_]+),\s*[a-zA-Z0-9_]+\]\s*=\s*useState\([^)]*\);[\s\S]*?useEffect\(\(\)\s*=>\s*\{[\s\S]*?\}\s*,\s*\[\]\);/g;

  content = content.replace(blockRegex, (match, varName) => {
    return `const { data: ${varName}, loading, error } = useContent("${topic}");`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Updated: ${filepath}`);
  }
});
