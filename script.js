document.getElementById("libraryCardForm").addEventListener("input", function () {
    document.getElementById("cardName").textContent = document.getElementById("name").value;
    document.getElementById("cardDob").textContent = document.getElementById("dob").value;
    document.getElementById("cardPhone").textContent = document.getElementById("phone").value;
    document.getElementById("cardCourse").textContent = document.getElementById("course").value;
    document.getElementById("cardCollege").textContent = document.getElementById("college").value;
    document.getElementById("cardEnrollmentno").textContent = document.getElementById("no").value;


    // Preview the uploaded photo
    const photoInput = document.getElementById("photo");
    const photoPreview = document.getElementById("cardPhoto");
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            photoPreview.src = e.target.result;
        };
        reader.readAsDataURL(photoInput.files[0]);
    }
});
