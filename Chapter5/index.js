const { runQuery } = require("./database");

const getScoreStats = async () => {
  const sql =
    "SELECT course, Count(*) AS cnt, Avg(final) AS avg, " +
    "Stddev(final) AS stddev FROM scores GROUP BY course";
  const results = await runQuery(sql);
  return results;
};

const getScoreByIdName = async (id, name) => {
  const sql = "SELECT * FROM scores WHERE id = ? AND student = ?";
  const results = await runQuery(sql, [id, name]);
  return results[0];
};
const createScore = async (name, course, midterm, final) => {
  const sql = "INSERT INTO scores VALUES (DEFAULT, ?, ?, ?, ?)";
  const result = await runQuery(sql, [name, course, midterm, final]);
  return result;
};

(async () => {
  await createScore("n", "c'); DROP TABLE scores;", 0, 0);
})();
