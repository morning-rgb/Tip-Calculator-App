import type { HTMLInputTypeAttribute } from 'react'
import styles from './Input.module.scss'

interface InputProps {
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    type: HTMLInputTypeAttribute
    iconImage?: string
    isInvalid?: boolean
    className?: string
    autoFocus?: boolean
}

const Input = (props: InputProps) => {
    const {value, onChange, type, iconImage, isInvalid, className, autoFocus} = props

    const style = {
        backgroundImage: iconImage ? `url(${iconImage})` : '',
    }

    const inputClasses = 
    isInvalid ? [styles.input, styles.isInvalid, className] : [styles.input, className]

    return (
        <input className={inputClasses.join(' ')} value={value} onChange={onChange} type={type}
        style={style} autoFocus={autoFocus}/>
    )
}

export default Input