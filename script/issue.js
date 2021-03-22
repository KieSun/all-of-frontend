const { event: { issue, action } } = JSON.parse(process.env.GITHUB_CONTEXT)
const { author_association, body, title, number } = issue

console.log(process.env.ISSUEHOST)

if (author_association === 'OWNER') {
    if (action === 'edited') {
        console.log(body, title, number, '----edited')
    } else if (action === 'opened') {
        console.log(body, title, number, '----opened')
    }
}