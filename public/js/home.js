function redirectToBlog(event) {
    const blogId = event?.target?.dataset?.id;
    location.href = `/blog/${blogId}`;
}

const elementList = document.getElementsByClassName('clickable');

for (let i=0; i<elementList.length; i++) {
    const currEle = elementList[i];
    currEle.addEventListener('click', redirectToBlog);
}