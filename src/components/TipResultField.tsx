import styles from './TipResultField.module.scss'

interface TipResultFieldProps {
    title: string
    value: string
}

const TipResultField = (props: TipResultFieldProps) => {
    return (
        <div className={styles.tipResultField}>
            <p className={styles.title}>{props.title}</p>
            <p className={styles.value}>${props.value}</p>
            <p className={styles.description}>/ person</p>
        </div>
    )
}

export default TipResultField