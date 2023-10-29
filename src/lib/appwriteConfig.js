import { Account, Client } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6536d46424ed2e56a433");

export const account = new Account(client);

export default client;
