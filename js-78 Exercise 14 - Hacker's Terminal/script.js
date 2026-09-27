const messages = [
    "Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"
];

const container = document.createElement("div");
container.classList.add("terminal");
document.body.appendChild(container);

const sleep = (seconds) => {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

const showMessage = async (message) => {
    const line = document.createElement("div");
    line.textContent = message;

    const dots = document.createElement("span");
    dots.classList.add("dots");
    dots.textContent = "...";

    line.appendChild(dots);
    container.appendChild(line);

    await sleep(2);

    dots.remove();
};

const runHackingSimulator = async () => {
    for (const message of messages) {
        await sleep(Math.floor(Math.random() * 7) + 1);
        await showMessage(message);
    }
};

runHackingSimulator();