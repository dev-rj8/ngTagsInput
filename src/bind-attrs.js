/**
 * @ngdoc directive
 * @name tiBindAttrs
 * @module ngTagsInput
 *
 * @description
 * Binds attributes to expressions. Used internally by tagsInput directive.
 */
tagsInput.directive('tiBindAttrs', function() {
    return (scope, element, attrs) => {
        scope.$watch(attrs.tiBindAttrs, value => {
            angular.forEach(value, (value, key) => {
                attrs.$set(key, value);
            });
        }, true);
    };
});