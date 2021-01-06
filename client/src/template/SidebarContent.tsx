import React, {ReactNode} from "react";

interface Props {
  sidebar: ReactNode,
  content1: ReactNode,
  content2: ReactNode
}

interface State {
}

export class SidebarContent extends React.Component<Props, State> {

  render() {
    return (
    /* ELKE */
      <div className="sidebar-content">
        <div className="sidebar-content-sidebar">{this.props.sidebar}</div>
        <div className="sidebar-content-content-1">{this.props.content1}</div>
        <div className="sidebar-content-content-2">{this.props.content2}</div>
      </div>


      /*<div className="sidebar-content">
              <div className="sidebar-content-sidebar">{this.props.sidebar}</div>
              <div className="sidebar-content-content">{this.props.content}</div>
            </div>*/
    );
  }
}
