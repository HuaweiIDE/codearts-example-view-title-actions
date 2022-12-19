import * as codearts from '@codearts/plugin';
import * as path from 'path';

export class DepNodeProvider implements codearts.TreeDataProvider<Dependency>{
    private _onDidChangeTreeData: codearts.EventEmitter<Dependency | undefined | void> = new codearts.EventEmitter<Dependency | undefined | void>();
    readonly onDidChangeTreeData?: codearts.Event<void | Dependency | Dependency[] | null | undefined> | undefined = this._onDidChangeTreeData.event;

    refresh() {
        this._onDidChangeTreeData.fire();
    }

    getTreeItem(element: Dependency): codearts.TreeItem | Thenable<codearts.TreeItem> {
        return element;
    }

    getChildren(element?: Dependency | undefined): codearts.ProviderResult<Dependency[]> {
        const projectList = [{
            title: '项目一', command: 'plugin.project.one', icon: 'scan.svg', desc: 'plugin.project.one'
        }];

        const childs = [];
        for (let i = 0; i < projectList.length; i++) {
            var item = new Dependency(projectList[i].title, projectList[i].desc, codearts.TreeItemCollapsibleState.None, projectList[i].icon, {
                command: projectList[i].command,
                title: projectList[i].title
            });

            childs[i] = item;
        }
        return childs;
    }
}

export class NodeProvider implements codearts.TreeDataProvider<Dependency>{
    private _onDidChangeTreeData: codearts.EventEmitter<Dependency | undefined | void> = new codearts.EventEmitter<Dependency | undefined | void>();
    readonly onDidChangeTreeData?: codearts.Event<void | Dependency | Dependency[] | null | undefined> | undefined = this._onDidChangeTreeData.event;

    refresh() {
        this._onDidChangeTreeData.fire();
    }

    getTreeItem(element: Dependency): codearts.TreeItem | Thenable<codearts.TreeItem> {
        return element;
    }

    getChildren(element?: Dependency | undefined): codearts.ProviderResult<Dependency[]> {
        const projectList = [{
            title: '项目一', command: 'plugin.list.one', icon: 'scan.svg', desc: 'plugin.list.one'
        }];

        const childs = [];
        for (let i = 0; i < projectList.length; i++) {
            var item = new Dependency(projectList[i].title, projectList[i].desc, codearts.TreeItemCollapsibleState.None, projectList[i].icon, {
                command: projectList[i].command,
                title: projectList[i].title
            });

            childs[i] = item;
        }
        return childs;
    }
}

export class Dependency extends codearts.TreeItem {
    constructor(
        public readonly label: string,
        private readonly desc: string,
        public readonly collapsibleState: codearts.TreeItemCollapsibleState,
        public readonly iconPath: string,
        public readonly command?: codearts.Command,
        public readonly children?: Array<Dependency>
    ) {
        super(label, collapsibleState);

        this.tooltip = this.label;
        this.description = this.desc;
        this.contextValue = this.contextValue;
        this.iconPath = path.join(__filename, '..', '..', 'resources', 'img', this.iconPath);
    }

    contextValue = 'dependency';
}