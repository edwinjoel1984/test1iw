import React from "react";
import { create, act } from "react-test-renderer";
import * as reactRedux from "react-redux";
import SocialWidget from "../index";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]


const data = [
    {
        created_at: "Fri Dec 29 19:15:04 +0000 2017",
        id: 946821889648980000,
        id_str: "946821889648979968",
        name: "Lori King",
        text: "The battle is life or death, but that doesn’t mean love plays no part. ↵#shifters #menage #paranormal #ebook… https://t.co/61xUthkXFN",
    },
];

describe("Snapshow Widget", () => {
    const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
    const initialState = { data };
    const mockStore = configureStore(middlewares)
    beforeEach(() => {
        useSelectorMock.mockReturnValue(data);
    });

    it("Snapshow Widget", async () => {
        let component;
        await act(async () => {
            const store = mockStore(initialState);

            component = create(
                <Provider store={store}>
                    <SocialWidget></SocialWidget>
                </Provider>
            );
            
        });

        await act(async () => {
            const store = mockStore(initialState);
            component.update(
                <Provider store={store}>
                    <SocialWidget></SocialWidget>
                </Provider>
            );
            
        });

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
