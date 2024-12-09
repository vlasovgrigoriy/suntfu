require([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/text!./templates/LanguageSelectionWidget.html',
    'dijit/form/Select'
], function(declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, template) {

    var LanguageSelectionWidget = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        // Define the template string or URL to the HTML template
        templateString: template,

        // Define any properties for the widget
        languages: null,
        selectedLanguage: null,

        postCreate: function() {
            // Call the base class method
            this.inherited(arguments);

            // Initialize the languages if not provided
            if (!this.languages) {
                this.languages = [
                    { label: "English", value: "en" },
                    { label: "Spanish", value: "es" },
                    { label: "Chinese", value: "zh" }
                ];
            }

            // Populate the Select widget with the languages
            this.languageSelect.addOption(this.languages);
        },

        // Method to get the selected language
        getSelectedLanguage: function() {
            var lo = this.languageSelect.get('value');
            return lo;
        }
    });

    return LanguageSelectionWidget;
});
