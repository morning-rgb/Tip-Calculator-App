import { useEffect, useState, type HTMLInputTypeAttribute } from 'react'
import styles from './Field.module.scss'
import Label from './Label'
import Input from './Input'

interface ValidationResponse {
    response: boolean
    error?: string
}

interface FieldProps {
    id: string
    title: string
    validationMethod?: (value: string) => ValidationResponse
    value: string
    setValue: (value: string) => void
    iconImage?: string
    type: HTMLInputTypeAttribute
    className?: string
}

const Field = (props: FieldProps) => {
    const {id, title, validationMethod, value, setValue, iconImage, type, className} = props
    const [validationResponse, setValidationResponse] = useState<ValidationResponse>({response: true})

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value

        setValue(newValue)
    }

    useEffect(() => {
        const validation = validationMethod === undefined ? {response: true} : validationMethod(value)

        setValidationResponse(validation)
    }, [value])

    return (
        <div className={styles.fieldWrapper + ' ' + className}>
            <Label htmlFor={id} ariaLabel={title} ariaInvalid={!validationResponse.response}>
                {title}
            </Label>
            <span id={`${id}-errors`} className={styles.error}>
                {validationResponse.error}
            </span>
            <Input value={value} onChange={onChange} type={type} 
            isInvalid={!validationResponse.response} iconImage={iconImage}/>
        </div>
    )
}

export default Field