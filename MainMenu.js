import MenuComponent from "./MenuComponent"
import '../../App.css'
import img1 from "../../../src/images/ic_dashboard.jpg";
import img2 from "../../../src/images/ic_recruitment.jpg";
import img3 from "../../../src/images/ic_calendar.jpg";
import img4 from "../../../src/images/ic_employee.jpg";
import img5 from "../../../src/images/ic_department.jpg";
// import '../../images'
export const MainMenu = () => {
  return (
    <div className="frame-87-kMT" id="1:168">
      <label className="main-menu" id="1:169">
        MAIN MENU
      </label>

      <div className="frame-1-7rD" id="1:171">
        <MenuComponent imgUrl={img1} content="Dashboard" />
        <MenuComponent imgUrl={img2} content="Recritment" />
        <MenuComponent imgUrl={img3} content="Schedule" />
        <MenuComponent imgUrl={img4} content="Employee" />
        <MenuComponent imgUrl={img5} content="Department" />
      </div>

    </div>
  )
}
