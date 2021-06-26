import {
  DataTypes,
  Database,
  Model,
  PostgresConnector,
} from 'https://deno.land/x/denodb/mod.ts';
import { config } from 'https://deno.land/x/dotenv/mod.ts';

console.log(config({ safe: true }));
const DB_PW = Deno.env.get('DB_PW');

const connection = new PostgresConnector({
  host: 'localhost',
  username: 'postgres',
  password: `${DB_PW}`,
  database: 'deno',
});

class Todo extends Model {
  static table = 'todo';
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    complete: DataTypes.BOOLEAN,
  };

  static defaults = {
    name: 'Todo',
    description: '',
    complete: false,
  };
}
export const getTodos = async (): Promise<Todo[]> => {
  const db = new Database(connection);

  db.link([Todo]);

  // await db.sync();
  await db.sync({ drop: true });

  await Todo.create({
    name: 'Create App',
    description: 'Build a Todo app with Deno',
    complete: false,
  });
  await Todo.create({
    name: 'Finish App',
    description: 'Finish Todo app with Deno',
    complete: false,
  });
  await Todo.create({
    name: 'Find Table',
    description: 'Figure out where this table is',
    complete: false,
  });

  const todos = await Todo.select().all();
  console.log({ todos });

  await db.close();

  return todos;
};
