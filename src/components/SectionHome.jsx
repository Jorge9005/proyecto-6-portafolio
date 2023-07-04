function SectionMenu(props) {
    return (
        <div className="wrapper-home">
            <div className="container-home">
                <h2 className='title-home'>{props.title}</h2>
                <div>
                    <img src={props.img} alt="imgProy1" style={{ width: '80rem' }} />
                </div>
                <div className="wrapper-description mt-2">
                    <p className='paragraph-description'>{props.description}</p>
                    <div className='wrapper-description-button'><button className='button-description' style={{background: props.colorButton}}>Ir al proyecto</button></div>
                </div>
            </div>
        </div>
    )
}

export default SectionMenu;