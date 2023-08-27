import { Controller } from "@hotwired/stimulus"
import EditorJS from "@editorjs/editorjs"
import Header from "@editorjs/header"
import List from "@editorjs/list"
import Paragraph from "@editorjs/paragraph"
import AceCodeEditorJS from "ace-code-editorjs";
import "ace-builds/esm-resolver";

const aceConfig = {
    languages: {
        plain: {
            label: "Plain Text",
            mode: "ace/mode/plain_text",
        },
        html: {
            label: "HTML",
            mode: "ace/mode/html",
        },
        javascript: {
            label: "JavaScript",
            mode: "ace/mode/javascript",
        },
        css: {
            label: "CSS",
            mode: "ace/mode/css",
        },
        php: {
            label: "PHP",
            mode: "ace/mode/php",
        },
        jsx: {
            label: "JSX",
            mode: "ace/mode/jsx",
        },
        tsx: {
            label: "TSX",
            mode: "ace/mode/tsx",
        },
        typescript: {
            label: "TypeScript",
            mode: "ace/mode/typescript",
        },
        sql: {
            label: "SQL",
            mode: "ace/mode/sql",
        },
        ruby: {
            label: "Ruby",
            mode: "ace/mode/ruby",
        },
    },
    options: {
        fontSize: 16,
        minLines: 4,
        theme: "ace/theme/one_dark",
        hScrollBarAlwaysVisible: false,
        vScrollBarAlwaysVisible: false,
        highlightGutterLine: false,
        printMargin: false
    },
};

// Connects to data-controller="display"
export default class extends Controller {
    static targets = ["articleContent", "hiddenContent"]
    connect() {
        this.contentEditor = new EditorJS({
            holder: this.articleContentTarget,
            data: JSON.parse(this.hiddenContentTarget.textContent),
            tools: {
                header: Header,
                list: {
                    class: List,
                    inlineToolbar: true,
                    config: {
                        defaultStyle: 'unordered'
                    }
                },
                paragraph: { class: Paragraph, config: { inlineToolbar: true } },
                code: {
                    class: AceCodeEditorJS,
                    config: aceConfig,
                }
            },
            readOnly: true
        })
    }
}
