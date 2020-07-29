const AWS = require("aws-sdk");

AWS.config.accessKeyId = process.env.AWS_ACCESS_KEY;
AWS.config.secretAccessKey = process.env.AWS_SECRET_KEY;
AWS.config.region = process.env.AWS_REGION;

const html = (receiver) => {
    return `
    <div>
    <p><b>Hello ${receiver}</b></p>
    <p><b>Please visit our website at wwww.90210wc.com</b></p>
    </div>
  `;
};

exports.mailer = (receivers) => {
    const params = {
        Destination: {
            ToAddresses: receivers,
        },
        Message: {
            Subject: {
                Charset: "UTF-8",
                Data: "Welcome to wwww.90210wc.com",
            },
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: html(receivers[0]),
                },
            },
        },
        Source: process.env.SENDER_EMAIL,
    };
    return (sendPromise = new AWS.SES().sendEmail(params).promise());
};