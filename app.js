const message = document.querySelector("#message");
const counter = document.querySelector("#counter");

const maxLength = Number(message.maxLength);

message.addEventListener("input",() => {
  let messageLength = message.value.length;
  counter.textContent = `${messageLength} / ${maxLength}`;
  if (messageLength === maxLength) {
    message.classList.add("text-red-500", "border-red-500", "outline-red-500");
    counter.classList.add("text-red-500");
  } else {
    message.classList.remove(
      "text-red-500",
      "border-red-500",
      "outline-red-500",
    );
    counter.classList.remove("text-red-500");
  }
});
