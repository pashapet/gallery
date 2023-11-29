const picture = {
    id: 1,
    url: './photos/1.jpg',
    description: 'example',
    likes: 666,
    comments: [
        {
            id: 1,
            message: 'example',
            user: {
                id: 1,
                avatarPath: './img/avatars/1.jpg'
            }
        },
    ]
};

const generateComment = () => {
    return {
        id: 1,
        message: 'example',
        user: {
            id: 1,
            avatarPath: './img/avatars/1.jpg'
        }
    }
};

const generatePicture = () => {
    return {
        id: 1,
        url: './photos/1.jpg',
        description: 'example',
        likes: 666,
        comments: []
    };
};

const generatePictures = (count) => {
    const pictures = [];

    for (let i = 0; i < count; i++) {
        pictures.push(generatePicture());
    }

    return pictures;
};

export {generatePictures};
