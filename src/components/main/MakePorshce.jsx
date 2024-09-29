import { useState } from 'react';
import { MAKEPORSHCECONTAINER } from './styled';

const MakePorshce = () => {
    const [data, setData] = useState([
        { id: 1, src: './makeporsche/Black.webp', color: 'black', isDone: false },
        { id: 2, src: './makeporsche/Beige.webp', color: 'beige', isDone: false },
        { id: 3, src: './makeporsche/Blue.webp', color: 'blue', isDone: false },
        { id: 4, src: './makeporsche/Gray.webp', color: 'gray', isDone: false },
        { id: 5, src: './makeporsche/Red.webp', color: 'red', isDone: false },
        { id: 6, src: './makeporsche/Silver.webp', color: 'silver', isDone: false },
        { id: 7, src: './makeporsche/White.webp', color: 'white', isDone: true },
    ]);
    return (
        <MAKEPORSHCECONTAINER>
            <div className='img-wrap'>
                {data.map((item) => item.isDone && <img key={item.id} src={item.src} />)}
            </div>
            <ul className='color-wrap'>
                {data.map((item) => (
                    <li
                        key={item.id}
                        style={{ background: item.color }}
                        onClick={() =>
                            setData(
                                data.map((value) =>
                                    value.id === item.id
                                        ? { ...value, isDone: true }
                                        : { ...value, isDone: false }
                                )
                            )
                        }
                    ></li>
                ))}
            </ul>
        </MAKEPORSHCECONTAINER>
    );
};

export default MakePorshce;
