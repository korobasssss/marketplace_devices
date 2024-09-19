import {ChangeEvent, FC, useCallback, useState} from "react";
import {observer} from "mobx-react";
import styles from './styles.module.scss'
import {Button, Input} from "../../../base/components";
import {postCreateOrderAction} from "../../actions";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

interface ICreateOrderComponent {
    totalPrice: number
}

export const CreateOrderComponent: FC<ICreateOrderComponent> = observer((
    {
        totalPrice
    }
) => {
    const navigation = useNavigate()
    const {t} = useTranslation()
    const [input_address, setInput_address] = useState('')
    const [input_comment, setInput_comment] = useState('')

    const handlerSetInputAddress = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setInput_address(event.target.value)
    }, []);

    const handlerSetInputComment = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setInput_comment(event.target.value)
    }, []);

    const handlerCreateOrder = useCallback(() => {
        postCreateOrderAction(input_address, input_comment)
            .then(() => {
                navigation('/success_order')
            })
    }, [input_address, input_comment, navigation]);

    return (
        <div
            className={styles.order_section}
        >
            <form
                className={styles.form}
            >
                <Input
                    value={input_address}
                    label={t('address')}
                    placeholder={`${t('input_address')}...`}
                    onChange={handlerSetInputAddress}
                />
                <Input
                    value={input_comment}
                    label={t('comment_to_order')}
                    placeholder={`${t('input_comment')}...`}
                    onChange={handlerSetInputComment}
                />
            </form>
            <footer
                className={styles.footer_section}
            >
                <p
                    className={styles.text}
                >
                    {t('total')}:
                </p>
                <div
                    className={styles.price_text}
                >
                    {totalPrice} ₽
                </div>
            </footer>
            <Button
                theme={'submit'}
                onClick={handlerCreateOrder}
                disabled={input_address == ''}
            >
                {t('order_pay')}
            </Button>
        </div>
    )
})