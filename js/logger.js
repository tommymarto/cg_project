let logs = document.getElementById("logs");

class Logger {
    debug = false;

    d(msg, debug) { this.#log(`[DEBUG]: ${msg}`, "black", debug ?? this.debug) }
    i(msg, debug) { this.#log(`[INFO]: ${msg}`, "blue", debug ?? this.debug) }
    w(msg, debug) { this.#log(`[WARN]: ${msg}`, "orange", debug ?? this.debug) }
    e(msg, debug) { this.#log(`[ERROR]: ${msg}`, "red", debug ?? this.debug) }
    #log(message, color, debug = this.debug) {
        let log = document.createElement("div");
        log.style.color = color;
        log.style.fontFamily = "monospace, monospace";
        log.appendChild(document.createTextNode(message));

        if (debug) {
            new Error().stack.split("\n").slice(3).forEach(line => {
                const stackText = document.createElement("div");
                stackText.innerText = line;
                stackText.style.paddingLeft = "30px";
                log.appendChild(stackText);
            });
            log.style.marginBottom = "10px";
        }

        while (logs.childElementCount > 50) {
            logs.removeChild(logs.firstChild);
        }

        logs.appendChild(log);
        logs.scrollTop = logs.scrollHeight;
    }
    error(err, debug = this.debug) {
        let log = document.createElement("div");
        log.style.color = "red";
        log.style.fontFamily = "monospace, monospace";
        log.appendChild(document.createTextNode(`[ERROR]: ${err.stack.split("\n")[0]}`));

        if (debug) {
            err.stack.split("\n").slice(1).forEach(line => {
                const stackText = document.createElement("div");
                stackText.innerText = line;
                stackText.style.paddingLeft = "30px";
                log.appendChild(stackText);
            });
            log.style.marginBottom = "10px";
        }

        logs.appendChild(log);
        logs.scrollTop = logs.scrollHeight;
    }
}

const logger = new Logger();
export default logger;