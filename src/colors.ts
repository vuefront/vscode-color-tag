import * as vscode from "vscode";

export type TagInfo = {
  decChar?: {
    chars: vscode.Range[];
    decorator: vscode.TextEditorDecorationType;
  };
  tagName: string;
  tagColor: string;
};
const aColor = new vscode.ThemeColor("vuefront.aColor") as string;
const mColor = new vscode.ThemeColor("vuefront.mColor") as string;
const oColor = new vscode.ThemeColor("vuefront.oColor") as string;
const tColor = new vscode.ThemeColor("vuefront.tColor") as string;
const lColor = new vscode.ThemeColor("vuefront.lColor") as string;
export const colorMap: Record<string, string> = {
  "vf-a-": aColor,
  "vf-m-": mColor,
  "vf-o-": oColor,
  "vf-t-": tColor,
  "vf-l-": lColor,
};

export const colorEntries = Object.entries(colorMap);
