import React from 'react';

const users = (store: any, action: any) => {
    switch (action.type) {
        case 'ADD_USER':
            return action.name;
        default:
            return store;
    }
}

export default users;