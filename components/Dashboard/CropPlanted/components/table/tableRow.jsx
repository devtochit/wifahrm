import { useState } from "react";
import { MoreVertical } from "react-feather";
import CrudDropdown from "../../..//shared/components/ui/dropdown/CrudDropdown";
import TradeNowModal from "../modals/TradeNowModal";


const TableRow = ({ plantedCrops }) => {
     plantedCrops.map((key,items)=>(
        console.log('inside tabel row',items)

     ))
  
    const [istradeNowModalOpen, settradenowModalOpen] = useState(false);





    return (
        <tr>
            <th>
                <label>
                    <input
                        type="checkbox"
                        className="checkbox checkbox-select"
                        onChange={(e) => handleChange(e)}
                    />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar cursor-pointer">
                        <div className="mask mask-squircle w-12 h-12">
                             <img
                                src={plantedCrops|| "/git.jpg"}
                                alt="user avatar"
                            /> 
                        </div>
                    </div>
                    <div>
                        <div className="font-bold"> </div>
                        <div className="text-sm opacity-50">{plantedCrops.cropCategory}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="text-sm">{plantedCrops.cropName}</span>
                <br />
                <div className="badge bg-accent/50 badge-sm p-3 mt-2">
                    <span className="text-primary-t">{plantedCrops.quantityPlanted}</span>
                </div>
            </td>
            <td>{plantedCrops.marketCropId}</td>
            <th>
                <CrudDropdown
                    element={
                        <div className="btn btn-ghost btn-xs cursor-pointer">
                            <span className="text-base font-bold">
                                <MoreVertical size={25} />
                            </span>
                        </div>
                    }
                    ontradenowClick={() => settradenowModalOpen(true)}
                />
                <TradeNowModal
                    plantedCrops={plantedCrops}
                    openNow={istradeNowModalOpen}
                    onClose={() => settradenowModalOpen(false)}
                ></TradeNowModal>
             
            </th>
        </tr>
    );
};

export default TableRow;
