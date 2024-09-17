import {IDataOneSectionView} from "../interfaces";

// имитация получения данных с сервера

export const data: IDataOneSectionView[] = [
    {
        title: 'Наушники',
        value: 'headphones',
        devices: [
            {
                id: 0,
                deviceImage: '../../../public/0.svg',
                name: 'Apple BYZ S852I',
                range: 4.7,
                price: 3527,
                salePrice: 2927
            },
            {
                id: 1,
                deviceImage: '../../../public/1.svg',
                name: 'Apple BYZ S852I',
                range: 4.5,
                price: 2327,
                salePrice: null
            },
            {
                id: 2,
                deviceImage: '../../../public/2.svg',
                name: 'Apple BYZ S852I',
                range: 4.5,
                price: 2327,
                salePrice: 1999
            },
            {
                id: 3,
                deviceImage: '../../../public/3.svg',
                name: 'Apple BYZ S852I',
                range: 4.7,
                price: 3527,
                salePrice: null
            },
            {
                id: 4,
                deviceImage: '../../../public/4.svg',
                name: 'Apple BYZ S852I',
                range: 4.5,
                price: 3325,
                salePrice: 2375
            },
            {
                id: 5,
                deviceImage: '../../../public/5.svg',
                name: 'Apple BYZ S852I',
                range: 4.3,
                price: 2563,
                salePrice: null
            }
        ]
    },
    {
        title: 'Беспроводные наушники',
        value: 'wireless_headphones',
        devices: [
            {
                id: 6,
                deviceImage: '../../../public/6.svg',
                name: 'Apple BYZ S852I',
                range: 4.7,
                price: 9527,
                salePrice: null
            },
            {
                id: 7,
                deviceImage: '../../../public/7.svg',
                name: 'Apple BYZ S852I',
                range: 4.7,
                price: 6527,
                salePrice: null
            },
            {
                id: 8,
                deviceImage: '../../../public/8.svg',
                name: 'Apple BYZ S852I',
                range: 4.7,
                price: 7527,
                salePrice: 6336
            },
        ]
    }
]