// Select element using modified XPath
const xpath = '//*[@id="ct-sidebar-scroll-container"]//div/div[*]/p/span';

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

// 텍스트를 파일로 저장하는 함수
function saveTextToFile(text, filename) {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}