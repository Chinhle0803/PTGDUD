import React, { useState } from "react";

const TinhTien = () => {
    const [principal, setPrincipal] = useState("");
    const [rate, setRate] = useState("");
    const [target, setTarget] = useState("");
    const [results, setResults] = useState([]);

    const calculateAccumulation = () => {
        let p = parseFloat(principal);
        let r = parseFloat(rate) / 100;
        let t = parseFloat(target);
        let year = 0;
        let accumulation = [];

        while (p < t) {
            year++;
            p += p * r;
            accumulation.push({ year: year, amount: p.toFixed(2) });
        }

        setResults(accumulation);
    };

    return (
        <div>
            <h1>Tính tiền mơ ước</h1>
            <div>
                <label>Số tiền gốc:    </label>
                <input
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                />
            </div>
            <div>
                <label>Lãi suất hàng năm (%):</label>
                <input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                />
            </div>
            <div>
                <label>Kết quả mong muốn:</label>
                <input
                    type="number"
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                />
            </div>
            <button onClick={calculateAccumulation}>Tính toán</button>
            <h2>Kết quả tích lũy:</h2>
            <ul>
                {results.map((result) => (
                    <li key={result.year}>
                        Năm {result.year}: {result.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TinhTien;
