require "editor_js"

module ArticlesHelper
  def display_content(content)
    parsed_content = EditorJs::Document.new(content)
    parsed_content.render
  end
end
