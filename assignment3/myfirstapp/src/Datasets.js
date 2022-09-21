import React, { useState } from "react";
import { useDataQuery } from '@dhis2/app-runtime'
import { CircularLoader } from '@dhis2/ui'
import { Menu } from '@dhis2/ui'
import { MenuItem } from '@dhis2/ui'
import { Table } from '@dhis2/ui'

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

    if (error) {
        return <span>ERROR: {error.message}</span>
    }

    if (loading) {
        return <CircularLoader large />
    }

    //TODO: Task 5 + 6 and 7 maybe
    if (data) {
        console.log("API response:",data)
        const content = data.request0.dataSets
        console.log(content)
        return (
            <div>
                <Menu>
                    {/* Makes a list of datasets returned by query */}
                    {Object.keys(content).map((index) => {
                        return (
                            <MenuItem label={content[index].displayName} />
                        )
                    })}
                </Menu>
            </div>
        )
    }
}
export default Datasets;