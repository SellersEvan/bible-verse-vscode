import * as vscode from "vscode";

const MAX_LINE_LENGTH = 90;

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand("extension.insertComment", () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            let position   = editor.selection.active;
            let languageID = editor.document.languageId;

            let buffer     = "";


            editor.edit(editBuilder => {
                editBuilder.insert(position, '// Your comment here\n');
            });
        }
    });
    context.subscriptions.push(disposable);
}
