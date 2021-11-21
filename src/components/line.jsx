import React, { useState } from 'react';

import "./charts.css"

import { Line } from 'react-chartjs-2';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

function handleSubmit(a, p, c) {
    console.log('a');
    alert('{"id": "' + c + '", "proportion": ' + p + ', "amount": ' + a + '}');
    // var config = {
    //     method: 'post',
    //     url: 'http://localhost:5001/client/create',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     data: this.state.resultado
    // };

    // axios(config)
    //     .then(function (response) {
    //         alert('Usuário criado!');
    //         window.location.replace('http://localhost:5500/advisor/home');
    //     })
    //     .catch(function (error) {
    //         alert(error);
    //     });

    // return 'a';
}

const buildData = (chartDataVal, chartDataDt) => ({
    labels: chartDataDt,
    datasets: [
        {
            label: 'Close: $',
            data: chartDataVal,
            pointRadius: 0,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 255, 255, 1)',
        },
    ],
});

const options = {
    bezierCruve: true,
    plugins: {
        legend: {
            display: false,
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                color: 'rgba(255, 255, 255, 1)'
            },
            grid: {
                display: false,
                drawBorder: false,
                color: 'rgba(255, 255, 255, 1)'
            },
        },

        xAxes: {
            ticks: {
                color: 'rgba(255, 255, 255, 1)'
            },
            grid: {
                circular: true,
                borderColor: 'rgba(255, 255, 255, .2)',
                color: 'rgba(255, 255, 255, .2)',
                borderDash: [5, 5]
            },
        },
    },
    layout: {
        padding: 50
    },
    maintainAspectRatio: false
};

const LineChart = ({ closes, dates, infos, company }) => {

    const data = buildData(closes, dates);
    const [amounts, setAmounts] = useState('');
    const [propt, setPropt] = useState('');

    return (
        <>
            <div className='chart-container'>
                <Row>
                    <Col>
                        <Line data={data} options={options} width={100} height={300} />
                    </Col>
                    <Col>
                        <div className='chart-container-infos'>
                            <img src={infos.logo_url} alt="Logo" className='buss-logo' />
                            <h3>{infos.longName}</h3>
                            <h4>{infos.state} - {infos.country}</h4>
                            <b>Tipo da empresa: </b> {infos.industry} <br />
                            <b>Funcionários: </b> {infos.employees} pessoas<br />
                            <b>Dividend Yeld: </b> {infos.dividendYield} <br />
                        </div>
                    </Col>
                </Row>
                <Col sm={8} className='card-input-field'>
                    <Form onSubmit={(e) => handleSubmit(amounts, propt, company)}>
                        <FormGroup row>
                            <Label
                                for="amounts"
                                sm={2}
                            >
                                Quantidade:
                            </Label>
                            <Col sm={3}>
                                <Input
                                    id="amounts"
                                    name="amounts"
                                    placeholder="Quantidade"
                                    type="text"
                                    onChange={(e) => setAmounts(e.target.value)}
                                />
                            </Col>

                            <Label
                                for="proportions"
                                sm={2}
                            >
                                Proporção:
                            </Label>
                            <Col sm={3}>
                                <Input
                                    id="proportions"
                                    name="proportions"
                                    placeholder="Proporção"
                                    type="text"
                                    onChange={(e) => setPropt(e.target.value)}
                                />
                            </Col>
                        </FormGroup>
                        <div>
                            <Button secondary>
                                Adicionar ao portifólio
                            </Button>
                        </div>
                    </Form>
                </Col>
            </div>

        </>
    );
};

export default LineChart;