const jwt = require('jsonwebtoken');


exports.generateAccessToken = (userId)=>{
    const secretKey = "ShantanuSisodia2127@#"; // Secret key
    const payload = { id: userId };
    return jwt.sign(payload, secretKey);
}

