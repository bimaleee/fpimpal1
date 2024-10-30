document.getElementById("exitForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const identity = document.getElementById("identity").value;
    const plate = document.getElementById("plate").value;

    if (identity && plate) {
        alert(`Identitas: ${identity}\nPlat Nomor: ${plate}\nData telah dicatat.`);
        document.getElementById("exitForm").reset();
    } else {
        alert("Harap isi semua data!");
    }
});
