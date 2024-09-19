import {FC} from 'react';
import styles from './styles.module.scss'
import {useTranslation} from "react-i18next";

export const LoadingWrapper: FC = () => {
    const {t} = useTranslation()

    return (
        <section className={styles.body}>
            <div>{t('loading')}...</div>
        </section>
    )
}