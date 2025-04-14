import "reflect-metadata";
import { datasource } from "./datasource";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { getSchema } from "./schema";

async function initialize() {
  await datasource.initialize();
  console.log("Datasource is connected");

  const schema = await getSchema();

  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 5000 },
  });

  console.log(`GraphQL server ready at ${url}`);
}

initialize();