import React, { useState } from 'react';
import style from './index.module.css';

interface FactorialCalculationProps {
    array: { id: number; title: string }[];
    onClick: () => void;
}

function FactorialCalculation(props: FactorialCalculationProps) {
    const MAX_NUMBER = 20;

    const { array, onClick } = props;

    const [currentNum, setCurrentNum] = useState<any>(MAX_NUMBER);
    const [error, setError] = useState<string | null>(null);

    console.log('re-render FactorialCalculation');

    const factorialCurrentNum =
        typeof currentNum === 'number' && currentNum <= MAX_NUMBER
            ? factorial(currentNum)
            : null;

    return (
        <section>
            <label className={style.factorialCalculation__Label}>
                Put your number:
            </label>
            <input
                type='number'
                value={currentNum}
                className={style.factorialCalculation__Input}
                onChange={(event) => {
                    const newNum = Number(event.target.value);
                    if (newNum > MAX_NUMBER) {
                        setError('Sorry, I will die to calculate it...:P');
                    }
                    setCurrentNum(
                        event?.target?.value === ''
                            ? event?.target?.value
                            : newNum
                    );
                }}
            />
            {error && (
                <p className={style.factorialCalculation__Error}>{error}</p>
            )}
            <p className={style.factorialCalculation__Result}>
                Factorial current number {currentNum} is:
                {` ${factorialCurrentNum || 'NOOOOOOO!!! I am dead! :D'}`}
            </p>
        </section>
    );
}

function factorial(n: number): any {
    if (n < 0) {
        console.error('uncorrect n');
    } else if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

export default React.memo(FactorialCalculation);
