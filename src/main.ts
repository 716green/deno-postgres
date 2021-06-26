import { getTodos } from './db.ts';

import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

import 'https://deno.land/x/dotenv/load.ts';

const port = 3000;

const app: Application = new Application();

// Middleware
// app.use((ctx) => {
//   ctx.response.body = 'Hello World!';
// });

const router = new Router();
router.get('/', async (ctx) => {
  const todoValues = await getTodos();
  console.log({ todoValues });
  ctx.response.body = todoValues;
});
// .get('/', (context) => {
//   context.response.body = 'Hello world!';
// })
// .get('/book/:id', (context) => {
//   if (context.params && context.params.id && books.has(context.params.id)) {
//     context.response.body = books.get(context.params.id);
//   }
// });

app.use(router.routes());
app.use(router.allowedMethods());

console.log('http://localhost:3000');
await app.listen({ port });
