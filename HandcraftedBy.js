import reactLogo from './reactLogo.svg'
import './HandcraftedBy.css'

const HandcraftedBy = (props) => {
  return (
    <span className="Handcrafted">
      {/* 100% template-free ! */}
      <span>handcrafted by</span>&nbsp;
      <Author name={props.name} link={props.link} />&nbsp;
      <WithReact />
    </span>
  )
}

const Author = (props) => {
  return (
    <span className="Handcrafted-content">
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
    <span className="Handcrafted-content">
      with&nbsp;
      <a 
        href="https://reactjs.org"
      >
        
      </a>
      <img src={reactLogo} alt="reactLogo" />
    </span>
  )
}

const ReactLogo = () => {
  return (
    <img src={reactLogo} alt="reactLogo" />
  )
}

export default HandcraftedBy;