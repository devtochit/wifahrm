import { useState } from "react";
import { MoreVertical } from "react-feather";
import CrudDropdown from "../../../shared/components/ui/dropdown/CrudDropdown";
import TradeNowModal from "../modals/TradeNowModal";

const PlantedTableRow = ({ plantedCrop }) => {
  const [istradeNowModalOpen, settradenowModalOpen] = useState(false);

  return (
    <tr className=''>
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
        <div className="flex flex-col sm:flex-row items-center space-x-3 w-full ">
          <div className="text-sm opacity-50">{plantedCrop.farmId}</div>
        </div>
      </td>
      <td>
        <div className="flex flex-col sm:flex-row items-center space-x-3 w-full">
          <div className="font-bold">{plantedCrop.cropCategory}</div>
          <div className="text-sm opacity-50">{plantedCrop.cropName}</div>
        </div>
      </td>
      <td>
        <div className=" pl-10 ">
          <span className=" ">{plantedCrop.amountPlanted}</span>
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
      <style jsx>{`
        @media (min-width: 640px) {
          td:first-child {
            width: 1000px;
            background:'#000'
          }
          td:nth-child(2) {
            width: 150px;
          }
          td:nth-child(3) {
            width: 200px;
          }
          td:nth-child(4) {
            width: 100px;
          }
          td:last-child {
            width: 100px;
          }
        }
      `}</style>
    </tr>
  );
};

export default PlantedTableRow;
