import cl from 'classnames';
import { useCallback, useMemo, useState } from 'react';

import FactorialCalculation from '../FactorialCalculation';
import Time from '../Time';
import style from './index.module.css';

const themes = {
    white: 'white',
    black: 'black'
};

function HeavyComponent() {
    console.log('re-render HeavyComponent');
    const [theme, setTheme] = useState(themes.white);

    const newArr = useMemo(
        () => [
            { id: 1, title: 'Kate' },
            { id: 2, title: 'Anna' },
            { id: 3, title: 'Lera' }
        ],
        []
    );

    const onClickHandler = useCallback(() => {
        console.log('CLICK!');
    }, []);

    return (
        <div
            className={cl(
                style.heavyComponent,
                theme === themes.white
                    ? style.heavyComponentWhite
                    : style.heavyComponentBlack
            )}
        >
            <button
                className={style.button}
                onClick={() => {
                    if (theme === themes.white) {
                        setTheme(themes.black);
                    } else {
                        setTheme(themes.white);
                    }
                }}
            >
                Change theme
            </button>

            <FactorialCalculation
                array={newArr}
                onClick={onClickHandler}
            />
            <Time />
        </div>
    );
}

export default HeavyComponent;
