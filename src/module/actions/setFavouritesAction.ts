import {getDataFromStorage} from "../utils/getDataFromStorage.ts";
import {findDevice} from "../utils/findDevice.ts";
import {setDataToStorage} from "../utils/setDataToStorage.ts";
import {IDataOneDeviceView} from "../interfaces";
import {deviceStore} from "../store";

export const setFavouritesAction = async (id: number) => {
    deviceStore.setLoading();
    try {
        let data: IDataOneDeviceView[] = await getDataFromStorage('favourites');
        const oneDevice = findDevice(id);
        if (oneDevice) {
            if (data) {
                data.push(oneDevice);
            } else {
                data = [oneDevice];
            }
            setDataToStorage('favourites', data);
            deviceStore.setFavouritesData(data)
            deviceStore.setReady()
        }
    } catch (error) {
        console.log(error)
    }

}