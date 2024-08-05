class View {
  handlerBtnLogin() {
    var btnLogin = document.getElementById("formLogin");
    if (!btnLogin) return;

    btnLogin.addEventListener("submit", (e) => {
      e.preventDefault();

      var isValidForm = this.validateFormLogin(e.target.elements);
      if (!isValidForm) return;

      this.showToast();
    });
  }

  showToast() {
    const toast = document.getElementById("toast");
    const progress = document.getElementById("progress");
    toast.className = "toast show";
    progress.classList.add("progress-bar-hide");
    console.log(progress.style.width);
    setTimeout(() => {
      setTimeout(() => {
        progress.classList.remove("progress-bar-hide");
      }, 1000);
      toast.className = "toast hide";
    }, 5000);
  }

  validateFormLogin(formElements) {
    let isValid = true;
    let errorMessage = "";

    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      if (element.type === "text" && !this.validateUsername(element.value)) {
        isValid = false;
        errorMessage += "Insira um e-mail válido.\n";
      }
      if (
        element.name === "password" &&
        !this.validatePassword(element.value)
      ) {
        isValid = false;
        errorMessage += "A senha deve ter pelo menos 6 caracteres.\n";
      }
    }

    const errorDiv = document.getElementById("errorMessage");
    errorDiv.textContent = errorMessage;

    return isValid;
  }

  validateUsername(username) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(username);
  }

  validatePassword(password) {
    return password.length >= 6;
  }
}

var start = function () {
  var view = new View();
  view.handlerBtnLogin();
};

window.addEventListener("load", () => {
  start();
});
