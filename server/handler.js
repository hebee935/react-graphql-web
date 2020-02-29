import { ApolloServer } from 'apollo-server';
import schema from './schema';
import database, { models } from './db/database';

const server = new ApolloServer({
    schema,
    context: ({ req }) => {
        return { models, };
    }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
  database();
});