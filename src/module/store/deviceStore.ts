import {action, makeObservable, observable, override} from "mobx";
import {BaseApiStoreClass} from "../../base/store";
import {IDataOneDeviceView, IDataOneSectionView} from "../interfaces";


class DeviceStore extends BaseApiStoreClass<IDataOneSectionView[]>{
    public favouritesData: IDataOneDeviceView[] | null = null;
    public cartData: IDataOneDeviceView[] | null = null;

    public constructor() {
        super()
        makeObservable({
            data: override,
            favouritesData: observable,
            cartData: observable,
            setData: action,
            setFavouritesData: action,
            setCartData: action
        })
    }

    public setData = (item: IDataOneSectionView[] | null): void => {
        this.data = item
    }

    public setFavouritesData = (item: IDataOneDeviceView[] | null): void => {
        this.favouritesData = item
    }

    public setCartData = (item: IDataOneDeviceView[] | null): void => {
        this.cartData = item
    }
}

export const deviceStore = new DeviceStore()