function initializeGallery() {

    console.log("Страница полностью загружена");

    addTabFocus();
}


function addTabFocus() {

    console.log("Добавляем tabindex к изображениям");

    let images = document.querySelectorAll(".gallery img");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}


function upDate(previewPic) {

    console.log("Сработало событие наведения или фокуса");
    console.log("alt:", previewPic.alt);
    console.log("src:", previewPic.src);

    document.getElementById("image").innerHTML = previewPic.alt;

    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}


function unDo() {

    document.getElementById("image").style.backgroundImage = "url('')";

    document.getElementById("image").innerHTML =
        "Наведите курсор или используйте клавиатуру для просмотра изображения";
}