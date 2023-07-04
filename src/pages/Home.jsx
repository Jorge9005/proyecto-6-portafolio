import imgProy1 from '../images/Proyecto1-img.png';
import imgProy2 from '../images/Proyecto2-img.png';
import imgProy3 from '../images/Proyecto3-img.png';
import imgProy4 from '../images/Proyecto4-img.png';
import imgProy5 from '../images/Proyecto5-img.png';

function Home() {
    return (
        <>
        </>
    );
}

function Proyecto1() {
    return (
        <div className="wrapper-home">
            <div className="container-home">
                <h2>PROYECTO 1</h2>
                <div>
                    <img src={imgProy1} alt="imgProy1" style={{ width: '80rem' }} />
                </div>
            </div>
        </div>
    )
}

function Proyecto2() {
    return (
        <>
        </>
    )
}

function Proyecto3() {
    return (
        <>
            <p></p>
        </>
    )
}

function Proyecto4() {
    return (
        <>
            <p></p>
        </>
    )
}

function Proyecto5() {
    return (
        <>
            <p>s</p>
        </>
    )
}

export { Home, Proyecto1, Proyecto2, Proyecto3, Proyecto4, Proyecto5 };