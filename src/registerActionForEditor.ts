import * as codearts from '@codearts/plugin';

export const action1 = {
    id: 'symbol-method',
    label: 'symbol-method',
    class: 'codicon codicon-symbol-method',
    enabled: true,
    tooltip: 'symbol-method',
    order: 0
}

export async function registerActionForEditor() {
    // @ts-ignore
    const item = await codearts.ui.actionViewItem.create(action1);

    item.onClick(() => {
        disposable.dispose();
    })

    // @ts-ignore
    const disposable = codearts.window.registerViewTitleActions('editor', item)

}