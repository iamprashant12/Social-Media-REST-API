# Social-Media-REST-API
 
 Register User
Registers a new user account.

URL: http://localhost:8800/api/auth/register
Method: POST
Request Body:
json
Copy code
{
    "username":"harry",
    "email": "harry@gmail.com",
    "password": "123456"
}
Login
Authenticates a user and returns an access token.

URL: http://localhost:8800/api/auth/login
Method: POST
Request Body:
json
Copy code
{
    "email": "harry@gmail.com",
    "password": "123456"
}
Update User
Updates user information.

URL: http://localhost:8800/api/users/:id
Method: PUT
Path Variables:
id: user ID (string)
Request Body:
json
Copy code
{
    "description":"I have added new description",
    "userId":"642d1b72c62a57db7e3bf7de"
}
Get User
Retrieves user information.

URL: http://localhost:8800/api/users/:id
Method: GET
Path Variables:
id: user ID (string)
Delete User
Deletes user account.

URL: http://localhost:8800/api/users/:id
Method: DELETE
Path Variables:
id: user ID (string)
Request Body:
json
Copy code
{
    "userId":"642d1b72c62a57db7e3bf7de"
}
Follow User
Follows a user.

URL: http://localhost:8800/api/users/:id/follow
Method: PUT
Path Variables:
id: user ID (string)
Request Body:
json
Copy code
{
    "userId":"642d1b72c62a57db7e3bf7de"
}
Unfollow User
Unfollows a user.

URL: http://localhost:8800/api/users/:id/unfollow
Method: PUT
Path Variables:
id: user ID (string)
Request Body:
json
Copy code
{
    "userId":"642d1b72c62a57db7e3bf7de"
}
Create Post
Creates a new post.

URL: http://localhost:8800/api/posts
Method: POST
Request Body:
json
Copy code
{
    "userId":"642d1b72c62a57db7e3bf7de",
    "description": "This is first post from harry",
    "image":"image.png"
}
Update Post
Updates a post.

URL: http://localhost:8800/api/posts/:id
Method: PUT
Path Variables:
id: post ID (string)
Request Body:
json
Copy code
{
    "userId":"642d5c035fe147a085c119e9"
}
Get Post
Retrieves a post.

URL: http://localhost:8800/api/posts/:id
Method: GET
Path Variables:
id: post ID (string)
Like Post
Likes a post.

URL: http://localhost:8800/api/posts/:id
Method: PUT
Path Variables:
id: post ID (
 
POST
register user
http://localhost:8800/api/auth/register
Add request description…
Body
raw (json)
json
{
    "username":"harry",
    "email": "harry@gmail.com",
    "password": "123456"
}
POST
login
http://localhost:8800/api/auth/login
Add request description…
Body
raw (json)
json
{
    "email": "harry@gmail.com",
    "password": "123456"
}
PUT
update user
http://localhost:8800/api/users/:id
Add request description…
Path Variables
id
642d1b72c62a57db7e3bf7de

Body
raw (json)
json
{
    "description":"I have added new description",
    "userId":"642d1b72c62a57db7e3bf7de"
}
GET
get user
http://localhost:8800/api/users/:id
Add request description…
Path Variables
id
642d1b72c62a57db7e3bf7de

DELETE
delete user
http://localhost:8800/api/users/:id
Add request description…
Path Variables
id
642d1b72c62a57db7e3bf7de

Body
raw (json)
json
{
    "userId":"642d1b72c62a57db7e3bf7de"
}
PUT
Follow user
http://localhost:8800/api/users/:id/follow
Add request description…
Path Variables
id
642d1b72c62a57db7e3bf7de

Body
raw (json)
json
{
    "userId":"642d1b72c62a57db7e3bf7de"
}
PUT
Unfollow user
http://localhost:8800/api/users/:id/unfollow
Add request description…
Path Variables
id
642d1b72c62a57db7e3bf7de

Body
raw (json)
json
{
    "userId":"642d1b72c62a57db7e3bf7de"
}
POST
create post
http://localhost:8800/api/posts
Add request description…
Body
raw (json)
json
{
    "userId":"642d1b72c62a57db7e3bf7de",
    "description": "This is first post from harry",
    "image":"image.png"
}
PUT
update post
http://localhost:8800/api/posts/:id
Add request description…
Path Variables
id
642d5c035fe147a085c119e9

Body
raw (json)
json
{
    "userId":"642d5c035fe147a085c119e9"
}
GET
get post
http://localhost:8800/api/posts/:id
Add request description…
Path Variables
id
642d5c035fe147a085c119e9

PUT
like post
http://localhost:8800/api/posts/:id
Add request description…
Path Variables
id
642d5c035fe147a085c119e9

Body
raw (json)
json
{
    "userId":"642d5c035fe147a085c119e9"
}
DELETE
delete post
http://localhost:8800/api/posts/:id
Add request description…
Path Variables
id
642d5c035fe147a085c119e9

Body
raw (json)
json
{
    "userId":"642d5c035fe147a085c119e9"
}
GET
get timeline
http://localhost:8800/api/posts/timeline/all
Add request description…
Body
raw (json)
json
{
    "userId":"642d1b72c62a57db7e3bf7de"
}
