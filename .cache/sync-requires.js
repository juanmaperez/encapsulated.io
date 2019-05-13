const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/juanmaperez/code/study/encapsulated/src/templates/blog-post.js"))),
  "component---src-templates-work-js": hot(preferDefault(require("/Users/juanmaperez/code/study/encapsulated/src/templates/work.js"))),
  "component---src-templates-category-js": hot(preferDefault(require("/Users/juanmaperez/code/study/encapsulated/src/templates/category.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/juanmaperez/code/study/encapsulated/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/juanmaperez/code/study/encapsulated/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/juanmaperez/code/study/encapsulated/src/pages/index.js"))),
  "component---src-pages-work-js": hot(preferDefault(require("/Users/juanmaperez/code/study/encapsulated/src/pages/work.js")))
}

