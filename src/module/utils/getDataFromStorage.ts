export const getDataFromStorage = async (item: string): Promise<any> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(JSON.parse(localStorage.getItem(item) as string))
        }, 150)
    })
}