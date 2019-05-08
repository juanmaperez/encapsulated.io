// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": () => import("/Users/juanmaperez/code/study/encapsulated/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-templates-work-js": () => import("/Users/juanmaperez/code/study/encapsulated/src/templates/work.js" /* webpackChunkName: "component---src-templates-work-js" */),
  "component---src-templates-category-js": () => import("/Users/juanmaperez/code/study/encapsulated/src/templates/category.js" /* webpackChunkName: "component---src-templates-category-js" */),
  "component---src-pages-404-js": () => import("/Users/juanmaperez/code/study/encapsulated/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-blog-js": () => import("/Users/juanmaperez/code/study/encapsulated/src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-index-js": () => import("/Users/juanmaperez/code/study/encapsulated/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-work-js": () => import("/Users/juanmaperez/code/study/encapsulated/src/pages/work.js" /* webpackChunkName: "component---src-pages-work-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/juanmaperez/code/study/encapsulated/.cache/data.json")

