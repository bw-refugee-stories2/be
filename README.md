# Back-End

## Schema

#### Admins

| Field    | Type    | Notes                              |
| -------- | ------- | ---------------------------------- |
| id       | integer | _primary key_ and _autoincrements_ |
| email    | string  | _required_ and _unique_            |
| password | string  | _required_                         |
| name     | string  | _required_                         |

#### Stories

| Field     | Type    | Notes                                                                   |
| --------- | ------- | ----------------------------------------------------------------------- |
| id        | integer | _primary key_ and _autoincrements_                                      |
| name      | string  | _required_; name of the refugee/story                                   |
| image_URL | string  | refugee/story image                                                     |
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

| Type   | Path                                     | Notes                                                                                                 | Example                                          |
| ------ | ---------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| POST   | `/api/auth/register`                     | register a new admin                                                                                  | [link](#post-apiauthregister)                    |
| POST   | `/api/auth/login`                        | login an admin                                                                                        | [link](#post-apiauthlogin)                       |
| &nbsp; |                                          |                                                                                                       |                                                  |
| GET    | `/api/admin/:admin_id`                   | get admin info; requires authorization                                                                | [link](#get-apiadminsadmin_id)                   |
| PUT    | `/api/admin/:admin_id`                   | update admin info; requires authorization                                                             | [link](#put-apiadminsadmin_id)                   |
| DELETE | `/api/admin/:admin_id`                   | delete a admin account; requires authorization                                                        | [link](#delete-apiadminsadmin_id)                |
| &nbsp; |                                          |                                                                                                       |                                                  |
| GET    | `/api/admin/:admin_id/stories`           | get ALL stories; requires authorization                                                               | [link](#get-apiadminsadmin_idstories)            |
| GET    | `/api/admin/:admin_id/stories/:story_id` | get a story; requires authorization;                                                                  | [link](#get-apiadminsadmin_idstoriesstory_id)    |
| PUT    | `/api/admin/:admin_id/stories/:story_id` | update a story; change `approved` key to approve or reject a submitted story; requires authorization; | [link](#put-apiadminsadmin_idstoriesstory_id)    |
| DELETE | `/api/admin/:admin_id/stories/:story_id` | delete a story; requires authorization;                                                               | [link](#delete-apiadminsadmin_idstoriesstory_id) |  |  |  |
| &nbsp; |
| GET    | `/api/stories`                           | get all approved stories                                                                              | [link](#get-apistories)                          |
| POST   | `/api/stories`                           | create/send a new story; requires `name` and `content`                                                | [link](#post-apistories)                         |
| GET    | `/api/stories/:story_id`                 | get an approved story                                                                                 | [link](#get-apistoriesstory_id)                  |

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
  "admin": {
    "id": 1,
    "email": "username@email.com",
    "name": "Name"
  },
  "authorization": "really.long.token"
}
```

#### GET /api/admins/:admin_id

response data

```json
{
  "id": 1,
  "email": "username@email.com",
  "name": "Name"
}
```

#### PUT /api/admins/:admin_id

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

#### DELETE /api/admins/:admin_id

response data

```
no content
```

#### GET /api/admins/:admin_id/stories

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

#### GET /api/admins/:admin_id/stories/:story_id

response data

```json
{
  "id": 1,
  "name": "Name",
  "story": "Story text",
  "approved": false
}
```

#### PUT /api/admins/:admin_id/stories/:story_id

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

#### DELETE /api/admins/:admin_id/stories/:story_id

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
    "story": "Story text",
    "approved": true
  },
  {
    "id": 2,
    "name": "Name",
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
  "approved": true
}
```
