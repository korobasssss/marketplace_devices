import {deviceStore} from "../store";
import {setDataToStorage} from "../utils";

export const removeCartAction = async (id: number) => {
    deviceStore.setLoading()
    try {
        let data = deviceStore.cartData
        if (data) {
            data = data.filter(item => item.id !== id);
            setDataToStorage('cart', data);
            deviceStore.setCartData(data)
            deviceStore.setReady()
        }
    } catch (error) {
        console.error(error)
    }
}