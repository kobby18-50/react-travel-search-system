import './card.css';

const Card = ({monster}) => {
    return ( 
        <div className="flex-col card-container">
            <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt="monsters" />
              <p>{monster.name}</p>
              <p>{monster.email}</p>
        </div>
     );
}
 
export default Card;