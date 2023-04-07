import { useRef, useState, useEffect, useMemo } from "react";
import TableHeader from "./TableHeader";
import TableSearch from "./TableSearch";
import AddButton from "./actions/AddButton";
import PlantedTableRow from "../../../../CropPlanted/components/table/PlantedTableRow";
import LoadingSpinner from "../loading/LoadingSpinner";

const Table = ({ headers, items, plantedcrop }) => {
    console.log(plantedcrop,items)

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
}, []);

    const [isAllChecked, setAllChecked] = useState(false);
    const [search, setSearch] = useState("");

    let allCheckedRef = useRef();

    const selectAll = (ref) => {
        allCheckedRef = ref;
        const checked = allCheckedRef.current.checked;
        setAllChecked(checked);
    };

    useMemo(() => {
        const mycheckboxes = document.querySelectorAll(".checkbox-select");
        if (!isAllChecked) {
            mycheckboxes.forEach((c) => {
                c.checked = false;
            });
        } else {
            mycheckboxes.forEach((c) => {
                c.checked = true;
            });
        }
    }, [isAllChecked]);

    const handleChange = (e) => {
        // const checked = e.target.checked;
        // if (!checked) {
        //     allCheckedRef.current.checked = false;
        // }
    };

    const handleSearch = (value) => {
        setSearch(value);
    };

    const getItems = () => {
        if (!search.trim()) return items;

        let filtered = items?.filter((u) => {
            return Object.keys(u).some((key) => {
                if (typeof u[key] === "string") {
                    return u[key].toLowerCase().includes(search);
                }
                return false;
            });
        });
        return filtered;
    };

    return (
        <div>
            <div className="flex justify-between items-center">
                <TableSearch placeholder="Search..." onSearch={handleSearch} />
                {/* <AddButton /> */}
            </div>
            <div className="overflow-x-auto w-full overflow-hidden">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <TableHeader
                        header
                        headers={headers}
                        handleCheckbox={selectAll}
                        allCheckedRef={allCheckedRef}
                    />
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {loading? (
                            <tr>
                                <td colSpan={headers.length + 1} className="text-center">
                                    <LoadingSpinner />
                                </td>
                            </tr>
                        ) : (
                            getItems()?.map((item, index) => (
                                <PlantedTableRow key={index}  plantedCrop={item} />
                            ))
                        )}
                    </tbody>
                    {/* <!-- foot --> */}
                    <tfoot>
                        <tr>
                            <th></th>
                            {/* {headers.map((h, index) => (
                                <th key={index}>{h}</th>
                            ))} */}
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Table;
