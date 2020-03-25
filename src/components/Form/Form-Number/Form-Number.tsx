import React from "react";
import {Field} from "formik";
import '../Form.css';

interface Props {
    label: string,
    name: string,
    placeholder: string,
    id: string
}

const FormNumber: React.FC<Props> = (props: Props) => {
    return (
        <>
            <label className="heading" htmlFor="name">{props.label}</label>
            <Field
                type="number"
                name={props.name}
                placeholder={props.placeholder}
                id={props.id}
                className="Input-field"
            />
        </>
    );
};

export default FormNumber;