const Navitem = (props) => {
  return (
    <div>
        <li className= 'nav-item'> 
      {props.children}
      </li>
    </div>
  )
}

const NavitemDropDown = (props) => {
    return (
      <div>
          <li className= 'nav-item dropdown'> 
        {props.children}
        </li>
      </div>
    )
  }


export default Navitem
export {NavitemDropDown}