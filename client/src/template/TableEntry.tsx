import React from "react";
import {useHistory} from "react-router-dom";
import {TableType, TableColumn} from "./Table";
import {Author} from "../author/Author";
import {Moment} from "moment";

export function TableEntry<T extends TableType<T>>(props: {
  entry: T
  columns: TableColumn[]
  urlColumn: string
}) {
  const {entry} = props;
  const {columns} = props;
  const history = useHistory();

  function onPress() {
    if(entry.onPress) {
      entry.onPress(entry);
    }
    if(entry.url) {
        history.push(entry.url);
    }
  }

  const row = columns.map((column, i) => {
            if (entry != null && entry["referenceObject" as keyof TableType<T>] != null)
            {
                let value = "";
                let item = "";
                if (column.type === 1)
                    value = (entry.referenceObject[column.nativeName as keyof object] as Author).toString()
                else if (column.type === 2)
                    value = (entry.referenceObject[column.nativeName as keyof object] as Moment).format("YYYY-MM-DD HH:mm")
                else if (column.type === 3){
                  value = entry.referenceObject[column.nativeName as keyof object]
                  item = "size";
                }
                else if (column.type === 4){
                  value = entry.referenceObject[column.nativeName as keyof object]
                  item = "attachment";
                }
                else
                    value = entry.referenceObject[column.nativeName as keyof object]

                return item !== ""? <td className={item}>{value}</td> : <td>{value}</td>;
            }
            else
                return <td/>
        });

  return (
    <tr onClick={onPress} className={"table-entry" + (entry.bold ? " bold" : "") + (entry.class ? " " + entry.class : "")}>
        {row}
    </tr>
  )
}

