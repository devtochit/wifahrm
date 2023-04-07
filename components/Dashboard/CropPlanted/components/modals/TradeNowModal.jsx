import Modal from "../../../shared/components/ui/modals/Modal";
import { Dialog } from "@headlessui/react";
import { Trade } from "iconsax-react";
import Button from "../../../components/Button";

const TradeNowModal = ({ openNow, onClose ,plantedCrops}) => {
    //   console.log('inside tradeNow', plantedCrops)

    const onLogoutButton = () => {
        console.log("logging out...");
        onClose();
    };

    return (
        <Modal openNow={openNow} onClose={onClose}>
            <Dialog.Title
                as="h3"
                className="text-lg font-bold leading-6 text-green-400 flex items-center"
            >
                <Trade size="32"  color="#37d67a" variant="Bold"/> Trade Now
            </Dialog.Title>
            <div className="mt-2">
                <p className="text-sm text-white">
                    You you will rediredted to the  tradezone to proceed with your transaction.
                </p>
                <p className="text-sm text-white">
                    Are you sure you want to continue?
                </p>
            </div>

            <div className="mt-4">
                <Button
                   title=' Trade Now'
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-lighter/80 px-4 py-2 text-sm font-medium text-red-400 hover:bg-lighter focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => onLogoutButton()}
               />


            </div>
        </Modal>
    );
};

export default TradeNowModal;
