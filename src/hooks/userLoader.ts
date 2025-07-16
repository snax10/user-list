/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import type { LoaderFunctionArgs } from "react-router-dom";


export const userLoader = async ({ params }: LoaderFunctionArgs) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
        return response.data;
    } catch (error) {
        throw new Response("User not found", { status: 404 });
    }
};