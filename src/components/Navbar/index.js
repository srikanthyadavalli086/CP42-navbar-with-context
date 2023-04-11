import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {toggleTheme, isDarkTheme} = value

      const onClickImage = () => {
        toggleTheme()
      }
      const bgThemeClassName = isDarkTheme ? 'nav-con-dark' : 'nav-con-light'
      const navLinksClassName = isDarkTheme ? 'a-dark' : 'a'
      const navLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const btnImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <div className={bgThemeClassName}>
          <img src={navLogo} alt="website logo" className="nav-image" />
          <ul className="nav-links">
            <Link to="/">
              <li className={navLinksClassName}>
                <p>Home</p>
              </li>
            </Link>
            <Link to="/about">
              <li className={navLinksClassName}>
                <p>About</p>
              </li>
            </Link>
          </ul>
          <button
            type="button"
            onClick={onClickImage}
            className="button"
            data-testid="theme"
          >
            <img src={btnImage} alt="theme" className="nav-image" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
