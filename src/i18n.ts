import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ru: {
                translation: {
                    buy: 'Купить',
                    to_cart: 'В корзину',
                    total: 'ИТОГО',
                    order: 'Перейти к оформлению',
                    cart: 'Корзина',
                    favourites: 'Избранное',
                    contacts: 'Контакты',
                    rules: 'Условия сервиса',
                    headphones: 'Наушники',
                    wireless_headphones: 'Беспроводные наушники',
                    no_data: 'Нет товаров...',
                    fav_no_data: 'В избранном пусто...',
                    cart_no_data: 'Корзина пуста...',
                    loading: 'Загрузка...',
                }
            },
            en: {
                translation: {
                    buy: 'Add to cart',
                    to_cart: 'To cart',
                    total: 'TOTAL',
                    order: 'Make order',
                    cart: 'Cart',
                    contacts: 'Contacts',
                    favourites: 'Favourites',
                    rules: 'Terms of Service',
                    headphones: 'Headphones',
                    wireless_headphones: 'Wireless headphones',
                    no_data: 'There are no products...',
                    fav_no_data: 'The favorites are empty...',
                    cart_no_data: 'The cart is empty...',
                    loading: 'Loading...',
                }
            },
            ko: {
                translation: {
                    buy: '쇼핑 카트에 담기',
                    to_cart: '카트',
                    total: '총',
                    order: '주문 확인',
                    cart: '장바구니',
                    contacts: '연락처',
                    favourites: '즐겨찾기',
                    rules: '서비스 약관',
                    headphones: '헤드폰',
                    wireless_headphones: '무선 헤드폰',
                    no_data: '제품이 없습니다...',
                    fav_no_data: '즐겨찾기는 비어 있습니다...',
                    cart_no_data: '카트가 비어 있습니다...',
                    loading: '로드 중..',
                }
            }
        },
        lng: "ru",
        fallbackLng: "ru",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

