import React from "react";
import './Form-Radio.css';
import '../Form.css';
import {Field} from "formik";

interface Props {
    name: string,
    id: string,
    value: string,
}

const FormRadio: React.FC<Props> = (props: Props) => {
    return (
        <div className={"Radio-container"}>
            <label className="radio-checkbox-option" htmlFor={props.id}>{props.value}
                <Field
                    type="radio"
                    name={props.name}
                    id={props.id}
                    value={props.value}
                    className="Field-radio"
                />
                <span className="radio-mark"></span>
            </label>
        </div>
    );
};

export default FormRadio;