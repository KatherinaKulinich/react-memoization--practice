import React from 'react';
import './App.css';
import HeavyComponent from './components/HeavyComponent';

export const App: React.FC = ({}) => {
    // const [currentState, setCurrentState] = useState('');

    // const myCalculation1 = useMemo(() => {
    //     return currentState + 'test';
    // }, [currentState]);

    // const myCalculation2 = useCallback(() => {
    //     return currentState + 'test';
    // }, [currentState]);

    // console.log('render_1', myCalculation1)
    // console.log('render_2', myCalculation2)

    return (
        <div>
            <HeavyComponent />
        </div>
    );
};
