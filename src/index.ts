class Helper {
    public components(): HTMLDivElement {
        const element = document.createElement('div');
        element.innerHTML = 'Sayooj Cyriac - How are you!';
        return element;
    }
}

document.body.appendChild(new Helper().components());