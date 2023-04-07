import { useRef, useState, useEffect, useMemo } from "react";
import TableHeader from "./TableHeader";
import TableSearch from "./TableSearch";
import AddButton from "./actions/AddButton";
import PlantedTableRow from "../../../../CropPlanted/components/table/PlantedTableRow";
import LoadingSpinner from "../loading/LoadingSpinner";
import  style from './Table.module.css'
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
                <table className={style.table}>
                    {/* <!-- head --> */}
                    <TableHeader
                        header
                        headers={headers}
                        handleCheckbox={selectAll}
                        allCheckedRef={allCheckedRef}
                        className="bg-primary text-primary-t capitalize sticky lg:text-lg bg-black text-smtext-smtext-sm left-0 z-10 h-full"

                    />
                    <tbody className="">
                        {/* <!-- row 1 --> */}
                        {loading? (
                            <tr>
                                <td colSpan={headers.length + 1} className="">
                                    <LoadingSpinner />
                                </td>
                            </tr>
                        ) : (
                            getItems()?.map((item, index) => (
                                <PlantedTableRow kekeykeyy={index}  plantedCrop={item} />
                            ))
                        )}
                    </tbody>
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
