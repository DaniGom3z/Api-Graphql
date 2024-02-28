import { mergeTypeDefs } from "@graphql-tools/merge";
// --------------------------------------------------------------Laptop
import Laptop from "./types/typeLaptop";
// -----------------------------------------------------------------Query
import getAllLaptop from "./Query/getAllLaptop";
import getLaptopsByMarca from "./Query/getLaptopsByMarca";
import getLaptopsByRam from "./Query/getLaptopsByRam";
import getLaptopsByPrice from "./Query/getLaptopsByPrice";
//-----------------------------------------------------------------Mutation
import createLaptop from "./Mutation/createLaptop";
import updateLaptop from "./Mutation/updateLaptop";
import deleteLaptop from "./Mutation/deleteLaptop";

//---------------------------------------------------------------Mouse
import Mouse from "./types/typeMouse";
//---------------------------------------------------------------Query
import getMousesByConexion from "./Query/getMousesByConexion";
import getMousesByMarca from "./Query/getMouseByMarca";
import getMousesByPrice from "./Query/getMouseByPrice";
//---------------------------------------------------------------Mutation
import createMouse from "./Mutation/createMouse";
import updateMouse from "./Mutation/updateMouse";
import deleteMouse from "./Mutation/deleteMouse";

//-----------------------------------------------------------------User
import User from "./types/typeUser";
//------------------------------------------------------------------Query
import getAllUsers from "./Query/getAllUsers";
//------------------------------------------------------------------Mutation
import createUser from "./Mutation/createUser";
import login from "./Mutation/login";

const typeDefs = mergeTypeDefs([
  Laptop,
  User,
  Mouse,
  getAllLaptop,
  createLaptop,
  getAllUsers,
  createUser,
  updateLaptop,
  deleteLaptop,
  getLaptopsByMarca,
  getLaptopsByRam,
  getMousesByConexion,
  getMousesByMarca,
  createMouse,
  updateMouse,
  deleteMouse,
  getLaptopsByPrice,
  getMousesByPrice,
  login
]);

export { typeDefs };
