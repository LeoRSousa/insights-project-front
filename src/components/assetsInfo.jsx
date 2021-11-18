import React, { useState, useEffect } from "react";

import axios from "axios";
import StockChart from "./stockChart";

const AssetsInfo = ({ company }) => {
    const [historic, setHistoric] = useState([]);
    const [business, setBusiness] = useState([]);
    const [data, setData] = useState({});

    function handleData() {
        let values = [];
        let datetimes = [];
        historic.map((e) => {
            values.push(e.close.toPrecision(4));
            datetimes.push(e.date);
        });
        console.log(datetimes);
        // setData({
        //     stockFullName: business.longName,
        //     stockShortName: company[0],
        //     price: {
        //         current: 2.32,
        //         open: 2.23,
        //         low: 2.215,
        //         high: 2.325,
        //         cap: 93765011,
        //         ratio: 20.1,
        //         dividend: 1.67,
        //     },
        //     chartData: {
        //         labels: datetimes,
        //         data: values,
        //     },
        // });
        
    }

    useEffect(() => {
        const req = async () => {

            var data = JSON.stringify({
                "symbols": company
            });

            var config = {
                method: 'post',
                url: 'http://localhost:5003/assets/info',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(function (response) {
                    console.log("Info:" + response.data[0].info.longName);
                    setHistoric(response.data[0].historic);
                    setBusiness(response.data[0].info.longName);
                    // console.log(response.data[0].historic);
                })
                .catch(function (error) {
                    console.log(error);
                });

        }

        req();
        // handleData();
    }, []);

    return (
        <>
            <div className="white">
                {company[0]} <br />
                {business} <br />
                {/* {historic.map((e) => <div> {e.close.toPrecision(4)} </div>)} */}
                <StockChart info={  
                    {
                        stockFullName: "SW Limited.",
                        stockShortName: "ASX:SFW",
                        price: {
                            current: 2.32,
                            open: 2.23,
                            low: 2.215,
                            high: 2.325,
                            cap: 93765011,
                            ratio: 20.1,
                            dividend: 1.67,
                        },
                        chartData: {
                            labels: [
                                "10:00",
                                "",
                                "",
                                "",
                                "12:00",
                                "",
                                "",
                                "",
                                "2:00",
                                "",
                                "",
                                "",
                                "4:00",
                            ],
                            data: [
                                2.23,
                                2.215,
                                2.22,
                                2.25,
                                2.245,
                                2.27,
                                2.28,
                                2.29,
                                2.3,
                                2.29,
                                2.325,
                                2.325,
                                2.32,
                            ],
                        },
                    }
                } />
            </div>
        </>
    );
};

export default AssetsInfo;