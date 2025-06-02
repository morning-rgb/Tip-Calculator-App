class TipCalculator {
    static GetTipAmount (bill: number, tip: number, numberOfPeople: number): number {
        const tipAmount = (bill * tip / 100) / numberOfPeople

        return tipAmount
    }

    static GetTotalAmount (bill: number, tip: number, numberOfPeople: number): number {
        const tipAmount = TipCalculator.GetTipAmount(bill, tip, numberOfPeople)
        const totalAmount = bill / numberOfPeople + tipAmount

        return totalAmount
    }
}

export default TipCalculator