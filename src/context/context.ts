import { verifyToken } from "../jwt/authToken";
import { GraphQLError } from "graphql";

export default async ({ req, _res }: any) => {
  if (req.body.operationName === "IntrospectionQuery") {
    return {};
  }
  if (
    req.body.query.includes("createUser") ||
    req.body.query.includes("login")
  ) {
    return {};
  }
  const token = req.headers.authorization || "";
  const user = await verifyToken(token);
  if (!user) {
    throw new GraphQLError("User is not Authenticated", {
      extensions: {
        code: "UNAUTHENTICATED",
      },
    });
  }
  return { user };
};