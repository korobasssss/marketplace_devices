import {deviceStore} from "../store";
import {setDataToStorage} from "../utils/setDataToStorage.ts";
import {IDataOneDeviceCartView} from "../interfaces";

export const updateCountCartAction = async (flag: boolean, id: number) => {
    deviceStore.setLoading()
    try {
        if (deviceStore.cartData) {
            const data: IDataOneDeviceCartView[] = deviceStore.cartData.map(device => {
                if (device.id === id) {
                    if (flag) {
                        device.count += 1
                    } else {
                        device.count -= 1
                    }
                }
                return device
            })
            setDataToStorage('cart', data);
            deviceStore.setCartData(data)
            deviceStore.setReady()
        }
    } catch (error) {
        console.log(error)
    }
}