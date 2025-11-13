import client from "../client";

export const getCabangs = () => client.get("/cabangs");
export const getCabangById = (id) => client.get(`/cabangs/${id}`);
export const createCabang = (data) => client.post("/cabangs", data);
export const updateCabang = (id, data) => client.put(`/cabangs/${id}`, data);
export const deleteCabang = (id) => client.delete(`/cabangs/${id}`);