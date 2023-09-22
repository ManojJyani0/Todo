import axios from "axios";
import auth from '@react-native-firebase/auth'


const api = axios.create({
    baseURL: "http://192.168.43.238:3000/api/v1/",
    headers: {
        "Content-Type": "application/json"
    }
})
api.interceptors.request.use(async (config) => {
    config.headers["user-id"] = auth().currentUser?.uid;
    return config;
});

api.interceptors.response.use((response) => response.data, (error) => error.response);

export async function getAllTodo() {
    try {
        const res = await api.get("/todos");
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function AddTodo(data: any) {
    try {
        const res = await api.post("/todos", data);
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function deleteTodo(id: string) {
    try {
        const res = await api.delete(`/todos/${id}`);
        // console.log(res.data)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function toggleTodo(id: string) {
    try {
        console.log(id)
        const res = await api.patch(`/todos/toggle/status/${id}`);
        // console.log(res.data)
        return res.data;
    } catch (error) {
        console.log(error)
    }

}