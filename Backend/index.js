require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = 
  {
  "login": "Nargis7",
  "id": 175393962,
  "node_id": "U_kgDOCnRMqg",
  "avatar_url": "https://avatars.githubusercontent.com/u/175393962?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Nargis7",
  "html_url": "https://github.com/Nargis7",
  "followers_url": "https://api.github.com/users/Nargis7/followers",
  "following_url": "https://api.github.com/users/Nargis7/following{/other_user}",
  "gists_url": "https://api.github.com/users/Nargis7/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Nargis7/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Nargis7/subscriptions",
  "organizations_url": "https://api.github.com/users/Nargis7/orgs",
  "repos_url": "https://api.github.com/users/Nargis7/repos",
  "events_url": "https://api.github.com/users/Nargis7/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Nargis7/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Nargis Perween",
  "company": null,
  "blog": "https://github.com/nargis7",
  "location": "Jamshedpur ,India",
  "email": null,
  "hireable": null,
  "bio": "🔭 Aspiring Software Engineer | Dedicated Learner.",
  "twitter_username": "Nargisparween07",
  "public_repos": 27,
  "public_gists": 0,
  "followers": 2,
  "following": 7,
  "created_at": "2024-07-12T08:08:28Z",
  "updated_at": "2025-08-06T06:04:44Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter' , (req, res) => {
  res.send('Hello Twitter!')
})

app.get('/login',(req, res)=>{
  res.send('<h1>Hello Login!</h1>')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
