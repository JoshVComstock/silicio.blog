// Punto de entrada público del feature `articles`.
// Las páginas SOLO deberían importar desde aquí, nunca de los archivos internos.
export {
  getAllArticles,
  getArticleBySlug,
  getArticlesByCategory,
  getArticlesByTag,
  getAllTags,
  getFeaturedArticle,
  getLatestArticles,
  getTrendingArticles,
  getRelatedArticles,
} from './articles.api';
