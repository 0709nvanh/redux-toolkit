import instance from "./instance";

export const signup = (data) => {
    const url = `/signup`;
    return instance.post(url, data);
}
export const login = (data) => {
    const url = `/login`;
    return instance.post(url, data);
}