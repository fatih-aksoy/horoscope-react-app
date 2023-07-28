import { data } from "../../helper/data";
import Card from "./Card";
import "./Main.scss"

const Main = () => {
  console.log(data);
  return (
    <div className="card-container">
      {data.map((item) => (
        //! kart componentini kaldiriz
        // <p>Card Container</p>
        //! asagidaki bicimde Card komponentetine props gondeririz.
        // <Card item={item}/>

        //! bir de asagidaki gibi spread yaparak acik olarak gonderirz.
        // <Card item {...item}/>
        <Card key={item.id} {...item} />

        //! ussteki islem aslinda uzun da yapilirdi. mesela asagidaki gibi. yukardaki spread metodu ile asagidaki metod ayni.
        // <Card title={title} date={date} desription={description}/>
      ))}
    </div>
  );
};

export default Main;

{
  /* <Card item {...item}/>  */
}
// ! ustteki gibi gondedigimiz zaman soyle bir warning aliriz. Each child in a list shuld have a unique key.

//! {data.map((item) icerisinde bir index verilebilir;
// !   {data.map((item,i)
// ! ama id varsa id verilir cinku id en sagliklisidir. bu ornekte elemanlar sabit. ekleme cikarma yapilacak olsa idi index verme yerine id vermek vest practicedir.

// !sonuc olarak, listedeki herbir elemanin UNIQUE BIR KEY i OLMALI!!!!!!!
{
  /* <Card key={item.id} {...item}/>  */
}
