// 주어진 XPath를 사용하여 요소 선택
const xpath = '//*[@id="udemy"]/div[1]/div[1]/div/div/main/div/div[2]/div/div/div[2]';
const targetDiv = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// 선택된 div 안에 있는 모든 span 태그의 텍스트 추출
if (targetDiv) {
    const spanElements = targetDiv.querySelectorAll('span[data-purpose="cue-text"]');
    const textArray = Array.from(spanElements).map(span => span.textContent.trim());
    let resultText = textArray.join(' '); // 모든 텍스트를 공백으로 구분된 하나의 문자열로 결합

    // 개행 추가
    resultText = resultText.replace(/니다/g, '니다\n\n'); // 개행을 두 번 추가
    resultText = resultText.replace(/\./g, '.\n\n'); // 개행을 두 번 추가
    resultText = resultText.replace(/\?/g, '?\n\n'); // 개행을 두 번 추가

    // 파일로 저장
    saveTextToFile(resultText, 'output.txt');
} else {
    console.log('해당 XPath에 해당하는 요소를 찾을 수 없습니다.');
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