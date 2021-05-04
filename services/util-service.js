  
export const utilService = {
    saveToStorage,
    loadFromStorage,
    makeId,
    makeName,
    makeTitle,
    makeTxt,
    randomIntFromInterval
}
function randomIntFromInterval(min, max) {
    let rdnNum = Math.floor(Math.random() * (max - min + 1) + min);
    return (rdnNum >= 9) ? rdnNum : `0${rdnNum}`
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null);
}

function loadFromStorage(key) {
    let data = localStorage.getItem(key);
    return (data) ? JSON.parse(data) : undefined;
}

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function makeName() {
    var possble = ['Curtis Stalling', 'Shemika Delee', 'Jeanette Biello', 'Leandro Goin', 'Mitchel Kells', 'Colin Cauley', 'Edwin Beutler', 'ofir dahan', 'Irvin Curtis', 'mom']
    return possble[Math.floor(Math.random() * possble.length)]
}

function makeTitle() {
    var possble = ['Re:Re:Re:Re:Morgan freeman best movie', 'Why people fall for these scams—and how to stay safe', 'I’m so glad we met', 'how are you?', 'Answered: your most burning questions about this', 'How to take the headache out of mind', 'spam spam spam spam', 'about last night...', 'Is it possble to meet you by tommrow?', 'Colin Cauley', 'Dont forget about doctor appointment next week', 'Tommrow is the big day', '5 ways to say in shape']
    return possble[Math.floor(Math.random() * possble.length)]
}

function makeTxt() {
    var possble = ['Loren Krytzer walked into a California auction room broke and unemployed, surviving on disability checks. Seventy-seven seconds later, he walked out a millionaire — all thanks to a blanket.', 'boom noom al bla bla bla', 'did you come to the movie tongiht?', 'here with INSERT COMPANY. You’ve been using our services for awhile, so I wanted to check in to see how things are going So, what questions can I answer? What features can I demo? What issues can I solve?', 'Id love to hop on a quick call to see how I can help. Are you free anytime tomorrow between INSERT TIME? If not then, let me know what works best for yo', 'everybody get one', 'remnider:call the office for meeting', 'Thank you for your endorsement on LinkedIn. As a person who gives professional advice to other people, I rely on what my peers, customers and partners are saying about me and the value I bring to each of you', 'Scripta periculis ei eam, te pro move', 't reformidans. Pri posse graeco definitiones cu, id eam populo quaes', 'dont forget about next week', 'send me the work now', 'wowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww', 'bla bal blab lbalblalba']
    return possble[Math.floor(Math.random() * possble.length)]
}