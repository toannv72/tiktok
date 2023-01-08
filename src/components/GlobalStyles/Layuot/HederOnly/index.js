
import Heder from "./Heder";

//children phair viet dung
function Defautlayyou({ children }) {
  return (
    <div>
      <Heder />
      <div className="container">
     
        <div className="content">
        
          {children}
        </div>
      </div>
    </div>
  );
}

export default Defautlayyou;
