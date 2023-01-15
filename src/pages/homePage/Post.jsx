import "./style.css";
import { auth, db } from "../../firebase/FireBase-config";
import { Button } from "antd";

export const Post = ({ post, isAuth, onDelete }) => {

  return (
    <div className="post" key={post.id}>
      <div className="postHeader">
        <div className="title">
          <nav>
          <div className="carRecordHeader">{post.brand}</div>
          </nav>
        </div>
      </div>
      <div className="postTextContainer"> Car Model : {post.brandModel} </div>
      <div className="postTextContainer"> Car Color : {post.carColor} </div>
      <div className="postTextContainer"> Car Type : {post.carType} </div>
      <div className="postTextContainer">
        {" "}
        Year of Purchased : {post.carYear}{" "}
      </div>
      <div className="postTextContainer"> Fuel Type : {post.fuelType} </div>
      <div className="postTextContainer"> Kilometers : {post.km} </div>
      <div className="postTextContainer">
        {" "}
        Gear Shift Type : {post.shiftType}{" "}
      </div>
      <div className="postTextContainer"> E-Car : {post.eCar} </div>
      <div className="postTextContainer"> Car Price : {post.carPrice} $ </div>

      <div className="postTextContainer"><h3>@{post.author.name}</h3></div>
      <div className="rowC">
      <div className="deletePost">
          {isAuth && post.author.id === auth.currentUser.uid && (
            <button onClick={() => onDelete(post.id)}> &#128465;</button>
          )}
       </div>
       {!isAuth ? (
           <>
           </>
        ) : (
          <>
          <a href={`/CarAdded/${post.id}`} className="carAddedLink">
           <Button>Add Car</Button>
          </a>
          </>
        )}
      
        
      </div>
   
    </div>
  );
};
