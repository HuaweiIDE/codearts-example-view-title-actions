/********************************************************************************
 * Copyright (C) 2022  All rights reserved.
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

import * as codearts from '@codearts/plugin';
import { initNlsConfig } from '@cloudide/nls';
import { Plugin } from '@codearts/core/lib/node/plugin-api';
import { registerTree, registerProjectTree } from './registerTree';
import { registerActionForTerminal } from './registerActionForTerminal';
import { registerActionForEditor } from './registerActionForEditor';
import { registerActionForView } from './registerActionForView';

/**
 * Plugin activation entry point, this function is called when plugin is loaded.
 */
export async function start(context: codearts.ExtensionContext) {

    /**
     *  Initialize language settings.
     */
    initNlsConfig(context.extensionPath);

    registerTree();
    registerProjectTree();

    registerActionForTerminal();
    registerActionForEditor();
    registerActionForView();
}

/**
 * The method that is called when the plugin is stopped. 
 * If you need to customize the clean-up action that the plug-in stops, you can add it to the method.
 */
export function stop(context: codearts.ExtensionContext) {
    Plugin.getInstance().stop();
}
