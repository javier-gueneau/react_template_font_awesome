const secretKey = "keepThisSecret";
const payload = {
  _id: user._id
};
const myJWT = jwt.sign(payload, secretKey);

