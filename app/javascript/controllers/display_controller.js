import { Controller } from "@hotwired/stimulus"
import EditorJS from "@editorjs/editorjs"
const Tools = require('../config/config/Tools')

// Connects to data-controller="display"
export default class extends Controller {
    static targets = ["articleContent", "hiddenContent"]
    connect() {
        this.contentEditor = new EditorJS({
            holder: this.articleContentTarget,
            data: JSON.parse(this.hiddenContentTarget.textContent),
            tools: Tools,
            readOnly: false
        })
    }
}
