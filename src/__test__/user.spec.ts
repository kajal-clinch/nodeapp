import { app } from "./../app";
import request from "supertest";

describe('User api testing', () => {
    it("Should get some response", async () => {
        await request(app)
            .get("/api/v1/user")
            .expect(200);
    })

    it("Should get some response", async () => {
        const response = await request(app)
            .get("/api/v1/user")
            .expect(200);
        expect(response).not.toBeNull();
        expect(response.body.data).toEqual("get called successfully");
    })

    it("Should save some data", async () => {
        const requestBody: User.IUser = {
            name: "user1",
            email: "user1@gmail.com",
            age: 25
        }
        const response = await request(app)
            .post("/api/v1/user")
            .send(requestBody)
            .expect(200)
        expect(response).not.toBeNull();
        expect(response.body.status).toBe('Success');
    })

})
