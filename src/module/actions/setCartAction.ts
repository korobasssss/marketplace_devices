import {getDataFromStorage} from "../utils/getDataFromStorage.ts";
import {findDevice} from "../utils/findDevice.ts";
import {setDataToStorage} from "../utils/setDataToStorage.ts";
import {IDataOneDeviceCartView} from "../interfaces";
import {deviceStore} from "../store";

export const setCartAction = async (id: number) => {
    deviceStore.setLoading();
    try {
        let data: IDataOneDeviceCartView[] = await getDataFromStorage('cart');
        const oneDevice: IDataOneDeviceCartView = {...findDevice(id), count: 1};
        if (oneDevice) {
            if (data) {
                data.push(oneDevice);
            } else {
                data = [oneDevice];
            }
            setDataToStorage('cart', data);
            deviceStore.setCartData(data)
            deviceStore.setReady();
        }
    } catch (error) {
        console.log(error)
    }

}