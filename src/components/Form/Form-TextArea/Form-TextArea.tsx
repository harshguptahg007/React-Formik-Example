import React from "react";
import {Field} from "formik";
import './Form-TextArea.css';
import '../Form.css';

interface Props {
    label: string,
    name: string,
    id: string,
    placeholder: string,
}

const FormTextArea: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <label className="heading" htmlFor={props.id}>{props.label}</label>
            <Field
                component="textarea"
                name={props.name}
                rows={6}
                cols={74}
                placeholder={props.placeholder}
                id={props.id}
                className="Textarea"
            />
        </div>
    );
};

export default FormTextArea;