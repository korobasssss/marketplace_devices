import {deviceStore} from "../store";
import {getDataFromStorage} from "../utils/getDataFromStorage.ts";
import {IDataOneDeviceView} from "../interfaces";

export const getFavouritesAction = async () => {
    deviceStore.setLoading()
    try {
        const res: IDataOneDeviceView[] | null  = await getDataFromStorage('favourites')
        deviceStore.setFavouritesData(res)
        deviceStore.setReady()
    } catch (error) {
        console.log(error)
    }
}