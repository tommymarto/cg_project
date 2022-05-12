
class Logger {
    debug = false;

    d(msg, debug) { this.#log(`[DEBUG]: ${msg}`, "black", debug ?? this.debug) }
    i(msg, debug) { this.#log(`[INFO]: ${msg}`, "blue", debug ?? this.debug) }
    w(msg, debug) { this.#log(`[WARN]: ${msg}`, "yellow", debug ?? this.debug) }
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

        let logs = document.getElementById("logs");
        logs.appendChild(log);
        logs.scrollTop = logs.scrollHeight;
    }
}

const logger = new Logger();
export default logger;