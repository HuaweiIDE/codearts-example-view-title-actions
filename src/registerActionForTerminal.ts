import * as codearts from '@codearts/plugin';

export const action1 = {
    id: 'favorited',
    label: 'favorited',
    class: 'codicon codicon-favorited',
    enabled: true,
    tooltip: 'favorited',
    order: 1
}

export const action2 = {
    id: 'heart-filled',
    label: 'heart-filled',
    class: 'codicon codicon-heart-filled',
    enabled: true,
    tooltip: 'heart-filled',
    order: 2
}

export const action3 = {
    id: 'markdown',
    label: 'markdown',
    class: 'codicon codicon-markdown',
    enabled: true,
    tooltip: 'markdown'
}

export const action4 = {
    id: 'pinned',
    label: 'pinned',
    class: 'codicon codicon-pinned',
    enabled: true,
    tooltip: 'pinned',
    order: 2
}

export const action5 = {
    id: 'star',
    label: 'star',
    class: 'codicon codicon-star',
    enabled: true,
    tooltip: 'star',
    order: 2
}

export async function registerActionForTerminal() {
    // @ts-ignore
    const item1 = await codearts.ui.actionViewItem.create(action1);

    // @ts-ignore
    const item2 = await codearts.ui.actionViewItem.create(action2);

    // @ts-ignore
    const item3 = await codearts.ui.actionViewItem.create(action3);

    // @ts-ignore
    const item4 = await codearts.ui.actionViewItem.create(action4);

    // @ts-ignore
    const item5 = await codearts.ui.actionViewItem.create(action5);

    // @ts-ignore
    codearts.window.registerViewTitleActions({ viewContainerId: 'terminal' }, item1)

    // @ts-ignore
    let disposable = codearts.window.registerViewTitleActions({ viewContainerId: 'package-explorer' }, [item2, item5])

    // @ts-ignore
    codearts.window.registerViewTitleActions({ viewContainerId: codearts.ViewContainerId.OUTPUT }, item3)

    // @ts-ignore
    codearts.window.registerViewTitleActions({ viewContainerId: codearts.ViewContainerId.EXPLORER }, item4)

    item1.onClick(() => {
        // Invoke the destruction method of the component itself.
        item1.dispose();
    })

    item2.onClick(() => {
        // Destruction method returned by calling registerViewTitleAction
        disposable.dispose();
    })
}