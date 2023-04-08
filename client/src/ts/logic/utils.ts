export function addListener(id: string, eventType: string, cb: () => void): boolean {
  const node = <HTMLElement>document.getElementById(id);

  if (node) {
    node.addEventListener(eventType, cb);
    return true;
  }
  return false;
}
export function getElement(id): HTMLElement | boolean {
  const node = document.getElementById(id);

  if (node) {
    return <HTMLElement>node;
  }
  return false;
}

export function getNodeList(className: string): boolean | NodeList {
	const nodeList = document.querySelectorAll(className);
	
	if (nodeList.length) {
		return nodeList;
	}
	
	return false;
}

export function addListenerForNodeList(nodeList, type, func) {
	nodeList.forEach((item) => {
		item.addEventListener(type, func)
	})
}

export function createElement(tagName: string, classList: string[] = null, id: string = null): HTMLElement | HTMLImageElement {
	const elem = document.createElement(tagName);
	if (classList) elem.classList.add(...classList);
	if (id) elem.id = id;
	return elem;
}

export function generateLoader() {
	
}
