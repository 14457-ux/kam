
function openModal(imageSrc, description) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imageSrc;
    captionText.innerHTML = description;
}

// ฟังก์ชันปิด Modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
