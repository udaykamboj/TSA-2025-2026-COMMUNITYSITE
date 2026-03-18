const fs = require("fs")
const path = require("path")

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      processDirectory(fullPath)
    } else if (fullPath.endsWith(".md") || fullPath.endsWith(".mdx")) {
      let content = fs.readFileSync(fullPath, "utf8")
      
      // Remove AI bolding
      content = content.replace(/\*\*(.*?)\*\*/g, "$1")
      
      // Auto-convert FAQ sections into dropdowns
      // Match ## Frequently asked questions until the next ## or end of file
      const faqRegex = /(## Frequently asked questions\s*\{#.*?\})([\s\S]*?)(?=##|$)/gi
      content = content.replace(faqRegex, (match, header, body) => {
         // inside the body, find paragraphs that start with a question mark or just split by paragraphs that end with ?
         // Actually, most FAQs have Question? \n\n Answer.
         // Let's just wrap any bolded Q originally or just use generic regex.
         // Since we already stripped bold, it's hard to find Q/A.
         // Let's run this before stripping bold!
         return match;
      })
      
      fs.writeFileSync(fullPath, content)
    }
  }
}

// More advanced auto-converter for all files
function processDirectoryAdvanced(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      processDirectoryAdvanced(fullPath)
    } else if (fullPath.endsWith(".md") || fullPath.endsWith(".mdx")) {
      // skip the ones we already hand-crafted
      if (
        fullPath.includes("rent-increase-help.md") || 
        fullPath.includes("parking-or-camera-tickets.md") || 
        fullPath.includes("snap-benefits.md")
      ) {
        continue
      }
      
      let content = fs.readFileSync(fullPath, "utf8")
      
      // FAQ to Dropdowns
      const faqRegex = /(## Frequently asked questions.*?)([\s\S]*?)(?=##|$)/gi
      content = content.replace(faqRegex, (match, header, body) => {
         // replace pairs of **Q** \n A with dropdowns
         const qRegex = /\*\*(.*?)\*\*\s*([\s\S]*?)(?=\*\*|$)/g
         let newBody = body.replace(qRegex, (m, q, a) => {
            if (!q.includes("?")) return m; // only if it's a question
            return `:::dropdown{title="${q.trim()}"}\n${a.trim()}\n:::\n\n`
         })
         return `${header}\n\n${newBody.trim()}\n\n`
      })

      // Convert "For more info, [Contact Us](link)" into buttons if they are alone in a paragraph
      const ctaRegex = /\n\n\[(.*?)\]\((.*?)\)\n\n/g
      content = content.replace(ctaRegex, "\n\n::button[$1]{href=\"$2\"}\n\n")

      // Finally, remove all remaining bolding
      content = content.replace(/\*\*(.*?)\*\*/g, "$1")
      
      fs.writeFileSync(fullPath, content)
    }
  }
}

processDirectoryAdvanced(path.join(__dirname, "lib", "content"))
console.log("Processed all markdown files")
