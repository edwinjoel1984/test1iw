// index.test.js
import { getPost, processPost } from "./services.post";

import axios from "axios";

jest.mock("axios");


describe("Service Post", () => {
    
    it("return posts", async () => {
        const data = [
            {
                created_at: "Fri Dec 29 19:15:04 +0000 2017",
                id: 946821889648980000,
                id_str: "946821889648979968",
                name: "Lori King",
                text: "The battle is life or death, but that doesn’t mean love plays no part. ↵#shifters #menage #paranormal #ebook… https://t.co/61xUthkXFN",
            },
        ];
        axios.get.mockResolvedValue({ data: data });

        const response = await getPost();

        expect(response).toEqual(data);
    });

    it("process posts", async () => {
        
        const data = [
            {
                created_at: "Fri Dec 29 19:15:04 +0000 2017",
                id: 946821889648980000,
                id_str: "946821889648979968",
                user:{name:"Lori King"},
                text: "The battle is life or death, but that doesn’t mean love plays no part. ↵#shifters #menage #paranormal #ebook… https://t.co/61xUthkXFN",
                truncated: true,
            },
        ];
        const expectedData = [
            {
                created_at: "Fri Dec 29 19:15:04 +0000 2017",
                id: 946821889648980000,
                id_str: "946821889648979968",
                name: "Lori King",
                text: "The battle is life or death, but that doesn’t mean love plays no part. ↵#shifters #menage #paranormal #ebook… https://t.co/61xUthkXFN",
            },
        ];
        axios.get.mockResolvedValue({ data: data });

        const response = await processPost();

        expect(response).toEqual(expectedData);
    });
});
