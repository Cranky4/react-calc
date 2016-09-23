import * as React from "react";
import {TextInput} from "./TextInput";
import {Select} from "./Select";
import {AddonInput} from "./AddonInput";
import {Checkbox} from "./Checkbox";

export interface FormGroupProps {
    model: string,
    attribute: string,
    title: string,

    inputProps?: any;
    value?: any,
    values?: any[],
    inputType?: string,
}

export class FormGroup extends React.Component<FormGroupProps,{}> {
    private inputProps: any = {};

    componentWillMount() {
        this.inputProps.id = `field-${this.props.model.toLowerCase()}-${this.props.attribute.toLowerCase()}`;
        this.inputProps.name = `${this.props.model}[${this.props.attribute}]`;
        this.inputProps.value = this.props.value;

        if (this.props.inputProps) {
            this.inputProps = this.props.inputProps;
        }
    }

    render() {
        return (
            <div className="form-group field-deliverycalcform-hub_code">
                {this.input}
                <div className="help-block"></div>
            </div>
        );
    }

    get input() {
        switch (this.props.inputType) {
            case "addon":
                return (
                    <AddonInput title={this.props.title} id={this.inputProps.id} name={this.inputProps.name} value={this.inputProps.value} addonText={this.inputProps.addonText} addonPosition={this.inputProps.addonPosition}/>
                );
            case "select":
                return (
                    <Select title={this.props.title} id={this.inputProps.id} name={this.inputProps.name} value={this.inputProps.value} values={this.props.values}/>
                );
            case "checkbox":
                return <Checkbox title={this.props.title} id={this.inputProps.id} name={this.inputProps.name} value={this.inputProps.value}/>;
            default:
                return <TextInput title={this.props.title} id={this.inputProps.id} name={this.inputProps.name} value={this.inputProps.value}/>;
        }
    }
}