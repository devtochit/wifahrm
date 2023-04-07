import Table from "../../../Dashboard/shared/components/ui/table/Table";


const cropPlantedList = ({ plantedcrop }) => {
    return (
        <Table
            plantedcrop={plantedcrop}
            users
            headers={["FarmId", "Category/ Name",   "Quantity",   "EstimatedDays"]}
            items={plantedcrop}
        />
    );
};

export default cropPlantedList;
