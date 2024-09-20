import { useRef } from 'react';

const UseRef2 = () => {
    // Crea una referencia usando useRef
    const divRef = useRef(null);
    const pRef = useRef(null);

    // Manejador de eventos para cambiar el color del div
    const handleButtonClick = () => {
        if (divRef.current) {
            divRef.current.style.backgroundColor = 'lightblue';
            pRef.current.innerText = 'Se cambio el color del div a lightblue';
        }
    };

    return (
        <div>
            <h1>Change Color Example</h1>
            
            <div ref={divRef} style={{ width: '200px', height: '200px', backgroundColor: 'lightgray' }}>
                Click the button to change my color
            </div>

            <button onClick={handleButtonClick}>Change Color</button>
            <p ref={pRef}>Vacio</p>
        </div>
    );
}

export default UseRef2;