# codearts-example-view-title-action README

## Features

This example demonstrates how to use the registerViewTitleActions API. This includes:

- Register actions in the header of the editing area.
- Registering actions in the header of the view container.
- Register actions in the view header.

## APIs

- codearts.ui.actionViewItem.create(options)

    ```typescript
    const action = {
        id: 'eye',
        label: 'eye',
        class: 'codicon codicon-eye',
        enabled: true,
        tooltip: 'eye',
        order: 1
    }

    const actionViewItem = await codearts.ui.actionViewItem.create(action);

    actionViewItem.onClick(() => {
        codearts.window.showInformationMessage('Hello Codearts!');
    })
    ```

- codearts.window.registerViewTitleActions

    ```typescript
    codearts.window.registerViewTitleActions({ viewContainerId: codearts.ViewContainerId.OUTPUT },  actionViewItem)
    ```

## Effect

![image](https://user-images.githubusercontent.com/41181666/208560112-b3be3077-7c50-4d61-b79e-30fec77b63af.png)

