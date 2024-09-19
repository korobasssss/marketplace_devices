export const setDataToStorage = (title: string, data: any) => {
    localStorage.setItem(title, JSON.stringify(data));
}