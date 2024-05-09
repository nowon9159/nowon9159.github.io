// Select element using modified XPath
const xpath = '//*[@id="ct-sidebar-scroll-container"]//div/*/p/span';
const targetSpans = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

// Extract text from all span tags within the selected divs
let resultText = '';
for (let i = 0; i < targetSpans.snapshotLength; i++) {
    const span = targetSpans.snapshotItem(i);
    resultText += span.textContent.trim() + '\n\n';
}

// save as file
if (resultText) {
    saveTextToFile(resultText, 'output.txt');
} else {
    console.log('No span elements found corresponding to the modified XPath.');
}