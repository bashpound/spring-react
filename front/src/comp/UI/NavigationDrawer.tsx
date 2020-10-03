import React from "react"

import {
    Button,
    Classes,
    Drawer,
    Position
} from "@blueprintjs/core"

export interface DrawerState {
    autoFocus: boolean;
    canEscapeKeyClose: boolean;
    canOutsideClickClose: boolean;
    enforceFocus: boolean;
    hasBackdrop: boolean;
    isOpen: boolean;
    position?: Position;
    size: string;
    usePortal: boolean;
}
export default class NavigationDrawer extends React.PureComponent<DrawerState> {
    public state: DrawerState = {
        autoFocus: true,
        canEscapeKeyClose: true,
        canOutsideClickClose: true,
        enforceFocus: true,
        hasBackdrop: true,
        isOpen: false,
        position: Position.LEFT,
        size: Drawer.SIZE_SMALL,
        usePortal: true,
    }

    public render() {
        return (
            <>
                <Button onClick={this.handleOpen}>Show Drawer</Button>
                <Drawer
                    icon="info-sign"
                    onClose={this.handleClose}
                    title="Navigation Drawer"
                    {...this.state}
                >
                    <div className={Classes.DRAWER_BODY}>
                        <div className={Classes.DIALOG_BODY}>
                            <p>
                                <strong>
                                    Drawer Subject
                                </strong>
                            </p>
                            <p>
                                Drawer Content
                            </p>
                        </div>
                    </div>
                    <div className={Classes.DRAWER_FOOTER}>Footer</div>
                </Drawer>
            </>
        )
    }

    private handleOpen = () => this.setState({ isOpen: true })
    private handleClose = () => this.setState({ isOpen: false })
}