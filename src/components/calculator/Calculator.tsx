import * as React from "react";
import {FormGroup} from "../form/FormGroup";
import {Submit} from "../form/Submit";

export interface CalculatorProps {
    formAction?: string;
    calcHeader?: string;
    countries?: any[];
    methods?: any[];
    units: any[];
}

export class Calculator extends React.Component<CalculatorProps, {}> {

    public static defaultProps = {
        calcHeader: "Delivery calculator",
        formAction: "/",
        countries: [
            {
                id: 1,
                name: "Russia"
            },
            {
                id: 2,
                name: "USA"
            },
        ],
        methods: [
            {
                id: 'qwair',
                name: "Qwintry Air"
            },
            {
                id: 'ecopost',
                name: "Qwintry Ecopost"
            },
        ],
        units: [
            {
                id: 'kg',
                name: 'kg/cm'
            },
            {
                id: 'in',
                name: 'lb/in'
            }
        ]
    };

    public render() {
        return (
            <div id="deliveryCalc">
                <form action={this.props.formAction}>
                    <div className="calculator">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>{this.props.calcHeader}</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <FormGroup model={"DeliveryCalcForm"} attribute={"hub_code"} title={"Country of origin"} inputType={"select"} values={this.props.countries} value={"2"}/>
                            </div>
                            <div className="col-lg-4">
                                <FormGroup model={"DeliveryCalcForm"} attribute={"addr_country"} title={"Country of delivery"} inputType={"select"} values={this.props.countries}/>
                            </div>
                            <div className="col-lg-4">
                                <FormGroup model={"DeliveryCalcForm"} attribute={"method"} title={"Method"} inputType={"select"} values={this.props.methods}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <FormGroup model={"DeliveryCalcForm"} attribute={"items_value"} title={"Customs Items Value"} inputType={"addon"} inputProps={{addonText:"$", addonPosition:"begin"}}/>
                            </div>
                            <div className="col-lg-4">
                                <FormGroup model={"DeliveryCalcForm"} attribute={"weight_kg"} title={"Package Weight"} inputType={"addon"} inputProps={{addonText:"kg"}}/>
                            </div>
                            <div className="col-lg-4">
                                <FormGroup model={"DeliveryCalcForm"} attribute={"dimensions_cm"} title={"Dimensions"} inputType={"addon"} inputProps={{addonText:"cm"}}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <FormGroup model={"DeliveryCalcForm"} attribute={"weight_measurement"} title={"Units"} inputType={"select"} values={this.props.units}/>
                            </div>
                            <div className="col-lg-4">
                                <FormGroup model={"DeliveryCalcForm"} attribute={"is_insured"} title={"Insurance"} inputType={"checkbox"} />
                            </div>
                            <div className="col-lg-4">
                                <br/>
                                <Submit value="Calculate"/>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}