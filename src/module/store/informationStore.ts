import { makeObservable, observable} from "mobx";
import {ILinks} from "../interfaces/ILinks.ts";


class InformationStore {
    public footerLinks: ILinks[] = [
        {
            title: 'Избранное',
            link: '/favourites'
        },
        {
            title: 'Корзина',
            link: '/cart'
        },
        {
            title: 'Контакты',
            link: '/contacts'
        },
        {
            title: 'Условия сервиса',
            link: '/rules'
        }
    ];
    public contacts: ILinks[] = [
        {
            title: 'src/assets/icons/vk.svg',
            link: 'https://vk.com/id_korobeynikova'
        },
        {
            title: 'src/assets/icons/telegram.svg',
            link: 'https://t.me/ddarumddarimdda'
        },
        {
            title: 'src/assets/icons/whatsapp.svg',
            link: 'https://wa.me/89601308479'
        },
    ];

    public constructor() {
        makeObservable({
            footerLinks: observable,
            contacts: observable
        })
    }
}

export const informationStore = new InformationStore()