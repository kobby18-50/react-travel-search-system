import Card from "../card/Card";

const CardList = ({monsters}) => {
    return ( 
        <div>
            <h3 className="grid grid-cols-4 gap-4">
        {
          monsters.map((monster)=>(
            <Card key={monster.id} monster = {monster}/>
          ))
        }
            </h3>
        </div>
     );
}
 
export default CardList;