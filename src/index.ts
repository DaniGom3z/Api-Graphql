import { config } from "dotenv";
import { ApolloServer } from "apollo-server";
import { typeDefs } from "./Schema/defs/defs";
import { resolvers  } from "./Schema/resolvers/resolvers";
import { connectDB } from "./config/db";

config();

connectDB();


const server = new ApolloServer({
    typeDefs,
    resolvers
});

const PORT: number = parseInt(process.env.PORT || "3000");

server.listen(PORT).then(({ url }) => {
    console.log(`Servidor corriendo en ${url}`);
}).catch(error => {
    console.error("Error al iniciar el servidor Apollo:", error);
});
