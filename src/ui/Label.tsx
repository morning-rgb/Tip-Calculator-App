import styles from './Label.module.scss'

interface LabelProps {
    children: React.ReactNode
    ariaLabel: string
    htmlFor?: string
    ariaInvalid?: boolean
    className?: string
}

const Label = ({children, ariaLabel, htmlFor, ariaInvalid, className}: LabelProps) => {
    return (
        <label className={[styles.label, className].join(' ')} aria-label={ariaLabel} htmlFor={htmlFor}
        aria-invalid={ariaInvalid || false}>
            {children}
        </label>
    )
}

export default Label