
const ButtonComponent = ({className, name, icon}) => {
  return (
    
    <button className={className}>
      {icon}
      {name}
    </button>
  )
}

export default ButtonComponent