import React  from "react";
import { Table, TableHead, TableRowHead, TableCellHead, TableBody, TableRow, TableCell } from '@dhis2/ui'


function TableSection(props) {

    // Returns table element to be shown when clicking menuItem
    return (
        <section>
            <Table>
                <TableHead>
                    <TableRowHead>
                        <TableCellHead>Display Name</TableCellHead>
                        <TableCellHead>ID</TableCellHead>
                        <TableCellHead>Created</TableCellHead>
                    </TableRowHead>
                </TableHead>

                <TableBody>
                    <TableRow>
                        <TableCell>{props.name}</TableCell>
                        <TableCell>{props.id}</TableCell>
                        <TableCell>{props.created}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </section>
    )
}
export default TableSection;