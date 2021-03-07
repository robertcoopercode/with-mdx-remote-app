import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'content', 'blog')

function throughDirectory(directory: string) {
  let posts = [];

  function loopThroughDirectoryFiles(directory: string): void {
      for (const file of fs.readdirSync(directory)) {
          const absolute = path.join(directory, file);
          if (file === 'index.mdx') {
            const fileContents = fs.readFileSync(absolute, 'utf8');
            const {content, data} = matter(fileContents)
            posts.push({ slug: directory.split(path.sep).pop()
              , content, data })
          }
          if (fs.statSync(absolute).isDirectory()) {
              loopThroughDirectoryFiles(absolute);
          }
      }
  }

  loopThroughDirectoryFiles(directory);

  console.log({posts})

  return posts
}

export function getAllPosts() {
  console.log('Directory from getAllPosts', POSTS_PATH);
  return throughDirectory(POSTS_PATH);
}