# Back-End

## Schema

#### Users

| Field    | Type    | Notes                              |
| -------- | ------- | ---------------------------------- |
| id       | integer | _primary key_ and _autoincrements_ |
| email    | string  | _required_ and _unique_            |
| password | string  | _required_                         |
| username | string  | _required_                         |

#### Stories

| Field     | Type    | Notes                                                                   |
| --------- | ------- | ----------------------------------------------------------------------- |
| id        | integer | _primary key_ and _autoincrements_                                      |
| name      | string  | _required_; name of the refugee/story                                   |
| image_URL | string  | refugee/story image                                                     |
| quote     | text    | story quote                                                             |
| content   | text    | _required_; story of the refugee                                        |
| author    | text    | author of the story                                                     |
| approved  | boolean | whether or not the story has been approved; defaults to _false_ on POST |

## API

test account:

```json
{
  "email": "tester@email.com",
  "password": "password"
}
```

#### Table of Contents

| Type   | Path                                   | Notes                                                                                                 | Example                                        |
| ------ | -------------------------------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| POST   | `/api/auth/register`                   | register a new user                                                                                   | [link](#post-apiauthregister)                  |
| POST   | `/api/auth/login`                      | login an user                                                                                         | [link](#post-apiauthlogin)                     |
| &nbsp; |                                        |                                                                                                       |                                                |
| GET    | `/api/user/:user_id`                   | get user info; requires authorization                                                                 | [link](#get-apiusersuser_id)                   |
| PUT    | `/api/user/:user_id`                   | update user info; requires authorization                                                              | [link](#put-apiusersuser_id)                   |
| DELETE | `/api/user/:user_id`                   | delete a user account; requires authorization                                                         | [link](#delete-apiusersuser_id)                |
| &nbsp; |                                        |                                                                                                       |                                                |
| GET    | `/api/user/:user_id/stories`           | get ALL stories; requires authorization                                                               | [link](#get-apiusersuser_idstories)            |
| GET    | `/api/user/:user_id/stories/:story_id` | get a story; requires authorization;                                                                  | [link](#get-apiusersuser_idstoriesstory_id)    |
| PUT    | `/api/user/:user_id/stories/:story_id` | update a story; change `approved` key to approve or reject a submitted story; requires authorization; | [link](#put-apiusersuser_idstoriesstory_id)    |
| DELETE | `/api/user/:user_id/stories/:story_id` | delete a story; requires authorization;                                                               | [link](#delete-apiusersuser_idstoriesstory_id) |  |  |  |
| &nbsp; |
| GET    | `/api/stories`                         | get all approved stories                                                                              | [link](#get-apistories)                        |
| POST   | `/api/stories`                         | create/send a new story; requires `name` and `content`                                                | [link](#post-apistories)                       |
| GET    | `/api/stories/:story_id`               | get an approved story                                                                                 | [link](#get-apistoriesstory_id)                |

## Examples

#### POST /api/auth/register

request data:

```json
{
  "email": "username@email.com",
  "password": "password",
  "name": "Name"
}
```

response data:

```json
{
  "user": {
    "id": 1,
    "email": "username@email.com",
    "name": "Name"
  },
  "authorization": "really.long.token"
}
```

#### POST /api/auth/login

request data:

```json
{
  "email": "username@email.com",
  "password": "password"
}
```

response data:

```json
{
  "user": {
    "id": 1,
    "email": "username@email.com",
    "username": "Name"
  },
  "authorization": "really.long.token"
}
```

#### GET /api/users/:user_id

response data

```json
{
  "id": 1,
  "email": "username@email.com",
  "username": "Name"
}
```

#### PUT /api/users/:user_id

request data

```json
{
  "email": "username@email.com",
  "username": "Name"
}
```

response data

```json
{
  "id": 1,
  "email": "username@email.com",
  "username": "Name"
}
```

#### DELETE /api/users/:user_id

response data

```
no content
```

#### GET /api/users/:user_id/stories

response data

```json
[
  {
    "id": 1,
    "name": "Name",
    "quote": "Quote here",
    "image_URL": "image.com",
    "story": "Story text",
    "approved": true
  },
  {
    "id": 2,
    "name": "Name",
    "quote": "Quote here",
    "image_URL": "image.com",
    "story": "Story text",
    "approved": false
  }
]
```

#### GET /api/users/:user_id/stories/:story_id

response data

```json
{
  "id": 1,
  "name": "Name",
  "quote": "Quote here",
  "image_URL": "image.com",
  "story": "Story text",
  "approved": false
}
```

#### PUT /api/users/:user_id/stories/:story_id

request data

```json
{
  "name": "Name",
  "quote": "Quote here",
  "image_URL": "image.com",
  "story": "Story text",
  "approved": false
}
```

response data

```json
{
  "id": 1,
  "name": "Name",
  "quote": "Quote here",
  "image_URL": "image.com",
  "story": "Story text",
  "approved": true
}
```

#### DELETE /api/users/:user_id/stories/:story_id

response data

```
no content
```

#### GET /api/stories

response data

```json
[
  {
    "id": 1,
    "name": "Name",
    "quote": "Quote here",
    "image_URL": "image.com",
    "story": "Story text",
    "approved": true
  },
  {
    "id": 2,
    "name": "Name",
    "quote": "Quote here",
    "image_URL": "image.com",
    "story": "Story text",
    "approved": true
  }
]
```

#### POST /api/stories

request data

```json
{
  "name": "Name",
  "quote": "Quote here",
  "image_URL": "image.com",
  "story": "Story text"
}
```

response data

```json
{
  "id": 1,
  "name": "Name",
  "quote": "Quote here",
  "image_URL": "image.com",
  "story": "Story text",
  "approved": false
}
```

#### GET /api/stories/:story_id

response data

```json
{
  "id": 1,
  "name": "Name",
  "quote": "Quote here",
  "image_URL": "image.com",
  "story": "Story text",
  "approved": true
}
```
