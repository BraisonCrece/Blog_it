// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import DisplayController from "./display_controller"
application.register("display", DisplayController)

import EditorController from "./editor_controller"
application.register("editor", EditorController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)
