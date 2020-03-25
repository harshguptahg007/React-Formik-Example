import React from "react";
import './DropDownItem.css';

interface Props {
    disabled: boolean,
    value: string,
}

const DropDownItems: React.FC<Props> = (props: Props) => {
    return (
        <option
            disabled={props.disabled}
            value={props.disabled ? "" : props.value}
            className={"Dropdown-option" + !props.disabled ? "color-black" : ""}>
            {props.value}
        </option>
    );
};

export default DropDownItems;