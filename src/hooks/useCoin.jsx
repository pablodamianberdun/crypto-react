import React, { Fragment, useState } from "react";
import { Select } from "antd";

const useCoin = (initialState, options) => {
    const [state, setState] = useState(initialState);
    const { Option } = Select;

    const SelectCoin = () => (
        <Fragment>
            <Select defaultValue={state}
				style={{ width: 300, display: "block", margin: "20px auto" }} 
				onChange={value => setState(value)}>
				<Option value="" disabled>-- Moneda --</Option>
                {options.map((option) => (
					<Option key={option.code} value={option.code}>{option.name}</Option>
                ))}
            </Select>
        </Fragment>
    );

    return [state, SelectCoin, setState];
};

export default useCoin;
