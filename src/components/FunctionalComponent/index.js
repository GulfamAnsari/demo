import react from 'react';
import { HigherOrderComponent } from '../HigherOrderComponent';

const FunctionalComponent = (props) => {
    const { name } = props;
    return (
        <div>
            <p style={{background: '#a2c', padding: '10px', color: 'white'}}>I am {props.componenttype} Component</p>
            <i>{props.children}</i> 
            <p>{name}</p>
        </div>
    );
}

export default HigherOrderComponent(FunctionalComponent);