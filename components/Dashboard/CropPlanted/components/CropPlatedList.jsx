import Table from "../../../Dashboard/shared/components/ui/table/Table";


const cropPlantedList = ({ plantedcrop }) => {
    return (
        <Table
            plantedcrop={plantedcrop}
            users
            headers={["name", "quanity", "cropId"]}
            items={plantedcrop}
        />
    );
};

export default cropPlantedList;
