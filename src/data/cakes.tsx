interface Cakes {
  id: number;
  name: string;
  description: string;
  price: number;
  stars: number;
}

const cakes: Cakes[] = [
    {
        id: 1,
        name: "Plum Brownie Cake",
        description: "A Plum Brownie Cake is a rich, festive fusion of fudgy chocolate brownie and traditional spiced fruit cake. It features a dense, moist dark chocolate base studded with dried fruits (such as raisins, prunes, and cherries) that are often soaked in rum, brandy, or orange juice to add a boozy, aromatic depth. This indulgent treat bridges the gap between a cake and a brownie, offering a decadent, chewy texture with pockets of sweet-tart, caramelised fruit.",
        price: 99,
        stars: 3
    }
] 

export default cakes;