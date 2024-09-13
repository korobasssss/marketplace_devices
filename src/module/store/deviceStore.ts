import {action, makeObservable, override} from "mobx";
import {BaseApiStoreClass} from "../../base/store";
import {IDataOneDeviceView} from "../interfaces";


class DeviceStore extends BaseApiStoreClass<IDataOneDeviceView[]>{
    public constructor() {
        super()
        makeObservable({
            data: override,
            favouritesData: override,
            cartData: override,
            setData: action,
            setFavouritesData: action,
            setCartData: action
        })
    }

    public setData = (item: IDataOneDeviceView[] | null): void => {
        this.data = item
    }
}

export const deviceStore = new DeviceStore()