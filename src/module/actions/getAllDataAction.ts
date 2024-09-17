import {deviceStore} from "../store";
import {data} from "../store";
import {IDataOneDeviceCartView, IDataOneDeviceView} from "../interfaces";
import {getDataFromStorage} from "../utils/getDataFromStorage.ts";

const getDataFromServer = async (): Promise<any> => {
    return new Promise<any>((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 150)
    })
}

export const getAllDataAction = async () => {
    deviceStore.setLoading()
    try {
        const res = await getDataFromServer()
        deviceStore.setData(res)
        const resCart: IDataOneDeviceCartView[] | null = await getDataFromStorage('cart')
        deviceStore.setCartData(resCart)
        const resFav: IDataOneDeviceView[] | null  = await getDataFromStorage('favourites')
        deviceStore.setFavouritesData(resFav)
        deviceStore.setReady()
    } catch (error) {
        console.log(error)
    }
}