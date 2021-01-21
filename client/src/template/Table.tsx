import React from "react";
import {TableEntry} from "./TableEntry";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faChevronUp, faChevronDown, faSort} from "@fortawesome/free-solid-svg-icons";

export class TableColumn {
    public readonly name: string
    public readonly type: number
    public readonly nativeName: string

    constructor(name: string, type: number, nativeName: string) {
        this.name = name;
        this.type = type;
        this.nativeName = nativeName;
    }
}

export type TableType<T> = {
  bold?: boolean
  class?: string
  url?: string
  icon?: IconProp
  onPress?: (entry: T) => void
  referenceObject: object
};

export function Table<T extends TableType<T>>(props: {
  data: T[]
  columns: TableColumn[]
  urlColumn: string,
  onPressSort: (sortColumn:string, ascending:boolean) => void
  sortColumn:string
  ascending:boolean
}) {
  const {data} = props;
  const {columns} = props;
  const {urlColumn} = props;
  const {onPressSort} = props;
  const {sortColumn} = props;
  const {ascending} = props;

  function onPressSortExec(sortColumnNew:string) {
    var newAscending:boolean = false;
    var newSortColumn:string = sortColumn;
    if (sortColumnNew !== sortColumn)
    {
        newAscending = true;
        newSortColumn = sortColumnNew;
    }
    else
        newAscending = !ascending;

    onPressSort(newSortColumn, newAscending);
  }












  const header = columns.map((column, i) => {
        const value = column.name
        const nativeName = column.nativeName
        const sortIcon = (column.nativeName === sortColumn) ? (ascending) ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faSort} />
        return <th id={nativeName} onClick={() => onPressSortExec(nativeName)}>{value} {sortIcon}</th>
    });

    var dataString = null;
    loadDataString();

    function loadDataString()
    {
        if (sortColumn === "")
            dataString = data.map((entry, index) => <TableEntry key={index} entry={entry} columns={columns} urlColumn={urlColumn}/>);
        else
            dataString = data.sort((a, b) => a.referenceObject[sortColumn as keyof object] > b.referenceObject[sortColumn as keyof object] ? (ascending ? 1 : -1) : (ascending ? -1 : 1)).map((entry, index) => <TableEntry key={index} entry={entry} columns={columns} urlColumn={urlColumn}/>);
    }

  return (
    <table>
        <thead>
            <tr>{header}</tr>
        </thead>
        {dataString}
    </table>
  );
}
