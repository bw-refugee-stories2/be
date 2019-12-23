# Back-End

## Schema

#### Users

| Field    | Type    | Notes                              |
| -------- | ------- | ---------------------------------- |
| id       | integer | _primary key_ and _autoincrements_ |
| email    | string  | _required_ and _unique_            |
| password | string  | _required_                         |
| name     | string  | _required_                         |

#### Stories

| Field           | Type    | Notes                                                                             |
| --------------- | ------- | --------------------------------------------------------------------------------- |
| id              | integer | _primary key_ and _autoincrements_                                                |
| story name      | string  | _required_; name of the refugee/story                                             |
| story image URL | string  | _required_; refugee/story image                                                   |
| story content   | text    | _required_; story of the refugee                                                  |
| author          | text    | _required_; author of the story                                                   |
| approved        | boolean | _required_; whether or not the story has been approved; defaults to false on POST |

## API

test account:

```json
{
  "email": "tester@email.com",
  "password": "password"
}
```

#### Table of Contents

| Type   | Path                          | Notes                                                                                 | Example                              |
| ------ | ----------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------ |
| POST   | `/api/auth/register`          | register a new user                                                                   | [link](#post-apiauthregister)        |
| POST   | `/api/auth/login`             | login a user                                                                          | [link](#post-apiauthlogin)           |
| &nbsp; |                               |                                                                                       |                                      |
| GET    | `/api/users/:user_id`         | get user info; requires authorization                                                 | [link](#get-apiusersuser_id)         |
| PUT    | `/api/users/:user_id`         | update user info; requires authorization                                              | [link](#put-apiusersuser_id)         |
| DELETE | `/api/users/:user_id`         | delete a user account; requires authorization                                         | [link](#delete-apiusersuser_id)      |
| &nbsp; |                               |                                                                                       |                                      |
| GET    | `/api/users/:user_id/stories` | get queued stories; requires authorization                                            | [link](#get-apiusersuser_idstories)  |
| PUT    | `/api/users/:user_id/stories` | change `approved` key to approve or reject a submitted story; requires authorization; | [link](#post-apiusersuser_idstories) |
| &nbsp; |                               |                                                                                       |                                      |
| POST   | `/api/stories`                | create/send a new story; requires `name` and `story`                                  | [link](#post-apistories)             |
| GET    | `/api/stories/:story_id`      | get information about a story                                                         | [link](#get-apistoriesstory_id)      |
| PUT    | `/api/stories/:story_id`      | update a story;                                                                       | [link](#put-apistoriesstory_id)      |
| DELETE | `/api/stories/:story_id`      | delete a created story;                                                               | [link](#delete-apistoriesstory_id)   |

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
    "name": "Name"
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
  "name": "Name"
}
```

#### PUT /api/users/:user_id

request data

```json
{
  "email": "username@email.com",
  "name": "Name"
}
```

response data

```json
{
  "id": 1,
  "email": "username@email.com",
  "name": "Name"
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
    "story": "Story text",
    "approved": true
  },
  {
    "id": 2,
    "name": "Name",
    "story": "Story text",
    "approved": false
  }
]
```

#### PUT /api/users/:user_id/stories

request data

```json
{
  "name": "Name",
  "story": "Story text",
  "approved": false
}
```

response data

```json
{
  "id": 1,
  "name": "Name",
  "story": "Story text",
  "approved": true
}
```

#### POST /api/stories

request data

```json
{
  "name": "Name",
  "story": "Story text"
}
```

response data

```json
{
  "id": 1,
  "name": "Name",
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
  "story": "Story text",
  "approved": false
}
```

#### PUT /api/stories/:story_id

request data

```json
{
  "name": "Name",
  "story": "Story text"
}
```

response data

```json
{
  "id": 1,
  "name": "Name",
  "story": "Story text"
}
```

#### DELETE /api/stories/:story_id

response data

```
no content
```
