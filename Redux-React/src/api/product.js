import instance from "./instance";

export const list = () => {
    const url = `/products`;
    return instance.get(url);
}

export const create = (product) => {
    const url = "/product";
    return instance.post(url, product)
}

export const read = (slug) => {
    const url = `/product/${slug}`;
    return instance.get(url)
}

export const update = (product) => {
    const url = `/product/${product.slug}`
    return instance.put(url, product)
}

export const remove = (slug) => {
    const url = `/product/${slug}`
    return instance.delete(url)
}

export const getListCate = (cateId) => {
    const url = `/products?cateId=${cateId}`
    return instance.get(url)
}

export const getLimit = (limit) => {
    const url = `/products?limit=${limit}`;
    return instance.get(url)
}
