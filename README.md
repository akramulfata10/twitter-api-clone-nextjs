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

```javascript
    "users": [
    {
      "id": "64d4de34ea48288f0fdcc0ad",
      "name": "akramulfata",
      "email": "akramulfata10@gmail.com",
      "password": "$2b$10$f8KUlNQSzQr8q/VOXTcLIeW9uqD789ePpka.XQcsTaSLdSfsf8iLG",
            "tweets": [
                {
                  "id": "64d5fa0094550e52ca060b89",
                  "tweet": "fata test tweet di twitter",
                  "createdDate": "2023-08-11T09:06:08.275Z",
                  "updatedDate": "2023-08-11T09:06:08.275Z",
                  "userId": "64d4de34ea48288f0fdcc0ad"
                },
                {
                  "id": "64d6071194550e52ca060b92",
                  "tweet": "fata test tweet di twitter Edit coba lagi",
                  "createdDate": "2023-08-11T10:01:53.378Z",
                  "updatedDate": "2023-08-11T10:01:53.378Z",
                  "userId": "64d4de34ea48288f0fdcc0ad"
                }
              ],
              "_count": {
                "tweets": 2
              }
    {
```
### POST /login

Example: http://localhost:3000/api/login.json

```javascript
   POST /api/login HTTP/1.1
   User-Agent: Thunder Client (https://www.thunderclient.com)
   Accept: application/json
   Content-Type: application/json
   Host: localhost:3000
   Content-Length: 69
   
   {
     "email": "akramulfata10@gmail.com",
     "password" : "1234567890"
   }

```javascript

Response Body: 

```javascript

    {
        login success
    }

```javascript



### POST /signub

Example: http://localhost:3000/api/signub.json


```javascript
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

```javascript

Response Body :

```javascript
   {
     "userCreate": {
       "id": "64d68259a94fbd7bfcc8fe74",
       "name": "aidil",
       "email": "aidil@gmail.com",
       "password": "$2b$10$yxETAvMa50c1xgeSaY2Zke.0Wm2SZ.v6RAZBcrth.WtIddtf//MQ2"
     }
   }
```javascript

### POST /tweets

Example: http://localhost:3000/api/tweets.json


### GET /tweet/[id]

Example: http://localhost:3000/api/tweet.json


### POST /tweet/[id]

Example: http://localhost:3000/api/tweet.json



