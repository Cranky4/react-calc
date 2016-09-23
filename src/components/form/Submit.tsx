import * as React from "react";

export interface SubmitProps {
    value: string,
    htmlClasses?: string
}

export class Submit extends React.Component<SubmitProps, {}> {
    private htmlClasses: string = 'btn btn-success';

    componentWillMount() {
        if (this.props.htmlClasses) {
            this.htmlClasses = this.props.htmlClasses;
        }

    }

    render() {
        return <input type="submit" className={this.htmlClasses} value={this.props.value}/>
    }
}