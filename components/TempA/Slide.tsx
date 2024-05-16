import Card from "./Card";

export default function Slide() {
  const products = [
    {
      name: "Belle denim jackets",
      price: 69.0,
      reviews: 344,
      rating: 4
    },
    {
      name: "Belle denim jackets",
      price: 69.0,
      reviews: 344,
      rating: 4
    },
    {
      name: "Belle denim jackets",
      price: 69.0,
      reviews: 344,
      rating: 4
    },
    {
      name: "Belle denim jackets",
      price: 69.0,
      reviews: 344,
      rating: 4
    },
    {
      name: "Belle denim jackets",
      price: 69.0,
      reviews: 344,
      rating: 4
    },
   
  ];
  return (
      <div className="grid mt-5 grid-cols-5 gap-5 container">
        {products.map((el, key) => (
          <div key={key}>
            <Card name={el.name} price={el.price} reviews={el.reviews} rating={el.rating}/>
          </div>
        ))}
    </div>
  );
}
