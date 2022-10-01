import React, { useState } from "react";
import { useDataQuery } from '@dhis2/app-runtime'
import classes from "./App.module.css";
import { CircularLoader } from '@dhis2/ui'
import { Menu } from '@dhis2/ui'
import { MenuItem } from '@dhis2/ui'
import { Table, TableHead, TableRowHead, TableCellHead, TableBody, TableRow, TableCell } from '@dhis2/ui'

const request = {
    request0: {
        resource: "/dataSets",
        params: {
            fields: "id, displayName, created",
            paging: "false"
        }
    }
}

function Datasets(props) {
    const { loading, error, data } = useDataQuery(request)
    const [show, setShow] = useState(false);

    const [name, setName] = useState()
    const [id, setId] = useState()
    const [created, setCreated] = useState()

    // Table element to be shown when clicking menuItem
    const TableSection = () => (
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
                        <TableCell>{name}</TableCell>
                        <TableCell>{id}</TableCell>
                        <TableCell>{created}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </section>
    )

    // when menuItem is clicked: switch show on or off, and change name, id and created for use in table
    const onClick = (e) => {
        if (name === e.value.displayName || show === false)
            setShow(!show);

        setName(e.value.displayName)
        setId(e.value.id)
        setCreated(e.value.created)
    }

    if (error) {
        return <span>ERROR: {error.message}</span>
    }

    if (loading) {
        return <CircularLoader large />
    }

    // if request went through and data is received
    if (data) {
        console.log("API response:",data)
        const content = data.request0.dataSets
        console.log(content)
        return (
            <div className={classes.boxes}>
                <aside>
                    <Menu>

                        {/* Makes a list of datasets returned by query */}
                        {Object.keys(content).map((index) => {
                            return (
                                <MenuItem value={content[index]} label={content[index].displayName} onClick={onClick}/>
                            )
                        })}
                    </Menu>
                </aside>

                {/* Shows side-section if pressed */}
                {show ? <TableSection/> : null}
            </div>
        )
    }
}
export default Datasets;
