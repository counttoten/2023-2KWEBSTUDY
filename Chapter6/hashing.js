const util = require("util");
const crypto = require("crypto");
const { userInfo } = require("os");
const randomBytes = util.promisify(crypto.randomBytes);

const pbkdf2 = util.promisify(crypto.pbkdf2);

const generatePassword = async (password) => {
  const ALGO = "sha512";
  const KEY_LEN = 64;
  const salt = await randomBytes(32);
  const iter = Math.floor(Math.random() * 20000) + 200000;
  const digest = await pbkdf2(password, salt, iter, KEY_LEN, ALGO);
  console.log(
    `${ALGO}:${salt.toString("base64")}:${iter}:${KEY_LEN}:${digest.toString(
      "base64"
    )}`
  );
};

(async () => {
  await generatePassword("password1");
  await generatePassword("password2");
})();
