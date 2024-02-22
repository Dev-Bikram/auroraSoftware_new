import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";


export interface IfetchContactUs {
    name: String;
    email: String;
    message: String;
}


export const fetchContactUs = async (data : IfetchContactUs ) => {
    try {
        const response = await axiosInstance.post(endpoints.contact.contactUs, data)
        return response
    } catch (error) {
        throw Error()
    }
}