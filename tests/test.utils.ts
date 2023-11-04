export function resetDOMTree() {
    let body = document.body;
    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }
  }