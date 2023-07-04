import SectionMenu from '../components/SectionHome';

import imgProy1 from '../images/Proyecto1-img.png';
import imgProy2 from '../images/Proyecto2-img.png';
import imgProy3 from '../images/Proyecto3-img.png';
import imgProy4 from '../images/Proyecto4-img.png';
import imgProy5 from '../images/Proyecto5-img.png';


function Proyecto1() {
    return (
        <SectionMenu title={"Proyecto 1"} img={imgProy1} description={"Proyecto en base a los conceptos básicos de HTML y CSS, y la librería Bootstrap."} colorButton="#0339A6"/>
    )
}

function Proyecto2() {
    return (
        <SectionMenu title={"Proyecto 2"} img={imgProy2} description={""} colorButton="#F20505"/>
    )
}

function Proyecto3() {
    return (
        <SectionMenu title={"Proyecto 3"} img={imgProy3} description={""} colorButton="#C5D932"/>
    )
}

function Proyecto4() {
    return (
        <>
        <SectionMenu title={"Proyecto 4"} img={imgProy4} description={""} colorButton="#F29D52"/>
        </>
    )
}

function Proyecto5() {
    return (
        <>
        <SectionMenu title={"Proyecto 5"} img={imgProy5} description={""}/>
        </>
    )
}

export { Proyecto1, Proyecto2, Proyecto3, Proyecto4, Proyecto5 };