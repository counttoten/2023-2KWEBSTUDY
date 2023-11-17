const { ArticleDAO } = require("../DAO");

const indexPage = async (req, res, next) => {
  try {
    const { user } = req.session;
    return res.render("index.pug", { user });
  } catch (err) {
    return next(err);
  }
};

const listArticles = async (req, res, next) => {
  try {
    const { user } = req.session;
    const { page } = req.params;
    if (page <= 0) throw new Error("BAD_REQUEST");

    console.log(page);
    const articles = await ArticleDAO.getList((page - 1) * 10, 10);
    const totalArticleNum = await ArticleDAO.getTotalCount();
    const hasPrev = page > 1;
    const hasNext = totalArticleNum > page * 10;

    console.log(page);
    return res.render("articles/index.pug", {
      user,
      page,
      articles,
      hasPrev,
      hasNext,
    });
  } catch (err) {
    return next(err);
  }
};

const latestArticles = async (req, res, next) => {
  try {
    res.redirect("/articles/page/1");
  } catch (err) {
    res.next(err);
  }
};

module.exports = { indexPage, listArticles, latestArticles };
