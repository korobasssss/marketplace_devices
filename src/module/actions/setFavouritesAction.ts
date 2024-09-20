import {findDevice, setDataToStorage} from "../utils";
import {deviceStore} from "../store";

export const setFavouritesAction = async (id: number) => {
    deviceStore.setLoading();
    try {
        let data = deviceStore.favouritesData;
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