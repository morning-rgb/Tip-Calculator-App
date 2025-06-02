import styles from './TipCalculatorResultComponent.module.scss'
import { type ParamsType } from './TipCalculatorComponent.tsx'
import { useEffect, useState } from 'react'
import TipCalculator from '../model/TipCalculator.ts'
import TipResultField from './TipResultField.tsx'

interface TipCalculatorResultProps {
    params: ParamsType
    resetFunc: () => void
    canResetFunc: () => boolean
}

interface ResultType {
    tipAmount: number
    totalAmount: number
}

const isInvalidResult = (result: ResultType): boolean => {
  return !isFinite(result.tipAmount) || !isFinite(result.totalAmount) ||
  result.tipAmount < 0 || result.totalAmount < 0
}

const TipCalculatorResultComponent = (props: TipCalculatorResultProps) => {
    const {params, resetFunc, canResetFunc} = props
    const [result, setResult] = useState<ResultType>({tipAmount: 0, totalAmount: 0})

    useEffect(() => {
        const newParams = {
          bill: Number.parseFloat(params.bill),
          tipPercent: params.tipPercent || 0,
          peopleNumber: Number.parseInt(params.peopleNumber),
        };

        const newResult: ResultType = {
          tipAmount: TipCalculator.GetTipAmount(
            newParams.bill,
            newParams.tipPercent,
            newParams.peopleNumber
          ),
          totalAmount: TipCalculator.GetTotalAmount(
            newParams.bill,
            newParams.tipPercent,
            newParams.peopleNumber
          ),
        };

        if (isInvalidResult(newResult)) {
          setResult({tipAmount: 0, totalAmount: 0})
          return
        }

        setResult(newResult)
    }, [params])

    const reset = () => {
      resetFunc()
      setResult({tipAmount: 0, totalAmount: 0})
    }

    return (
        <div className={styles.resultWrapper}>
            <TipResultField title="Tip Amount" value={result.tipAmount.toFixed(2)} />
            <TipResultField title="Total" value={result.totalAmount.toFixed(2)} />
            <button className={styles.resetButton} onClick={reset} disabled={!canResetFunc()}
            >Reset</button>
        </div>
    )
}

export default TipCalculatorResultComponent