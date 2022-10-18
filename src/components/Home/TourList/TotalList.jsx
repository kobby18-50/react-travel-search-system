import BeachList from "./BeachList";
import IceBergList from "./IceBergList";
import MountainList from "./MountainList";
import WaterfallList from "./WaterfallList";

const TotalList = ({beaches, mountains, waterfalls, icebergs}) => {
    return ( 
        <div>
            <BeachList beaches = {beaches}/>
            <MountainList mountains={mountains}/>
            <WaterfallList waterfalls={waterfalls}/>
            <IceBergList icebergs={icebergs}/>
        </div>
     );
}
 
export default TotalList;