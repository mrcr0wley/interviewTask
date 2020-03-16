let elements = document.getElementsByTagName('tbody')[6].childNodes;
for (let i = 2; i < elements.length; i = i + 3){
    elements[i].parentNode.removeChild(elements[i]);
}