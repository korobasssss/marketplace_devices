import {action, makeObservable, observable, override} from "mobx";
import {BaseApiStoreClass} from "../../base/store";
import {IDataOneDeviceCartView, IDataOneDeviceView, IDataOneSectionView} from "../interfaces";


class DeviceStore extends BaseApiStoreClass<IDataOneSectionView[]>{
    public favouritesData: IDataOneDeviceView[] | null = null;
    public cartData: IDataOneDeviceCartView[] | null = null;

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
        if (item) {
            this.data = JSON.parse(JSON.stringify(item));
        } else {
            this.data = null
        }
    }

    public setFavouritesData = (item: IDataOneDeviceView[] | null): void => {
        if (item) {
            this.favouritesData = JSON.parse(JSON.stringify(item));
        } else {
            this.favouritesData = null
        }
    }

    public setCartData = (item: IDataOneDeviceCartView[] | null): void => {
        if (item) {
            this.cartData = JSON.parse(JSON.stringify(item));
        } else {
            this.cartData = null
        }
    }
}

export const deviceStore = new DeviceStore()