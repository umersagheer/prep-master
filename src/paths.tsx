export const paths = {
  home: "/",
  auth: {
    logIn: "/log-in",
    signUp: "/sign-up",
  },
  dashboard: {
    overview: "/dashboard",
  },
  tests: {
    list: "/tests/:testSeriesId",
    description: "/tests/:testSeriesId/:testId",
    attempt: "/tests/:testSeriesId/:testId/attempt",
    purchasedTests: "/purchased-tests",
  },
};
