const inputAmount = document.getElementsByid('mortgage-amount');
const inputInterest = document.getElementsByid('mortgage-interest');
const inputYears = document.getElementsByid('mortgage-years');
const sectionResult = document.getElementsByClassName('empty--results');

document.addEventListener("DOMContentLoaded");

function deleteSectionItems(section) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
}


handleClick = () => {
    deleteSectionItems(sectionResult);
}

