import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl50805sc0v6901uk5vgb5q6m/master',
  cache: new InMemoryCache()

})