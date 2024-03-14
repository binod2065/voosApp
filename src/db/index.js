import hana from "@sap/hana-client"

import PromiseModule from "@sap/hana-client/extension/Promise.js";
import conn_params from "./config.js"


/**
 * @param { string} sql
 * @param {[number | string]} [params]
 * @returns {Array[any]}
 */
export default async (sql, params) => {

    const data = [];
    const conn = hana.createConnection();
    const stmt = await PromiseModule.connect(conn, conn_params)
        .then(() => {
            return PromiseModule.prepare(conn, sql);
        }).catch((err) => {
           throw new Error("Invalid Query : ", err.message)
        })
    const rsp = await PromiseModule.executeQuery(stmt, params)
        .then((rs) => {
            return rs
        }).catch((err) => {
            console.log(err)
        })

    while (rsp.next()) {
        const value = await PromiseModule.getValues(rsp)
            .then((row) => {
                return row
            })
        data.push(value)
    }
    await PromiseModule.close(conn)
    return data;


};
