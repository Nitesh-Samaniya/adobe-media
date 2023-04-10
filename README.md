# Adobe Media

### `About the Assignment`

Adobe Media is a simple social media platform consisting of a backend
API and a frontend UI, and analytics pages. The platform support creating,
reading, updating, and deleting operations for user profiles and posts. In addition,
users should be able to "like" and "unlike" posts. The analytics pages display
insights on user engagement and content popularity.

<br />

#### <a href="https://frontend-murex-xi.vercel.app/">Click to see Live Demo</a>

<br />

### Backend API Reference

| Request            | Route     | Links   |
| :------------------- | :------- | :------------ |
| `POST`           | `To create user` | **https://adobemedia.onrender.com/users**. |
| `GET`              | `Get particular user`  | **https://adobemedia.onrender.com/users**. |
| `PUT`        | `To update name or bio of user's profile` | **https://adobemedia.onrender.com/users/:id**. |
| `DELETE` | `To delete a user's acocunt` | **https://adobemedia.onrender.com/users/:id**. |
| `GET`             | `Get all posts` | **https://adobemedia.onrender.com/posts**. |
| `POST`           | `To publish new post` | **https://adobemedia.onrender.com/posts**. |
| `GET`              | `Get particular post`  | **https://adobemedia.onrender.com/posts/:id**. |
| `PUT`        | `To update content of the post` | **https://adobemedia.onrender.com/posts/:id**. |
| `DELETE` | `To delete a particular post` | **https://adobemedia.onrender.com/posts/:id**. |
| `POST`             | `To like the post` | **https://adobemedia.onrender.com/posts/:id/like**. |
| `POST`             | `To unlike the post` | **https://adobemedia.onrender.com/posts/:id/unlike**. |
| `GET`             | `To get top-5 liked post` | **https://adobemedia.onrender.com/analytics/posts/top-liked**. |


<br />

## Tech Stack

**Frontend:** React, Chakra-UI

**Backend:** Node, Express, Mongoose, MongoDB

## Run Locally

Clone the project

```bash
  git clone https://github.com/Nitesh-Samaniya/adobe-media.git
```

Go to the project directory

```bash
  cd frontend
  cd backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

