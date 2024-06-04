/* eslint-disable*/
import connectApi from "../src/lib/connect.js";

describe('connectApi', ()  => {

    it('returns `connectApi`', ()  => {
        // const connectResult = connectApi(data, 'title', 'release_date')
        // expect(connectResult).toEqual(connectApi);
        expect(typeof(connectApi)).toBe('function')
    });
});