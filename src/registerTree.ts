import * as codearts from '@codearts/plugin';
import { DepNodeProvider, NodeProvider } from './viewList';

export function registerTree() {
    const ENTRYLIST = new DepNodeProvider();
    codearts.window.registerTreeDataProvider("nodeDependencies", ENTRYLIST);
}

export function registerProjectTree() {
    const ENTRYLIST = new NodeProvider();
    codearts.window.registerTreeDataProvider("Dependencies", ENTRYLIST);
}
