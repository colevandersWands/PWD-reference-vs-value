"use strict";

// --- helpers ---

/**
 * Fetches a JS file's source text.
 * @param {string} filePath - relative path from index.html
 * @returns {Promise<string>} the file contents
 */
async function fetchCode(filePath) {
  const response = await fetch(filePath);
  if (!response.ok) {
    throw new Error(
      "Could not load " + filePath + " (" + response.status + ")",
    );
  }
  return response.text();
}

/**
 * Runs code in a hidden iframe with debugger statements at top and bottom.
 * @param {string} code - the JS source to execute
 * @param {string} filePath - relative path shown as a comment and logged to console
 */
function runInDebugger(code, filePath) {
  const existing = document.getElementById("runner-iframe");
  if (existing) {
    existing.remove();
  }

  // escape </script> in code so it doesn't close the srcdoc script tag early
  const safeCode = code.replaceAll("</script>", "<\\/script>");

  const iframe = document.createElement("iframe");
  iframe.id = "runner-iframe";
  iframe.style.display = "none";
  iframe.srcdoc = [
    "<!DOCTYPE html><html><head></head><body><script>",
    "// " + filePath,
    "debugger;\n\n\n",
    safeCode,
    "\n\ndebugger;",
    "</script></body></html>",
  ].join("\n");

  document.body.appendChild(iframe);
}

/**
 * Opens code in Python Tutor in a new tab.
 * @param {string} code - the JS source to visualize
 */
function openInTutor(code) {
  const params = new URLSearchParams({
    code: code,
    mode: "display",
    cumulative: "false",
    heapPrimitives: "nevernested",
    textReferences: "false",
    py: "js",
    rawInputLstJSON: "[]",
    curInstr: "0",
  });

  window.open(
    "https://pythontutor.com/javascript.html#" + params.toString(),
    "_blank",
  );
}

// --- orchestrator ---

/**
 * Walks the directory structure and builds the button hierarchy in the DOM.
 * Click handlers fetch code by filename, then pass it to debugger/tutor.
 * @param {Array<{directory: string, label: string, files: string[]}>} directoryStructure
 */
function renderLauncher(directoryStructure) {
  const container = document.createElement("main");

  for (const section of directoryStructure) {
    // derive number prefix from directory path segments: "3-practice/1-write-assertions" → "3.1."
    const numberPrefix = section.directory
      .split("/")
      .map((seg) => parseInt(seg, 10))
      .join(".") + ".";

    const heading = document.createElement("h2");
    heading.textContent = numberPrefix + " " + section.label;
    container.appendChild(heading);

    if (section.note) {
      const msg = document.createElement("p");
      msg.textContent = section.note;
      container.appendChild(msg);
      continue;
    }

    if (section.files.length === 0) {
      const msg = document.createElement("p");
      msg.textContent = "(no files yet)";
      container.appendChild(msg);
      continue;
    }

    for (const filename of section.files) {
      const filePath = section.directory + "/" + filename;

      const row = document.createElement("div");
      row.className = "file-row";

      const nameSpan = document.createElement("span");
      nameSpan.className = "filename";
      nameSpan.textContent = filename;

      const debugBtn = document.createElement("button");
      debugBtn.className = "btn-debugger";
      debugBtn.textContent = "debugger";
      debugBtn.addEventListener("click", async () => {
        try {
          const code = await fetchCode(filePath);
          if (code.trim().length === 0) {
            alert(filePath + " is empty — nothing to debug.");
            return;
          }
          console.log("--- " + filePath + " ---");
          runInDebugger(code, filePath);
        } catch (err) {
          alert(err.message);
        }
      });

      const tutorBtn = document.createElement("button");
      tutorBtn.className = "btn-tutor";
      tutorBtn.textContent = "python tutor";
      tutorBtn.addEventListener("click", async () => {
        try {
          const code = await fetchCode(filePath);
          if (code.trim().length === 0) {
            alert(filePath + " is empty — nothing to visualize.");
            return;
          }
          openInTutor(code);
        } catch (err) {
          alert(err.message);
        }
      });

      row.appendChild(nameSpan);
      row.appendChild(debugBtn);
      row.appendChild(tutorBtn);
      container.appendChild(row);
    }
  }

  document.body.appendChild(container);
}

// --- entry point ---

async function initLauncher() {
  let directoryStructure;
  try {
    const response = await fetch("directory-structure.json");
    if (!response.ok) {
      throw new Error(response.status + " " + response.statusText);
    }
    directoryStructure = await response.json();
  } catch (err) {
    document.body.appendChild(
      Object.assign(document.createElement("p"), {
        textContent:
          "Could not load directory-structure.json — are you using a local dev server? (" +
          err.message +
          ")",
        style: "color: red;",
      }),
    );
    return;
  }

  renderLauncher(directoryStructure);
}

initLauncher();
