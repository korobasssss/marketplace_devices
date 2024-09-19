import {deviceStore} from "../store";
import {removeItemFromStorage} from "../utils";

export const removeCart = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            removeItemFromStorage('cart');
            resolve(true)
        }, 150)
    })
}

export const postCreateOrderAction = async (address: string, comment: string) => {
    deviceStore.setLoading()
    try {
        if (deviceStore.cartData) {
            const res = await removeCart();
            if (res) {
                deviceStore.setCartData(null)
                console.log('Адрес: ' , address, ', ', 'Комментарий: ', comment)
            }
            deviceStore.setReady()
        }
    } catch (error) {
        console.error(error)
    }
}