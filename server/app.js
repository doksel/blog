import express from "express";
import path from "path";
import cors from 'cors';
import { ApolloServer, gql } from 'apollo-server-express';

import typeDefs from './modelsGraphql/schema.gql';
import resolvers from './resolvers';
import {endpoint} from './config'

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: endpoint });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// const morgan = require("morgan");
// const dotenv = require("dotenv");
// dotenv.config();

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// Setup logger
// app.use(
//   morgan(
//     ":remote-addr - :remote-user [:date[clf]] ':method :url HTTP/:http-version' :stat" +
//       "us :res[content-length] :response-time ms"
//   )
// );

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("*", (req, res) => {
    // res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
    res.send('hello'); // for test
});

export default app;
