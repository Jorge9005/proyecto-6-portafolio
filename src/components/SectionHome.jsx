import { Link } from "react-router-dom";

function SectionMenu(props) {
    return (
        <div className="wrapper-home">
            <div className="container-home">
                <h2 className='title-home'>{props.title}</h2>
                <div>
                    <img src={props.img} alt="imgProy1" style={{ width: '80rem' }} />
                </div>
                <div className="wrapper-description mt-2">
                    <p className='paragraph-description col-6'>{props.description}</p>
                    <div className='wrapper-description-button col-6'>
                        <Link to={props.linkPagWeb} target="_blank"><button className='button-pagweb' style={{background: props.colorButton}}>PAG WEB</button></Link>
                        <Link to={props.linkGithub} target="_blank"><button className='button-github' style={{background: props.colorButton}}>GITHUB</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionMenu;