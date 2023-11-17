class CollapsWidget {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.collapsButton = this.container.querySelector(".collaps");
    this.content = this.container.querySelector(".content");

    this.collapsButton.addEventListener("click", this.toggle.bind(this));
  }

  toggle() {
    const contentHeight = this.content.scrollHeight;

    if (
      this.content.style.maxHeight === "0px" ||
      !this.content.style.maxHeight
    ) {
      this.content.style.maxHeight = contentHeight + "px";
      this.content.classList.add("open");
    } else {
      this.content.style.maxHeight = "0";
      this.content.classList.remove("open");
    }
  }
}

new CollapsWidget(".collaps-container");
