// making all the ellemnts span
export default function make_elements_span(){
    const div2 = document.querySelector('.result_typesort_header');
    let str = div2.innerText;
    let chars = str.split('');
    let chars_in_span = chars.map(char => `<span>${char}</span>`);
    let new_html = chars_in_span.join('');
    div2.innerHTML = new_html;
}