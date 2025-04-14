import { buildSchema } from "type-graphql";
import { CountryResolver } from "./resolvers/Countries";


export async function getSchema() {
  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });

  return schema;
}