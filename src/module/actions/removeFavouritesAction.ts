import {deviceStore} from "../store";
import {setDataToStorage} from "../utils";

export const removeFavouritesAction = async (id: number) => {
    deviceStore.setLoading()
    try {
        let data = deviceStore.favouritesData;
        if (data) {
            data = data.filter(item => item.id !== id);
            setDataToStorage('favourites', data);
            deviceStore.setFavouritesData(data)
            deviceStore.setReady()
        }
    } catch (error) {
        console.error(error)
    }
}