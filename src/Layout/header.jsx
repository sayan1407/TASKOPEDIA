import logo from '../image/react.png'
function MainHeader()
{
  return(
    <div className="py-1 pt-3 pl-2" style={{backgroundColor : "black"}}>
        <img src={logo} style={{height:"35px", verticalAlign:"top"}}></img>
        <span className='h2 pt-4 text-white-50'>React Course - Taskopedia</span>
    </div>
  )
}
const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgray",
};
function SubHeader()
{
  return(
    <p style={subHeaderStyle} className="text-center">This is an exciting course</p>
  )
}
const Header = () =>
{
  return(
    <div>
      <MainHeader/>
      <SubHeader/>
    </div>
  )
}

export default Header;