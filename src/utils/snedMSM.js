import { Vonage } from "@vonage/server-sdk";

const vonage = new Vonage({
  apiKey: "f184277c",
  apiSecret: "krTSFO1xIQ1llhJk",
});

export const snedMessage = ({ to, from, text }) => {
  async function sendSMS() {
    await vonage.sms
      .send({to,from,text})
      .then((resp) => {
        console.log("Message sent successfully");
        console.log(resp);
      })
      .catch((err) => {
        console.log("There was an error sending the messages.");
        console.error(err);
      });
  }
  sendSMS();
};
