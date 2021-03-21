import React, { Fragment, useState } from "react";
import { Select } from "antd";

const useCrypto = (initialState, cryptos) => {
    const [state, setState] = useState(initialState);
    const { Option } = Select;

    const SelectCrypto = () => (
        <Fragment>
            <Select
                showSearch
                style={{ width: 300, display:"block", margin: "0 auto" }}
                placeholder="Select a Crypto"
                optionFilterProp="children"
                onChange={value => setState(value)}
				value={state}
                filterOption={(input, option) =>
                    option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                }
            >
                <Option value="" disabled>
                    -- Criptomoneda --
                </Option>
                {cryptos.map((crypto) => (
                    <Option
                        key={crypto.CoinInfo.Id}
                        value={crypto.CoinInfo.Name}
                    >
                        {crypto.CoinInfo.FullName}
                    </Option>
                ))}
            </Select>
        </Fragment>
    );

    return [state, SelectCrypto, setState];
};

export default useCrypto;
