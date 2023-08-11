## Clone Twitter Api Sederhana 
membuat API-twitter sederhana dengan menggunakan teknologi nextjs, mongodb, prisma dan typescript

## Request & Response Examples

- [GET /users](#get-users)
- [POST /login](#post-login)
- [POST /signub](#post-signub)
- [POST /tweets](#post-tweets)
- [GET /tweet/[id]](#get-tweetid)
- [POST /tweet/[id]](#post-tweetid)

### GET /users

Example: http://localhost:3000/api/users.json


### POST /login

Example: http://localhost:3000/api/login.json


### POST /signub

Example: http://localhost:3000/api/signub.json

Reques body : 
POST /api/signup HTTP/1.1
User-Agent: Thunder Client (https://www.thunderclient.com)
Accept: application/json
Content-Type: application/json
Host: localhost:3000
Content-Length: 74

{
  "name": "aidil",
  "email": "aidil@gmail.com",
  "password": "aidil"
}


### POST /tweets

Example: http://localhost:3000/api/tweets.json


### GET /tweet/[id]

Example: http://localhost:3000/api/tweet.json


### POST /tweet/[id]

Example: http://localhost:3000/api/tweet.json



