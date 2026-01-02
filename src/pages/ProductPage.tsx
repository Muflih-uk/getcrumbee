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
      <div className="grid grid-cols-5">
        <div className="col-span-2">
          <img
            src="/cake.jpg"
          />
          <div>
            <h1 className="font-bold text-center text-3xl pb-3">{cake.name}</h1>
            <div className="flex justify-center gap-6">
              <div className="flex space-x-2 items-center">
                {[...Array(totalStars)].map((_, index) => (
                    <Star size={35} fill={ (index < cake.stars) ? "var(--tertiary-color)" : "#ffffff"  } className="text-(--tertiary-color)"/>
                ))}
              </div>
              <Counter/>            
            </div>
          </div>
        </div>
        <div className="col-span-3 p-10">
          <div className="font-semibold text-2xl pb-3">Description</div>
          <p className="pb-7">
            {cake.description}
          </p>
          <div className="text-2xl font-bold pb-10">Price ${cake.price}</div>
          <div className="space-x-5">
            <Button color="--secondary-color" title="Order Now" bg="#000000"/>
            <Button color="--primary-color" title="Add to Cart" bg="#FFFFFF"/>
          </div>
        </div>
      </div>

    </div>
  );
}
