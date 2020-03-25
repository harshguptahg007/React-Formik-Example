import React from "react";
import {Field} from "formik";
import './Form-Checkbox.css';
import '../Form.css';

interface Props {
    name: string,
    id: string,
    value: string,
}

const FormCheckbox: React.FC<Props> = (props: Props) => {
    return (
        <div className={"Radio-container"}>
            <label className="radio-checkbox-option" htmlFor={props.id}>{props.value}
                <Field
                    type="checkbox"
                    name={props.name}
                    id={props.id}
                    value={props.value}
                    className="Field-checkbox"
                />
                <span className="checkbox-mark"></span>
            </label>
        </div>
    );
};

export default FormCheckbox;