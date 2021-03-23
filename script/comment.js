const axios = require("axios");
const {
  event: { issue, action },
} = JSON.parse(process.env.GITHUB_CONTEXT);
const { author_association, body, title, number } = issue;
const host = process.env.ISSUEHOST;

console.log(JSON.parse(process.env.GITHUB_CONTEXT););

// if (author_association === "OWNER") {
//   if (action === "edited") {
//     axios.put(host, {
//       name: title,
//       issueId: number,
//       content: body,
//     });
//   } else if (action === "opened") {
//     axios.post(host, {
//       name: title,
//       issueId: number,
//       content: body,
//     });
//   }
// }
