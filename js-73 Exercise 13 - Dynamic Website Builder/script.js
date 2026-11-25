function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <div class="thumbnail">
            <img src="${thumbnail}" alt="${title}">
            <span class="duration">${duration}</span>
        </div>

        <div class="content">
            <h3>${title}</h3>
            <p>${cName} • ${views >= 1000000
            ? (views / 1000000).toFixed(1) + "M"
            : (views / 1000).toFixed(0) + "K"
        } views • ${monthsOld} months ago</p>
        </div>
    `;

    card.setAttribute(
        'style',
        `
        display: flex;
        width: 100%;
        max-width: 1050px;
        gap: 10px;
        margin: 10px;
        color: white;
        background-color: #0f0f0f;
        `
    );

    card.querySelector('.thumbnail').setAttribute(
        'style',
        `
        position: relative;
        width: 200px;
        height: 112px;
        flex-shrink: 0;
        `
    );

    card.querySelector('.thumbnail img').setAttribute(
        'style',
        `
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
        `
    );

    card.querySelector('.duration').setAttribute(
        'style',
        `
        position: absolute;
        bottom: 5px;
        right: 5px;
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 2px 4px;
        border-radius: 3px;
        font-family:  "Roboto", sans-serif;
        font-size: 13px;
        font-weight: bold;
        `
    );

    card.querySelector('.content').setAttribute(
        'style',
        `
        padding: 2px 0;
        `
    );

    card.querySelector('h3').setAttribute(
        'style',
        `
        margin: 0 0 10px 0;
        font-size: 18px;
        font-weight: 600;
        font-family:  "Roboto", sans-serif;
        `
    );

    card.querySelector('p').setAttribute(
        'style',
        `
        margin: 0;
        color: #aaa;
        font-size: 14px;
        font-family:  "Roboto", sans-serif;
        `
    );

    document.querySelector('.container').setAttribute(
        'style',
        `
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #0f0f0f;
        `
    );

    document.querySelector('.container').appendChild(card);
}


createCard(
    "Introduction to Backend | Sigma Web Dev video #2",
    "CodeWithHarry",
    560000,
    7,
    "31:22",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
createCard(
    "Introduction to Backend | Sigma Web Dev video #2",
    "CodeWithHarry",
    560000,
    7,
    "31:22",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
createCard(
    "Introduction to Backend | Sigma Web Dev video #2",
    "CodeWithHarry",
    560000,
    7,
    "31:22",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
createCard(
    "Introduction to Backend | Sigma Web Dev video #2",
    "CodeWithHarry",
    560000,
    7,
    "31:22",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
createCard(
    "Introduction to Backend | Sigma Web Dev video #2",
    "CodeWithHarry",
    560000,
    7,
    "31:22",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
createCard(
    "Introduction to Backend | Sigma Web Dev video #2",
    "CodeWithHarry",
    560000,
    7,
    "31:22",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);