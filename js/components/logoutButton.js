import { clearStorage } from "../utilities/storage.js";

export default function logoutButton() {

    const button = document.querySelector("#logout");

    if (button) {
        button.onclick = function () {
            const doLogout = confirm("Are you sure?");

            if (doLogout) {
                clearStorage();
                location.href = "index.html";
            }

        };
    }
}