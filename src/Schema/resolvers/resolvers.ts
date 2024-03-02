//-------------------------------Mutation----------------
import {createLaptop} from "./mutation/createLaptop"
import { createUser } from "./mutation/createUser"
import {updateLaptop} from "./mutation/updateLaptop"
import {deleteLaptop} from "./mutation/deleteLaptop"
import {createMouse} from "./mutation/createMouse"
import {updateMouse} from "./mutation/updateMouse"
import { deleteMouse } from "./mutation/deleteMouse"
import {login} from "./mutation/login"
import {createWebhook} from "./mutation/createWebhook"

//--------------------------------Query---------------------
import { getAllLaptops } from "./querys/getAllLaptops"
import { getAllUsers } from "./querys/getAllUsers"
import { getLaptopsByMarca } from "./querys/getLaptopByMarca"
import {getLaptopsByRam} from "./querys/getLaptopByRam"
import {getMousesByConexion} from "./querys/getMouseByConexion"
import {getMousesByMarca} from "./querys/getMousesByMarca"
import {getLaptopsByPrice} from "./querys/getLaptopsByPrice"
import { getMousesByPrice } from "./querys/getMousesByPrice"

const resolvers={
    Query: {
        getAllLaptops,
        getAllUsers,
        getLaptopsByMarca,
        getLaptopsByRam,
        getMousesByConexion,
        getMousesByMarca,
        getLaptopsByPrice,
        getMousesByPrice
    },

    Mutation: {
        createUser,
        createLaptop,
        updateLaptop,
        deleteLaptop,
        createMouse,
        updateMouse,
        deleteMouse,
        login ,
        createWebhook
    }
}

export {resolvers}