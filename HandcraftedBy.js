import reactLogo from './reactLogo.svg'
import './HandcraftedBy.css'

const HandcraftedBy = (props) => {
  return (
    <span className="Handcrafted">
      {/* 100% template-free ! */}
      <span>
      handcrafted by&nbsp;
      <Author name={props.name} link={props.link} />&nbsp;
      <WithReact />
      </span>
    </span>
  )
}

const Author = (props) => {
  return (
    <span>
      <a 
        className="Handcrafted-link"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.name}
      </a>
    </span>
  )
}

const WithReact = () => {
  return (
    <span >
      with
      <a 

        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
       
      </a>
      <ReactLogo />
      
    </span>
  )
}

const ReactLogo = () => {
  return (
    <img className="Handcrafted-logo" src={reactLogo} alt="reactLogo" onclick="window.open('https://reactjs.org')"/>
  )
}

export default HandcraftedBy;