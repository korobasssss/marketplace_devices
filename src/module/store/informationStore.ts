import { makeObservable, observable} from "mobx";
import {ILinks, ILinksWithValue} from "../interfaces/ILinks.ts";
import {ILanguage} from "../interfaces/ILanguage.ts";
import { paths } from "../../base/routing/elements/paths.ts";


class InformationStore {
    public footerLinks: ILinksWithValue[] = [
        {
            title: 'Избранное',
            link: paths.FAVOURITES,
            value: 'favourites'
        },
        {
            title: 'Корзина',
            link: paths.CART,
            value: 'cart'
        },
        {
            title: 'Контакты',
            link: 'tel:+1234567890',
            value: 'contacts'
        },
        {
            title: 'Условия сервиса',
            link: 'https://yandex.ru/legal/market_termsofuse',
            value: 'rules'
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

    public languages: ILanguage[] = [
        {
            title: 'Рус',
            shortName: 'ru'
        },
        {
            title: 'Eng',
            shortName: 'en'
        },
        {
            title: '한국어',
            shortName: 'ko'
        }
    ]

    public constructor() {
        makeObservable({
            footerLinks: observable,
            contacts: observable,
            languages: observable
        })
    }
}

export const informationStore = new InformationStore()