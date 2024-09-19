import {deviceStore} from "../store";
import {getDataFromStorage} from "../utils";
import {IDataOneDeviceCartView} from "../interfaces";

export const getCartAction = async () => {
    deviceStore.setLoading()
    try {
        const res: IDataOneDeviceCartView[] | null = await getDataFromStorage('cart')
        deviceStore.setCartData(res)
        deviceStore.setReady()
    } catch (error) {
        console.log(error)
    }
}