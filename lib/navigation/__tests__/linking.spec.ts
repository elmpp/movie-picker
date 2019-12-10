import { buildUrl } from "../linking.web";

describe("linking", () => {
  describe("buildUrl", () => {
    it("does its thing", () => {
      const testMap = [
        {
          routeName: "details",
          params: { id: 2, mediaType: "tv" },
          expected: "/details/2/tv"
        }
      ] as const;
      const routes = {
        details: {
          path: "/details/:id/:mediaType"
        }
      };
      testMap.forEach(({ routeName, params, expected }) => {
        expect(buildUrl(routes, routeName, params)).toEqual(expected);
      });
    });
  });
});
