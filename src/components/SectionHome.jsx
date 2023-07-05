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
                        <Link to={props.linkPagWeb} target="_blank">
                            <button class="btn-description btn-pagweb" style={{backgroundColor: props.colorButton}}>
                                <span class="btn-description-text">PAG WEB</span>
                            </button>
                        </Link>
                        <Link to={props.linkGithub} target="_blank">
                            <button class="btn-description btn-github">
                                <span class="btn-description-text">GITHUB</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionMenu;