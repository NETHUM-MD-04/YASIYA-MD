const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~nI0XALjY#lzl4x3nk4XadV9rx1nk7kfKLq2gNOMmh9vf_P-Fy5z4'
};
