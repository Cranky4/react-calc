import * as React from "react";

export interface HelloProps {compiler: string, framework: string
}

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (
            <div className="">
                <h1>Hello from {this.props.compiler} and {this.props.framework}</h1>
                <div className="alert alert-info">
                    boot test
                </div>
            </div>
        )
    }
}