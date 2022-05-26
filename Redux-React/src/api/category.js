import instance from "./instance";

export const listCate = () => {
    const url = "/categories";
    return instance.get(url)
}

export const removeCate = (slug) => {
    const url = `/category/${slug}`
    return instance.delete(url)
}

export const createCate = (category) => {
    const url = `/category`;
    return instance.post(url, category)
}

export const updateCate = (category) => {
    const url = `/category/${category.slug}`
    return instance.put(url, category)
}

export const readCate = (slug) => {
    const url = `/category/${slug}`;
    return instance.get(url)
}