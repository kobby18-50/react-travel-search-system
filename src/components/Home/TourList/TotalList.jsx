import BeachList from "./BeachList";
import IceBergList from "./IceBergList";
import MountainList from "./MountainList";
import WaterfallList from "./WaterfallList";

const TotalList = () => {
    return ( 
        <div>
            <BeachList/>
            <MountainList />
            <WaterfallList />
            <IceBergList />
        </div>
     );
}
 
export default TotalList;