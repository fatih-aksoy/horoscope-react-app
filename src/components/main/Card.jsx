

const Card = ({title,date,image,desc}) => {
  // ! main den buraya <Card item {...item}/>  yani spread metodu ile verileri ACIK halde gondeririz.
  // ! diger bir metod ise havada destructuring yaparim.

//   console.log("ne geliyor", props);

  // ! guzel bit metod. uzun uzun yazmaktansa asagida destrucruting yaparim. yani soyle const Card = ({title, date, image, desc})

  //   const { title, date, image, desc } = props;

  return (
    <div className="cards">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="date">
        <h2>{date}</h2>
      </div>
      <img src={image} alt="" />
      <div className="card-over">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
