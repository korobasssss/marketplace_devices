import {action, makeObservable, observable} from "mobx";
import {BaseApiStoreClass} from "../../base/store";
import {IDataOneDeviceCartView, IDataOneDeviceView, IDataOneSectionView} from "../interfaces";


class DeviceStore extends BaseApiStoreClass{
    public data: IDataOneSectionView[] | null = null;
    public favouritesData: IDataOneDeviceView[] | null = null;
    public cartData: IDataOneDeviceCartView[] | null = null;

    public constructor() {
        super()
        makeObservable({
            data: observable,
            favouritesData: observable,
            cartData: observable,
            setData: action,
            setFavouritesData: action,
            setCartData: action
        })
    }

    public setData = (item: IDataOneSectionView[] | null): void => {
        this.data = JSON.parse(JSON.stringify(item));
    }

    public setFavouritesData = (item: IDataOneDeviceView[] | null): void => {
        this.favouritesData = JSON.parse(JSON.stringify(item));
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