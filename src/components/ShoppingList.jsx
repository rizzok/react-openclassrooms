import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import '../styles/ShoppingList.css';

function ShoppingList() {
  const categories = plantList.reduce((acc, plant) => {
    return acc.includes(plant.category) ? acc : acc.concat(plant.category)
  }, []);

  return <div>
    <ul>
      {categories.map(category => <li key={category}>{category}</li>)}
    </ul>
    <ul className='lmj-plant-list'>
      {plantList.map(({ id, cover, name, water, light }) => (
        <PlantItem 
          id={id}
          cover={cover}
          name={name}
          water={water}
          light={light}
        />
      ))}
    </ul>
  </div>;
}

export default ShoppingList;
