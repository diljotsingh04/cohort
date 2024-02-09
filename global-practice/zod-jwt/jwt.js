const jwt = require('jsonwebtoken');
const jwtPassword = "123455";

const token = jwt.sign({username: "Diljot Singh"}, jwtPassword);

const ver = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkRpbGpvdCBTaW5naCIsImlhdCI6MTcwNzQ2Mjk1NH0.jKrSOR3MRgLnlA0WwX3oeRDRm8FxyrI9UlZs3BrrsEc", jwtPassword);

console.log(ver);