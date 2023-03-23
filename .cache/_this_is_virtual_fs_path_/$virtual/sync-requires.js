
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/ron/tutorial-example/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/ron/tutorial-example/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/home/ron/tutorial-example/src/pages/about.js")),
  "component---src-pages-blog-index-js": preferDefault(require("/home/ron/tutorial-example/src/pages/blog/index.js")),
  "component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-blog-another-post-index-mdx": preferDefault(require("/home/ron/tutorial-example/src/pages/blog/{mdx.frontmatter__slug}.js?__contentFilePath=/home/ron/tutorial-example/blog/another-post/index.mdx")),
  "component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-blog-my-first-post-index-mdx": preferDefault(require("/home/ron/tutorial-example/src/pages/blog/{mdx.frontmatter__slug}.js?__contentFilePath=/home/ron/tutorial-example/blog/my-first-post/index.mdx")),
  "component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-blog-yet-another-post-index-mdx": preferDefault(require("/home/ron/tutorial-example/src/pages/blog/{mdx.frontmatter__slug}.js?__contentFilePath=/home/ron/tutorial-example/blog/yet-another-post/index.mdx")),
  "component---src-pages-index-js": preferDefault(require("/home/ron/tutorial-example/src/pages/index.js"))
}

