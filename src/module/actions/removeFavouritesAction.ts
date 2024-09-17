import {deviceStore} from "../store";
import {getDataFromStorage} from "../utils/getDataFromStorage.ts";
import {IDataOneDeviceView} from "../interfaces";
import {setDataToStorage} from "../utils/setDataToStorage.ts";

export const removeFavouritesAction = async (id: number) => {
    deviceStore.setLoading()
    try {
        let data : IDataOneDeviceView[] = await getDataFromStorage('favourites')
        data = data.filter(item => item.id !== id);
        setDataToStorage('favourites', data);
        deviceStore.setFavouritesData(data)
        deviceStore.setReady()
    } catch (error) {
        console.error(error)
    }
}