import styles from './TipCalculatorComponent.module.scss'

import Field from '../ui/Field'
import { useState } from 'react'
import TipPercentComponent from './TipPercentComponent'
import TipCalculatorResultComponent from './TipCalculatorResultComponent'

interface ParamsType {
    bill: string
    tipPercent?: number
    peopleNumber: string
}

const TipCalculatorComponent = () => {
    const iconDollar = '/images/icon-dollar.svg'
    const iconPerson = '/images/icon-person.svg'

    const [params, setParams] = useState<ParamsType>({bill: '0', peopleNumber: '1'})

    const setBill = (value: string) => {
        setParams({...params, bill: value})
    }

    const setPeopleNumber = (value: string) => {
        setParams({...params, peopleNumber: value})
    }

    const setTipPercent = (value: number | undefined) => {
        setParams({...params, tipPercent: value})
    }

    const reset = () => {
        setParams({bill: '0', peopleNumber: '1'})
    }

    const canReset = (): boolean => {
        return params.bill !== '0' || params.peopleNumber !== '1'
    }

    return (
      <div className={styles.tipCalculator}>
        <div>
          <Field
            id="bill"
            title="Bill"
            value={params.bill}
            setValue={setBill}
            validationMethod={billValidationMethod}
            iconImage={iconDollar}
            type="number"
          />
          <TipPercentComponent setTipPercent={setTipPercent} />
          <Field
            id="peopleNumber"
            title="Number of People"
            value={params.peopleNumber}
            setValue={setPeopleNumber}
            className={styles.field}
            validationMethod={peopleNumberValidationMethod}
            iconImage={iconPerson}
            type="number"
          />
        </div>
        <TipCalculatorResultComponent
          resetFunc={reset}
          canResetFunc={canReset}
          params={params}
        />
      </div>
    );
}

const billValidationMethod = (value: string) => {
    const number = Number.parseFloat(value)

    if (value === '')
        return { response: false, error: "Required value" }
    if (number < 0)
        return { response: false, error: "Negative value" }

    return { response: true }
}

const peopleNumberValidationMethod = (value: string) => {
    const number = Number.parseInt(value)

    if (value === '')
        return { response: false, error: "Required value" }
    if (number === 0)
        return { response: false, error: "Can't be zero" }
    if (number < 0)
        return { response: false, error: "Negative value" }

    return { response: true }
}

export { type ParamsType, TipCalculatorComponent }