(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-login-open]"),
        openModalBtn2: document.querySelector("[data-modal-login-open2]"),
        closeModalBtn: document.querySelector("[data-modal-login-close]"),
        modal: document.querySelector("[data-modal-login]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.openModalBtn2.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-signup-open]"),
        closeModalBtn: document.querySelector("[data-modal-signup-close]"),
        modal: document.querySelector("[data-modal-signup]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();
