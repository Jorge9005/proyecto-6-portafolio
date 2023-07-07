import { Link } from 'react-router-dom';
import SectionMenu from '../components/SectionHome';

import Logo from '../images/Logo-wallpaper-azul.png';
import imgProy1 from '../images/Proyecto1-img.png';
import imgProy2 from '../images/Proyecto2-img.png';
import imgProy3 from '../images/Proyecto3-img.png';
import imgProy4 from '../images/Proyecto4-img.png';
import imgProy5 from '../images/Proyecto5-img.png';
import LogoJs from '../images/logo-js.png';
import LogoHtml from '../images/logo-html.png';
import LogoCss from '../images/logo-css.png';
import LogoGithub from '../images/logo-github-white.png';
import LogoLinkedin from '../images/logo-linkedin.png';
import LogoNode from '../images/logo-node.png';
import LogoReact from '../images/logo-react.png';


import React from 'react';

function Home() {
    return (
        <div>
            <div className='wrapper-home-home'>
                <div className="container-home-home">
                    <div className='wrapper-logo-home'>
                        <img className="logo-home" src={Logo} alt="logo" />
                    </div>
                    <h2 className='title-home-home'>Jorge Sandoval</h2>
                    <div className='wrapper-links'>
                        <Link href="https://github.com/Jorge9005" target="_blank">
                            <img className='logos-home' src={LogoGithub} alt="logoGithub" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/jorge-sandoval-9044a717b" target="_blank">
                            <img className='logos-home' src={LogoLinkedin} alt="logoLinkedin" />
                        </Link>
                    </div>
                    <div className='wrapper-logos'>
                        <img className='logos-home' src={LogoReact} alt="logoReact" />
                        <img className='logos-home' src={LogoHtml} alt="logoHtml" />
                        <img className='logos-home' src={LogoCss} alt="logoCss" />
                        <img className='logos-home' src={LogoJs} alt="logoJs" />
                        <img className='logos-home' src={LogoNode} alt="logoNode" />
                    </div>
                </div>
            </div>
            <SectionMenu title={"Proyecto 1"} img={imgProy1} description={""} colorButton="#0339A6"
                linkPagWeb={"https://jorge9005.github.io/Proyecto1-ReparacionesJorgeSandoval/?classId=df26ec93-98f9-46e0-938f-e44e0e79c2da&assignmentId=129468ff-0031-4dbd-a4d4-84cd00cc0ffa&submissionId=287c4017-40b4-6eab-24ce-c1953802ff1a"}
                linkGithub={"https://github.com/Jorge9005/Proyecto1-ReparacionesJorgeSandoval?classId=df26ec93-98f9-46e0-938f-e44e0e79c2da&assignmentId=129468ff-0031-4dbd-a4d4-84cd00cc0ffa&submissionId=287c4017-40b4-6eab-24ce-c1953802ff1a"} />

            <SectionMenu title={"Proyecto 2"} img={imgProy2} description={""} colorButton="#F20505"
                linkPagWeb={"https://jorge9005.github.io/Proyecto2-Comentarios/?classId=df26ec93-98f9-46e0-938f-e44e0e79c2da&assignmentId=03e565f0-2fe4-4d23-b144-d9ab67ad1f24&submissionId=dfb4e243-934d-2f57-e3ca-8d73da8a0384"}
                linkGithub={"https://github.com/Jorge9005/Proyecto2-Comentarios?classId=df26ec93-98f9-46e0-938f-e44e0e79c2da&assignmentId=03e565f0-2fe4-4d23-b144-d9ab67ad1f24&submissionId=dfb4e243-934d-2f57-e3ca-8d73da8a0384"} />

            <SectionMenu title={"Proyecto 3"} img={imgProy3} description={""} colorButton="#C5D932"
                linkPagWeb={"https://jorge9005.github.io/Proyecto3-ChartJS/?classId=df26ec93-98f9-46e0-938f-e44e0e79c2da&assignmentId=35536190-1df2-4551-9e55-481e1acc9684&submissionId=32cd3cef-b34d-a915-c101-74fc65ff7925"}
                linkGithub={"https://github.com/Jorge9005/Proyecto3-ChartJS?classId=df26ec93-98f9-46e0-938f-e44e0e79c2da&assignmentId=35536190-1df2-4551-9e55-481e1acc9684&submissionId=32cd3cef-b34d-a915-c101-74fc65ff7925"} />

            <SectionMenu title={"Proyecto 4"} img={imgProy4} description={""} colorButton="#F29D52"
                linkPagWeb={"https://proy-4-aplicacion-restaurante.netlify.app/?classId=df26ec93-98f9-46e0-938f-e44e0e79c2da&assignmentId=225586e2-f7cf-40f2-b676-30a930726e43&submissionId=27456ad5-f945-2279-f9e3-0e52f28fdc56"}
                linkGithub={"https://github.com/Jorge9005/Proyecto-4-Aplicacion-Restaurante?classId=df26ec93-98f9-46e0-938f-e44e0e79c2da&assignmentId=225586e2-f7cf-40f2-b676-30a930726e43&submissionId=27456ad5-f945-2279-f9e3-0e52f28fdc56"} />

            <SectionMenu title={"Proyecto 5"} img={imgProy5} description={""} colorButton="#F29D52"
                linkPagWeb={"https://proyecto5-ecommerce.netlify.app/home"}
                linkGithub={"https://github.com/Jorge9005/Proyecto-5-Comecio-Electronico-Frontend/tree/main/my-react-app?classId=df26ec93-98f9-46e0-938f-e44e0e79c2da&assignmentId=021bab50-fb1a-48d0-8a29-c8457337c43e&submissionId=6089a74f-8005-e5c5-b20a-6f6882616024"} />
        </div>
    );
}

export default Home;
