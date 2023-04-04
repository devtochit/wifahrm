import { useRef, useState, useEffect, useMemo } from "react";
import TableHeader from "./TableHeader";
import TableSearch from "./TableSearch";
import AddButton from "./actions/AddButton";
import TableRow from "../../../../CropPlanted/components/table/tableRow";
const Table = ({ headers, items, plantedcrop }) => {
    console.log(items)
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

    const values = Object.entries(items)    
    const getItems = () => {
        if (!search.trim()) return values;

        let filtered = values.filter((u) => {
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
                <table className=" w-full">
                    {/* head */}
                    <TableHeader
                        header
                        headers={headers}
                        handleCheckbox={selectAll}
                        className="bg-primary text-primary-t capitalize p-4"
                    />
                    <tbody>
                        {/* row 1 */}
                        {getItems().map(
                            (item, index) =>
                                plantedcrop && <TableRow key={index} plantedCrops={item} />
                        )}
                    </tbody>
                    {/* foot */}
                    <tfoot className="border-t-2">
                        <tr>
                            <th className="sticky left-0 z-10 h-full"></th>
                            {headers.map((h, index) => (
                                <th key={index} className="text-darker-t uppercase text-xs text-start p-4">
                                    {h}
                                </th>
                            ))}
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>
    );
};

export default Table;
