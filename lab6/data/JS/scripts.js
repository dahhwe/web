function getSequence() {
    let sequence = document.getElementById("sequenceInput").value;
    if (sequence === "") {
        alert("Пожалуйста, введите последовательность.");
        return null;
    }
    sequence = sequence.trim();
    while (sequence.endsWith(",")) {
        sequence = sequence.slice(0, -1);
    }
    sequence = sequence.split(",");
    for (let i = 0; i < sequence.length; i++) {
        sequence[i] = parseInt(sequence[i]);
        if (isNaN(sequence[i])) {
            alert("Пожалуйста, введите корректную последовательность.");
            return null;
        }
    }
    return sequence;
}

function sumOfElements() {
    let sequence = getSequence();
    if (sequence === null) {
        return;
    }
    let sum = 0;
    for (let i = 0; i < sequence.length; i++) {
        sum += sequence[i];
    }
    alert(sum);
}

function minElement() {
    let sequence = getSequence();
    if (sequence === null) {
        return;
    }
    let min = sequence[0];
    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] < min) {
            min = sequence[i];
        }
    }
    alert(min);
}

function countElement() {
    let sequence = getSequence();
    if (sequence === null) {
        return;
    }
    let element = prompt("Введите число для поиска:");
    element = parseInt(element);
    if (isNaN(element)) {
        alert("Пожалуйста, введите корректное число.");
        return;
    }
    let count = 0;
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === element) {
            count++;
        }
    }
    alert(count);
}
