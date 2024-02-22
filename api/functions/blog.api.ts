import { string } from "prop-types";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";



export const fetchBlogList = async () => {
    try {
        const response = await axiosInstance.post(endpoints.blog.all, {})
        console.log(response, "response test");
        return response
    } catch (error) {
        throw Error()
    }
}

export const fetchBlogListDetails = async (id: string | string[] | undefined) => {
    try {
        const response = await axiosInstance.get(endpoints.blog.details(id),{})
        console.log(response,'test')
        return response
    } catch (error) {
        console.log(error);

    }
}

export const fetchLastestBlogList = async () => {
    try {
        const response = await axiosInstance.get(endpoints.blog.lastest, {})
        return response
    } catch (error) {
        throw Error()
    }
}