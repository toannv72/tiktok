import Siebar from "./Siebar";
import Heder from "../components/Heder";

//children phair viet dung
function Defautlayyou({ children }) {
  return (
    <div>
      <Heder />
      <div className="container">
        <Siebar />
        <div className="content">
        
          {children}
        </div>
      </div>
    </div>
  );
}

export default Defautlayyou;
