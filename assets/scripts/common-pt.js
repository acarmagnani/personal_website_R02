document.addEventListener("DOMContentLoaded", function() {

    // COMMON
    fetchAndInsert('../html/common/header.html', 'Header', removeLangEN);
    fetchAndInsert('../html/common/footer.html', 'Footer', removeLangEN);
    fetchAndInsert('../html/common/lang-pt.html', 'Lang', function() {
        // Call the function to modify the links
        modifyLangLinks();
    });

    // PAGES
    fetchAndInsert('../html/pages/works.html', 'Works', removeLangEN);
    fetchAndInsert('../html/pages/about.html', 'About', removeLangEN);
    fetchAndInsert('../html/pages/contact.html', 'Contact', removeLangEN);
    fetchAndInsert('../html/pages/cv.html', 'Cv', removeLangEN);

    // PROJ
    fetchAndInsert('../html/pages/proj-CEL.html', 'CEL', removeLangEN);
    fetchAndInsert('../html/pages/proj-EVR.html', 'EVR', removeLangEN);
    fetchAndInsert('../html/pages/proj-GAL.html', 'GAL', removeLangEN);
    fetchAndInsert('../html/pages/proj-GAR.html', 'GAR', removeLangEN);
    fetchAndInsert('../html/pages/proj-LAS.html', 'LAS', removeLangEN);
    fetchAndInsert('../html/pages/proj-LAV.html', 'LAV', removeLangEN);
    fetchAndInsert('../html/pages/proj-LIB.html', 'LIB', removeLangEN);
    fetchAndInsert('../html/pages/proj-PIR.html', 'PIR', removeLangEN);
    fetchAndInsert('../html/pages/proj-PRC.html', 'PRC', removeLangEN);
    fetchAndInsert('../html/pages/proj-RES.html', 'RES', removeLangEN);
    fetchAndInsert('../html/pages/proj-SRG.html', 'SRG', removeLangEN);
    fetchAndInsert('../html/pages/proj-STR.html', 'STR', removeLangEN);
    fetchAndInsert('../html/pages/proj-WOM.html', 'WOM', removeLangEN);
    fetchAndInsert('../html/pages/proj-WVD.html', 'WVD', removeLangEN);
});

function fetchAndInsert(url, targetId, callback) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const targetElement = document.getElementById(targetId);
            const div = document.createElement('div');
            div.innerHTML = data;
            // Append the first child of the new div (the root element of the fetched HTML) to the target element
            targetElement.appendChild(div.firstChild);
            // Call the callback function (if provided)
            if (callback) {
                callback();
            }
        });
}

function removeLangEN() {
    // Step 1: Use document.querySelectorAll() to select elements by class
    var elementsToRemove = document.querySelectorAll('.lang-en');

    // Step 2: Use forEach() to iterate over the collection
    elementsToRemove.forEach(function(element) {
        // Step 3: Call remove() method on each element to remove it from the DOM
        element.remove();
    });
}

function modifyLangLinks() {
    // Get the file name from the current URL
    var fileName = window.location.pathname.split("/").pop();
    
    // Get the anchor elements
    var linkPt = document.getElementById("Lang-pt");
    var linkEn = document.getElementById("Lang-en");
    
    // Set the href attributes dynamically
    linkPt.href = fileName;
    linkEn.href = "../" + fileName;
}