export interface IDataOneSectionView {
    title: string,
    value: string
    devices: IDataOneDeviceView[]
}

export interface IDataOneDeviceView {
    id: number,
    deviceImage: string,
    name: string,
    range: number,
    price: number,
    salePrice: number | null,
    description: IDataDescriptionOneView[],

}

export interface IDataOneDeviceCartView {
    id: number,
    deviceImage: string,
    name: string,
    range: number,
    price: number,
    count: number
}

export interface IDataDescriptionOneView {
    title: string
    data: string
}