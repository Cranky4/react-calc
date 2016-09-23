import * as React from "react";

export interface OptionProps {
    id: string,
    name: string,
}

export class Option extends React.Component<OptionProps, {}> {
    render() {
        return <option value={this.props.id}>{this.props.name}</option>;
    }
}