import styles from './TipPercentComponent.module.scss'

import React, { useState } from 'react'
import Button from '../ui/Button'
import Input from '../ui/Input'
import Label from '../ui/Label'

interface TipPercentProps {
    setTipPercent: (value?: number) => void
}

interface CustomPercent {
    percent: string
}

const TipPercentComponent = (props: TipPercentProps) => {
    const {setTipPercent} = props

    const [selected, setSelected] = useState<number | undefined>(undefined)
    const [customPercent, setCustomPercent] = useState<string>('0')

    const tipPercents: (number | CustomPercent)[] = [
        5, 10, 15, 25, 50, { percent: customPercent }
    ]

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCustomPercent = event.target.value
        setCustomPercent(newCustomPercent)

        setTipPercent(Number.parseFloat(newCustomPercent))
    }

    const onClick = (index: number) => {
        setSelected(index)
        const newTipPercent = tipPercents[index]

        if (typeof newTipPercent == "number") {
            setTipPercent(newTipPercent)
            return
        }
        
        setTipPercent(Number.parseFloat(newTipPercent.percent))
    }

    return (
      <div className={styles.tipPercentComponent}>
        <Label ariaLabel="Tip Percent">Select Tip %</Label>
        <div className={styles.wrapper}>
          {tipPercents.map((element, index) => {
            const isChecked = index == selected;

            if (typeof element == "number") {
              return (
                <Button
                  key={element.toString()}
                  isChecked={isChecked}
                  onClick={() => onClick(index)}
                >
                  {element.toString()}%
                </Button>
              );
            }

            if (isChecked)
              return (
                <Input
                  className={styles.customInput}
                  key={element.toString()}
                  value={customPercent}
                  onChange={onChange}
                  type="number"
                  autoFocus={true}
                />
              );

            return (
              <Button
                className={styles.customButton}
                key={element.toString()}
                onClick={() => onClick(index)}
              >
                Custom
              </Button>
            );
          })}
        </div>
      </div>
    );
}

export default TipPercentComponent