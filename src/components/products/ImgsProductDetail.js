import { useState } from "react";
import classes from "./ImgsProductDetail.module.css";

const ImgsProductDetail = (props) => {
  const [showImage, setShowImage] = useState(0);

  const images = [
    props.image,
    "https://i.pinimg.com/474x/fe/2d/81/fe2d81f745a468c51e93077320dfda26.jpg",
    "https://i.pinimg.com/originals/07/7b/67/077b674e1b59fea79b95148a8c005871.jpg",
    "https://wallpaperaccess.com/full/244962.jpg",
  ];

  return (
    <div className={classes.container}>
      <img
        src={images[showImage]}
        alt={props.name}
        className={classes.bigImg}
      />
      <div className={classes.images}>
        <img
          src={images[0]}
          alt={props.name}
          className={`${classes.smallImg} ${
            showImage === 0 ? classes.active : ""
          }`}
          onClick={() => setShowImage(0)}
        />
        <img
          src={images[1]}
          alt={props.name}
          className={`${classes.smallImg} ${
            showImage === 1 ? classes.active : ""
          }`}
          onClick={() => setShowImage(1)}
        />
        <img
          src={images[2]}
          alt={props.name}
          className={`${classes.smallImg} ${
            showImage === 2 ? classes.active : ""
          }`}
          onClick={() => setShowImage(2)}
        />
        <img
          src={images[3]}
          alt={props.name}
          className={`${classes.smallImg} ${
            showImage === 3 ? classes.active : ""
          }`}
          onClick={() => setShowImage(3)}
        />
      </div>
    </div>
  );
};

export default ImgsProductDetail;
