itemBuilder.factory('CleanHtmlService', [function() {

    var removeNgAttrs = function (element) {
        var attrsToRemove = [].filter.call(element.attributes, function(at) { return /^ng-/.test(at.name); });
        if (attrsToRemove.length) {
            attrsToRemove.forEach(function (attr){
                element.removeAttribute(attr.name)
            })
        }
    }
    
    var removeNgClasses = function (element) {
        var classList = element.className.split(" ");
        var classesToRemove = [].filter.call(classList, function(at) { return /^ng/.test(at); })
        if (classesToRemove.length) {
            classesToRemove.forEach(function (className){
                element.classList.remove(className)
            })
        }
        if (element.classList.length == 0) {
            element.removeAttribute("class");
        }
    }

    var removeNgComments = function (element) {
        if (element.nodeType === Node.COMMENT_NODE) {
            element.remove();
        }
        
    }

    var findComments = function(el) {
        var arr = [];
        for(var i = 0; i < el.childNodes.length; i++) {
            var node = el.childNodes[i];
            if(node.nodeType === 8) {
                arr.push(node);
            } else {
                arr.push.apply(arr, findComments(node));
            }
        }
        return arr;
    };
    
    var removeAttributes = function (el) {
        var children = el.children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            removeNgAttrs(child);
            removeNgClasses(child);
            removeNgComments(child);
            if (child.children.length) {
                removeAttributes(child);
            }
        }
    }

    var cleanHtml = function () {
        var html = document.getElementById("rendered-content-block");
        var htmlClone = html.cloneNode(true);
        var tmp = document.createElement("div");
        
        removeAttributes(htmlClone);

        tmp.appendChild(htmlClone);        
        
        return tmp.innerHTML;
    }

    return {
        cleanHtml: cleanHtml
    };

}]);