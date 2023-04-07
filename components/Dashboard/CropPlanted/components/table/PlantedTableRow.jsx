import { useState } from "react";
import { MoreVertical } from "react-feather";
import CrudDropdown from "../../../shared/components/ui/dropdown/CrudDropdown";
import TradeNowModal from "../modals/TradeNowModal";


const PlantedTableRow = ({ plantedCrop }) => {

    // {
    //     "cropId": 1,
    //     "cropCategory": "Vegetables",
    //     "farmId": 1,
    //     "cropName": "Tomatoes",
    //     "userId": "7096",
    //     "cropEstimatedDurationInDays": 1000,
    //     "cropActualDuration": null,
    //     "plantDate": null,
    //     "purchaseDate": null,
    //     "amountPlanted": 2,
    //     "minSquareMeter": 1000,
    //     "purchasePrice": 4500,
    //     "harvestDate": null,
    //     "accruedAmount": 0,
    //     "principalAmount": 0,
    //     "monthlyInterestRate": 1000,
    //     "estimatedYeildRate": 1000,
    //     "planted": false,
    //     "harvested": false
    // }

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
                        {/* <div className="mask mask-squircle w-12 h-12">
                             <img
                                src={plantedCrops|| "/git.jpg"}
                                alt="user avatar"
                            />
                        </div> */}
                                                <div className="text-sm opacity-50">{plantedCrop.farmId}</div>

                    </div>
                    <div>
                        <div className="font-bold"> </div>
                        <div className="text-sm opacity-50">{plantedCrop.cropCategory}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className="text-sm">{plantedCrop.cropName}</span>
                <br />
                <div className="badge bg-accent/50 badge-sm p-3 mt-2">
                    <span className="text-primary-t">{plantedCrop.amountPlanted}</span>
                </div>
            </td>
            <td>{plantedCrop.cropEstimatedDurationInDays}</td>
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
                    plantedCrops={plantedCrop}
                    openNow={istradeNowModalOpen}
                    onClose={() => settradenowModalOpen(false)}
                ></TradeNowModal>

            </th>
        </tr>
    );
};

export default PlantedTableRow;
