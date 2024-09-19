import {action, computed, makeObservable, observable} from "mobx";
import {ERequestStatus} from "../types";

export class BaseApiStoreClass {
    public status: ERequestStatus = ERequestStatus.Pending;

    public constructor() {
        makeObservable(this, {
            status: observable,
            setLoading: action,
            setPending: action,
            setReady: action,
            isLoading: computed,
            isReady: computed,
        });
    }

    public setLoading(): void {
        this.status = ERequestStatus.Loading;
    }

    public setPending(): void {
        this.status = ERequestStatus.Pending;
    }

    public setReady(): void {
        this.status = ERequestStatus.Ready;
    }

    public get isLoading(): boolean {
        return this.status === ERequestStatus.Loading;
    }

    public get isReady(): boolean {
        return this.status === ERequestStatus.Ready;
    }
}