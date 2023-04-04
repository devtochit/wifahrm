import Table from "../../../Dashboard/shared/components/ui/table/Table";


const cropPlantedList = ({ plantedcrop }) => {
    return (
        <Table
            plantedcrop={plantedcrop}
            users
            headers={["Cropname", "Cropquantity", "CropId"]}
            items={plantedcrop}
        />
    );
};

export default cropPlantedList;
