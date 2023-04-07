import Table from "../../../Dashboard/shared/components/ui/table/Table";


const cropPlantedList = ({ plantedcrop }) => {
    return (
        <Table
            plantedcrop={plantedcrop}
            users
            headers={["FarmId", "Category", "Name", "CropId", "Quantity"]}
            items={plantedcrop}
        />
    );
};

export default cropPlantedList;
