import { Star } from "lucide-react";
import NavBar from "../components/ui/NavBar";
import Counter from "../components/ui/Counter";
import cakes from "../data/cakes";
import Button from "../components/ui/Button";

export default function ProductPage() {
  const totalStars = 5;

  const cake = cakes[0];


  return (
    <div className="min-h-screen flex flex-col">
      <NavBar/>
      <div className="grid md:grid-cols-5 grid-cols-1">
        <div className="col-span-2">
          <img
            src="/cake.jpg"
          />
          <div>
            <h1 className="font-bold md:text-center pl-4 md:pl-0 text-3xl pb-3">{cake.name}</h1>
            <div className="flex px-4 md:pl-0 justify-between md:justify-center gap-6">
              <div className="flex space-x-1 md:space-x-2 items-center">
                {[...Array(totalStars)].map((_, index) => (
                    <Star fill={ (index < cake.stars) ? "var(--tertiary-color)" : "#ffffff"  } className="md:w-8 md:h-8 w-6 h-6 text-(--tertiary-color)"/>
                ))}
              </div>
              <Counter/>            
            </div>
          </div>
        </div>
        <div className="col-span-3 p-4 md:p-10">
          <div className="font-semibold text-xl md:text-2xl pb-2 md:pb-3">Description</div>
          <p className="pb-7">
            {cake.description}
          </p>
          <div className="text-2xl font-bold pb-10">Price ${cake.price}</div>
          <div className="space-x-5 w-full md:block flex justify-between pb-10">
            <Button color="--secondary-color" title="Order Now" bg="#000000"/>
            <Button color="--primary-color" title="Add to Cart" bg="#FFFFFF"/>
          </div>
        </div>
      </div>

    </div>
  );
}
