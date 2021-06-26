# Deno - Just another database connector

<p>This application is for the sole purpose of learning more about Deno and the surrounding ecosystem as well as database access and actions.</p>

<p>This app is using a local `Postgres` database with `Docker`</p>

### Deno Oak

- Similar to Express

### DenoDB (ORM)

- Similar to TypeORM

## Run

- `Port 3000`

```bash
sh run.sh
# running at localhost:3000
```

### Permissions

- `--allow-net`
- `--allow-env`
- `--allow-read`
- `--watch` (nodemon for deno)

### Dependancies

- Dotenv - `https://deno.land/x/dotenv@v2.0.0`

## Endpoint Example

- `20210625234823`
- `http://localhost:3000/`

```json
[
  {
    "id": 1,
    "name": "Create App",
    "description": "Build a Todo app with Deno",
    "complete": false,
    "createdAt": "2021-06-26T03:48:23.306Z",
    "updatedAt": "2021-06-26T03:48:23.306Z"
  },
  {
    "id": 2,
    "name": "Finish App",
    "description": "Finish Todo app with Deno",
    "complete": false,
    "createdAt": "2021-06-26T03:48:23.318Z",
    "updatedAt": "2021-06-26T03:48:23.318Z"
  },
  {
    "id": 3,
    "name": "Find Table",
    "description": "Figure out where this table is",
    "complete": false,
    "createdAt": "2021-06-26T03:48:23.320Z",
    "updatedAt": "2021-06-26T03:48:23.320Z"
  }
]
```
