import * as codearts from '@codearts/plugin';

export const action1 = {
    id: 'eye',
    label: 'eye',
    class: 'codicon codicon-eye',
    enabled: true,
    tooltip: 'eye',
    order: 1
}

export const action2 = {
    id: 'github-alt',
    label: 'github-alt',
    class: 'codicon codicon-github-alt',
    enabled: true,
    tooltip: 'github-alt',
    order: 2
}

export async function registerActionForView() {
    // @ts-ignore
    const item1 = await codearts.ui.actionViewItem.create(action1);
    item1.onClick(() => {
        codearts.window.showInformationMessage('Hello Codearts!');
    })

    // @ts-ignore
    const item2 = await codearts.ui.actionViewItem.create(action2);

    // @ts-ignore
    codearts.window.registerViewTitleActions({ viewId: 'nodeDependencies' }, item1)

    // @ts-ignore
    codearts.window.registerViewTitleActions({ viewId: 'workbench.explorer.emptyView' }, item2)
}







