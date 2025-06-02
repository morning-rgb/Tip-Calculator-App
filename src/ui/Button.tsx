import styles from './Button.module.scss'

interface RadioButtonProps {
    isChecked?: boolean
    children?: React.ReactNode
    ariaLabel?: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    className?: string
}

const RadioButton = (props: RadioButtonProps) => {
    const {isChecked, children, ariaLabel, onClick, className} = props

    const classes = isChecked ? [styles.button, styles.isChecked] : [styles.button]

    return (
        <button type="button" className={[...classes, className].join(' ')} aria-label={ariaLabel}
        onClick={onClick}>
            {children}
        </button>
    )
}

export default RadioButton