import React from "react";
import {Field} from "formik";
import DropDownItems from "./DropDownItem/DropDownItem";
import './Form-DropDown.css';
import '../Form.css';

interface Props {
    label: string,
    id: string,
    name: string,
    initialValue: string,
    dropDownList: string[],
}

const FormDropDown: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <label
                className="heading"
                htmlFor={props.id}>
                {props.label}
            </label>
            <Field
                component="select"
                name={props.name}
                id={props.id}
                className="Input-field Dropdown">

                <DropDownItems disabled={true} value={props.initialValue} />

                {props.dropDownList.map((data) => {
                    return (<DropDownItems disabled={false} value={data}/>);
                })}

            </Field>
        </div>
    );
};

export default FormDropDown;