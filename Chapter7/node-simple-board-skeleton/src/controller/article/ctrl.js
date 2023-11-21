const { ArticleDAO } = require("../../DAO");

const readArticle = async (req, res, next) => {
  try {
    const { user } = req.session;
    const { articleId } = req.params;

    const article = await ArticleDAO.getById(articleId);

    if (!article) throw new Error("NOT_EXIST");
    return res.render("articles/details.pug", { user, article });
  } catch (err) {
    next(err);
  }
};

const writeArticleForm = async (req, res, next) => {
  try {
    const { user } = req.session;
    return res.render("articles/editor.pug", { user });
  } catch (err) {
    next(err);
  }
};

const writeArticle = async (req, res, next) => {
  try {
    const { user } = req.session;

    const title = req.body.title.trim();
    const content = req.body.content.trim();

    if (!title || !content) throw new Error("BAD_REQUEST");
    if (title > 50 || content > 65000) throw new Error("BAD_REQUEST");

    const articleID = await ArticleDAO.create(title, content, user);
    return res.redirect(`/article/${articleID}`);
  } catch (err) {
    next(err);
  }
};
