// import nodemailer from "nodemailer";

// const transport = nodemailer.createTransport({
//   service: "barbodmasoudi@gmail.com",
//   port: 587,
//   auth: {
//     user: "barbodmasoudi@gmail.com",
//     pass: "barbod13832004",
//   },
// });

// const sendEmail = async () => {
//   try {
//     const res = await transport.sendMail({
//       from: "barbodmasoudi@gmail.com",
//       to: "barbodmasoodi@gmail.com",
//       subject: "test email",
//       text: "test email",
//       html: "<p>this is the html text</p>",
//       attachments: [
//         {
//           filename: "text1.txt",
//           content: "hello world!",
//         },
//       ],
//     });
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// };
// sendEmail().catch((err) => console.log(err));

import { Mail } from '@athenna/mail'

await Mail.from('barbodmasoudi@gmail.com')
  .to('barbodmasoodi@gmail.com')
  .content('<h1>Mail content</h1>')
  .send()