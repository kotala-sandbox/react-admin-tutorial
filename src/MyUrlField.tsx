import * as React from "react";
import { FC } from "react";
import { UrlFieldProps, useRecordContext } from 'react-admin';

const MyUrlField: FC<UrlFieldProps> = (props) => {
    const { source } = props;
    const record = useRecordContext();
    if (source) {
        return record ? (
            <a href={record[source]}>
                {record[source]}
            </a>
        ) : null;
    } else {
        return null;
    }
}

export default MyUrlField;