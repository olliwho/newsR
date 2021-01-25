import React from "react";
import {useHistory} from "react-router-dom";
import {TableType, TableColumn} from "./Table";
import {Author} from "../author/Author";
import {Moment} from "moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLevelDownAlt} from "@fortawesome/free-solid-svg-icons";

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
                var value = ""
                if (column.type === 1)
                    value = (entry.referenceObject[column.nativeName as keyof object] as Author).toString()
                else if (column.type === 2)
                    value = (entry.referenceObject[column.nativeName as keyof object] as Moment).format("YYYY-MM-DD HH:mm")
                else if (column.type === 3)
                    {
                        var level = entry.level ? entry.level : 0;
                        const levelStyle = { 'margin-left': (level-0.5)*10} as React.CSSProperties;
                        const symb = level > 0 ? <FontAwesomeIcon id="iconStyle" style={levelStyle} icon={faLevelDownAlt} /> : "";
                        return <td>{symb}</td>;
                    }
                else
                    value = entry.referenceObject[column.nativeName as keyof object]
                return <td>{value}</td>
            }
            else
                return <td></td>
        });

  return (
    <tr onClick={onPress} className={"table-entry" + (entry.bold ? " bold" : "") + (entry.class ? " " + entry.class : "")}>
        {row}
    </tr>
  )
}

