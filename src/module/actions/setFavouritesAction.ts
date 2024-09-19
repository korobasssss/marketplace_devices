import {getDataFromStorage, findDevice, setDataToStorage} from "../utils";
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